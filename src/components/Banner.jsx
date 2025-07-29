import React from 'react'
import { useBooking } from '../context/BookingContext'

const Banner = () => {
    const { openBooking } = useBooking()

    const handleBookNow = () => {
        const item = {
            id: 'switzerland-tour',
            name: 'Switzerland Tour - 5 night 6 days',
            duration: '5 night 6 days',
            price: '$2425.00',
            visaRequirement: 'Visa Required',
            image: 'https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b7d8f3fc26d93686b2d21_Switzerland%20one.webp'
        }
        openBooking(item)
    }

    return (
        <section
            data-w-id="ff0385ae-cfbf-ca85-8978-184c11f0b10f"
            style={{
                opacity: 1,
                transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d"
            }}
        >
            <div className="w-layout-blockcontainer container w-container">
                <div className="w-layout-vflex tour-slider-cards switzerland">
                    <div className="w-layout-vflex tour-slider-cards-main-two">
                        <div className="offer-tag tour-slider-offer">5 night 6 days</div>
                        <div className="big-text popular-card-text slider-card-text">
                            Switzerland
                        </div>
                        <div className="popular-card-border slider-card-boder" />
                        <div className="heading-style-h5">explore your journey</div>
                        <div className="w-layout-hflex slider-card-button-box">
                            <div className="w-layout-vflex card-three-text-box">
                                <div className="w-layout-hflex card-three-price">
                                    <div className="small-text text-strike-through text-light-white">
                                        $2900.00
                                    </div>
                                    <div className="heading-style-h4 text-color-white">$2425.00</div>
                                </div>
                                <div className="offer-small-text">Offer price per person</div>
                            </div>
                            <button
                                onClick={handleBookNow}
                                className="button w-button"
                                style={{ cursor: 'pointer' }}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner
