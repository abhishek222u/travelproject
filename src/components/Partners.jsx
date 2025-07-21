import React from 'react'
import './Partners.css'

const Partners = () => {
  const partnerLogos = [
    {
      src: "https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/671b618d23d96928e8ba6703_Client%20One.svg",
      width: 127,
      height: 42,
      alt: "Client One"
    },
    {
      src: "https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/671b618d331505391be32f4d_Client%20Two.svg",
      width: 75,
      height: 40,
      alt: "Client Two"
    },
    {
      src: "https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/671b618da7d45d9170d31562_Client%20Three.svg",
      width: 118,
      height: 40,
      alt: "Client Three"
    },
    {
      src: "https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/671b618dc1b64a8dd9c38e7a_Client%20Four.svg",
      width: 110,
      height: 42,
      alt: "Client Four"
    },
    {
      src: "https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/671b618d1c1b5cffd4b500d2_Client%20Five.svg",
      width: 153,
      height: 41,
      alt: "Client Five"
    }
  ];

  return (
    <section className="home-three-partners">
      <div className="w-layout-blockcontainer container w-container">
        <section>
          <div className="w-layout-blockcontainer container w-container">
            <div className="w-layout-hflex marquee-one">
              <div className="marquee-container">
                <div className="marquee-content">
                  {/* First set of logos */}
                  {partnerLogos.map((logo, index) => (
                    <img
                      key={`first-${index}`}
                      width={logo.width}
                      height={logo.height}
                      alt={logo.alt}
                      src={logo.src}
                      loading="lazy"
                    />
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {partnerLogos.map((logo, index) => (
                    <img
                      key={`second-${index}`}
                      width={logo.width}
                      height={logo.height}
                      alt={logo.alt}
                      src={logo.src}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
              <div className="marquee-text">
                Trusted by 15,000+ founders &amp; business owners
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Partners
