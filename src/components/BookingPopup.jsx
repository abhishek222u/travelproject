import React, { useState, useEffect } from 'react'
import { X, Phone, Mail, MessageCircle, MapPin, Package, User, Send, Users, Calendar } from 'lucide-react'

const BookingPopup = ({
    isOpen,
    onClose,
    packageData,
    onSubmit,
    title = "Book Your Dream Trip",
    buttonText = "Submit Booking Request",
    isVisaConsultation = false
}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        whatsapp: '',
        location: '',
        numberOfTravellers: '',
        dateOfTravel: '',
        originCountry: '',
        destinationCountry: '',
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
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.trim())) {
            newErrors.phone = 'Phone number must be 10 digits';
        }

        if (!formData.location.trim()) newErrors.location = 'Location is required'
        
        if (!formData.numberOfTravellers.trim()) {
            newErrors.numberOfTravellers = 'Number of travellers is required';
        } else if (!/^\d+$/.test(formData.numberOfTravellers.trim()) || parseInt(formData.numberOfTravellers) < 1) {
            newErrors.numberOfTravellers = 'Please enter a valid number of travellers (minimum 1)';
        }

        if (!formData.dateOfTravel.trim()) {
            newErrors.dateOfTravel = 'Date of travel is required';
        } else {
            const selectedDate = new Date(formData.dateOfTravel);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                newErrors.dateOfTravel = 'Date of travel cannot be in the past';
            }
        }

        // Visa-specific validation
        if (isVisaConsultation) {
            if (!formData.originCountry.trim()) {
                newErrors.originCountry = 'Origin country is required';
            }
            if (!formData.destinationCountry.trim()) {
                newErrors.destinationCountry = 'Destination country is required';
            }
        }

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
                        <h2 style={{ color: 'white' }}>{title}</h2>
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

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="numberOfTravellers">
                                    <Users size={18} />
                                    No. of Travellers *
                                </label>
                                <input
                                    type="number"
                                    id="numberOfTravellers"
                                    name="numberOfTravellers"
                                    value={formData.numberOfTravellers}
                                    onChange={handleInputChange}
                                    className={errors.numberOfTravellers ? 'error' : ''}
                                    placeholder="Enter number of travellers"
                                    min="1"
                                />
                                {errors.numberOfTravellers && <span className="error-message">{errors.numberOfTravellers}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="dateOfTravel">
                                    <Calendar size={18} />
                                    Date of Travel *
                                </label>
                                <input
                                    type="date"
                                    id="dateOfTravel"
                                    name="dateOfTravel"
                                    value={formData.dateOfTravel}
                                    onChange={handleInputChange}
                                    className={errors.dateOfTravel ? 'error' : ''}
                                    placeholder="Select travel date"
                                />
                                {errors.dateOfTravel && <span className="error-message">{errors.dateOfTravel}</span>}
                            </div>
                        </div>

                        {isVisaConsultation && (
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="originCountry">
                                        <MapPin size={18} />
                                        Origin Country *
                                    </label>
                                    <input
                                        type="text"
                                        id="originCountry"
                                        name="originCountry"
                                        value={formData.originCountry}
                                        onChange={handleInputChange}
                                        className={errors.originCountry ? 'error' : ''}
                                        placeholder="Enter your origin country"
                                    />
                                    {errors.originCountry && <span className="error-message">{errors.originCountry}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="destinationCountry">
                                        <MapPin size={18} />
                                        Destination Country *
                                    </label>
                                    <input
                                        type="text"
                                        id="destinationCountry"
                                        name="destinationCountry"
                                        value={formData.destinationCountry}
                                        onChange={handleInputChange}
                                        className={errors.destinationCountry ? 'error' : ''}
                                        placeholder="Enter destination country"
                                    />
                                    {errors.destinationCountry && <span className="error-message">{errors.destinationCountry}</span>}
                                </div>
                            </div>
                        )}

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
                                    {buttonText}
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