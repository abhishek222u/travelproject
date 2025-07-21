import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Banner from '../components/pages/countrypage/Banner'
import Partners from '../components/Partners'
import BestPlace from '../components/pages/countrypage/BestPlace'
import Feature from '../components/pages/countrypage/Feature'
import Footer from '../components/Footer'
import { useBooking } from '../context/BookingContext'
import BookingPopup from '../components/BookingPopup'
import { useNavigate } from 'react-router-dom'

const CountryPage = () => {
    const { countryName } = useParams();
    const { openBooking, isBookingOpen, currentPackage, closeBooking, submitBooking } = useBooking()
    const navigate = useNavigate()

    // Convert URL parameter to display name
    const getDisplayName = (name) => {
        const countryMap = {
            'thailand': 'Thailand',
            'egypt': 'Egypt',
            'australia': 'Australia',
            'europe': 'Europe',
            'japan': 'Japan',
            'dubai': 'Dubai',
            'maldives': 'Maldives',
            'turkey': 'Turkey',
            'usa': 'USA',
            'uk': 'United Kingdom',
            'switzerland': 'Switzerland',
            'bali': 'Bali',
            'vietnam': 'Vietnam',
            'singapore': 'Singapore',
            'china': 'China',
            'malaysia': 'Malaysia'
        };
        return countryMap[name] || name.charAt(0).toUpperCase() + name.slice(1);
    };

    // Comprehensive travel package data based on provided information
    const getCountryData = (name) => {
        const countryData = {
            'thailand': {
                name: 'Thailand',
                region: 'Asia',
                image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&h=1080&fit=crop',
                overview: 'Discover the Land of Smiles with its stunning beaches, vibrant culture, delicious cuisine, and warm hospitality. From bustling Bangkok to serene islands, Thailand offers diverse experiences for every traveler.',
                highlights: [
                    'Explore the vibrant streets of Bangkok',
                    'Relax on pristine beaches in Phuket and Koh Samui',
                    'Experience authentic Thai cuisine and cooking classes',
                    'Visit ancient temples and cultural sites',
                    'Enjoy world-class spa treatments and wellness retreats'
                ],
                packages: [
                    {
                        type: 'Group Tours International',
                        duration: '5–6 Days',
                        visaRequirement: 'Visa-Free',
                        price: '$400',
                        description: 'Perfect group experience with guided tours'
                    }
                ]
            },
            'egypt': {
                name: 'Egypt',
                region: 'Africa',
                image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73aeb?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&h=1080&fit=crop',
                overview: 'Journey through ancient history and marvel at the wonders of Egypt. From the iconic pyramids to the majestic Nile River, experience a civilization that has captivated travelers for millennia.',
                highlights: [
                    'Visit the Great Pyramids of Giza and the Sphinx',
                    'Explore the Valley of the Kings in Luxor',
                    'Cruise the legendary Nile River',
                    'Discover the treasures of Egyptian museums',
                    'Experience the vibrant culture of Cairo'
                ],
                packages: [
                    {
                        type: 'Group Tours International',
                        duration: '6–7 Days',
                        visaRequirement: 'Visa Required',
                        price: '$750',
                        description: 'Comprehensive group tour with expert guides'
                    }
                ]
            },
            'australia': {
                name: 'Australia',
                region: 'Oceania',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1524293368288-75bf5d618b1b?w=1920&h=1080&fit=crop',
                overview: 'Explore the diverse landscapes of Australia, from the iconic Sydney Opera House to the Great Barrier Reef. Experience unique wildlife, stunning coastlines, and vibrant cities in the land Down Under.',
                highlights: [
                    'Visit the iconic Sydney Opera House and Harbour Bridge',
                    'Explore the Great Barrier Reef and marine life',
                    'Discover unique Australian wildlife',
                    'Experience the cultural diversity of Melbourne',
                    'Adventure through the Outback and Uluru'
                ],
                packages: [
                    {
                        type: 'Group Tours International',
                        duration: '10–12 Days',
                        visaRequirement: 'Visa Required',
                        price: '$1,800',
                        description: 'Comprehensive Australia experience'
                    }
                ]
            },
            'europe': {
                name: 'Europe',
                region: 'Europe',
                image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1471623432079-b009d30b6729?w=1920&h=1080&fit=crop',
                overview: 'Discover the rich history, diverse cultures, and stunning architecture of Europe. From romantic Paris to historic Rome, experience the best of European capitals and hidden gems.',
                highlights: [
                    'Explore iconic European capitals',
                    'Visit world-famous museums and landmarks',
                    'Experience diverse cuisines and cultures',
                    'Discover medieval towns and castles',
                    'Enjoy scenic train journeys through the continent'
                ],
                packages: [
                    {
                        type: 'Group Tours International',
                        duration: '10–15 Days',
                        visaRequirement: 'Visa Required',
                        price: '$1,100',
                        description: 'Multi-country European tour'
                    }
                ]
            },
            'japan': {
                name: 'Japan',
                region: 'Asia',
                image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1920&h=1080&fit=crop',
                overview: 'Experience the perfect blend of ancient traditions and modern innovation in Japan. From cherry blossoms to bullet trains, discover a culture unlike any other.',
                highlights: [
                    'Witness the beauty of cherry blossoms',
                    'Experience traditional Japanese culture and temples',
                    'Explore the bustling streets of Tokyo',
                    'Discover the historic charm of Kyoto',
                    'Enjoy authentic Japanese cuisine and hot springs'
                ],
                packages: [
                    {
                        type: 'Customised International Package',
                        duration: '7–9 Days',
                        visaRequirement: 'Visa Required',
                        price: '$1,600',
                        description: 'Cultural immersion in Japan'
                    }
                ]
            },
            'dubai': {
                name: 'Dubai',
                region: 'Asia',
                image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&h=1080&fit=crop',
                overview: 'Experience the luxury and innovation of Dubai, where modern skyscrapers meet traditional souks. Enjoy world-class shopping, dining, and entertainment in this desert oasis.',
                highlights: [
                    'Visit the iconic Burj Khalifa and Burj Al Arab',
                    'Shop at world-famous malls and traditional souks',
                    'Experience desert safaris and dune bashing',
                    'Enjoy luxury beaches and water parks',
                    'Discover the rich Emirati culture and cuisine'
                ],
                packages: [
                    {
                        type: 'Group Tours International',
                        duration: '4–5 Days',
                        visaRequirement: 'Visa Required',
                        price: '$550',
                        description: 'Quick Dubai city break'
                    }
                ]
            },
            'maldives': {
                name: 'Maldives',
                region: 'Asia',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&h=1080&fit=crop',
                overview: 'Escape to paradise in the Maldives with crystal-clear waters, pristine white beaches, and luxurious overwater villas. Perfect for romance and relaxation.',
                highlights: [
                    'Stay in luxury overwater villas',
                    'Snorkel and dive in pristine coral reefs',
                    'Enjoy world-class spa treatments',
                    'Experience sunset cruises and dolphin watching',
                    'Indulge in fine dining with ocean views'
                ],
                packages: [
                    {
                        type: 'International Honeymoon Package',
                        duration: '4–5 Days',
                        visaRequirement: 'Visa-Free',
                        price: '$750',
                        description: 'Romantic honeymoon escape'
                    }
                ]
            },
            'turkey': {
                name: 'Turkey',
                region: 'Europe',
                image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1920&h=1080&fit=crop',
                overview: 'Discover the crossroads of Europe and Asia in Turkey. From the historic streets of Istanbul to the fairy chimneys of Cappadocia, experience rich history and natural wonders.',
                highlights: [
                    'Explore the historic Hagia Sophia and Blue Mosque',
                    'Experience the unique landscape of Cappadocia',
                    'Relax in traditional Turkish baths',
                    'Discover ancient ruins and archaeological sites',
                    'Enjoy the vibrant Grand Bazaar in Istanbul'
                ],
                packages: [
                    {
                        type: 'Customised International Package',
                        duration: '6–7 Days',
                        visaRequirement: 'Visa-Free',
                        price: '$700',
                        description: 'Cultural discovery tour'
                    }
                ]
            },
            'usa': {
                name: 'USA',
                region: 'North America',
                image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&h=1080&fit=crop',
                overview: 'Experience the diversity of the United States, from iconic cities to natural wonders. Discover the American dream across coast to coast adventures.',
                highlights: [
                    'Explore iconic cities like New York and Los Angeles',
                    'Visit stunning national parks',
                    'Experience diverse cultures and cuisines',
                    'Discover entertainment capitals and theme parks',
                    'Road trip through scenic landscapes'
                ],
                packages: [
                    {
                        type: 'Customised International Package',
                        duration: '12–15 Days',
                        visaRequirement: 'Visa Required',
                        price: '$2,000',
                        description: 'Comprehensive American experience'
                    }
                ]
            },
            'uk': {
                name: 'United Kingdom',
                region: 'Europe',
                image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=1920&h=1080&fit=crop',
                overview: 'Explore the rich heritage of the United Kingdom, from royal palaces to ancient castles. Experience British culture, history, and countryside charm.',
                highlights: [
                    'Visit iconic London landmarks and royal palaces',
                    'Explore historic castles and countryside',
                    'Experience traditional British culture and pubs',
                    'Discover the scenic beauty of Scotland',
                    'Walk through charming English villages'
                ],
                packages: [
                    {
                        type: 'Customised International Package',
                        duration: '10–12 Days',
                        visaRequirement: 'Visa Required',
                        price: '$1,800',
                        description: 'British Isles exploration'
                    }
                ]
            },
            'switzerland': {
                name: 'Switzerland',
                region: 'Europe',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1527668752968-14dc92a24311?w=1920&h=1080&fit=crop',
                overview: 'Experience the breathtaking beauty of Switzerland with its majestic Alps, pristine lakes, and charming cities. Perfect for adventure and relaxation.',
                highlights: [
                    'Ski in world-famous Alpine resorts',
                    'Take scenic train journeys through mountains',
                    'Explore charming Swiss cities and villages',
                    'Visit pristine lakes and waterfalls',
                    'Experience luxury Swiss hospitality'
                ],
                packages: [
                    {
                        type: 'International Honeymoon Package',
                        duration: '7–9 Days',
                        visaRequirement: 'Visa Required',
                        price: '$1,600',
                        description: 'Romantic Alpine getaway'
                    }
                ]
            },
            'bali': {
                name: 'Bali',
                region: 'Asia',
                image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1920&h=1080&fit=crop',
                overview: 'Discover the Island of Gods with its stunning beaches, ancient temples, lush rice terraces, and vibrant culture. Perfect for relaxation and spiritual rejuvenation.',
                highlights: [
                    'Relax on beautiful beaches in Seminyak and Nusa Dua',
                    'Explore ancient temples and spiritual sites',
                    'Trek through scenic rice terraces in Ubud',
                    'Experience traditional Balinese culture and arts',
                    'Enjoy world-class spas and wellness retreats'
                ],
                packages: [
                    {
                        type: 'International Honeymoon Package',
                        duration: '5–6 Days',
                        visaRequirement: 'Visa-Free',
                        price: '$500',
                        description: 'Romantic tropical escape'
                    }
                ]
            },
            'vietnam': {
                name: 'Vietnam',
                region: 'Asia',
                image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&h=1080&fit=crop',
                overview: 'Explore the beauty and culture of Vietnam, from the bustling streets of Ho Chi Minh City to the serene waters of Halong Bay. Experience rich history and delicious cuisine.',
                highlights: [
                    'Cruise through the stunning Halong Bay',
                    'Explore the historic streets of Hanoi',
                    'Experience the vibrant culture of Ho Chi Minh City',
                    'Discover ancient temples and pagodas',
                    'Enjoy authentic Vietnamese street food'
                ],
                packages: [
                    {
                        type: 'Group Tours International',
                        duration: '5–6 Days',
                        visaRequirement: 'Visa-Free',
                        price: '$400',
                        description: 'Cultural highlights tour'
                    }
                ]
            },
            'singapore': {
                name: 'Singapore',
                region: 'Asia',
                image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1508964942454-1324ef12dd90?w=1920&h=1080&fit=crop',
                overview: 'Experience the cosmopolitan city-state of Singapore with its modern skyline, diverse culture, and world-class attractions. A perfect blend of tradition and innovation.',
                highlights: [
                    'Visit the iconic Marina Bay Sands and Gardens by the Bay',
                    'Explore diverse neighborhoods and cultures',
                    'Enjoy world-class shopping and dining',
                    'Experience family-friendly attractions and theme parks',
                    'Discover the vibrant street food scene'
                ],
                packages: [
                    {
                        type: 'Group Tours International',
                        duration: '4–5 Days',
                        visaRequirement: 'Visa Required',
                        price: '$500',
                        description: 'City highlights tour'
                    }
                ]
            },
            'china': {
                name: 'China',
                region: 'Asia',
                image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1920&h=1080&fit=crop',
                overview: 'Discover the ancient wonders and modern marvels of China. From the Great Wall to bustling Shanghai, experience one of the world\'s oldest civilizations.',
                highlights: [
                    'Walk along the iconic Great Wall of China',
                    'Explore the Forbidden City in Beijing',
                    'Experience the modern skyline of Shanghai',
                    'Discover the Terracotta Warriors in Xi\'an',
                    'Enjoy traditional Chinese cuisine and culture'
                ],
                packages: [
                    {
                        type: 'Customised International Package',
                        duration: '7–8 Days',
                        visaRequirement: 'Visa Required',
                        price: '$1,300',
                        description: 'Cultural heritage tour'
                    }
                ]
            },
            'malaysia': {
                name: 'Malaysia',
                region: 'Asia',
                image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1596422846070-ea15968ba004?w=1920&h=1080&fit=crop',
                overview: 'Experience the cultural diversity of Malaysia with its mix of Malay, Chinese, and Indian influences. From modern Kuala Lumpur to pristine beaches, discover Southeast Asian charm.',
                highlights: [
                    'Visit the iconic Petronas Twin Towers',
                    'Explore the cultural diversity of Penang',
                    'Relax on beautiful beaches in Langkawi',
                    'Experience the wildlife of Borneo',
                    'Enjoy diverse Malaysian cuisine'
                ],
                packages: [
                    {
                        type: 'Customised International Package',
                        duration: '5–6 Days',
                        visaRequirement: 'Visa Required',
                        price: '$500',
                        description: 'Cultural and beach experience'
                    }
                ]
            }
        };
        return countryData[name] || countryData['thailand']; // fallback to Thailand
    };

    const displayName = getDisplayName(countryName);
    const countryData = getCountryData(countryName);

    const handleBookNow = (packageData) => {
        const bookingItem = {
            id: `${countryName}-${packageData.type.replace(/\s+/g, '-').toLowerCase()}`,
            name: `${countryData.name} - ${packageData.type}`,
            duration: packageData.duration,
            price: packageData.price,
            visaRequirement: packageData.visaRequirement,
            image: countryData.image
        }
        openBooking(bookingItem)
    }

    const handleBookingSubmit = async (formData) => {
        const result = await submitBooking(formData)
        
        if (result.success) {
            // Navigate to thank you page with booking details
            navigate('/thank-you', { 
                state: { 
                    bookingDetails: result.bookingDetails 
                } 
            })
        } else {
            // Handle error - you could show a toast notification here
            alert('There was an error submitting your booking. Please try again.')
        }
    }

    // Get the best package (first one) for display
    const bestPackage = countryData.packages[0];

    return (
        <div className="country-page">
            <Header />
            <Banner displayName={displayName} backgroundImage={countryData.bannerImage} />
            <Partners />
            <section className="country-overview">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="w-layout-hflex country-overview-main">
                        <div className="w-layout-vflex country-overview-text">
                            <h2 className="no-margin">Country overview</h2>
                            <div className="w-richtext">
                                <p>
                                    {countryData.overview}
                                </p>
                                <p>
                                    Discover the unique charm and unforgettable experiences that {countryData.name} has to offer. 
                                    From breathtaking natural wonders to vibrant cities, there's something for every traveler 
                                    seeking adventure, culture, and unforgettable memories.
                                </p>
                                <p>‍</p>
                                <ul role="list">
                                    {countryData.highlights.map((highlight, index) => (
                                        <li key={index}>{highlight}</li>
                                    ))}
                                </ul>
                                <p>‍</p>
                                <p>
                                    Plan your perfect trip to {countryData.name} with our expert travel advice. 
                                    Contact our travel specialists for personalized itineraries and exclusive deals 
                                    that will make your journey truly extraordinary.
                                </p>
                            </div>
                        </div>
                        <div className="country-overview-add">
                            <div className="w-dyn-list">
                                <div role="list" className="spacial-cards w-dyn-items">
                                    <div role="listitem" className="w-dyn-item">
                                        <div
                                            id="featured-package"
                                            className="spacial-cards"
                                        >
                                            <div className="spacial-cards-background">
                                                <img
                                                    width={410}
                                                    height={300}
                                                    alt={`${countryData.name} ${bestPackage.type}`}
                                                    loading="lazy"
                                                    src={countryData.image}
                                                    className="spacial-cards-image"
                                                />
                                                <div className="spacial-cards-overlay-one" />
                                            </div>
                                            <div className="w-layout-vflex special-cards-content">
                                                <div className="w-layout-vflex special-cards-headings">
                                                    <div className="small-text-two">{bestPackage.duration}</div>
                                                    <div className="heading-style-h4 text-color-white">
                                                        {bestPackage.type}
                                                    </div>
                                                    <div className="spacial-card-location">
                                                        {countryData.name}, {countryData.region}
                                                    </div>
                                                    <div className="small-text" style={{ 
                                                        color: bestPackage.visaRequirement === 'Visa-Free' ? '#4CAF50' : '#FF9800',
                                                        marginTop: '5px'
                                                    }}>
                                                        {bestPackage.visaRequirement}
                                                    </div>
                                                </div>
                                                <div className="w-layout-vflex card-three-text-box">
                                                    <div className="w-layout-hflex card-three-price">
                                                        <div className="heading-style-h4 text-color-white">
                                                            Starting from {bestPackage.price}
                                                        </div>
                                                    </div>
                                                    <div className="offer-small-text">
                                                        Per person on twin sharing
                                                    </div>
                                                </div>
                                                <div className="w-layout-vflex spacial-cards-bottom">
                                                    <p className="small-text text-color-white spacial-cards-details">
                                                        {bestPackage.description}. Contact us for personalized itinerary and booking assistance.
                                                    </p>
                                                    <button
                                                        onClick={() => handleBookNow(bestPackage)}
                                                        className="button button-left-auto w-button"
                                                        style={{ cursor: 'pointer' }}
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BestPlace />
            <Feature />
            <Footer />
            
            <BookingPopup
                isOpen={isBookingOpen}
                onClose={closeBooking}
                packageData={currentPackage}
                onSubmit={handleBookingSubmit}
            />
        </div>
    );
};

export default CountryPage; 