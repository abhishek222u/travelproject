import Footer from '../components/Footer'
import Banner from '../components/pages/destinations/Banner'
import Countries from '../components/pages/destinations/Countries'
import Header from '../components/pages/destinations/Header'
import TopDestinations from '../components/pages/destinations/TopDestinations'
import Partners from '../components/Partners'
import BookingPopup from '../components/BookingPopup'
import SEO from '../components/SEO'
import { useBooking } from '../context/BookingContext'
import { useNavigate } from 'react-router-dom'
import { MessageCircle, Phone, Calendar } from 'lucide-react'

const DestinationsPage = () => {
    const { isBookingOpen, currentPackage, closeBooking, submitBooking, bookingTitle, bookingButtonText, isVisaConsultation } = useBooking()
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

    // const handleWhatsAppContact = (action) => {
    //     const phoneNumber = '+919818149806'
    //     let message = ''

    //     switch(action) {
    //         case 'book':
    //             message = `Hi! I'm interested in booking a trip with tripofai. Can you please provide me with more details about your packages?`
    //             break
    //         case 'itinerary':
    //             message = `Hi! I would like to get a free customized itinerary. Please share the best options for my trip.`
    //             break
    //         case 'pricing':
    //             message = `Hi! I'm looking for pricing information for travel packages. Can you please share the current rates and any ongoing offers?`
    //             break
    //         default:
    //             message = `Hi! I'm interested in traveling with tripofai. Can you please help me with more information?`
    //     }

    //     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    //     window.open(whatsappUrl, '_blank')
    // }

    return (
        <>
            <SEO
                title="Explore Travel Destinations | Domestic & International Tours | tripofai"
                description="Explore our curated collection of travel destinations. From scenic domestic getaways to exotic international adventures, find your perfect vacation package with tripofai."
                keywords="travel destinations, domestic tours, international trips, vacation packages, holiday destinations, adventure tours, travel booking"
            />
            <Header />
            <Banner />
            <Partners />
            <Countries />
            {/* <TopDestinations /> */}
            <Footer />

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

export default DestinationsPage 