// Replace `src` paths with studio photographs when they exist.
// Reference images are studies of place, light and material. They are not commissions.

export type Category = "villa" | "residential" | "other"

export type Study = {
  id: string
  src: string
  alt: string
  caption: string
  credit: string
  href?: string
}

export type Project = {
  slug: string
  title: string
  named: boolean
  community: string
  kind: string
  category: Category
  period: string
  role: "Consultant"
  record: string
}

export const company = {
  name: "+971 Architects",
  legalName: "Plus 971 Architechtural Consultancy",
  licence: "576970",
  licenceIssued: "23 January 2006",
  founded: "2005",
  email: "info@plus971architects.com",
  phones: [
    { label: "+971 4 357 3575", href: "tel:+97143573575" },
    { label: "+971 4 357 3737", href: "tel:+97143573737" },
  ],
  poBox: "97179",
  address: [
    "Business Atrium Building",
    "Umm Hurair Road, Oud Metha",
    "Dubai, United Arab Emirates",
  ],
  site: "https://plus971architects.com",
  maps: "https://www.google.com/maps/search/?api=1&query=Business+Atrium+Building+Umm+Hurair+Road+Oud+Metha+Dubai",
}

export const nav = [
  { to: "/projects", label: "Projects" },
  { to: "/studio", label: "Studio" },
  { to: "/expertise", label: "Expertise" },
  { to: "/contact", label: "Contact" },
] as const

export const studies: Study[] = [
  {
    id: "windtower",
    src: "/images/bastakia-windtower.jpg",
    alt: "Coral-stone wind tower in Al Fahidi, Dubai, with open shafts against a clear sky.",
    caption: "Wind tower, Al Fahidi, Dubai. A study of shade and thick walls.",
    credit: "“Bastakia Windtower” by Jpatokal, CC BY-SA 4.0, via Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Bastakia_Windtower.JPG",
  },
  {
    id: "dusk",
    src: "/images/dusk.jpg",
    alt: "Reference photograph of a white house with a deep timber soffit, a pool and palms. Not a +971 Architects project.",
    caption: "Reference. White volume, timber soffit, deep shade.",
    credit: "Reference photograph via Unsplash, Unsplash Licence (photo-1613490493576-7fde63acd811).",
  },
  {
    id: "shade",
    src: "/images/shade.jpg",
    alt: "Reference photograph of a timber-lined entrance beneath a dark upper volume. Not a +971 Architects project.",
    caption: "Reference. Threshold, timber and a low line of light.",
    credit: "Reference photograph via Unsplash, Unsplash Licence (photo-1600585154526-990dced4db0d).",
  },
  {
    id: "stair",
    src: "/images/stair.jpg",
    alt: "Reference photograph of a stone stair, timber screen and daylight across a timber floor. Not a +971 Architects project.",
    caption: "Reference. Stair, stone and a long run of light.",
    credit: "Reference photograph via Unsplash, Unsplash Licence (photo-1600607687920-4e2a09cf159d).",
  },
  {
    id: "court",
    src: "/images/court.jpg",
    alt: "Reference photograph of a living room opening through sliding glass to an outdoor room. Not a +971 Architects project.",
    caption: "Reference. An interior continuous with the court outside.",
    credit: "Reference photograph via Unsplash, Unsplash Licence (photo-1600607687939-ce8a6c25118c).",
  },
  {
    id: "screen",
    src: "/images/screen.jpg",
    alt: "Reference photograph of a dark house at dusk, with light passing through tall screened openings. Not a +971 Architects project.",
    caption: "Reference. Light held behind a screen.",
    credit: "Reference photograph via Unsplash, Unsplash Licence (photo-1600585153490-76fb20a32601).",
  },
  {
    id: "palm",
    src: "/images/palm.jpg",
    alt: "Reference photograph of a white house with a stone pier, a shaded court and a pool. Not a +971 Architects project.",
    caption: "Reference. A shaded court between white walls.",
    credit: "Reference photograph via Unsplash, Unsplash Licence (photo-1613977257363-707ba9348227).",
  },
  {
    id: "timber",
    src: "/images/kitchen.jpg",
    alt: "Reference photograph of a timber-screened entrance and a black boundary wall. Not a +971 Architects project.",
    caption: "Reference. Timber screen and a deep entrance.",
    credit: "Reference photograph via Unsplash, Unsplash Licence (photo-1600566753190-17f0baa2a6c3).",
  },
]

