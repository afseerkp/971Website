import { Link, useParams } from "react-router-dom"
import { narrative, projectBySlug, projects, sheetTitle, studiesFor } from "../data.ts"
import { Photo, useMeta } from "../components/ui.tsx"
import NotFound from "./NotFound.tsx"

export default function ProjectDetail() {
  const { slug = "" } = useParams()
  const project = projectBySlug(slug)
  const index = projects.findIndex((item) => item.slug === slug)

  useMeta(
    project ? `${sheetTitle(project)} — +971 Architects` : "Project — +971 Architects",
    project
      ? `${sheetTitle(project)}, ${project.community}. ${project.record}`
      : "This entry is not in the published index.",
  )

  if (!project || index < 0) return <NotFound />

  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const plates = studiesFor(index)
  const paragraphs = narrative(project)

  return (
    <article className="page project-page">
      <header className="wrap project-head">
        <p className="eyebrow">
          <Link to="/projects">Projects</Link>
          <span aria-hidden="true"> / </span>
          {String(index + 1).padStart(2, "0")}
        </p>
        <h1>{sheetTitle(project)}</h1>
        <p className="project-kicker">
          {project.kind}
          {project.named ? ` · ${project.community}` : ""} · {project.role} · {project.period}
        </p>
      </header>

      <div className="wrap project-story">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <Link className="btn" to={`/contact?project=${project.slug}`}>
          Enquire about a project like this
        </Link>
      </div>

      <section className="wrap studies" aria-labelledby="studies-title">
        <h2 id="studies-title">Studies of light and material</h2>
        <p className="note">These photographs are references. They do not show this building.</p>
        <div className={index % 2 ? "study-grid flip" : "study-grid"}>
          <Photo study={plates[0]} ratio="wide" />
          <Photo study={plates[1]} ratio="portrait" />
          <Photo study={plates[2]} ratio="landscape" />
        </div>
      </section>

      <section className="wrap facts" aria-labelledby="facts-title">
        <h2 id="facts-title">Register</h2>
        <dl>
          <div>
            <dt>Name in this index</dt>
            <dd>{project.title}</dd>
          </div>
          <div>
            <dt>Community</dt>
            <dd>{project.community}</dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>{project.kind}</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>
      </section>

      <nav className="wrap pager" aria-label="Adjacent projects">
        <Link to={`/projects/${prev.slug}`}>
          <span>Previous</span>
          <strong>{sheetTitle(prev)}</strong>
        </Link>
        <Link to={`/projects/${next.slug}`}>
          <span>Next</span>
          <strong>{sheetTitle(next)}</strong>
        </Link>
      </nav>
    </article>
  )
}
