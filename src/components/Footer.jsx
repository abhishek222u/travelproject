import React from 'react'
import logo from "../assets/TRIPOFAI.svg"
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <div className="footer-two">
            <section className="footer-two-top">
                <div className="w-layout-blockcontainer container w-container">
                    <div>
                        <div className="w-layout-hflex footer-two-main">
                            <div
                                id="w-node-d86036ee-2a07-810b-7f3b-5a7993fe2337-e37004b6"
                                className="w-layout-vflex footer-two-left-col"
                            >
                                <h2 className="no-margin text-color-white">
                                    follow the latest travel destination updates from tripofai
                                </h2>
                                <div className="w-layout-hflex social-links-wrapper">
                                    <a
                                        href="https://www.facebook.com/tripofai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon w-inline-block"
                                    >
                                        <Facebook className="social-logo" size={30} color="white" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/tripofai/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon w-inline-block"
                                    >
                                        <Instagram className="social-logo" size={30} color="white" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/tripofai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon w-inline-block"
                                    >
                                        <Linkedin className="social-logo" size={30} color="white" />
                                    </a>
                                </div>
                            </div>
                            <div className="w-layout-vflex footer-two-links">
                                <div className="heading-style-h5">Quick links</div>
                                <div className="w-layout-hflex footer-two-links-wrap">
                                    <a href="/" className="link-tags">
                                        Home
                                    </a>
                                    <a href="/about-one" className="link-tags">
                                        About us
                                    </a>
                                    <a href="/tour-one" className="link-tags">
                                        All tours
                                    </a>
                                    <a href="/blog-two" className="link-tags">
                                        Tour blogs
                                    </a>
                                    <a href="/destination-two" className="link-tags">
                                        Our destination
                                    </a>
                                    <a href="/contact-three" className="link-tags">
                                        Contact
                                    </a>
                                    <a href="/faq" className="link-tags">
                                        FAQ
                                    </a>
                                </div>
                            </div>
                            <div className="w-layout-vflex footer-two-right-box">
                                <a href="tel:8881234567" className="link-style-five">
                                    +91 9818149806
                                </a>
                                <a href="mailto:contact@tripofai.com" className="link-style-five">
                                    contact@tripofai.com
                                </a>
                                <img src="https://www.tripzygo.in/iata%20logo.webp" />
                            </div>
                        </div>
                        <div className="w-layout-vflex footer-logo">
                            <img
                                width={1290}
                                loading="lazy"
                                alt="TripoFai"
                                src={logo}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom footer-two-bottom">
                <div className="w-layout-blockcontainer container w-container">
                    {/* <div className="footer-bottom-locations">
                        <a
                            href="https://exploreza.webflow.io/countries/usa"
                            className="link-style-four"
                        >
                            USA
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/france"
                            className="link-style-four"
                        >
                            France
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/switzerland"
                            className="link-style-four"
                        >
                            Switzerland
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/new-zealand"
                            className="link-style-four"
                        >
                            New Zealand
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/australia"
                            className="link-style-four"
                        >
                            Australia
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/venezuela"
                            className="link-style-four"
                        >
                            Venezuela
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/colombia"
                            className="link-style-four"
                        >
                            Colombia
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/cameroon"
                            className="link-style-four"
                        >
                            Cameroon
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/argentina"
                            className="link-style-four"
                        >
                            Argentina
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/brazil"
                            className="link-style-four"
                        >
                            Brazil
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/egypt"
                            className="link-style-four"
                        >
                            Egypt
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/south-africa"
                            className="link-style-four"
                        >
                            South Africa
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/sri-lanka"
                            className="link-style-four"
                        >
                            Sri Lanka{" "}
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/thailand"
                            className="link-style-four"
                        >
                            Thailand
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/united-arab-emirates"
                            className="link-style-four"
                        >
                            UAE
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/bhutan"
                            className="link-style-four"
                        >
                            Bhutan
                        </a>
                        <a
                            href="https://exploreza.webflow.io/countries/india"
                            className="link-style-four last-link-border-off"
                        >
                            India
                        </a>
                    </div> */}
                    <div className="footer-description" style={{ color: 'white', fontSize: '0.95rem', textAlign: 'center', lineHeight: '1.6' }}>
                        tripofai is a travel brand by Housofai Technologies Private Limited, committed to delivering intelligent, seamless, and personalized travel experiences powered by advanced technology.
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Footer
