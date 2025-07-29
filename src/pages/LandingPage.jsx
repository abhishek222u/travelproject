import { useNavigate } from 'react-router-dom'
import About from '../components/About'
import Banner from '../components/Banner'
import BookingPopup from '../components/BookingPopup'
import Destinations from '../components/Destinations'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import InstagramReels from '../components/InstagramReels'
import VisaAssistant from '../components/pages/VisaAssistant'
import Partners from '../components/Partners'
import PopularCities from '../components/PopularCities'
import Services from '../components/Services'
import TestimonialSlider from '../components/Testimonial'
import SEO from '../components/SEO'
import { useBooking } from '../context/BookingContext'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Calendar } from 'lucide-react'

const LandingPage = () => {
  const { isBookingOpen, currentPackage, closeBooking, submitBooking, bookingTitle, bookingButtonText, isVisaConsultation } = useBooking()
  const navigate = useNavigate()

  // Animation variants - using transform to prevent layout shifts
  const fadeInUp = {
    hidden: { opacity: 0, transform: 'translateY(30px)' },
    visible: { 
      opacity: 1, 
      transform: 'translateY(0px)',
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  }

  const slideInLeft = {
    hidden: { opacity: 0, transform: 'translateX(-30px)' },
    visible: { 
      opacity: 1, 
      transform: 'translateX(0px)',
      transition: { 
        duration: 0.8, 
        ease: "easeOut"
      }
    }
  }

  const slideInRight = {
    hidden: { opacity: 0, transform: 'translateX(30px)' },
    visible: { 
      opacity: 1, 
      transform: 'translateX(0px)',
      transition: { 
        duration: 0.8, 
        ease: "easeOut"
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, transform: 'scale(0.95)' },
    visible: { 
      opacity: 1, 
      transform: 'scale(1)',
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      }
    }
  }

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

  const handleWhatsAppContact = (action) => {
    const phoneNumber = '+919818149806'
    let message = ''
    
    switch(action) {
      case 'book':
        message = `Hi! I'm interested in booking a trip with tripofai. Can you please provide me with more details about your packages?`
        break
      case 'itinerary':
        message = `Hi! I would like to get a free customized itinerary. Please share the best options for my trip.`
        break
      case 'pricing':
        message = `Hi! I'm looking for pricing information for travel packages. Can you please share the current rates and any ongoing offers?`
        break
      default:
        message = `Hi! I'm interested in traveling with tripofai. Can you please help me with more information?`
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <SEO 
        title="tripofai – Smart Travel Solutions with AI-Powered Planning"
        description="Discover amazing travel packages with tripofai. From domestic getaways to international adventures, we offer curated experiences with AI-powered recommendations. Book your dream vacation today!"
        keywords="travel packages, domestic tours, international trips, AI travel, vacation booking, travel agency, holiday packages, adventure tours"
      />
      <Header />
      <HeroSection />
      <About />
      
      {/* Partners Section with Fade In Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Partners />
      </motion.div>

      {/* Banner Section with Slide In Left Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideInLeft}
      >
        <Banner />
      </motion.div>

      {/* Destinations Section with Fade In Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Destinations />
      </motion.div>

      {/* Popular Cities Section with Slide In Right Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideInRight}
      >
        <PopularCities />
      </motion.div>

      {/* Testimonial Section with Scale In Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleIn}
      >
        <TestimonialSlider />
      </motion.div>

      {/* Services Section with Fade In Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Services />
      </motion.div>

      {/* Instagram Reels Section with Slide In Left Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideInLeft}
      >
        <InstagramReels/>
      </motion.div>

      {/* Visa Assistant Section with Slide In Right Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideInRight}
      >
        <VisaAssistant/>
      </motion.div>

      {/* Footer with Fade In Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Footer />
      </motion.div>
      
      <BookingPopup
        isOpen={isBookingOpen}
        onClose={closeBooking}
        packageData={currentPackage}
        onSubmit={handleBookingSubmit}
        title={bookingTitle}
        buttonText={bookingButtonText}
        isVisaConsultation={isVisaConsultation}
      />
    </>
  )
}

export default LandingPage 