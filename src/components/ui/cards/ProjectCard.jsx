import React from "react";
import BaseCard from "./BaseCard.jsx";
import { Placeholder, Tag } from "../index.js";

export default function ProjectCard({
  title = "Project",
  year = "2025",
  type = "Film",
  view = "grid",            // "grid" | "list"
  featured = false,
  onClick,
}) {
  const orientation = view === "list" ? "horizontal" : "vertical";

  return (
    <BaseCard
      orientation={orientation}
      variant="outline"
      density="comfortable"
      clickable
      featured={featured}
      onClick={onClick}
      media={
        <Placeholder label={view === "list" ? "Media" : "Thumb (image/video)"} className={view === "list" ? "ph-md" : "ph-lg"} />
      }
      mediaAspect={view === "list" ? "4:3" : "16:9"}
      title={<div className="ph-xs bg-neutral-100 rounded-sm w-3/4" aria-label={title} />}
      meta={
        <>
          <Tag>{type}</Tag>
          <Tag>{year}</Tag>
        </>
      }
    />
  );
}