import React from 'react'
// import { useCart } from '../../../context/CartContext'
import { useBooking } from '../../../context/BookingContext'


const TopDestinations = () => {

    const { openBooking } = useBooking()

    const handleBookNow = (tourType) => {
        let item
        if (tourType === 'france') {
            item = {
                id: 'france-castles-coastline-feature',
                name: 'France Castles and Coastline Journey - 9 Nights 10 Days',
                duration: '9 Nights 10 Days',
                price: '$206.00',
                visaRequirement: 'Visa Required',
                image: 'https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b820df1bcc26bf9985e0a_France%20Three.webp'
            }
        } else if (tourType === 'bhutan') {
            item = {
                id: 'bhutan-sacred-valleys-feature',
                name: 'Bhutan Sacred Valleys and Mountains - 8 Nights 9 Days',
                duration: '8 Nights 9 Days',
                price: '$155.00',
                visaRequirement: 'Visa Required',
                image: 'https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6776735f29739c12056feee5_Bhutan%20Image%20Three.webp'
            }
        }
        openBooking(item)
    }

    // const { addToCart, openCart } = useCart()

    // const handleAddToCart = (tourType) => {
    //     let item
    //     if (tourType === 'france') {
    //         item = {
    //             id: 'france-castles-coastline',
    //             name: 'France Castles and Coastline Journey - 9 Nights 10 Days',
    //             price: 206.00,
    //             image: 'https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b820df1bcc26bf9985e0a_France%20Three.webp'
    //         }
    //     } else if (tourType === 'bhutan') {
    //         item = {
    //             id: 'bhutan-sacred-valleys',
    //             name: 'Bhutan Sacred Valleys and Mountains - 8 Nights 9 Days',
    //             price: 155.00,
    //             image: 'https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6776735f29739c12056feee5_Bhutan%20Image%20Three.webp'
    //         }
    //     }
    //     addToCart(item)
    //     openCart()
    // }



    return (
        <section
            data-wf--top-destination--variant="base"
            className="tour-two-top-destination"
        >
            <div className="w-layout-blockcontainer container w-container">
                <h2
                    data-w-id="29f71594-5a55-97e8-dcbc-f62bbbfbe6d4"
                    className="no-margin-top margin-bottom-thirty mobile-text-center"
                    style={{
                        opacity: 1,
                        transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d"
                    }}
                >
                    Featured tours of this week
                </h2>
                <div className="best-deals-two-wrap">
                    <div className="w-dyn-list">
                        <div role="list" className="popular-cards-cell w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                                <div className="w-layout-vflex popular-card">
                                    <div className="w-layout-vflex popular-cards-main-content">
                                        <div className="offer-tag">9 Nights - 10 Days</div>
                                        <div className="big-text popular-card-text">France</div>
                                        <div className="popular-card-border" />
                                        <div className="heading-style-h5">Explore your journey</div>
                                    </div>
                                    <div className="w-layout-hflex popular-cards-bottom">
                                        <div className="w-layout-vflex popular-card-pricing">
                                            <div
                                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                className="popular-card-price"
                                            >
                                                $&nbsp;206.00&nbsp;USD
                                            </div>
                                            <div className="offer-small-text">Offer price per person</div>
                                        </div>
                                        <div className="w-layout-vflex popular-cards-one-button-box">
                                            <p className="small-text text-color-white">
                                                4 star hotel stay | Daily breakfast | Paris to Loire Valley
                                                |&nbsp;Loire Valley to Nice|&nbsp;Departure from Nice
                                            </p>
                                            <button
                                                // onClick={() => handleAddToCart('france')}
                                                onClick={() => handleBookNow('france')}
                                                className="button w-button"
                                                style={{ cursor: 'pointer' }}
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className="popular-card-image-wrapper">
                                        <img
                                            className="popular-cards-image"
                                            src="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b820df1bcc26bf9985e0a_France%20Three.webp"
                                            width={632}
                                            height={390}
                                            alt=""
                                            sizes="(max-width: 767px) 100vw, 632px"
                                            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                            loading="lazy"
                                            srcSet="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b820df1bcc26bf9985e0a_France%20Three-p-500.webp 500w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b820df1bcc26bf9985e0a_France%20Three-p-800.webp 800w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b820df1bcc26bf9985e0a_France%20Three-p-1080.webp 1080w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b820df1bcc26bf9985e0a_France%20Three-p-1600.webp 1600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b820df1bcc26bf9985e0a_France%20Three-p-2000.webp 2000w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b820df1bcc26bf9985e0a_France%20Three-p-2600.webp 2600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b820df1bcc26bf9985e0a_France%20Three-p-3200.webp 3200w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/677b820df1bcc26bf9985e0a_France%20Three.webp 3840w"
                                        />
                                        <div className="popular-cards-overlay" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-dyn-list">
                        <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                                <div className="w-layout-vflex popular-card popular-cards-two">
                                    <div className="w-layout-vflex popular-card-two-text-wrapper">
                                        <div className="heading-style-h5">Land of thunder dragon</div>
                                        <div className="big-text popular-card-text">Bhutan</div>
                                        <div className="popular-card-border popular-card-border-two" />
                                        <div className="text-color-white">8 Nights - 9 Days</div>
                                    </div>
                                    <div className="w-layout-vflex card-three-text-box">
                                        <div className="w-layout-hflex card-three-price">
                                            <div
                                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                className="small-text text-strike-through text-light-white"
                                            >
                                                $&nbsp;175.00&nbsp;USD
                                            </div>
                                            <div
                                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                                className="heading-style-h4 text-color-white"
                                            >
                                                $&nbsp;155.00&nbsp;USD
                                            </div>
                                        </div>
                                        <div className="offer-small-text">Offer price per person</div>
                                    </div>
                                    <div className="w-layout-hflex popular-card-two-bottom">
                                        <div className="popular-two-cards-left">
                                            <p className="small-text text-color-white popular-cards-two-description">
                                                4 star hotel stay | Daily breakfast | Paro to Thimphu |
                                                Thimphu to Punakha | Departure from Punakha
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleBookNow('bhutan')}
                                            className="button w-button"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                    <div className="popular-card-image-wrapper">
                                        <img
                                            className="popular-cards-image"
                                            src="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6776735f29739c12056feee5_Bhutan%20Image%20Three.webp"
                                            width={632}
                                            height={390}
                                            alt=""
                                            sizes="(max-width: 767px) 100vw, 632px"
                                            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                            loading="lazy"
                                            srcSet="https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6776735f29739c12056feee5_Bhutan%20Image%20Three-p-500.webp 500w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6776735f29739c12056feee5_Bhutan%20Image%20Three-p-800.webp 800w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6776735f29739c12056feee5_Bhutan%20Image%20Three-p-1080.webp 1080w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6776735f29739c12056feee5_Bhutan%20Image%20Three-p-1600.webp 1600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6776735f29739c12056feee5_Bhutan%20Image%20Three-p-2000.webp 2000w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6776735f29739c12056feee5_Bhutan%20Image%20Three-p-2600.webp 2600w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6776735f29739c12056feee5_Bhutan%20Image%20Three-p-3200.webp 3200w, https://cdn.prod.website-files.com/672d8f75dabc438e6086ed62/6776735f29739c12056feee5_Bhutan%20Image%20Three.webp 3840w"
                                        />
                                        <div className="popular-cards-overlay" />
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

export default TopDestinations
