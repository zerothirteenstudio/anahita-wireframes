import React from "react";
import Button from "./Button"; // <— default import; see note below if yours is named

/**
 * CTAGroup — flexible CTA pair/group
 *
 * Props:
 *  - children?: ReactNode (optional content on the left/top)
 *  - primary, secondary: string labels (legacy)
 *  - primaryLabel, secondaryLabel: string labels (new)
 *  - onPrimary, onSecondary: handlers
 *  - primaryVariant, secondaryVariant: "default" | "primary" | "ghost"
 *  - layout: "row" | "column" | "responsive" (default "responsive")
 *  - align: "start" | "center" | "end" | "between"
 *  - gap: "sm" | "md" | "lg"
 *  - order: "primary-first" | "secondary-first"
 *  - fullWidth: boolean
 *  - className: string
 */
export default function CTAGroup({
  children,
  // labels (support both old and new prop names)
  primary,
  primaryLabel,
  secondary,
  secondaryLabel,
  // handlers
  onPrimary,
  onSecondary,
  // variants
  primaryVariant = "primary",
  secondaryVariant = "default",
  // layout controls
  layout = "responsive",
  align = "start",
  gap = "md",
  order = "primary-first",
  fullWidth = false,
  className = "",
}) {
  // layout classes
  const layoutCls =
    layout === "row"
      ? "flex-row"
      : layout === "column"
      ? "flex-col"
      : "flex-col sm:flex-row"; // responsive

  const alignCls =
    align === "center"
      ? "justify-center"
      : align === "end"
      ? "justify-end"
      : align === "between"
      ? "justify-between"
      : "justify-start";

  const gapCls = gap === "sm" ? "gap-2" : gap === "lg" ? "gap-4" : "gap-3";

  const primaryText = primaryLabel ?? primary ?? "";
  const secondaryText = secondaryLabel ?? secondary ?? "";

  const PrimaryBtn = primaryText ? (
    <Button
      variant={primaryVariant}
      onClick={onPrimary}
      className={fullWidth ? "w-full" : ""}
    >
      {primaryText}
    </Button>
  ) : null;

  const SecondaryBtn = secondaryText ? (
    <Button
      variant={secondaryVariant}
      onClick={onSecondary}
      className={fullWidth ? "w-full" : ""}
    >
      {secondaryText}
    </Button>
  ) : null;

  const buttons =
    order === "secondary-first" ? (
      <>
        {SecondaryBtn}
        {PrimaryBtn}
      </>
    ) : (
      <>
        {PrimaryBtn}
        {SecondaryBtn}
      </>
    );

  return (
    <div className={`flex ${layoutCls} ${alignCls} ${gapCls} ${className}`}>
      {/* Left/top content slot */}
      {children ? <div className="space-y-1">{children}</div> : null}

      {/* Buttons */}
      <div
        className={`flex ${
          layout === "column" ? "flex-col items-stretch" : "flex-row items-center"
        } gap-2`}
      >
        {buttons}
      </div>
    </div>
  );
}