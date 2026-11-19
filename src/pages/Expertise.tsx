import { Link } from "react-router-dom"
import { services, studyById } from "../data.ts"
import { Photo, useMeta } from "../components/ui.tsx"

export default function Expertise() {
  useMeta(
    "Expertise — +971 Architects",
    "Architectural design, interior design, planning, construction engineering and project coordination from +971 Architects in Dubai.",
  )

  return (
    <article className="page">
      <header className="wrap page-hero-copy">
        <p className="eyebrow">Practice</p>
        <h1>Expertise</h1>
        <p className="lede wide">
          Five parts of one consultancy. The licence names architectural design and construction engineering. The
          studio also describes interior design, planning and a path from the first idea through project management.
        </p>
      </header>

      {services.map((service, index) => (
        <section key={service.id} className={index % 2 ? "service-block alt" : "service-block"} aria-labelledby={service.id}>
          <div className="wrap service-layout">
            <div>
              <p className="eyebrow">{service.number}</p>
              <h2 id={service.id}>{service.title}</h2>
              <p className="service-lead">{service.lead}</p>
              <p>{service.text}</p>
            </div>
            <Photo study={studyById(service.image)} ratio={index % 2 ? "portrait" : "landscape"} />
          </div>
        </section>
      ))}

      <section className="wrap service-close">
        <h2>Where this work appears</h2>
        <p>
          The published register is concentrated in private villas, with residential and other building works alongside
          them. A commission is best described by its plot, its use and its stage.
        </p>
        <div className="close-links">
          <Link className="btn" to="/projects">
            See the index
          </Link>
          <Link className="text-link" to="/contact">
            Start an enquiry
          </Link>
        </div>
      </section>
    </article>
  )
}
