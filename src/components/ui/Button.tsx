import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-signal text-paper hover:bg-signal-light",
  secondary: "border border-ink/20 text-ink hover:border-flag hover:text-flag",
};

const BASE_CLASSES =
  "inline-flex items-center gap-2 px-5 py-2.5 font-sans text-sm font-medium tracking-tight transition-colors rounded-full";

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = "primary", children, className = "", ...rest }: ButtonProps) {
  return (
    <button className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

type LinkButtonProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>;

/** Same visual treatment as <Button>, but renders an <a> — for external links (live demo, repo, etc). */
export function LinkButton({ variant = "primary", children, className = "", ...rest }: LinkButtonProps) {
  return (
    <a className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
