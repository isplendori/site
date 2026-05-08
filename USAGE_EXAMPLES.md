# Usage Examples - Splendori

## Import Aliases Examples

The project is configured with TypeScript path aliases for clean imports. Here are examples:

### Importing Atoms
```typescript
// Button component
import Button from "@/atoms/Button";

// Usage
<Button variant="primary" size="lg">Click Me</Button>
```

```typescript
// Input component
import Input from "@/atoms/Input";

// Usage
<Input type="email" placeholder="Enter email" />
```

```typescript
// Label component
import Label from "@/atoms/Label";

// Usage
<Label htmlFor="email">Email Address</Label>
```

### Importing Molecules
```typescript
// FormField component (combines Label + Input + Error)
import FormField from "@/molecules/FormField";

// Usage
<FormField
  label="Username"
  type="text"
  placeholder="Enter username"
  helperText="This will be your display name"
  error="Username is required" // optional
/>
```

### Importing Organisms
```typescript
// Header component
import Header from "@/organisms/Header";

// Usage
<Header />
```

```typescript
// Footer component
import Footer from "@/organisms/Footer";

// Usage
<Footer />
```

### Importing Templates
```typescript
// MainLayout template
import MainLayout from "@/templates/MainLayout";

// Usage
export default function Page() {
  return (
    <MainLayout>
      <div>Your page content here</div>
    </MainLayout>
  );
}
```

### Importing Utilities
```typescript
// cn() utility for conditional classes
import { cn } from "@/lib/utils";

// Usage
<div className={cn(
  "base-class",
  isActive && "active-class",
  isPrimary ? "primary-class" : "secondary-class"
)}>
  Content
</div>
```

## Complete Page Example

```typescript
import MainLayout from "@/templates/MainLayout";
import Button from "@/atoms/Button";
import FormField from "@/molecules/FormField";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

        <form className="max-w-md space-y-4">
          <FormField
            label="Name"
            type="text"
            placeholder="Your name"
          />

          <FormField
            label="Email"
            type="email"
            placeholder="your@email.com"
          />

          <FormField
            label="Message"
            type="text"
            placeholder="Your message"
          />

          <div className="flex gap-4">
            <Button variant="primary" size="md">
              Send Message
            </Button>
            <Button variant="ghost" size="md">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
```

## Component Composition Example

```typescript
import Button from "@/atoms/Button";
import Input from "@/atoms/Input";
import Label from "@/atoms/Label";
import { cn } from "@/lib/utils";

// Creating a custom molecule from atoms
export default function LoginForm() {
  return (
    <div className="max-w-sm space-y-4 p-6 border rounded-lg">
      <h2 className="text-2xl font-bold">Login</h2>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="••••••••" />
      </div>

      <Button variant="primary" className="w-full">
        Sign In
      </Button>
    </div>
  );
}
```

## Dark Mode Toggle Example

```typescript
'use client';

import { useEffect, useState } from "react";
import Button from "@/atoms/Button";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Button
      variant="ghost"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? '☀️' : '🌙'}
    </Button>
  );
}
```

## Notes

- All imports use the configured TypeScript path aliases
- Components follow Atomic Design principles
- The `cn()` utility from `@/lib/utils` helps manage conditional classes
- Server Components are default - use `'use client'` only when needed