const approach: Record<Category, string> = {
  villa:
    "Private villas make up most of the practice’s publicly recorded commissions in Dubai. A house of this kind is held by its plot, by setbacks and coverage, and by the need to temper heat and glare. The studio describes its role as carrying a client’s intention from the first drawings through coordination and construction. Drawings and photographs of this particular house are not published here.",
  residential:
    "This entry is a residential building. The public record names the practice as consultant and gives a period. It does not describe the plan, the façade or the rooms, so none of that is stated here. The studio’s published work is to take an intention through design, coordination and construction.",
  other:
    "Some records name the practice as consultant for works that are not identified as a new villa. The entry gives a place, a role and a period. It does not define the architectural scope, and this page does not guess it.",
}

export const projects: Project[] = [
  {
    slug: "flamingo-lux-residence",
    title: "Flamingo Lux Residence",
    named: true,
    community: "Nad Al Sheba",
    kind: "Residence",
    category: "residential",
    period: "2019–2022",
    role: "Consultant",
    record:
      "Dubai building records list this licence as consultant for a new building: Flamingo Lux Residence, Building 1, Nad Al Shiba First, 2019–2022.",
  },
  {
    slug: "villa-umm-suqeim",
    title: "Private villa",
    named: false,
    community: "Umm Suqeim",
    kind: "Villa",
    category: "villa",
    period: "2026",
    role: "Consultant",
    record:
      "A Dubai construction record names the practice as consultant for a private villa in Umm Suqeim First. The permit is dated 27 July 2026, and the status was open in the published register.",
  },
  {
    slug: "villa-al-barsha-south",
    title: "Private villa",
    named: false,
    community: "Al Barsha South",
    kind: "Villa",
    category: "villa",
    period: "2017–2022",
    role: "Consultant",
    record:
      "Building records list a new villa in Al Barshaa South Second, with the practice as consultant, for 2017–2022.",
  },
  {
    slug: "villa-al-khawaneej",
    title: "Private villa",
    named: false,
    community: "Al Khawaneej",
    kind: "Villa",
    category: "villa",
    period: "2020–2023",
    role: "Consultant",
    record:
      "Building records list a new villa in Al Khawaneej First, with the practice as consultant, for 2020–2023.",
  },
  {
    slug: "villa-nad-al-sheba",
    title: "Private villa",
    named: false,
    community: "Nad Al Sheba",
    kind: "Villa",
    category: "villa",
    period: "2021–2023",
    role: "Consultant",
    record:
      "Building records list a new villa in Nad Al Shiba Fourth, with the practice as consultant, for 2021–2023.",
  },
  {
    slug: "villa-mankhool",
    title: "Private villa",
    named: false,
    community: "Mankhool",
    kind: "Villa",
    category: "villa",
    period: "2026",
    role: "Consultant",
    record:
      "Building records list a new villa in Mankhool, with the practice as consultant, dated 2026.",
  },
  {
    slug: "works-dubai-investment-park",
    title: "Building works",
    named: false,
    community: "Dubai Investment Park",
    kind: "Other works",
    category: "other",
    period: "2008–2013",
    role: "Consultant",
    record:
      "Building records list other works in Dubai Investment Park, with the practice as consultant. Entries cover Dubai Investment Park First in 2012 and Dubai Investment Park Second between 2008 and 2013.",
  },
  {
    slug: "villa-al-safa",
    title: "Private villa",
    named: false,
    community: "Al Safa",
    kind: "Villa",
    category: "villa",
    period: "2025",
    role: "Consultant",
    record:
      "Building records list other works to a villa in Al Saffa First, with the practice as consultant, dated 2025.",
  },
  {
    slug: "works-al-quoz",
    title: "Building works",
    named: false,
    community: "Al Quoz",
    kind: "Other works",
    category: "other",
    period: "2022",
    role: "Consultant",
    record:
      "Building records list other works in Al Goze First, with the practice as consultant, dated 2022.",
  },
  {
    slug: "villa-umm-al-sheif",
    title: "Private villa",
    named: false,
    community: "Umm Al Sheif",
    kind: "Villa",
    category: "villa",
    period: "2026",
    role: "Consultant",
    record:
      "A construction record names the practice as consultant for a private villa in Umm Al Sheif. The permit is dated 10 March 2026.",
  },
]

