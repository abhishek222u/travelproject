import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Countries = () => {
    const [showAll, setShowAll] = useState(false);

    const allDestinations = [
        // Group Tours - Domestic
        { name: "Chardham Yatra", region: "India", duration: "10-12 Days", price: "₹32,000", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=413&fit=crop", path: "/countries/chardham-yatra" },
        { name: "Spiti Valley Tour", region: "India", duration: "7-9 Days", price: "₹25,000", image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=300&h=413&fit=crop", path: "/countries/spiti-valley" },
        { name: "Ladakh Bike Tour", region: "India", duration: "8-10 Days", price: "₹30,000", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=413&fit=crop", path: "/countries/ladakh" },
        
        // Group Tours - International
        { name: "Europe", region: "Europe", duration: "10-15 Days", price: "$1,100", visa: "Required", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=300&h=413&fit=crop", path: "/countries/europe" },
        { name: "Vietnam", region: "Asia", duration: "5-6 Days", price: "$400", visa: "Free", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=300&h=413&fit=crop", path: "/countries/vietnam" },
        { name: "Bali", region: "Asia", duration: "5-7 Days", price: "$450", visa: "Free", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=300&h=413&fit=crop", path: "/countries/bali" },
        { name: "Thailand", region: "Asia", duration: "5-6 Days", price: "$400", visa: "Free", image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", path: "/countries/thailand" },
        { name: "Dubai", region: "Asia", duration: "4-5 Days", price: "$550", visa: "Required", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=413&fit=crop", path: "/countries/dubai" },
        { name: "Singapore", region: "Asia", duration: "4-5 Days", price: "$500", visa: "Required", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=300&h=413&fit=crop", path: "/countries/singapore" },
        { name: "Egypt", region: "Africa", duration: "6-7 Days", price: "$750", visa: "Required", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=413&fit=crop", path: "/countries/egypt" },
        { name: "Australia", region: "Oceania", duration: "10-12 Days", price: "$1,800", visa: "Required", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=413&fit=crop", path: "/countries/australia" },
        
        // Customized Tours - Domestic
        { name: "Rajasthan", region: "India", duration: "6-8 Days", price: "₹22,000", image: "https://images.unsplash.com/photo-1616693139578-f1c17deb0d4f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", path: "/countries/rajasthan" },
        { name: "Himachal", region: "India", duration: "5-7 Days", price: "₹20,000", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=413&fit=crop", path: "/countries/himachal" },
        { name: "Kerala", region: "India", duration: "6-7 Days", price: "₹24,000", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=300&h=413&fit=crop", path: "/countries/kerala" },
        { name: "Kashmir", region: "India", duration: "6-7 Days", price: "₹25,000", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=413&fit=crop", path: "/countries/kashmir" },
        { name: "Uttarakhand", region: "India", duration: "6-7 Days", price: "₹21,000", image: "https://images.unsplash.com/photo-1718016048656-22e02d7b1055?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", path: "/countries/uttarakhand" },
        { name: "Goa", region: "India", duration: "3-4 Days", price: "₹14,000", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=413&fit=crop", path: "/countries/goa" },
        { name: "Gujarat", region: "India", duration: "6-7 Days", price: "₹23,000", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=300&h=413&fit=crop", path: "/countries/gujarat" },
        
        // Customized Tours - International
        { name: "Maldives", region: "Asia", duration: "4-5 Days", price: "$700", visa: "Free", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=413&fit=crop", path: "/countries/maldives" },
        { name: "Japan", region: "Asia", duration: "7-9 Days", price: "$1,600", visa: "Required", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=413&fit=crop", path: "/countries/japan" },
        { name: "Georgia", region: "Europe", duration: "5-6 Days", price: "$600", visa: "Free", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=300&h=413&fit=crop", path: "/countries/georgia" },
        { name: "UK", region: "Europe", duration: "10-12 Days", price: "$1,800", visa: "Required", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&h=413&fit=crop", path: "/countries/uk" },
        { name: "USA", region: "North America", duration: "12-15 Days", price: "$2,000", visa: "Required", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=300&h=413&fit=crop", path: "/countries/usa" },
        { name: "Azerbaijan", region: "Asia", duration: "5-6 Days", price: "$500", visa: "Required", image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=300&h=413&fit=crop", path: "/countries/azerbaijan" },
        { name: "Malaysia", region: "Asia", duration: "5-6 Days", price: "$500", visa: "Required", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=300&h=413&fit=crop", path: "/countries/malaysia" },
        { name: "South America", region: "South America", duration: "12-15 Days", price: "$2,500", visa: "Required", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=413&fit=crop", path: "/countries/south-america" },
        { name: "East America", region: "North America", duration: "12-14 Days", price: "$2,300", visa: "Required", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=300&h=413&fit=crop", path: "/countries/east-america" },
        { name: "Africa", region: "Africa", duration: "8-10 Days", price: "$1,200", visa: "Required", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=413&fit=crop", path: "/countries/africa" },
        { name: "Turkey", region: "Europe", duration: "6-7 Days", price: "$700", visa: "Free", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=300&h=413&fit=crop", path: "/countries/turkey" },
        { name: "China", region: "Asia", duration: "7-8 Days", price: "$1,300", visa: "Required", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=300&h=413&fit=crop", path: "/countries/china" },
        { name: "Kazakhstan", region: "Asia", duration: "5-6 Days", price: "$600", visa: "Free", image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=300&h=413&fit=crop", path: "/countries/kazakhstan" },
        
        // Honeymoon Packages - Domestic
        { name: "Manali", region: "India", duration: "4-5 Days", price: "₹18,000", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=413&fit=crop", path: "/countries/manali" },
        { name: "Gulmarg", region: "India", duration: "4-5 Days", price: "₹22,000", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=413&fit=crop", path: "/countries/gulmarg" },
        { name: "Mount Abu", region: "India", duration: "3-4 Days", price: "₹16,000", image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=300&h=413&fit=crop", path: "/countries/mount-abu" },
        { name: "Mussoorie", region: "India", duration: "3-4 Days", price: "₹15,000", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=413&fit=crop", path: "/countries/mussoorie" },
        { name: "Shimla", region: "India", duration: "3-4 Days", price: "₹14,000", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=300&h=413&fit=crop", path: "/countries/shimla" },
        
        // Honeymoon Packages - International
        { name: "Switzerland", region: "Europe", duration: "7-9 Days", price: "$1,600", visa: "Required", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=413&fit=crop", path: "/countries/switzerland" },
        
        // Adventure Tours - Domestic
        { name: "Rishikesh Rafting", region: "India", duration: "2-3 Days", price: "₹6,000", image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=300&h=413&fit=crop", path: "/countries/rishikesh" },
        { name: "Manali to Srinagar", region: "India", duration: "12 Days", price: "₹30,999", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=413&fit=crop", path: "/countries/manali-srinagar" },
        { name: "Winter Spiti", region: "India", duration: "8 Days", price: "₹17,999", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=413&fit=crop", path: "/countries/winter-spiti" },
        { name: "Triund Trek", region: "India", duration: "3 Days", price: "₹5,000", image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=300&h=413&fit=crop", path: "/countries/triund-trek" },
        { name: "Jaipur-Jodhpur-Jaisalmer", region: "India", duration: "6 Days", price: "₹15,000", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=300&h=413&fit=crop", path: "/countries/rajasthan-adventure" },
        
        // Adventure Tours - International
        { name: "Nepal Himalayas", region: "Asia", duration: "10-15 Days", price: "$800", visa: "Required", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=413&fit=crop", path: "/countries/nepal" },
        { name: "New Zealand", region: "Oceania", duration: "7-10 Days", price: "$1,200", visa: "Required", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=413&fit=crop", path: "/countries/new-zealand" },
        { name: "Costa Rica", region: "Central America", duration: "8-10 Days", price: "$1,000", visa: "Free", image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=300&h=413&fit=crop", path: "/countries/costa-rica" },
        { name: "Iceland", region: "Europe", duration: "7-9 Days", price: "$1,500", visa: "Required", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=413&fit=crop", path: "/countries/iceland" },
        { name: "South Africa", region: "Africa", duration: "8-10 Days", price: "$1,200", visa: "Required", image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=300&h=413&fit=crop", path: "/countries/south-africa" },
        
        // MICE Packages - Domestic
        { name: "Kerala Corporate", region: "India", duration: "4-5 Days", price: "₹25,000", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=300&h=413&fit=crop", path: "/countries/kerala-corporate" },
        { name: "Imphal Business", region: "India", duration: "4 Days", price: "₹15,000", image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=300&h=413&fit=crop", path: "/countries/imphal" },
        { name: "Mount Abu Incentive", region: "India", duration: "3 Days", price: "₹16,000", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=413&fit=crop", path: "/countries/mount-abu-incentive" },
        { name: "Himachal Conference", region: "India", duration: "5-7 Days", price: "₹20,000", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=413&fit=crop", path: "/countries/himachal-conference" },
        { name: "Rajasthan Exhibition", region: "India", duration: "6-8 Days", price: "₹22,000", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=300&h=413&fit=crop", path: "/countries/rajasthan-exhibition" },
        
        // MICE Packages - International
        { name: "Singapore Corporate", region: "Asia", duration: "4-5 Days", price: "$550", visa: "Required", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=300&h=413&fit=crop", path: "/countries/singapore-corporate" },
        { name: "Dubai Incentive", region: "Asia", duration: "4-6 Days", price: "$600", visa: "Required", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=413&fit=crop", path: "/countries/dubai-incentive" },
        { name: "USA Business", region: "North America", duration: "12-14 Days", price: "$2,300", visa: "Required", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=300&h=413&fit=crop", path: "/countries/usa-business" },
        { name: "Europe Conference", region: "Europe", duration: "10-15 Days", price: "$1,200", visa: "Required", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=300&h=413&fit=crop", path: "/countries/europe-conference" },
        { name: "Australia Incentive", region: "Oceania", duration: "10-12 Days", price: "$1,900", visa: "Required", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=413&fit=crop", path: "/countries/australia-incentive" }
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
                    e.currentTarget.style.transform = 'scale(1.05)';
                    const overlay = e.currentTarget.querySelector('.hover-overlay');
                    if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    const overlay = e.currentTarget.querySelector('.hover-overlay');
                    if (overlay) overlay.style.opacity = '0';
                }}
            >
                <div className="destination-cards-main" style={{ position: 'relative' }}>
                    <img
                        width={300}
                        height={413}
                        alt={destination.name}
                        src={destination.image}
                        loading="lazy"
                        className="image-full-width"
                        style={{ 
                            width: '100%', 
                            height: 'auto',
                            transition: 'all 0.3s ease'
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
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        borderRadius: '8px'
                    }}
                    className="hover-overlay"
                    >
                        <div style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: '22px',
                            fontWeight: '400',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                        }}>
                            Click to view details
                        </div>
                    </div>
                </div>
                <div className="destination-cards-text">
                    <div className="heading-style-h4 text-color-white">{destination.name}</div>
                    <div className="text-color-white">{destination.region}</div>
                    <div className="text-color-white" style={{ fontSize: '12px', marginTop: '4px' }}>
                        {destination.duration} • {destination.price}
                        {destination.visa && <span style={{ marginLeft: '8px' }}>({destination.visa} Visa)</span>}
                    </div>
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
