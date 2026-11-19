import { company } from "../data.ts"
import { useMeta } from "../components/ui.tsx"

export default function Privacy() {
  useMeta(
    "Privacy — +971 Architects",
    "How the +971 Architects website handles an enquiry. The site does not store messages.",
  )

  return (
    <article className="page prose-page">
      <div className="wrap prose">
        <p className="eyebrow">Notice</p>
        <h1>Privacy</h1>
        <p>
          This website does not run an enquiry database and does not set analytics cookies. When you prepare an
          enquiry, the message stays in your browser until you open it in your own email application.
        </p>
        <p>
          If you email {company.email} or telephone the studio, that correspondence is handled by the practice as a
          project enquiry. Do not include information you would not want held in an ordinary email.
        </p>
        <p>
          The embedded map is provided by Google. Loading the contact page may allow that map to request data under
          Google’s own terms. The address is also written out on the page, so the map is optional.
        </p>
        <p>Questions about a message you have sent can be directed to {company.email}.</p>
      </div>
    </article>
  )
}
