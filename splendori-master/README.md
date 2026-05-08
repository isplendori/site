# Splendori

A modern Next.js 14+ project built with TypeScript, Tailwind CSS, and Atomic Design architecture.

## Stack Técnica

- **Next.js 14+** - App Router with Server Components
- **TypeScript** - Strict mode enabled
- **Tailwind CSS** - Utility-first CSS with custom theme
- **ESLint + Prettier** - Code quality and formatting
- **Atomic Design** - Component architecture pattern

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/             # Atomic Design components
│   ├── atoms/             # Basic building blocks (Button, Input, Label)
│   ├── molecules/         # Simple component groups (FormField)
│   ├── organisms/         # Complex components (Header, Footer)
│   └── templates/         # Page layouts (MainLayout)
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
└── types/                 # TypeScript type definitions
```

## Atomic Design Structure

### Atoms
Basic UI elements that can't be broken down further:
- **Button** - With variants (primary, secondary, ghost) and sizes (sm, md, lg)
- **Input** - Styled form input
- **Label** - Form label component

### Molecules
Simple groups of atoms functioning together:
- **FormField** - Label + Input + Error message

### Organisms
Complex UI components made of molecules and atoms:
- **Header** - Navigation header with logo and links
- **Footer** - Site footer with links and info

### Templates
Page-level layouts:
- **MainLayout** - Header + main content + Footer

## Path Aliases

The project uses TypeScript path aliases for clean imports:

```typescript
import Button from "@/atoms/Button";
import FormField from "@/molecules/FormField";
import Header from "@/organisms/Header";
import MainLayout from "@/templates/MainLayout";
import { cn } from "@/lib/utils";
```

Available aliases:
- `@/*` - src directory
- `@/atoms/*` - Atomic components
- `@/molecules/*` - Molecule components
- `@/organisms/*` - Organism components
- `@/templates/*` - Template components
- `@/lib/*` - Utility functions
- `@/hooks/*` - Custom hooks
- `@/types/*` - Type definitions

## Conventions

### Component Structure
- Use **functional components** with TypeScript
- Props must be typed with **interfaces** (not types) and **exported**
- Use `'use client'` directive only when necessary (client-side interactivity)
- Server Components are the default

### Naming
- **PascalCase** for components and interfaces
- **camelCase** for functions and variables
- **kebab-case** for file names in routes

### Styling
- Use the `cn()` utility for conditional classes
- Leverage Tailwind's CSS variables for theming
- Support dark mode with `.dark` class

### Example Component

```typescript
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "base-styles",
          variant === "primary" && "primary-styles",
          size === "lg" && "large-styles",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
```

## Creating New Components

1. Create a folder in the appropriate atomic level directory
2. Add an `index.tsx` file
3. Define and export the component interface
4. Implement the component using the `cn()` utility
5. Add proper TypeScript types
6. Export the component as default

## Theming

The project uses CSS variables for theming. Customize colors in `src/app/globals.css`:

```css
:root {
  --primary: #8B5CF6;
  --secondary: #10B981;
  --accent: #F59E0B;
  /* ... more variables */
}
```

Dark mode is supported via the `.dark` class.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- [TypeScript](https://www.typescriptlang.org/docs/)

## Deploy on Vercel

The easiest way to deploy is using [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/splendori)
