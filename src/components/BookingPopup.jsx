import React, { useState, useEffect } from 'react'
import { X, Phone, Mail, MessageCircle, MapPin, Package, User, Send } from 'lucide-react'

const BookingPopup = ({ isOpen, onClose, packageData, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        whatsapp: '',
        location: '',
        packageInfo: packageData?.name || '',
        additionalRequests: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (packageData) {
            setFormData(prev => ({
                ...prev,
                packageInfo: `${packageData.name} - ${packageData.duration} - ${packageData.price}`
            }))
        }
    }, [packageData])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
        if (!formData.location.trim()) newErrors.location = 'Location is required'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)

        try {
            await onSubmit(formData)
        } catch (error) {
            console.error('Booking submission error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    if (!isOpen) return null

    return (
        <div className="booking-popup-overlay">
            <div className="booking-popup-container">
                <div className="booking-popup-header">
                    <div className="booking-popup-title">
                        <Package className="booking-icon" />
                        <h2 style={{ color: 'white' }}>Book Your Dream Trip</h2>
                    </div>
                    <button onClick={onClose} className="booking-popup-close">
                        <X size={24} />
                    </button>
                </div>

                <div className="booking-popup-content">
                    {packageData && (
                        <div className="package-preview">
                            <img src={packageData.image} alt={packageData.name} className="package-image" />
                            <div className="package-details">
                                <h3>{packageData.name}</h3>
                                <div className="package-meta">
                                    <span className="duration">{packageData.duration}</span>
                                    <span className="price">{packageData.price}</span>
                                    {packageData.visaRequirement && (
                                        <span className={`visa-status ${packageData.visaRequirement === 'Visa-Free' ? 'visa-free' : 'visa-required'}`}>
                                            {packageData.visaRequirement}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="booking-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <User size={18} />
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={errors.name ? 'error' : ''}
                                    placeholder="Enter your full name"
                                />
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">
                                    <Mail size={18} />
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={errors.email ? 'error' : ''}
                                    placeholder="Enter your email address"
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="location">
                                    <MapPin size={18} />
                                    Your Location *
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    className={errors.location ? 'error' : ''}
                                    placeholder="City, State, Country"
                                />
                                {errors.location && <span className="error-message">{errors.location}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">
                                    <Phone size={18} />
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={errors.phone ? 'error' : ''}
                                    placeholder="Enter your phone number"
                                />
                                {errors.phone && <span className="error-message">{errors.phone}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="whatsapp">
                                    <MessageCircle size={18} />
                                    WhatsApp Number
                                </label>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleInputChange}
                                    placeholder="Enter WhatsApp number (optional)"
                                />
                            </div>
                        </div>





                        <button
                            type="submit"
                            className="booking-submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <div className="loading-spinner"></div>
                            ) : (
                                <>
                                    <Send size={18} />
                                    Submit Booking Request
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookingPopup 