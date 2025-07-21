import Footer from '../components/Footer'
import Banner from '../components/pages/destinations/Banner'
import Countries from '../components/pages/destinations/Countries'
import Header from '../components/pages/destinations/Header'
import TopDestinations from '../components/pages/destinations/TopDestinations'
import Partners from '../components/Partners'
import BookingPopup from '../components/BookingPopup'
import { useBooking } from '../context/BookingContext'
import { useNavigate } from 'react-router-dom'

const DestinationsPage = () => {
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
            <Banner />
            <Partners />
            <Countries />
            <TopDestinations />
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

export default DestinationsPage 