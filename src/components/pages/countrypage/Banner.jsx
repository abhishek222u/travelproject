import React from 'react'

const Banner = ({displayName, backgroundImage}) => {
    return (
        <section
            style={{
                backgroundImage: `url("${backgroundImage}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
            className="country-hero"
        >
            <div className="w-layout-blockcontainer container container-relative w-container">
                <div className="w-layout-vflex country-main">
                    <h1
                        data-w-id="a2957703-87fb-047b-4b73-4d61e278d100"
                        className="no-margin text-color-white"
                        style={{
                            opacity: 1,
                            transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {displayName}
                    </h1>
                    <p
                        data-w-id="d1cb151c-ed1c-ae17-5f01-0a2cf0557209"
                        className="no-margin text-color-white country-hero-description"
                        style={{
                            opacity: 1,
                            transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                        }}
                    >
                        Embark on an extraordinary journey to discover captivating landscapes, vibrant cultures,
                        and unforgettable experiences that will create memories to last a lifetime.
                    </p>
                </div>
            </div>
            <div className="country-hero-overlay" />
        </section>

    )
}

export default Banner
