import About from '../components/About'
import Banner from '../components/Banner'
import Destinations from '../components/Destinations'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import PopularCities from '../components/PopularCities'
import Partners from '../components/Partners'
import Services from '../components/Services'
import TestimonialSlider from '../components/Testimonial'
import BookingPopup from '../components/BookingPopup'
import { useBooking } from '../context/BookingContext'
import { useNavigate } from 'react-router-dom'
import InstagramReels from '../components/InstagramReels'
import VisaAssistant from '../components/pages/VisaAssistant'

const LandingPage = () => {
  const { isBookingOpen, currentPackage, closeBooking, submitBooking } = useBooking()
  const navigate = useNavigate()

  const handleBookingSubmit = async (formData) => {
    const result = await submitBooking(formData)
    
    if (result.success) {
      // Navigate to thank you page with booking details
      navigate('/thank-you', { 
        state: { 
          bookingDetails: result.bookingDetails 
        } 
      })
    } else {
      // Handle error - you could show a toast notification here
      alert('There was an error submitting your booking. Please try again.')
    }
  }

  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Partners />
      <Banner />
      <Destinations />
      <PopularCities />
      <TestimonialSlider />
      <Services />
      <InstagramReels/>
      <VisaAssistant/>
      <Footer />
      
      <BookingPopup
        isOpen={isBookingOpen}
        onClose={closeBooking}
        packageData={currentPackage}
        onSubmit={handleBookingSubmit}
      />
    </>
  )
}

export default LandingPage 