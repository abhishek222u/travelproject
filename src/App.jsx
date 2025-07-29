import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import LandingPage from './pages/LandingPage'
import DestinationsPage from './pages/DestinationsPage'
import CountryPage from './pages/CountryPage'
import ThankYouPage from './pages/ThankYouPage'
import { BookingProvider } from './context/BookingContext'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppCTA from './components/WhatsAppCTA'

function App() {
  return (
    <HelmetProvider>
      <BookingProvider>
        <Router>
          <ScrollToTop />
          <div className='page-wrappers'>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/countries/:countryName" element={<CountryPage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
            </Routes>
          </div>
          <WhatsAppCTA />
        </Router>
      </BookingProvider>
    </HelmetProvider>
  )
}

export default App