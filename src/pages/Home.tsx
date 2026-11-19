import { Link } from "react-router-dom"
import { concerns, projects, services, studyById } from "../data.ts"
import { Photo, ProjectRow, Reveal, useMeta } from "../components/ui.tsx"

export default function Home() {
  const wind = studyById("windtower")
  useMeta(
    "+971 Architects — Dubai",
    "Architectural and interior design consultancy in Oud Metha, Dubai, practising since 2005. Architecture, interiors, planning and project coordination.",
  )

  return (
    <>
      <section className="hero">
        <img
          className="hero-media"
          src={wind.src}
          alt={wind.alt}
          width={1920}
          height={2888}
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-panel">
          <p className="eyebrow">Dubai · Since 2005</p>
          <h1>
            Spaces shaped
            <br />
            around <em>life.</em>
          </h1>
          <p className="lede">Architectural and interior design consultancy, Oud Metha.</p>
          <p className="hero-note">{wind.caption}</p>
        </div>
        <a className="scroll-cue" href="#intro">
          <span>Scroll</span>
        </a>
      </section>

      <section id="intro" className="section intro">
        <Reveal>
          <div className="wrap spread">
            <h2 className="statement">A house is a sequence of rooms, courts and thresholds.</h2>
            <div>
              <p>
                +971 Architects is a Dubai consultancy established in 2005. The practice draws an intention through
                design, coordination and construction, and looks for compositions that stay clear over time.
              </p>
              <p>
                Architecture, interior design and planning are carried as one body of work, mostly for private houses
                across the city.
              </p>
              <Link className="text-link" to="/studio">
                The studio
              </Link>
            </div>
          </div>
        </Reveal>
        <div className="wrap pair">
          <Photo study={studyById("shade")} ratio="landscape" />
          <Photo study={studyById("stair")} ratio="portrait" />
        </div>
      </section>

      <section className="section works-home">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <h2>Recorded work</h2>
              <p>
                Commissions named in public Dubai building records. The photographs on this site are studies of place
                and material. They are not pictures of these buildings.
              </p>
            </div>
          </Reveal>
          <Photo study={studyById("dusk")} ratio="wide" />
          <div className="index">
            {projects.slice(0, 5).map((project, index) => (
              <ProjectRow key={project.slug} project={project} index={index} />
            ))}
          </div>
          <Link className="text-link index-more" to="/projects">
            All recorded work
          </Link>
        </div>
      </section>

      <section className="section expertise-home">
        <div className="wrap expertise-grid">
          <div>
            <h2>Expertise</h2>
            <ol className="service-index">
              {services.map((service) => (
                <li key={service.id}>
                  <span>{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.lead}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link className="text-link" to="/expertise">
              How the work is organised
            </Link>
          </div>
          <Photo study={studyById("court")} ratio="portrait" />
        </div>
      </section>

      <section className="philosophy">
        <Photo study={studyById("screen")} ratio="wide" />
        <div className="wrap">
          <h2>What the work attends to</h2>
          <div className="concern-grid">
            {concerns.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section studio-band">
        <div className="wrap studio-grid">
          <Photo study={studyById("timber")} ratio="landscape" />
          <div>
            <p className="eyebrow">Oud Metha</p>
            <h2>A studio in Dubai since 2005.</h2>
            <p>
              The office is in the Business Atrium on Umm Hurair Road. The licensed practice is architectural design
              consultancy and construction engineering, with interior design, planning and project coordination
              described as part of the same work.
            </p>
            <Link className="btn" to="/studio">
              Read about the studio
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <img src={studyById("palm").src} alt="" />
        <div className="cta-panel">
          <h2>Let’s create something meaningful.</h2>
          <p>Write with a site, a use and the stage the project has reached.</p>
          <p className="hero-note">{studyById("palm").caption}</p>
          <Link className="btn" to="/contact">
            Project enquiry
          </Link>
        </div>
      </section>
    </>
  )
}
