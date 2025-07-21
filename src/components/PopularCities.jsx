import React from 'react'
import { useBooking } from '../context/BookingContext'

const PopularCities = () => {
    const { openBooking } = useBooking()

    const handleBookNow = (tourType) => {
        let item
        if (tourType === 'bangkok') {
            item = {
                id: 'bangkok-pattaya-tour',
                name: 'Bangkok Pattaya Tour - 5 Night 6 Days',
                duration: '5 Night 6 Days',
                price: '$214.00',
                visaRequirement: 'Visa-Free',
                image: 'https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/671b618c7867eb1926f6a8de_Bangkok%20Background-2.webp'
            }
        } else if (tourType === 'france-popular') {
            item = {
                id: 'france-castles-coastline-popular',
                name: 'France Castles and Coastline Journey - 9 Nights 10 Days',
                duration: '9 Nights 10 Days',
                price: '$206.00',
                visaRequirement: 'Visa Required',
                image: 'https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b820df1bcc26bf9985e0a_France%20Three.webp'
            }
        }
        openBooking(item)
    }

    return (
        <section className="home-three-popular-tour">
            <div className="w-layout-blockcontainer container w-container">
                <div className="w-layout-vflex home-three-popular-main">
                    <div className="w-layout-vflex home-heading-text-box">
                        <h2
                            data-w-id="ff0385ae-cfbf-ca85-8978-184c11f0b504"
                            className="no-margin-top"
                            style={{
                                opacity: 1,
                                transform:
                                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d"
                            }}
                        >
                            Most popular tours
                        </h2>
                        <p
                            data-w-id="ff0385ae-cfbf-ca85-8978-184c11f0b506"
                            className="no-margin"
                            style={{
                                opacity: 1,
                                transform:
                                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d"
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur. Ac lobortis tempus tincidunt
                            suscipit volutpat nunc condimentum imperdiet tincidunt.
                        </p>
                    </div>
                    <div
                        data-w-id="9a99e492-e5d3-2b3c-1cca-27ce0ba1c931"
                        className="best-plans-main"
                        style={{
                            opacity: 1,
                            transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                        }}
                    >
                        <div className="best-plan-left">
                            <div className="heading-style-h5 text-dark">Recommended for you</div>
                            <div className="w-dyn-list">
                                <div role="list" className="recommended-list w-dyn-items">
                                    <div role="listitem" className="w-dyn-item">
                                        <a
                                            href="#"
                                            className="recommended-cards w-inline-block"
                                        >
                                            <div className="recommended-images">
                                                <img
                                                    className="border-radius-ten"
                                                    src="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b68d88dd2c944d2e7d626_Venezuela%20Two.webp"
                                                    width={90}
                                                    height={81}
                                                    alt=""
                                                    sizes="90px"
                                                    data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                                    loading="lazy"
                                                    srcSet="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b68d88dd2c944d2e7d626_Venezuela%20Two-p-500.webp 500w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b68d88dd2c944d2e7d626_Venezuela%20Two-p-800.webp 800w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b68d88dd2c944d2e7d626_Venezuela%20Two-p-1080.webp 1080w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b68d88dd2c944d2e7d626_Venezuela%20Two-p-1600.webp 1600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b68d88dd2c944d2e7d626_Venezuela%20Two-p-2000.webp 2000w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b68d88dd2c944d2e7d626_Venezuela%20Two-p-2600.webp 2600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b68d88dd2c944d2e7d626_Venezuela%20Two-p-3200.webp 3200w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b68d88dd2c944d2e7d626_Venezuela%20Two.webp 3840w"
                                                />
                                            </div>
                                            <div className="w-layout-vflex">
                                                <div className="heading-style-h6">
                                                    Experience Venezuela's historic colonial cities
                                                </div>
                                                <div className="w-layout-hflex card-price">
                                                    <div>From </div>
                                                    <div
                                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                        className="card-one-sell-price"
                                                    >
                                                        $&nbsp;244.00&nbsp;USD
                                                    </div>
                                                    <div
                                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                        className="text-strike-through"
                                                    >
                                                        $&nbsp;274.00&nbsp;USD
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <a
                                            href="/#"
                                            className="recommended-cards w-inline-block"
                                        >
                                            <div className="recommended-images">
                                                <img            
                                                    className="border-radius-ten"
                                                    src="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b7d8f3fc26d93686b2d21_Switzerland%20one.webp"
                                                    width={90}
                                                    height={81}
                                                    alt=""
                                                    sizes="90px"
                                                    data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                                    loading="lazy"
                                                    srcSet="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b7d8f3fc26d93686b2d21_Switzerland%20one-p-500.webp 500w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b7d8f3fc26d93686b2d21_Switzerland%20one-p-800.webp 800w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b7d8f3fc26d93686b2d21_Switzerland%20one-p-1080.webp 1080w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b7d8f3fc26d93686b2d21_Switzerland%20one-p-1600.webp 1600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b7d8f3fc26d93686b2d21_Switzerland%20one-p-2000.webp 2000w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b7d8f3fc26d93686b2d21_Switzerland%20one-p-2600.webp 2600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b7d8f3fc26d93686b2d21_Switzerland%20one-p-3200.webp 3200w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b7d8f3fc26d93686b2d21_Switzerland%20one.webp 3840w"
                                                />
                                            </div>
                                            <div className="w-layout-vflex">
                                                <div className="heading-style-h6">
                                                    Explore Switzerland's scenic mountain escapes
                                                </div>
                                                <div className="w-layout-hflex card-price">
                                                    <div>From </div>
                                                    <div
                                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                        className="card-one-sell-price"
                                                    >
                                                        $&nbsp;182.00&nbsp;USD
                                                    </div>
                                                    <div
                                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                        className="text-strike-through"
                                                    >
                                                        $&nbsp;202.00&nbsp;USD
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <a
                                            href="/#"
                                            className="recommended-cards w-inline-block"
                                        >
                                            <div className="recommended-images">
                                                <img
                                                    className="border-radius-ten"
                                                    src="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b63dfe28ba57fd86c68bf_Colombia%20Two.webp"
                                                    width={90}
                                                    height={81}
                                                    alt=""
                                                    sizes="90px"
                                                    data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                                    loading="lazy"
                                                    srcSet="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b63dfe28ba57fd86c68bf_Colombia%20Two-p-500.webp 500w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b63dfe28ba57fd86c68bf_Colombia%20Two-p-800.webp 800w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b63dfe28ba57fd86c68bf_Colombia%20Two-p-1080.webp 1080w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b63dfe28ba57fd86c68bf_Colombia%20Two-p-1600.webp 1600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b63dfe28ba57fd86c68bf_Colombia%20Two-p-2000.webp 2000w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b63dfe28ba57fd86c68bf_Colombia%20Two-p-2600.webp 2600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b63dfe28ba57fd86c68bf_Colombia%20Two-p-3200.webp 3200w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b63dfe28ba57fd86c68bf_Colombia%20Two.webp 3840w"
                                                />
                                            </div>
                                            <div className="w-layout-vflex">
                                                <div className="heading-style-h6">
                                                    Explore Colombia's stunning Caribbean beaches
                                                </div>
                                                <div className="w-layout-hflex card-price">
                                                    <div>From </div>
                                                    <div
                                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                        className="card-one-sell-price"
                                                    >
                                                        $&nbsp;240.00&nbsp;USD
                                                    </div>
                                                    <div
                                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                        className="text-strike-through"
                                                    >
                                                        $&nbsp;280.00&nbsp;USD
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            id="w-node-_03f2e1d4-c03d-b6da-12d9-c4122e70890b-a7944ac8"
                            className="spacial-cards"
                            style={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                            }}
                        >
                            <div className="spacial-cards-background">
                                <img
                                    width={410}
                                    height={543}
                                    alt="Card Background"
                                    src="https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/671b618c7867eb1926f6a8de_Bangkok%20Background-2.webp"
                                    loading="lazy"
                                    srcSet="https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/671b618c7867eb1926f6a8de_Bangkok%20Background-2-p-500.webp 500w, https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/671b618c7867eb1926f6a8de_Bangkok%20Background-2-p-800.webp 800w, https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/671b618c7867eb1926f6a8de_Bangkok%20Background-2.webp 820w"
                                    sizes="(max-width: 479px) 100vw, 410px"
                                    className="spacial-cards-image"
                                />
                                <div className="spacial-cards-overlay-one" />
                            </div>
                            <div className="w-layout-vflex special-cards-content">
                                <div className="w-layout-vflex special-cards-headings">
                                    <div className="small-text-two">5 Night 6 Days</div>
                                    <div className="heading-style-h2 text-color-white">
                                        Bangkok Pattaya
                                    </div>
                                    <div className="spacial-card-location">THAILAND</div>
                                </div>
                                <div className="w-layout-vflex card-three-text-box">
                                    <div className="w-layout-hflex card-three-price">
                                        <div className="small-text text-strike-through text-light-gray">
                                            $234.00
                                        </div>
                                        <div className="heading-style-h4 text-color-white">$214.00</div>
                                    </div>
                                    <div className="offer-small-text">Offer price per person</div>
                                </div>
                                <div className="w-layout-vflex spacial-cards-bottom">
                                    <p className="small-text text-color-white spacial-cards-details">
                                        2 night Bangkok | 3 night Pattaya | 4 star hotel | Daily
                                        breakfast | Private Tours and transfers
                                    </p>
                                    <button
                                        onClick={() => handleBookNow('bangkok')}
                                        className="button button-left-auto w-button"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="best-plan-left">
                            <div className="heading-style-h5 text-dark">Family trip</div>
                            <div className="w-dyn-list">
                                <div role="list" className="recommended-list w-dyn-items">
                                    <div role="listitem" className="w-dyn-item">
                                        <a
                                            href="#"
                                            className="recommended-cards w-inline-block"
                                        >
                                            <div className="recommended-images">
                                                <img
                                                    className="border-radius-ten"
                                                    src="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b82aea58290c00b2404c1_France%20Four.webp"
                                                    width={90}
                                                    height={81}
                                                    alt=""
                                                    sizes="90px"
                                                    data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                                    loading="lazy"
                                                    srcSet="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b82aea58290c00b2404c1_France%20Four-p-500.webp 500w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b82aea58290c00b2404c1_France%20Four-p-800.webp 800w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b82aea58290c00b2404c1_France%20Four-p-1080.webp 1080w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b82aea58290c00b2404c1_France%20Four-p-1600.webp 1600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b82aea58290c00b2404c1_France%20Four-p-2000.webp 2000w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b82aea58290c00b2404c1_France%20Four-p-2600.webp 2600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b82aea58290c00b2404c1_France%20Four-p-3200.webp 3200w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b82aea58290c00b2404c1_France%20Four.webp 3840w"
                                                />
                                            </div>
                                            <div className="w-layout-vflex">
                                                <div className="heading-style-h6">
                                                    Explore France's timeless scenic routes
                                                </div>
                                                <div className="w-layout-hflex card-price">
                                                    <div>From </div>
                                                    <div
                                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                        className="card-one-sell-price"
                                                    >
                                                        $&nbsp;180.00&nbsp;USD
                                                    </div>
                                                    <div
                                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                        className="text-strike-through"
                                                    >
                                                        $&nbsp;200.00&nbsp;USD
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <a
                                            href="#"
                                            className="recommended-cards w-inline-block"
                                        >
                                            <div className="recommended-images">
                                                <img
                                                    className="border-radius-ten"
                                                    src="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677684aa49c304db6db5d4dc_India%20Image%20Three.webp"
                                                    width={90}
                                                    height={81}
                                                    alt=""
                                                    sizes="90px"
                                                    data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                                    loading="lazy"
                                                    srcSet="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677684aa49c304db6db5d4dc_India%20Image%20Three-p-500.webp 500w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677684aa49c304db6db5d4dc_India%20Image%20Three-p-800.webp 800w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677684aa49c304db6db5d4dc_India%20Image%20Three-p-1080.webp 1080w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677684aa49c304db6db5d4dc_India%20Image%20Three-p-1600.webp 1600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677684aa49c304db6db5d4dc_India%20Image%20Three-p-2000.webp 2000w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677684aa49c304db6db5d4dc_India%20Image%20Three-p-2600.webp 2600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677684aa49c304db6db5d4dc_India%20Image%20Three-p-3200.webp 3200w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677684aa49c304db6db5d4dc_India%20Image%20Three.webp 3840w"
                                                />
                                            </div>
                                            <div className="w-layout-vflex">
                                                <div className="heading-style-h6">
                                                    Journey across India's cultural diversity
                                                </div>
                                                <div className="w-layout-hflex card-price">
                                                    <div>From </div>
                                                    <div
                                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                        className="card-one-sell-price"
                                                    >
                                                        $&nbsp;230.00&nbsp;USD
                                                    </div>
                                                    <div
                                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                        className="text-strike-through"
                                                    >
                                                        $&nbsp;250.00&nbsp;USD
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <a
                                            href="#"
                                            className="recommended-cards w-inline-block"
                                        >
                                            <div className="recommended-images">
                                                <img
                                                    className="border-radius-ten"
                                                    src="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6777647581f0d86bd940f91e_Srilanka%20One.webp"
                                                    width={90}
                                                    height={81}
                                                    alt=""
                                                    sizes="90px"
                                                    data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                                    loading="lazy"
                                                    srcSet="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6777647581f0d86bd940f91e_Srilanka%20One-p-500.webp 500w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6777647581f0d86bd940f91e_Srilanka%20One-p-800.webp 800w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6777647581f0d86bd940f91e_Srilanka%20One-p-1080.webp 1080w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6777647581f0d86bd940f91e_Srilanka%20One-p-1600.webp 1600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6777647581f0d86bd940f91e_Srilanka%20One-p-2000.webp 2000w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6777647581f0d86bd940f91e_Srilanka%20One-p-2600.webp 2600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6777647581f0d86bd940f91e_Srilanka%20One-p-3200.webp 3200w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6777647581f0d86bd940f91e_Srilanka%20One.webp 3840w"
                                                />
                                            </div>
                                            <div className="w-layout-vflex">
                                                <div className="heading-style-h6">
                                                    Sri Lanka's wildlife and adventure
                                                </div>
                                                <div className="w-layout-hflex card-price">
                                                    <div>From </div>
                                                    <div
                                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                        className="card-one-sell-price"
                                                    >
                                                        $&nbsp;167.00&nbsp;USD
                                                    </div>
                                                    <div
                                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                        className="text-strike-through"
                                                    >
                                                        $&nbsp;190.00&nbsp;USD
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default PopularCities