export const services = [
  {
    id: "architecture",
    number: "01",
    title: "Architectural design",
    image: "shade",
    lead: "Licensed in Dubai as architectural design consultancy.",
    text: "The work begins with a client’s intention and is drawn through to documents a building can be made from. Public records of the practice are largely residential: private villas, and at least one named residence, across communities in Dubai.",
  },
  {
    id: "interiors",
    number: "02",
    title: "Interior design",
    image: "court",
    lead: "Named in the studio’s own description of its practice.",
    text: "Interior design is the part of a house that is touched every day: rooms, materials, light and fittings. The firm describes this alongside architecture and planning, as one consultancy rather than a separate business.",
  },
  {
    id: "planning",
    number: "03",
    title: "Planning",
    image: "palm",
    lead: "How a building sits on its plot.",
    text: "The practice lists planning with architecture and interior design. In a Dubai villa this is the arrangement of coverage, setback, orientation and outdoor rooms, measured against the rules of the community.",
  },
  {
    id: "engineering",
    number: "04",
    title: "Construction engineering",
    image: "timber",
    lead: "A licensed activity of the consultancy.",
    text: "The trade licence includes construction engineering services. This is the technical resolution of a design so that it can be built, coordinated with the drawings rather than added after them.",
  },
  {
    id: "coordination",
    number: "05",
    title: "Project coordination",
    image: "stair",
    lead: "From the first idea through construction.",
    text: "The studio describes a packaged service: an intention carried from conceptual design into construction and project management, so the work does not change hands without the people who drew it.",
  },
] as const

export const concerns = [
  {
    title: "Intention",
    text: "The work starts with what the client wants the building to do, and with an artistic reading of that desire rather than a catalogue of rooms.",
  },
  {
    title: "Composition",
    text: "Plans are judged as arrangements of use and form. The practice speaks of compositions that stay legible over time.",
  },
  {
    title: "Detail",
    text: "The standard the studio sets for itself sits in the elements a person actually touches. Thoughtful detail is the phrase the practice uses.",
  },
  {
    title: "Continuity",
    text: "Design, coordination and construction are described as one line of work, from the first drawing to the site.",
  },
]

export function studyById(id: string) {
  const study = studies.find((item) => item.id === id)
  if (!study) throw new Error(`Missing study ${id}`)
  return study
}

export function projectBySlug(slug: string) {
  return projects.find((item) => item.slug === slug)
}

export function sheetTitle(project: Project) {
  return project.named ? project.title : project.community
}

export function sheetMeta(project: Project) {
  return project.named ? `${project.kind} · ${project.community}` : project.kind
}

export function narrative(project: Project) {
  return [project.record, approach[project.category]]
}

export function studiesFor(index: number) {
  return [0, 1, 2].map((step) => studies[(index + step + 1) % studies.length])
}

function assertSiteData() {
  const slugs = new Set<string>()
  for (const project of projects) {
    if (slugs.has(project.slug)) throw new Error(`Duplicate slug ${project.slug}`)
    slugs.add(project.slug)
    if (!project.community || !project.period || !project.record) {
      throw new Error(`Incomplete project ${project.slug}`)
    }
  }
  for (const service of services) studyById(service.image)
}

assertSiteData()
