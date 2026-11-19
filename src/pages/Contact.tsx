import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react"
import { useSearchParams } from "react-router-dom"
import { company, projectBySlug, sheetTitle } from "../data.ts"
import { useMeta } from "../components/ui.tsx"

type Fields = {
  name: string
  email: string
  phone: string
  type: string
  location: string
  budget: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  type: "",
  location: "",
  budget: "",
  message: "",
}

const types = [
  "Architectural design",
  "Interior design",
  "Planning",
  "Construction engineering",
  "Project coordination",
  "Not yet defined",
]

function validate(values: Fields): Errors {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = "Enter your full name."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address."
  const digits = values.phone.replace(/\D/g, "")
  if (digits.length < 7) errors.phone = "Enter a phone number, including the country code."
  if (!values.type) errors.type = "Choose a project type."
  if (values.location.trim().length < 2) errors.location = "Enter the project location."
  if (values.message.trim().length < 12) errors.message = "Tell us a little about the project."
  return errors
}

function mailto(values: Fields) {
  const body = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Project type: ${values.type}`,
    `Location: ${values.location.trim()}`,
    `Budget: ${values.budget || "Not specified"}`,
    "",
    values.message.trim(),
  ].join("\n")
  return `mailto:${company.email}?subject=${encodeURIComponent("Project enquiry — +971 Architects")}&body=${encodeURIComponent(body)}`
}

export default function Contact() {
  const summaryRef = useRef<HTMLDivElement>(null)
  const errorTitle = useId()
  const [params] = useSearchParams()
  const linked = projectBySlug(params.get("project") ?? "")
  const [values, setValues] = useState<Fields>(() => ({
    ...empty,
    location: linked?.community ?? "",
    type: linked?.category === "residential" ? "Architectural design" : linked ? "Architectural design" : "",
    message: linked ? `Regarding the recorded commission: ${sheetTitle(linked)}.\n\n` : "",
  }))
  const [errors, setErrors] = useState<Errors>({})
  const [ready, setReady] = useState("")
  const [attempt, setAttempt] = useState(0)
  const errorList = Object.entries(errors) as [keyof Fields, string][]

  useMeta(
    "Contact — +971 Architects",
    "Contact +971 Architects at the Business Atrium, Oud Metha, Dubai. Email info@plus971architects.com or call +971 4 357 3575.",
  )

  useEffect(() => {
    if (attempt && errorList.length) summaryRef.current?.focus()
  }, [attempt, errorList.length])

  function update(key: keyof Fields, value: string) {
    setValues((current) => ({ ...current, [key]: value }))
    setReady("")
  }

  function onBlur(key: keyof Fields) {
    const next = validate(values)
    setErrors((current) => ({ ...current, [key]: next[key] }))
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const next = validate(values)
    setErrors(next)
    setAttempt((count) => count + 1)
    if (Object.keys(next).length) return
    setReady(mailto(values))
  }

  return (
    <article className="page contact-page">
      <header className="wrap page-hero-copy">
        <p className="eyebrow">Enquiry</p>
        <h1>Write to the studio.</h1>
        <p className="lede wide">A project is easiest to read when it has a place, a use and a stage. Visits are by arrangement at the office in Oud Metha.</p>
      </header>

      <div className="wrap contact-grid">
        <div className="contact-details">
          <h2>Studio</h2>
          <address>
            {company.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <span>P.O. Box {company.poBox}</span>
          </address>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          {company.phones.map((phone) => (
            <p key={phone.href}>
              <a href={phone.href}>{phone.label}</a>
            </p>
          ))}
          <p>
            <a href={company.maps} rel="noreferrer">
              Open a map
            </a>
          </p>
          <div className="map-frame">
            <iframe
              title="Map of the Business Atrium area, Oud Metha, Dubai"
              src="https://maps.google.com/maps?q=Business%20Atrium%20Building%20Umm%20Hurair%20Road%20Oud%20Metha%20Dubai&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form className="enquiry" onSubmit={onSubmit} noValidate>
          {attempt > 0 && errorList.length ? (
            <div ref={summaryRef} tabIndex={-1} className="error-summary" role="alert" aria-labelledby={errorTitle}>
              <h2 id={errorTitle}>There is a problem</h2>
              <ul>
                {errorList.map(([key, message]) => (
                  <li key={key}>
                    <a href={`#${key}`}>{message}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <Field id="name" label="Full name" error={errors.name}>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={values.name}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              onBlur={() => onBlur("name")}
              onChange={(event) => update("name", event.target.value)}
            />
          </Field>
          <Field id="email" label="Email address" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={values.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              onBlur={() => onBlur("email")}
              onChange={(event) => update("email", event.target.value)}
            />
          </Field>
          <Field id="phone" label="Phone number" error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              value={values.phone}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              onBlur={() => onBlur("phone")}
              onChange={(event) => update("phone", event.target.value)}
            />
          </Field>
          <Field id="type" label="Project type" error={errors.type}>
            <select
              id="type"
              name="type"
              value={values.type}
              aria-invalid={Boolean(errors.type)}
              aria-describedby={errors.type ? "type-error" : undefined}
              onBlur={() => onBlur("type")}
              onChange={(event) => update("type", event.target.value)}
            >
              <option value="">Select</option>
              {types.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </Field>
          <Field id="location" label="Project location" error={errors.location}>
            <input
              id="location"
              name="location"
              autoComplete="address-level2"
              value={values.location}
              aria-invalid={Boolean(errors.location)}
              aria-describedby={errors.location ? "location-error" : undefined}
              onBlur={() => onBlur("location")}
              onChange={(event) => update("location", event.target.value)}
            />
          </Field>
          <Field id="budget" label="Budget, if you wish to share it" error={errors.budget}>
            <select id="budget" name="budget" value={values.budget} onChange={(event) => update("budget", event.target.value)}>
              <option value="">Not specified</option>
              <option>Under AED 1 million</option>
              <option>AED 1–5 million</option>
              <option>AED 5–15 million</option>
              <option>Above AED 15 million</option>
              <option>To be discussed</option>
            </select>
          </Field>
          <Field id="message" label="Message" error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={values.message}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              onBlur={() => onBlur("message")}
              onChange={(event) => update("message", event.target.value)}
            />
          </Field>
          <button className="btn" type="submit">
            Prepare enquiry
          </button>
          <p className="note">Nothing is sent or stored by this website. A valid form prepares an email to {company.email}.</p>

          {ready ? (
            <div className="ready" role="status">
              <h2>Your enquiry is ready</h2>
              <p>
                This site has no mail server. Open the message in your email application, or copy it and write to{" "}
                {company.email}. It has not been delivered.
              </p>
              <a className="btn" href={ready}>
                Open in your email app
              </a>
            </div>
          ) : null}
        </form>
      </div>
    </article>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <div className={error ? "field invalid" : "field"}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      ) : null}
    </div>
  )
}
