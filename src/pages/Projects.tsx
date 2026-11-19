import { useMemo, useState } from "react"
import { projects, studyById } from "../data.ts"
import type { Category } from "../data.ts"
import { Photo, ProjectRow, useMeta } from "../components/ui.tsx"

const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "villa", label: "Villas" },
  { id: "residential", label: "Residential" },
  { id: "other", label: "Other works" },
]

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all")
  const visible = useMemo(
    () => projects.map((project, index) => ({ project, index })).filter(({ project }) => filter === "all" || project.category === filter),
    [filter],
  )

  useMeta(
    "Projects — +971 Architects",
    "A selection of +971 Architects commissions named in public Dubai building and construction records, including private villas and one named residence.",
  )

  return (
    <article className="page">
      <header className="page-hero">
        <div className="wrap page-hero-copy">
          <p className="eyebrow">Index</p>
          <h1>Projects</h1>
          <p className="lede wide">
            Entries are taken from Dubai Municipality building and construction records linked to trade licence
            576970. This is not a complete list, and it is not a photographic portfolio. Photographs elsewhere on the
            site are studies of place and material.
          </p>
        </div>
        <div className="wrap">
          <Photo study={studyById("palm")} ratio="wide" />
        </div>
      </header>

      <div className="wrap page-tools">
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((item) => (
            <button key={item.id} type="button" className="filter" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <p className="result-count" aria-live="polite">
          {visible.length} {visible.length === 1 ? "entry" : "entries"}
        </p>
      </div>

      <div className="wrap index">
        {visible.map(({ project, index }) => (
          <ProjectRow key={project.slug} project={project} index={index} />
        ))}
      </div>
    </article>
  )
}
