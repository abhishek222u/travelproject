import React from 'react'
import AnimatedElement from './AnimatedElement'
import { useBooking } from '../context/BookingContext'

const About = () => {
    const { openBooking } = useBooking()

    const handleBookNow = () => {
        const item = {
            id: 'destination-three-tour',
            name: 'Destination Three Tour Package',
            duration: '7 Days 6 Nights',
            price: '$299.00',
            visaRequirement: 'Visa Required',
            image: 'https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/675fbaa67d8c306b66440233_Temple%20Image.webp'
        }
        openBooking(item)
    }

    return (
        <section className="home-three-about">
            <div className="w-layout-blockcontainer container w-container">
                <div className="w-layout-hflex home-three-about-main">
                    <div className="w-layout-vflex home-three-about-left">
                        <AnimatedElement
                            animationType="slideUp"
                            duration={800}
                            delay={0}
                        >
                            <h2 className="no-margin">
                                we recommended beautiful destinations every day
                            </h2>
                        </AnimatedElement>
                        
                        <AnimatedElement
                            animationType="slideUp"
                            duration={800}
                            delay={200}
                        >
                            <div className="w-layout-vflex home-three-about-authors">
                                <img
                                    width={252}
                                    sizes="(max-width: 479px) 100vw, 252px"
                                    alt="Authors"
                                    src="https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/675fbaa67d8c306b6644022f_Authors%20faces.webp"
                                    loading="lazy"
                                    srcSet="https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/675fbaa67d8c306b6644022f_Authors%2520faces-p-500.webp 500w, https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/675fbaa67d8c306b6644022f_Authors%20faces.webp 504w"
                                />
                                <div className="text-dark text-underline">
                                    <span className="text-orange">30k+</span> happy and satisfied
                                    customers
                                </div>
                            </div>
                        </AnimatedElement>
                    </div>
                    
                    <div className="w-layout-hflex home-three-about-middle">
                        <AnimatedElement
                            animationType="scaleIn"
                            duration={1000}
                            delay={400}
                        >
                            <div className="home-three-about-circle-image">
                                <img
                                    width={205}
                                    loading="lazy"
                                    alt="Island Image"
                                    src="https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/675fbaa67d8c306b66440231_Island%20image.webp"
                                    className="border-radius-full"
                                />
                            </div>
                        </AnimatedElement>
                        
                        <AnimatedElement
                            animationType="slideRight"
                            duration={800}
                            delay={600}
                        >
                            <div>
                                <img
                                    width={330}
                                    sizes="(max-width: 479px) 100vw, 330px"
                                    alt="Temple Image"
                                    src="https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/675fbaa67d8c306b66440233_Temple%20Image.webp"
                                    loading="lazy"
                                    srcSet="https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/675fbaa67d8c306b66440233_Temple%2520Image-p-500.webp 500w, https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/675fbaa67d8c306b66440233_Temple%20Image.webp 660w"
                                    className="home-three-about-image"
                                />
                            </div>
                        </AnimatedElement>
                    </div>
                    
                    <div className="w-layout-vflex home-three-about-right">
                        <AnimatedElement
                            animationType="slideUp"
                            duration={800}
                            delay={800}
                        >
                            <p>
                                with over two decades of experience in crafting exceptional travel experiences,
                                we've helped thousands of travelers discover the world's most amazing destinations.
                                Our passionate team of travel experts ensures every journey is perfectly tailored
                                to create lasting memories and authentic cultural connections.
                            </p>
                        </AnimatedElement>
                        
                        <AnimatedElement
                            animationType="slideUp"
                            duration={800}
                            delay={1000}
                        >
                            <div className="w-layout-hflex home-three-counter-wrap">
                                <div className="w-layout-vflex home-three-counter-column">
                                    <div className="heading-style-h3 text-orange">120+</div>
                                    <div className="menu-font">Tour available</div>
                                </div>
                                <div className="w-layout-vflex home-three-counter-column">
                                    <div className="heading-style-h3 text-orange">20+</div>
                                    <div className="menu-font">New destinations</div>
                                </div>
                                <div className="w-layout-vflex home-three-counter-column">
                                    <div className="heading-style-h3 text-orange">15+</div>
                                    <div className="menu-font">Years experience</div>
                                </div>
                            </div>
                        </AnimatedElement>
                        
                        <AnimatedElement
                            animationType="slideUp"
                            duration={800}
                            delay={1200}
                        >
                            <button
                                onClick={handleBookNow}
                                className="button w-button"
                                style={{ cursor: 'pointer' }}
                            >
                                Book Now
                            </button>
                        </AnimatedElement>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
