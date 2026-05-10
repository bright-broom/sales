import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

type ButtonVariant = "line" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonLinkProps extends ButtonProps {
  href: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  line: "bg-brand-line text-white hover:bg-brand-line/90 shadow-lg shadow-brand-line/25",
  outline:
    "border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
  ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "line",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps & ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  external = false,
  variant = "line",
  size = "md",
  className,
  children,
}: ButtonLinkProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={baseStyles}>
      {children}
    </Link>
  );
}
