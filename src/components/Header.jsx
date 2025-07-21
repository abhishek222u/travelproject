import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/logo.png'
import logo from '../assets/tripofai_logo2.svg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className="navbar-one"
        style={{
          willChange: "background",
          backgroundColor: isScrolled ? "rgba(35, 35, 35, 0.75)" : "rgba(18, 18, 18, 0)",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          transition: "all 0.3s ease",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000
        }}
      >
        <div className="w-layout-blockcontainer container-large navbar-container w-container">
          <div className="w-layout-hflex navbar-one-main">
            <div className="w-layout-hflex navbar-one-left">
              <Link to="/" className="brand w-inline-block logo"
                style={{
                  fontSize: 32,
                  color: 'rgb(255, 255, 255)',
                  fontFamily: 'Melodrama Variable'
                }}
              >
                {/* TripoFai */}
                <img src={logo} alt="logo" />
              </Link>
              <a href="tel:8881234567" className="link-style-six tab-display-off">
                +91 9818149806 
              </a>
              <div className="navbar-one-border tab-display-off" />
              <a
                href="mailto:contact@tripofai.com"
                className="link-style-six tab-display-off"
              >
                contact@tripofai.com
              </a>
            </div>
            <div className="w-layout-hflex nav-one-right">
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
              <div className="w-commerce-commercecartwrapper">
                <a
                  className="w-commerce-commercecartopenlink cart-button w-inline-block"
                  role="button"
                  aria-haspopup="dialog"
                  aria-label="Open cart"
                  // onClick={openCart}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="cart-main">
                    <img
                      src="https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/671b618cd61c64e976f96b8c_Cart.svg"
                      loading="lazy"
                      alt="Cart"
                    />
                    <div className="w-commerce-commercecartopenlinkcount cart-quantity">
                      0
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header
