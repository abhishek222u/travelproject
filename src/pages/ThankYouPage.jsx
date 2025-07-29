import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { CheckCircle, Mail, Phone, Calendar, MapPin, ArrowRight, Home, Star, Users } from 'lucide-react'
import SEO from '../components/SEO'

const ThankYouPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isVisible, setIsVisible] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false)

    // Get booking details from location state
    const bookingDetails = location.state?.bookingDetails

    useEffect(() => {
        // Animate elements on load
        setTimeout(() => setIsVisible(true), 100)
        setTimeout(() => setShowConfetti(true), 500)

        // Auto redirect after 10 seconds
        const timer = setTimeout(() => {
            // navigate('/')
        }, 10000)

        return () => clearTimeout(timer)
    }, [navigate])

    const handleGoHome = () => {
        navigate('/')
    }

    const handleBrowseMore = () => {
        navigate('/destinations')
    }

    return (
        <div className="thank-you-page">
            <SEO
                title="Thank You - Booking Confirmed | tripofai Travel Services"
                description="Thank you for choosing tripofai for your travel needs. Your booking request has been submitted successfully. We'll contact you soon to confirm your dream vacation."
                keywords="booking confirmation, travel booking, thank you, tripofai, travel services"
            />
            {showConfetti && <div className="confetti-container">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="confetti-piece"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            backgroundColor: ['#667eea', '#764ba2', '#FFD700', '#FF6B6B', '#4ECDC4'][Math.floor(Math.random() * 5)]
                        }}
                    />
                ))}
            </div>}

            <div className={`thank-you-container ${isVisible ? 'visible' : ''}`}>
                {/* Success Icon */}
                <div className="success-icon-container">
                    <div className="success-icon-bg">
                        <CheckCircle className="success-icon" size={80} />
                    </div>
                    <div className="success-ripple"></div>
                </div>

                {/* Main Content */}
                <div className="thank-you-content">
                    <h1 className="thank-you-title">Booking Request Submitted!</h1>
                    <p className="thank-you-subtitle">
                        Thank you for choosing us for your dream vacation. We're excited to help you create unforgettable memories!
                    </p>

                    {/* Booking Summary */}
                    {bookingDetails && (
                        <div className="booking-summary">
                            <h3>Booking Summary</h3>
                            <div className="summary-grid">
                                <div className="summary-item">
                                    <MapPin size={20} />
                                    <div>
                                        <strong>Package</strong>
                                        <p>{bookingDetails.packageInfo}</p>
                                    </div>
                                </div>
                                <div className="summary-item">
                                    <Mail size={20} />
                                    <div>
                                        <strong>Email</strong>
                                        <p>{bookingDetails.email}</p>
                                    </div>
                                </div>
                                <div className="summary-item">
                                    <Phone size={20} />
                                    <div>
                                        <strong>Contact</strong>
                                        <p>{bookingDetails.phone}</p>
                                    </div>
                                </div>
                                {bookingDetails.numberOfTravellers && (
                                    <div className="summary-item">
                                        <Users size={20} />
                                        <div>
                                            <strong>Number of Travellers</strong>
                                            <p>{bookingDetails.numberOfTravellers}</p>
                                        </div>
                                    </div>
                                )}
                                {bookingDetails.dateOfTravel && (
                                    <div className="summary-item">
                                        <Calendar size={20} />
                                        <div>
                                            <strong>Date of Travel</strong>
                                            <p>{new Date(bookingDetails.dateOfTravel).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* What's Next - Simplified */}
                    <div className="next-steps">
                        <h3>What's Next?</h3>
                        <p className="next-summary">Our travel experts will call you within 24 hours to confirm your booking and provide a detailed itinerary.</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <button onClick={handleGoHome} className="btn-primary">
                            <Home size={20} />
                            Go to Homepage
                        </button>
                        <button onClick={handleBrowseMore} className="btn-secondary">
                            <ArrowRight size={20} />
                            Browse More Destinations
                        </button>
                    </div>

                    {/* Contact Info */}
                    <div className="contact-info">
                        <p>Need help? Call <strong>+91 9818149806 </strong> or email <strong>contact@tripofai.com</strong></p>
                    </div>
                </div>

                {/* Auto redirect notice */}
                <div className="auto-redirect">
                    <p>You'll be redirected to homepage in a few seconds...</p>
                </div>
            </div>
        </div>
    )
}

export default ThankYouPage 