import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Layout from "./components/Layout.tsx"
import Contact from "./pages/Contact.tsx"
import Expertise from "./pages/Expertise.tsx"
import Home from "./pages/Home.tsx"
import NotFound from "./pages/NotFound.tsx"
import Privacy from "./pages/Privacy.tsx"
import ProjectDetail from "./pages/ProjectDetail.tsx"
import Projects from "./pages/Projects.tsx"
import Studio from "./pages/Studio.tsx"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="studio" element={<Studio />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
