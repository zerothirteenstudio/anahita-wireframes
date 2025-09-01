import React from "react";

const styles = {
  default: "btn",
  primary: "btn btn-primary",
  ghost: "btn btn-ghost",
};

export default function Button({ variant = "default", className = "", ...props }) {
  const cls = `${styles[variant] || styles.default} ${className}`.trim();
  return <button className={cls} {...props} />;
}