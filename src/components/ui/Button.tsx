import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ember" | "outline" | "light" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  className?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

const base =
  "group inline-flex items-center justify-center gap-3 rounded-full font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-bone hover:bg-ember hover:text-ink",
  ember: "bg-ember text-ink hover:bg-ink hover:text-bone",
  outline:
    "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-bone",
  light: "bg-bone text-ink hover:bg-ember",
  ghost: "text-ink hover:text-ember-ink",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-[15px]",
};

function ButtonContent({
  children,
  arrow,
}: {
  children: ReactNode;
  arrow?: boolean;
}) {
  return (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </>
  );
}

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  disabled,
  target,
  rel,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    variant === "ghost" && "px-0 py-1",
    className
  );
  const ariaLabel = rest["aria-label"];

  if (href) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
          onClick={onClick}
          className={classes}
        >
          <ButtonContent arrow={arrow}>{children}</ButtonContent>
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        <ButtonContent arrow={arrow}>{children}</ButtonContent>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      <ButtonContent arrow={arrow}>{children}</ButtonContent>
    </button>
  );
}
