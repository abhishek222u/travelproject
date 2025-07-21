import { ChevronDown } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'

const Header = () => {

    return (
        <>
            <div
                data-animation="default"
                className="navbar-two w-nav"
                data-easing2="ease"
                data-easing="ease"
                data-collapse="medium"
                data-w-id="8678381b-1045-5e14-9427-96f919b35e37"
                role="banner"
                data-duration={400}
                data-wf--navbar-v2--variant="base"
            >
                <div className="container-large w-container">
                    <div className="w-layout-hflex navbar-two-main">
                        <Link to="/" className="brand w-inline-block logo"
                            style={{
                                fontSize: 32,
                                color: 'rgb(43, 42, 42)',
                                fontFamily: 'Melodrama Variable'
                            }}
                        >
                            <img src={logo} alt="logo" />
                        </Link>
                        <nav role="navigation" className="nav-menu w-nav-menu">
                            <div
                                data-hover="true"
                                data-delay={0}
                                className="dropdown w-dropdown"
                                style={{ maxWidth: 1750 }}
                            >
                                <div
                                    className="dropdown-toggle w-dropdown-toggle"
                                    id="w-dropdown-toggle-2"
                                    aria-controls="w-dropdown-list-2"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div>Destinations</div>
                                    <ChevronDown />
                                </div>
                                <nav
                                    className="dropdown-list w-dropdown-list"
                                    id="w-dropdown-list-2"
                                    aria-labelledby="w-dropdown-toggle-2"
                                >
                                    <a
                                        href="/destination-one"
                                        aria-current="page"
                                        className="dropdown-links w-dropdown-link w--current"
                                        tabIndex={0}
                                    >
                                        Destination One
                                    </a>
                                    <a
                                        href="/destination-two"
                                        className="dropdown-links w-dropdown-link"
                                        tabIndex={0}
                                    >
                                        Destination Two
                                    </a>
                                    <a
                                        href="/destination-three"
                                        className="dropdown-links w-dropdown-link"
                                        tabIndex={0}
                                    >
                                        Destination Three
                                    </a>
                                </nav>
                            </div>
                            <div
                                data-hover="true"
                                data-delay={0}
                                className="dropdown w-dropdown"
                                style={{ maxWidth: 1750 }}
                            >
                                <div
                                    className="dropdown-toggle w-dropdown-toggle"
                                    id="w-dropdown-toggle-3"
                                    aria-controls="w-dropdown-list-3"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div>Tours</div>
                                    <ChevronDown />
                                </div>
                                <nav
                                    className="dropdown-list w-dropdown-list"
                                    id="w-dropdown-list-3"
                                    aria-labelledby="w-dropdown-toggle-3"
                                >
                                    <a
                                        href="/tour-one"
                                        className="dropdown-links w-dropdown-link"
                                        tabIndex={0}
                                    >
                                        Tour One
                                    </a>
                                    <a
                                        href="/tour-two"
                                        className="dropdown-links w-dropdown-link"
                                        tabIndex={0}
                                    >
                                        Tour Two
                                    </a>
                                    <a
                                        href="/tour-three"
                                        className="dropdown-links w-dropdown-link"
                                        tabIndex={0}
                                    >
                                        Tour Three
                                    </a>
                                </nav>
                            </div>
                            <div
                                data-hover="true"
                                data-delay={0}
                                className="dropdown w-dropdown"
                                style={{ maxWidth: 1750 }}
                            >
                                <div
                                    className="dropdown-toggle w-dropdown-toggle"
                                    id="w-dropdown-toggle-4"
                                    aria-controls="w-dropdown-list-4"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div>Blog</div>
                                    <ChevronDown />
                                </div>
                                <nav
                                    className="dropdown-list w-dropdown-list"
                                    id="w-dropdown-list-4"
                                    aria-labelledby="w-dropdown-toggle-4"
                                >
                                    <a
                                        href="/blog-one"
                                        className="dropdown-links w-dropdown-link"
                                        tabIndex={0}
                                    >
                                        Blog One
                                    </a>
                                    <a
                                        href="/blog-two"
                                        className="dropdown-links w-dropdown-link"
                                        tabIndex={0}
                                    >
                                        Blog Two
                                    </a>
                                    <a
                                        href="/blog-three"
                                        className="dropdown-links w-dropdown-link"
                                        tabIndex={0}
                                    >
                                        Blog Three
                                    </a>
                                </nav>
                            </div>
                            <div
                                data-hover="true"
                                data-delay={0}
                                className="dropdown w-dropdown"
                                style={{ maxWidth: 1750 }}
                            >
                                <div
                                    className="dropdown-toggle w-dropdown-toggle"
                                    id="w-dropdown-toggle-5"
                                    aria-controls="w-dropdown-list-5"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div>Contact</div>
                                    <ChevronDown />
                                </div>
                                <nav
                                    className="dropdown-list w-dropdown-list"
                                    id="w-dropdown-list-5"
                                    aria-labelledby="w-dropdown-toggle-5"
                                >
                                    <a
                                        href="/contact-one"
                                        className="dropdown-links w-dropdown-link"
                                        tabIndex={0}
                                    >
                                        Contact One
                                    </a>
                                    <a
                                        href="/contact-two"
                                        className="dropdown-links w-dropdown-link"
                                        tabIndex={0}
                                    >
                                        Contact Two
                                    </a>
                                    <a
                                        href="/contact-three"
                                        className="dropdown-links w-dropdown-link"
                                        tabIndex={0}
                                    >
                                        Contact Three
                                    </a>
                                </nav>
                            </div>
                        </nav>
                        <div className="block">
                            {/* <a 
                                href="tel:+1-555-123-4567"
                                className="button w-button"
                                style={{ 
                                    cursor: 'pointer',
                                    padding: '8px 16px',
                                    fontSize: '14px'
                                }}
                            >
                                Call Now
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
