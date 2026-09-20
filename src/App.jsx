import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Pricing from './pages/Pricing.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import DorsetITSupport from './pages/DorsetITSupport.jsx'
import DorsetITSupportThankYou from './pages/DorsetITSupportThankYou.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        {/* Unlisted Google Ads landing page — deliberately not in Nav,
            Footer or sitemap.xml. Reachable only by direct link. */}
        <Route path="/dorset-it-support" element={<DorsetITSupport />} />
        <Route path="/dorset-it-support/thank-you" element={<DorsetITSupportThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
