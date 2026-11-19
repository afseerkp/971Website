import { Link } from "react-router-dom"
import { company, concerns, studyById } from "../data.ts"
import { Photo, useMeta } from "../components/ui.tsx"

export default function Studio() {
  useMeta(
    "Studio — +971 Architects",
    "Plus 971 Architectural Consultancy, established in 2005 and licensed in Dubai. The studio is in the Business Atrium, Oud Metha.",
  )

  return (
    <article className="page">
      <header className="wrap page-hero-copy">
        <p className="eyebrow">Dubai · {company.founded}</p>
        <h1>The studio</h1>
        <p className="statement">
          Timeless compositions, drawn with enough detail to remain clear after the building is in use.
        </p>
      </header>

      <div className="wrap studio-open">
        <div className="prose">
          <p>
            +971 Architects is the name the studio uses. The Dubai trade licence is issued to {company.legalName}, which is the spelling on the register. The licence, number {company.licence}, was issued on {company.licenceIssued} for architectural design consultancy and construction engineering services. The practice dates from {company.founded}.
          </p>
          <p>
            The firm describes a single line of work: a client’s intention interpreted with care, then carried from
            conceptual design through construction and project management. Architecture, planning and interior design
            sit inside that line. The aim, in the studio’s own account, is a composition that can last, with detail
            that holds up to daily use.
          </p>
          <p>
            Public building records place the work in communities including Nad Al Sheba, Umm Suqeim, Al Barsha South,
            Al Khawaneej, Mankhool, Al Safa, Umm Al Sheif, Dubai Investment Park and Al Quoz. Most of the named entries
            are private villas. Owners are not published, and this site does not invent them.
          </p>
        </div>
        <Photo study={studyById("windtower")} ratio="portrait" />
      </div>

      <section className="section band">
        <div className="wrap">
          <h2>Place</h2>
          <div className="place-grid">
            <p>
              The office is in the Business Atrium, Umm Hurair Road, Oud Metha. Directories also list the studio as
              M07 in the same building, and as Office 602 on the sixth floor. The postal box published for the practice
              is {company.poBox}.
            </p>
            <p>
              Oud Metha sits inland of the creek, close to the older fabric of the city. The wind tower at Al Fahidi is
              not a project of the studio. It is here because it is a Dubai instrument: shade, mass and a way of
              catching air. Contemporary houses in the city still have to answer the same climate.
            </p>
            <address>
              {company.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
              <a href={company.maps} rel="noreferrer">
                Map
              </a>
            </address>
          </div>
        </div>
      </section>

      <section className="wrap concerns-page">
        <h2>Approach</h2>
        <div className="concern-grid">
          {concerns.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <Photo study={studyById("shade")} ratio="wide" />
      </section>

      <section className="wrap colophon">
        <h2>Colophon</h2>
        <dl>
          <div>
            <dt>Practice</dt>
            <dd>{company.name}</dd>
          </div>
          <div>
            <dt>Licensed name</dt>
            <dd>{company.legalName}</dd>
          </div>
          <div>
            <dt>Licence</dt>
            <dd>
              {company.licence}, issued {company.licenceIssued}
            </dd>
          </div>
          <div>
            <dt>Activities on the licence</dt>
            <dd>Architectural design consultancy. Construction engineering services.</dd>
          </div>
          <div>
            <dt>Also described by the studio</dt>
            <dd>Interior design, planning, and project management from concept to construction.</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </dd>
          </div>
        </dl>
        <p className="note">Names of individual architects are not published here. None were confirmed from a primary source.</p>
        <Link className="text-link" to="/contact">
          Write to the studio
        </Link>
      </section>
    </article>
  )
}
