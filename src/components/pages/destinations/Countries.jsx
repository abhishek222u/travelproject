import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../../../assets/spitivillage.jpg'

const Countries = () => {
    const [showAll, setShowAll] = useState(false);

    const allDestinations = [
        // Group Tours - Domestic
        { name: "Chardham Yatra", region: "India", duration: "10-12 Days", price: "₹32,000", image: "https://uttarakhandtourism.gov.in/assets/media/UTDB_media_1740661833CHAR-DHAM.jpg", path: "/countries/chardham-yatra" },
        { name: "Spiti Valley Tour", region: "India", duration: "7-9 Days", price: "₹25,000", image: image, path: "/countries/spiti-valley" },
        { name: "Ladakh Bike Tour", region: "India", duration: "8-10 Days", price: "₹30,000", image: "https://gulliveradventures.com/wp-content/uploads/2022/06/motorcycle-trip-to-ladakh.jpg", path: "/countries/ladakh" },

        // Group Tours - International
        { name: "Europe", region: "Europe", duration: "10-15 Days", price: "$1,100", visa: "Required", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=300&h=413&fit=crop", path: "/countries/europe" },
        { name: "Vietnam", region: "Asia", duration: "5-6 Days", price: "$400", visa: "Free", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=300&h=413&fit=crop", path: "/countries/vietnam" },
        { name: "Bali", region: "Asia", duration: "5-7 Days", price: "$450", visa: "Free", image: "https://images.pexels.com/photos/1643130/pexels-photo-1643130.jpeg?cs=srgb&dl=pexels-aronvisuals-1643130.jpg&fm=jpg", path: "/countries/bali" },
        { name: "Thailand", region: "Asia", duration: "5-6 Days", price: "$400", visa: "Free", image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", path: "/countries/thailand" },
        { name: "Dubai", region: "Asia", duration: "4-5 Days", price: "$550", visa: "Required", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=413&fit=crop", path: "/countries/dubai" },
        { name: "Singapore", region: "Asia", duration: "4-5 Days", price: "$500", visa: "Required", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=300&h=413&fit=crop", path: "/countries/singapore" },
        { name: "Egypt", region: "Africa", duration: "6-7 Days", price: "$750", visa: "Required", image: "https://thumbs.dreamstime.com/b/great-pyramid-giza-cheops-egypt-vertical-view-winding-sandy-road-sahara-desert-single-camel-walking-365390823.jpg", path: "/countries/egypt" },
        { name: "Australia", region: "Oceania", duration: "10-12 Days", price: "$1,800", visa: "Required", image: "https://images.unsplash.com/photo-1602825166974-eb65bb2060b7?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzdHJhbGlhbiUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", path: "/countries/australia" },

        // Customized Tours - Domestic
        { name: "Rajasthan", region: "India", duration: "6-8 Days", price: "₹22,000", image: "https://images.unsplash.com/photo-1616693139578-f1c17deb0d4f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", path: "/countries/rajasthan" },
        // { name: "Himachal", region: "India", duration: "5-7 Days", price: "₹20,000", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=413&fit=crop", path: "/countries/himachal" },
        // { name: "Kerala", region: "India", duration: "6-7 Days", price: "₹24,000", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=300&h=413&fit=crop", path: "/countries/kerala" },
        { name: "Kashmir", region: "India", duration: "6-7 Days", price: "₹25,000", image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Square_Panorama_of_Aru_Valley%2C_Jammu_and_Kashmir%2C_India.jpg", path: "/countries/kashmir" },
        { name: "Uttarakhand", region: "India", duration: "6-7 Days", price: "₹21,000", image: "https://images.unsplash.com/photo-1718016048656-22e02d7b1055?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", path: "/countries/uttarakhand" },
        { name: "Goa", region: "India", duration: "3-4 Days", price: "₹14,000", image: "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?cs=srgb&dl=pexels-ollivves-1433052.jpg&fm=jpg", path: "/countries/goa" },
        { name: "Gujarat", region: "India", duration: "6-7 Days", price: "₹23,000", image: "https://magikindia.com/wp-content/uploads/2018/08/saputara-monsoon-gujarat.jpg", path: "/countries/gujarat" },

        // Customized Tours - International
        { name: "Maldives", region: "Asia", duration: "4-5 Days", price: "$700", visa: "Free", image: "https://img.freepik.com/premium-photo/beautiful-drone-aerial-resort-maldives-islands-exotic-travel-destination-ocean-lagoon-palm-trees_663265-2103.jpg", path: "/countries/maldives" },
        { name: "Japan", region: "Asia", duration: "7-9 Days", price: "$1,600", visa: "Required", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=413&fit=crop", path: "/countries/japan" },
        { name: "Georgia", region: "Europe", duration: "5-6 Days", price: "$600", visa: "Free", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=300&h=413&fit=crop", path: "/countries/georgia" },
        { name: "UK", region: "Europe", duration: "10-12 Days", price: "$1,800", visa: "Required", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&h=413&fit=crop", path: "/countries/uk" },
        // { name: "USA", region: "North America", duration: "12-15 Days", price: "$2,000", visa: "Required", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=300&h=413&fit=crop", path: "/countries/usa" },
        { name: "Azerbaijan", region: "Asia", duration: "5-6 Days", price: "$500", visa: "Required", image: "https://lp-cms-production.imgix.net/2025-02/GettyImages-180329109high-crop.jpg?auto=format%2Ccompress&fit=crop&h=810&q=72&w=1440", path: "/countries/azerbaijan" },
        { name: "Malaysia", region: "Asia", duration: "5-6 Days", price: "$500", visa: "Required", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=300&h=413&fit=crop", path: "/countries/malaysia" },
        { name: "South America", region: "Soutmomounth America", duration: "12-15 Days", price: "$2,500", visa: "Required", image: "https://southamericabackpacker.com/wp-content/uploads/2022/12/christ-the-redeemer-1200x800.jpg", path: "/countries/south-america" },
        { name: "East America", region: "North America", duration: "12-14 Days", price: "$2,300", visa: "Required", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=300&h=413&fit=crop", path: "/countries/east-america" },
        { name: "Africa", region: "Africa", duration: "8-10 Days", price: "$1,200", visa: "Required", image: "https://thumbs.dreamstime.com/b/african-savannah-landscape-snow-top-mount-kilimanjaro-amboseli-47133603.jpg", path: "/countries/africa" },
        { name: "Turkey", region: "Europe", duration: "6-7 Days", price: "$700", visa: "Free", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=300&h=413&fit=crop", path: "/countries/turkey" },
        { name: "China", region: "Asia", duration: "7-8 Days", price: "$1,300", visa: "Required", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=300&h=413&fit=crop", path: "/countries/china" },
        { name: "Kazakhstan", region: "Asia", duration: "5-6 Days", price: "$600", visa: "Free", image: "https://thumbs.dreamstime.com/b/vertical-shot-snow-capped-mountain-range-yaponskaya-doroga-hiking-area-almaty-kazakhstan-vertical-shot-snow-323713577.jpg", path: "/countries/kazakhstan" },

        // Honeymoon Packages - Domestic
        { name: "Manali", region: "India", duration: "4-5 Days", price: "₹18,000", image: "https://www.thestatesman.com/wp-content/uploads/2022/05/2018042463.jpg", path: "/countries/manali" },
        { name: "Gulmarg", region: "India", duration: "4-5 Days", price: "₹22,000", image: "https://thumbs.dreamstime.com/b/winter-season-gulmarg-town-hill-station-popular-tourist-skiing-destination-kashmir-india-220931261.jpg", path: "/countries/gulmarg" },
        // { name: "Mount Abu", region: "India", duration: "3-4 Days", price: "₹16,000", image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=300&h=413&fit=crop", path: "/countries/mount-abu" },
        { name: "Mussoorie", region: "India", duration: "3-4 Days", price: "₹15,000", image: "https://www.nfttworld.com/wp-content/uploads/2025/02/3_Nainital-1.jpg", path: "/countries/mussoorie" },
        { name: "Shimla", region: "India", duration: "3-4 Days", price: "₹14,000", image: "https://c8.alamy.com/comp/MY2D5D/shimla-is-one-of-indias-most-popular-hill-resorts-buzzing-with-a-happy-flow-of-indian-vacationers-and-full-of-relics-of-its-previous-life-MY2D5D.jpg", path: "/countries/shimla" },

        // Honeymoon Packages - International
        { name: "Switzerland", region: "Europe", duration: "7-9 Days", price: "$2,425", visa: "Required", image: "https://images.pexels.com/photos/28677183/pexels-photo-28677183.jpeg?cs=srgb&dl=pexels-gsn-travel-28677183.jpg&fm=jpg", path: "/countries/switzerland" },

        // Adventure Tours - Domestic
        { name: "Rishikesh Rafting", region: "India", duration: "2-3 Days", price: "₹6,000", image: "https://media1.thrillophilia.com/filestore/l1stgsdtm1wlcgkfhkg49pers7qj_WDEFRGTYH.png", path: "/countries/rishikesh" },
        { name: "Manali to Srinagar", region: "India", duration: "12 Days", price: "₹30,999", image: "https://www.ladakhtravelco.com/uploads/7/3/4/1/73415203/2138742_orig.jpg", path: "/countries/manali-srinagar" },
        { name: "Winter Spiti", region: "India", duration: "8 Days", price: "₹17,999", image: "https://raachotrekkers.com//wp-content/uploads/2020/04/Shichling-village.jpeg", path: "/countries/winter-spiti" },
        { name: "Triund Trek", region: "India", duration: "3 Days", price: "₹5,000", image: "https://www.trekkersofindia.com/blog/1814526569100426.webp", path: "/countries/triund-trek" },
        { name: "Jaipur-Jodhpur-Jaisalmer", region: "India", duration: "6 Days", price: "₹15,000", image: "https://static.toiimg.com/thumb/msid-117059796%2Cwidth-1280%2Cheight-720%2Cresizemode-4/117059796.jpg", path: "/countries/rajasthan-adventure" },

        // Adventure Tours - International
        { name: "Nepal Himalayas", region: "Asia", duration: "10-15 Days", price: "$800", visa: "Required", image: "https://media.cntraveler.com/photos/6679b81a6eb1b81983bb1f09/16%3A9/w_2560%2Cc_limit/CNT_Nepal_15_December_Issue_November23_Credit_Jack_Johns.jpg", path: "/countries/nepal" },
        { name: "New Zealand", region: "Oceania", duration: "7-10 Days", price: "$1,200", visa: "Required", image: "https://static.wixstatic.com/media/c3a105_522a780ddcf442d2b41c9e89e9136282~mv2.jpg/v1/fill/w_980%2Ch_653%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/c3a105_522a780ddcf442d2b41c9e89e9136282~mv2.jpg", path: "/countries/new-zealand" },
        { name: "Costa Rica", region: "Central America", duration: "8-10 Days", price: "$1,000", visa: "Free", image: "https://cdn.fstoppers.com/styles/full/s3/media/2023/02/01/caribbean-dream.jpg", path: "/countries/costa-rica" },
        { name: "Iceland", region: "Europe", duration: "7-9 Days", price: "$1,500", visa: "Required", image: "https://iceland-lovers.com/wp-content/uploads/2024/06/Waterfalls-winter-iceland.jpeg", path: "/countries/iceland" },
        { name: "South Africa", region: "Africa", duration: "8-10 Days", price: "$1,200", visa: "Required", image: "https://www.shutterstock.com/image-photo/long-exposure-vertical-shot-hout-600nw-2349289435.jpg", path: "/countries/south-africa" },

        // MICE Packages - Domestic
        { name: "Kerala", region: "India", duration: "4-5 Days", price: "₹25,000", image: "https://www.muchbetteradventures.com/magazine/content/images/2022/07/backwaters-calm--1-.jpg", path: "/countries/kerala-corporate" },
        { name: "Imphal", region: "India", duration: "4 Days", price: "₹15,000", image: "https://s7ap1.scene7.com/is/image/incredibleindia/sanamahi-kiyong-temple-imphal-manipur-1-attr-hero?qlt=82&ts=1742159712812", path: "/countries/imphal" },
        { name: "Mount Abu", region: "India", duration: "3 Days", price: "₹16,000", image: "https://thumbs.dreamstime.com/b/toad-rock-mount-abu-india-hill-station-rajasthan-state-172680205.jpg", path: "/countries/mount-abu-incentive" },
        { name: "Himachal", region: "India", duration: "5-7 Days", price: "₹20,000", image: "https://www.hptourtravel.com/wp-content/uploads/2022/02/feature-winter-himachal.jpg", path: "/countries/himachal-conference" },
        { name: "Rajasthan", region: "India", duration: "6-8 Days", price: "₹22,000", image: "https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFqYXN0aGFufGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000", path: "/countries/rajasthan-exhibition" },
        { name: "USA ", region: "North America", duration: "12-14 Days", price: "$2,300", visa: "Required", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=300&h=413&fit=crop", path: "/countries/usa-business" },

        // MICE Packages - International
        // { name: "Singapore", region: "Asia", duration: "4-5 Days", price: "$550", visa: "Required", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=300&h=413&fit=crop", path: "/countries/singapore-corporate" },
        // { name: "Dubai", region: "Asia", duration: "4-6 Days", price: "$600", visa: "Required", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=413&fit=crop", path: "/countries/dubai-incentive" },
        // { name: "Europe ", region: "Europe", duration: "10-15 Days", price: "$1,200", visa: "Required", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=300&h=413&fit=crop", path: "/countries/europe-conference" },
        // { name: "Australia ", region: "Oceania", duration: "10-12 Days", price: "$1,900", visa: "Required", image: "https://www.planetware.com/photos-large/AUS/australia-great-ocean-road.jpg", path: "/countries/australia-incentive" }
    ];

    const initialCount = 12;
    const displayedDestinations = showAll ? allDestinations : allDestinations.slice(0, initialCount);

    const renderDestinationCard = (destination, index) => (
        <div key={index} role="listitem" className="w-dyn-item" style={{
            width: '300px',
            margin: '15px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
        }}>
            <Link
                data-w-id="f63b871e-9fd5-cb86-fc74-34c8521c0401"
                to={destination.path}
                className="destination-box w-inline-block"
                style={{
                    opacity: 1,
                    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    display: 'block',
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    const overlay = e.currentTarget.querySelector('.hover-overlay');
                    const text = e.currentTarget.querySelector('.hover-text');
                    if (overlay) {
                        overlay.style.opacity = '1';
                        overlay.style.transform = 'translateY(0)';
                    }
                    if (text) {
                        text.style.opacity = '1';
                        text.style.transform = 'translateY(0)';
                    }
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    const overlay = e.currentTarget.querySelector('.hover-overlay');
                    const text = e.currentTarget.querySelector('.hover-text');
                    if (overlay) {
                        overlay.style.opacity = '0';
                        overlay.style.transform = 'translateY(100%)';
                    }
                    if (text) {
                        text.style.opacity = '0';
                        text.style.transform = 'translateY(20px)';
                    }
                }}
            >
                <div className="destination-cards-main" style={{ position: 'relative' }}>
                    <img
                        width={300}
                        // height={413}
                        alt={destination.name}
                        src={destination.image}
                        loading="lazy"
                        className="image-full-width"
                        style={{
                            width: '100%',
                            // height: 'auto',
                            transition: 'all 0.3s ease',
                            // minHeight:
                            height: '417px'
                        }}
                    />
                    <div className="image-overlay-linear" />

                    {/* Hover Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(0px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transform: 'translateY(100%)',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        borderRadius: '8px'
                    }}
                        className="hover-overlay"
                    >
                        <div style={{
                            color: '#046cb8',
                            textAlign: 'center',
                            fontSize: '28px',
                            fontWeight: '400',
                            transform: 'translateY(20px)',
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                            opacity: 0
                        }}
                            className="hover-text"
                        >
                            Click to view <br /> more details
                        </div>
                    </div>
                </div>
                <div className="destination-cards-text">
                    <div className="heading-style-h4 text-color-white">{destination.name}</div>
                    <div className="text-color-white">{destination.region}</div>
                    {/* <div className="text-color-white" style={{ fontSize: '12px', marginTop: '4px' }}>
                        {destination.duration}
                        {destination.visa && <span style={{ marginLeft: '8px' }}>({destination.visa} Visa)</span>}
                    </div> */}
                </div>
                <div
                    data-w-id="f63b871e-9fd5-cb86-fc74-34c8521c0408"
                    className="destination-card-hover-box"
                    style={{ opacity: 0 }}
                >
                    <div className="plus-bar-one" />
                    <div className="plus-bar-one plus-bar-two" />
                </div>
            </Link>
        </div>
    );

    return (
        <section className="destination-showcase">
            <div className="w-layout-blockcontainer container w-container">
                <div className="w-layout-vflex top-destinations-main">
                    <div
                        data-w-id="e0f0f247-4ae3-c8ca-0c55-26e1ebb4c851"
                        className="w-layout-vflex home-heading-text-box"
                        style={{
                            opacity: 1,
                            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                        }}
                    >
                        <h2 className="no-margin">Curate your perfect travel experience</h2>
                    </div>

                    <div className="w-full">
                        <div role="list" className="w-dyn-items" style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '10px',
                            columnGap: '50px',
                            justifyContent: 'center'
                        }}>
                            {displayedDestinations.map((destination, index) => renderDestinationCard(destination, index))}
                        </div>
                    </div>

                    {!showAll && allDestinations.length > initialCount && (
                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                            <button
                                onClick={() => setShowAll(true)}
                                className="button w-button"
                            >
                                Show More Destinations
                            </button>
                        </div>
                    )}

                    <p className="no-margin text-dark">
                        Our destination experts are available to assist you at Call &nbsp;
                        <a href="tel:+91 9818149806" className="text-orange">
                            +91 9818149806
                        </a>{" "}
                        or{" "}
                        <a href="/contact-one" className="links-style-one">
                            Request a quote
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Countries
