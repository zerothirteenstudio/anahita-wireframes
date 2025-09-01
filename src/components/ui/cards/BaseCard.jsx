import React from "react";
import clsx from "clsx";

const paddings = {
  compact: "p-3 gap-2",
  comfortable: "p-4 gap-3",
  spacious: "p-6 gap-4",
};

const variants = {
  outline: "border-2 border-dashed border-brand-border bg-white shadow-card",
  elevated: "border border-brand-border bg-white shadow-card",
  ghost: "border border-transparent bg-white",
};

const orientationCls = {
  vertical: "flex-col",
  horizontal: "flex-row items-center",
};

function MediaBox({ aspect = "16:9", children }) {
  const aspectCls = {
    "1:1": "aspect-square",
    "4:3": "aspect-[4/3]",
    "16:9": "aspect-video",
    auto: "",
  }[aspect] || "aspect-video";

  return (
    <div className={clsx("w-full overflow-hidden rounded-md", aspectCls)}>
      {children}
    </div>
  );
}

export default function BaseCard({
  orientation = "vertical",
  variant = "outline",
  density = "comfortable",
  clickable = false,
  featured = false,
  disabled = false,
  className,
  onClick,
  media,          // node
  eyebrow,        // node
  title,          // node
  subtitle,       // node
  meta,           // node
  body,           // node
  footer,         // node
  mediaAspect = "16:9",
}) {
  const outer = clsx(
    "rounded-md transition focus:outline-none",
    variants[variant],
    paddings[density],
    orientationCls[orientation],
    "flex",
    clickable && "cursor-pointer hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-orange-400/40",
    featured && "ring-1 ring-orange-300/40",
    disabled && "opacity-60 pointer-events-none",
    className
  );

  const Content = (
    <div className={clsx("flex-1", orientation === "horizontal" ? "min-w-0" : "")}>
      {eyebrow && <div className="text-[10px] text-brand-muted mb-1">{eyebrow}</div>}
      {title && <div className="text-sm font-medium text-brand mb-1">{title}</div>}
      {subtitle && <div className="text-xs text-brand-muted mb-2">{subtitle}</div>}
      {meta && <div className="flex flex-wrap items-center gap-2 mb-2">{meta}</div>}
      {body && <div className="text-xs text-brand-muted">{body}</div>}
      {footer && <div className="mt-3">{footer}</div>}
    </div>
  );

  const Media = media ? (
    <MediaBox aspect={mediaAspect}>{media}</MediaBox>
  ) : null;

  return (
    <article
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => clickable && (e.key === "Enter" || e.key === " ") && onClick?.()}
      className={outer}
      aria-disabled={disabled || undefined}
    >
      {orientation === "vertical" ? (
        <>
          {Media}
          {Content}
        </>
      ) : (
        <>
          <div className="w-40 shrink-0">{Media}</div>
          {Content}
        </>
      )}
    </article>
  );
}