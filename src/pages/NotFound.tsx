import { Link } from "react-router-dom"
import { useMeta } from "../components/ui.tsx"

export default function NotFound() {
  useMeta("Page not found — +971 Architects", "This page is not part of the +971 Architects site.")

  return (
    <article className="page prose-page">
      <div className="wrap prose">
        <p className="eyebrow">404</p>
        <h1>This page is not in the index.</h1>
        <p>The address may have changed, or the entry was never published.</p>
        <Link className="btn" to="/projects">
          Return to projects
        </Link>
      </div>
    </article>
  )
}
