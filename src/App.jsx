import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DestinationsPage from './pages/DestinationsPage'
import CountryPage from './pages/CountryPage'
import ThankYouPage from './pages/ThankYouPage'
import { BookingProvider } from './context/BookingContext'

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className='page-wrappers'>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/countries/:countryName" element={<CountryPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </div>
      </Router>
    </BookingProvider>
  )
}

export default App
