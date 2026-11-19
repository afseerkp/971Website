import { useEffect, useRef, useState, type ReactNode } from "react"
import { Link } from "react-router-dom"
import { sheetMeta, sheetTitle, type Project, type Study } from "../data.ts"

export function useMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title
    setMeta("meta[name='description']", "name", "description", description)
    setMeta("meta[property='og:title']", "property", "og:title", title)
    setMeta("meta[property='og:description']", "property", "og:description", description)
    const canonical =
      document.head.querySelector<HTMLLinkElement>("link[rel='canonical']") ??
      document.head.appendChild(Object.assign(document.createElement("link"), { rel: "canonical" }))
    const path = window.location.pathname
    canonical.href = `https://plus971architects.com${path}`
  }, [title, description])
}

function setMeta(selector: string, attr: string, name: string, content: string) {
  const existing = document.head.querySelector<HTMLMetaElement>(selector)
  const el = existing ?? document.head.appendChild(document.createElement("meta"))
  el.setAttribute(attr, name)
  el.setAttribute("content", content)
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.16 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal${shown ? " in" : ""} ${className}`.trim()}>
      {children}
    </div>
  )
}

export function Photo({
  study,
  ratio = "landscape",
  priority = false,
}: {
  study: Study
  ratio?: "landscape" | "portrait" | "wide"
  priority?: boolean
}) {
  return (
    <figure className={`photo ratio-${ratio}`}>
      <div className="frame">
        <img
          src={study.src}
          alt={study.alt}
          width={1600}
          height={ratio === "portrait" ? 2133 : ratio === "wide" ? 900 : 1067}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          {...(priority ? { fetchPriority: "high" as const } : {})}
        />
      </div>
      <figcaption>{study.caption}</figcaption>
    </figure>
  )
}

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link className="sheet" to={`/projects/${project.slug}`}>
      <span className="sheet-no">{String(index + 1).padStart(2, "0")}</span>
      <span className="sheet-title">{sheetTitle(project)}</span>
      <span className="sheet-meta">{sheetMeta(project)}</span>
      <span className="sheet-year">{project.period}</span>
    </Link>
  )
}
