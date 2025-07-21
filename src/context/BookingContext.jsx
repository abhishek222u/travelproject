import React, { createContext, useContext, useState } from 'react'
import emailjs from '@emailjs/browser'

const BookingContext = createContext()

export const useBooking = () => {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}

// Email configuration
const EMAIL_CONFIG = {
  serviceId: 'service_wtuxzpc',
  templateId: 'template_0it8dks',
  publicKey: 'zOXokwZc7Cetr3eXY'
}

export const BookingProvider = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [currentPackage, setCurrentPackage] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init(EMAIL_CONFIG.publicKey)
  }, [])

  const openBooking = (packageData) => {
    setCurrentPackage(packageData)
    setIsBookingOpen(true)
  }

  const closeBooking = () => {
    setIsBookingOpen(false)
    setCurrentPackage(null)
  }

  const sendBookingEmail = async (formData) => {
    try {
      setIsSubmitting(true)

      // Prepare email data
      const emailData = {
        to_email: formData.email,
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        customer_whatsapp: formData.whatsapp || 'Not provided',
        customer_location: formData.location,
        package_name: formData.packageInfo,
        additional_requests: formData.additionalRequests || 'None',
        booking_date: new Date().toLocaleDateString(),
        booking_time: new Date().toLocaleTimeString()
      }

      // Send confirmation email to customer
      await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        emailData
      )

      return { success: true }
    } catch (error) {
      console.error('Error sending email:', error)
      return { success: false, error: error.message }
    } finally {
      setIsSubmitting(false)
    }
  }

  const submitBooking = async (formData) => {
    try {
      const result = await sendBookingEmail(formData)
      
      if (result.success) {
        closeBooking()
        return { success: true, bookingDetails: formData }
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      console.error('Booking submission failed:', error)
      return { success: false, error: error.message }
    }
  }

  const value = {
    isBookingOpen,
    currentPackage,
    isSubmitting,
    openBooking,
    closeBooking,
    submitBooking,
    sendBookingEmail
  }

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  )
} 