import { InputHTMLAttributes, forwardRef } from "react";
import Input from "@/atoms/Input";
import Label from "@/atoms/Label";
import { cn } from "@/lib/utils";

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const fieldId = id || `field-${label.toLowerCase().replace(/\s/g, "-")}`;

    return (
      <div className={cn("space-y-2", className)}>
        <Label htmlFor={fieldId}>{label}</Label>
        <Input
          ref={ref}
          id={fieldId}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined
          }
          className={cn(error && "border-red-500 focus-visible:ring-red-500")}
          {...props}
        />
        {error && (
          <p id={`${fieldId}-error`} className="text-sm text-red-600">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${fieldId}-helper`} className="text-sm text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export default FormField;
