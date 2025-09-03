import React from "react";

const styles = {
  default: "btn",
  primary: "btn btn-primary",
  ghost: "btn btn-ghost",
  link: "btn-link",
  editorial: "btn-editorial",
  rule: "btn btn-rule",
};

export default function Button({ variant = "default", className = "", ...props }) {
  const cls = `${styles[variant] || styles.default} ${className}`.trim();
  return <button className={cls} {...props} />;
}
