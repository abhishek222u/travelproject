import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Banner from '../components/pages/countrypage/Banner'
import Partners from '../components/Partners'
import BestPlace from '../components/pages/countrypage/BestPlace'
import Feature from '../components/pages/countrypage/Feature'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { useBooking } from '../context/BookingContext'
import BookingPopup from '../components/BookingPopup'
import { useNavigate } from 'react-router-dom'
import { MessageCircle, Phone, Calendar } from 'lucide-react'

const CountryPage = () => {
    const { countryName } = useParams();
    const { openBooking, isBookingOpen, currentPackage, closeBooking, submitBooking, bookingTitle, bookingButtonText, isVisaConsultation } = useBooking()
    const navigate = useNavigate()

    // Convert URL parameter to display name
    const getDisplayName = (name) => {
        const countryMap = {
            // International destinations
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
            'malaysia': 'Malaysia',
            'nepal': 'Nepal',
            'newzealand': 'New Zealand',
            'costa-rica': 'Costa Rica',
            'iceland': 'Iceland',
            'south-africa': 'South Africa',
            'georgia': 'Georgia',
            'azerbaijan': 'Azerbaijan',
            'kazakhstan': 'Kazakhstan',
            // Domestic destinations
            'rajasthan': 'Rajasthan',
            'himachal': 'Himachal Pradesh',
            'chardham': 'Chardham Yatra',
            'spiti': 'Spiti Valley',
            'ladakh': 'Ladakh',
            'kerala': 'Kerala',
            'kashmir': 'Kashmir',
            'uttarakhand': 'Uttarakhand',
            'goa': 'Goa',
            'gujarat': 'Gujarat',
            'manali': 'Manali',
            'gulmarg': 'Gulmarg',
            'mount-abu': 'Mount Abu',
            'mussoorie': 'Mussoorie',
            'shimla': 'Shimla',
            'rishikesh': 'Rishikesh',
            'manali-srinagar': 'Manali to Srinagar',
            'spiti-winter': 'Winter Spiti',
            'triund': 'Triund Trek',
            'rajasthan-desert': 'Rajasthan Desert',
            'kerala-corporate': 'Kerala Corporate',
            'imphal': 'Imphal',
            'mount-abu-retreat': 'Mount Abu Retreat',
            'himachal-conference': 'Himachal Conference',
            'rajasthan-exhibition': 'Rajasthan Exhibition',
            'singapore-corporate': 'Singapore Corporate',
            'dubai-incentive': 'Dubai Incentive',
            'usa-business': 'USA Business',
            'europe-conference': 'Europe Conference',
            'australia-incentive': 'Australia Incentive'
        };
        return countryMap[name] || name.charAt(0).toUpperCase() + name.slice(1);
    };

    // Get SEO data for the country
    const getSEOData = (countryName) => {
        const seoData = {
            'thailand': {
                title: 'Thailand Travel Packages | Bangkok, Phuket, Koh Samui Tours | tripofai',
                description: 'Explore Thailand with our curated travel packages. Visit Bangkok temples, relax on Phuket beaches, and experience authentic Thai culture. Book your dream Thailand vacation today!',
                keywords: 'Thailand travel, Bangkok tours, Phuket packages, Koh Samui, Thai culture, beach vacation, temple tours'
            },
            'dubai': {
                title: 'Dubai Travel Packages | Luxury Tours & Desert Adventures | tripofai',
                description: 'Experience the magic of Dubai with luxury tours, desert safaris, and iconic landmarks. From Burj Khalifa to desert adventures, book your perfect Dubai vacation.',
                keywords: 'Dubai travel, luxury tours, desert safari, Burj Khalifa, shopping, UAE vacation'
            },
            'maldives': {
                title: 'Maldives Travel Packages | Luxury Island Resorts & Water Villas | tripofai',
                description: 'Escape to paradise with our Maldives travel packages. Experience overwater villas, pristine beaches, and crystal-clear waters. Book your dream island getaway.',
                keywords: 'Maldives travel, overwater villas, island resorts, beach vacation, luxury travel, honeymoon packages'
            },
            'europe': {
                title: 'Europe Travel Packages | Multi-Country Tours & Cultural Experiences | tripofai',
                description: 'Discover Europe with our comprehensive travel packages. From Paris to Rome, experience rich culture, history, and diverse landscapes across European destinations.',
                keywords: 'Europe travel, European tours, cultural experiences, multi-country tours, historical sites'
            },
            'australia': {
                title: 'Australia Travel Packages | Sydney, Melbourne, Great Barrier Reef Tours | tripofai',
                description: 'Explore Australia with our travel packages. Visit Sydney Opera House, Great Barrier Reef, and experience unique wildlife. Book your Australian adventure.',
                keywords: 'Australia travel, Sydney tours, Great Barrier Reef, wildlife, adventure tours'
            },
            'rajasthan': {
                title: 'Rajasthan Travel Packages | Jaipur, Udaipur, Jodhpur Tours | tripofai',
                description: 'Experience the royal heritage of Rajasthan with our travel packages. Visit Jaipur, Udaipur, Jodhpur and explore palaces, forts, and desert landscapes.',
                keywords: 'Rajasthan travel, Jaipur tours, Udaipur packages, royal heritage, desert tours, palace visits'
            },
            'kerala': {
                title: 'Kerala Travel Packages | Backwaters, Ayurveda & Hill Stations | tripofai',
                description: 'Discover Kerala with our travel packages. Experience backwaters, Ayurveda treatments, and scenic hill stations. Book your peaceful Kerala getaway.',
                keywords: 'Kerala travel, backwaters, Ayurveda, hill stations, houseboat tours, wellness retreats'
            },
            'goa': {
                title: 'Goa Travel Packages | Beaches, Nightlife & Portuguese Heritage | tripofai',
                description: 'Experience Goa with our travel packages. Enjoy pristine beaches, vibrant nightlife, and Portuguese heritage. Book your perfect Goa vacation.',
                keywords: 'Goa travel, beach vacation, nightlife, Portuguese heritage, coastal tours'
            },
            'ladakh': {
                title: 'Ladakh Travel Packages | Leh, Nubra Valley & Adventure Tours | tripofai',
                description: 'Explore Ladakh with our adventure travel packages. Visit Leh, Nubra Valley, and experience high-altitude adventures in the Himalayas.',
                keywords: 'Ladakh travel, Leh tours, Nubra Valley, adventure tours, Himalayan trekking'
            },
            'manali': {
                title: 'Manali Travel Packages | Hill Station Tours & Adventure Activities | tripofai',
                description: 'Discover Manali with our travel packages. Experience scenic hill stations, adventure activities, and peaceful mountain retreats in the Himalayas.',
                keywords: 'Manali travel, hill station tours, adventure activities, mountain retreats, Himalayan tours'
            }
        };

        return seoData[countryName] || {
            title: `${getDisplayName(countryName)} Travel Packages | tripofai`,
            description: `Explore ${getDisplayName(countryName)} with our curated travel packages. Book your dream vacation with tripofai and create unforgettable memories.`,
            keywords: `${getDisplayName(countryName)} travel, vacation packages, tours, travel booking`
        };
    };

    const seoData = getSEOData(countryName);
    // const displayName = getDisplayName(countryName);

    // Comprehensive travel package data based on provided information
    const getCountryData = (name) => {
        const countryData = {
            'thailand': {
                name: 'Thailand',
                region: 'Asia',
                image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&h=1080&fit=crop',
                overview: 'discover the Land of Smiles with its stunning beaches, vibrant culture, delicious cuisine, and warm hospitality. From bustling Bangkok to serene islands, Thailand offers diverse experiences for every traveler.',
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
                    },
                    {
                        type: 'Customized International Package',
                        duration: '5–7 Days',
                        visaRequirement: 'Visa-Free',
                        price: '$450',
                        description: 'Personalized Thailand experience'
                    },
                    {
                        type: 'International Honeymoon Package',
                        duration: '5–6 Days',
                        visaRequirement: 'Visa-Free',
                        price: '$450',
                        description: 'Romantic tropical escape'
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
                bannerImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
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
                    },
                    {
                        type: 'Customized International Package',
                        duration: '4–6 Days',
                        visaRequirement: 'Visa Required',
                        price: '$600',
                        description: 'Personalized Dubai experience'
                    },
                    {
                        type: 'Domestic MICE Package',
                        duration: '4–6 Days',
                        visaRequirement: 'Visa Required',
                        price: '$600',
                        description: 'Incentive meeting experience'
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
                bannerImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
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
                        price: '$2,425',
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
                        type: 'Group Tours International',
                        duration: '5–7 Days',
                        visaRequirement: 'Visa-Free',
                        price: '$450',
                        description: 'Perfect group experience'
                    },
                    {
                        type: 'Customized International Package',
                        duration: '5–7 Days',
                        visaRequirement: 'Visa-Free',
                        price: '$500',
                        description: 'Personalized Bali experience'
                    },
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
                bannerImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&h=1080&fit=crop',
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
            },
            // Additional International Destinations
            'nepal': {
                name: 'Nepal',
                region: 'Asia',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop',
                overview: 'Experience the majestic Himalayas and rich cultural heritage of Nepal. From trekking adventures to spiritual journeys, discover the roof of the world.',
                highlights: [
                    'Trek the Annapurna Circuit and Everest Base Camp',
                    'Explore ancient temples and monasteries',
                    'Experience the vibrant culture of Kathmandu',
                    'Discover the natural beauty of Pokhara',
                    'Immerse in spiritual practices and meditation'
                ],
                packages: [
                    {
                        type: 'Adventure International Package',
                        duration: '10–15 Days',
                        visaRequirement: 'Visa Required',
                        price: '$800',
                        description: 'Himalayan trekking adventure'
                    }
                ]
            },
            'newzealand': {
                name: 'New Zealand',
                region: 'Oceania',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
                overview: 'Discover the adventure capital of the world with stunning landscapes, adrenaline-pumping activities, and Maori culture in New Zealand.',
                highlights: [
                    'Experience extreme sports in Queenstown',
                    'Explore the stunning fjords of Milford Sound',
                    'Discover Maori culture and traditions',
                    'Hike through beautiful national parks',
                    'Visit Hobbiton and Lord of the Rings locations'
                ],
                packages: [
                    {
                        type: 'Adventure International Package',
                        duration: '7–10 Days',
                        visaRequirement: 'Visa Required',
                        price: '$1,200',
                        description: 'Extreme sports and adventure'
                    }
                ]
            },
            'costa-rica': {
                name: 'Costa Rica',
                region: 'Central America',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop',
                overview: 'Experience the rich biodiversity and adventure activities of Costa Rica, from rainforest ziplining to surfing on pristine beaches.',
                highlights: [
                    'Zipline through lush rainforests',
                    'Surf on world-class beaches',
                    'Explore diverse wildlife and national parks',
                    'Experience volcanic landscapes',
                    'Relax in natural hot springs'
                ],
                packages: [
                    {
                        type: 'Adventure International Package',
                        duration: '8–10 Days',
                        visaRequirement: 'Visa-Free',
                        price: '$1,000',
                        description: 'Rainforest adventure and surfing'
                    }
                ]
            },
            'iceland': {
                name: 'Iceland',
                region: 'Europe',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
                overview: 'Discover the land of fire and ice with its dramatic landscapes, geothermal wonders, and the magical Northern Lights.',
                highlights: [
                    'Hike on glaciers and volcanic landscapes',
                    'Witness the Northern Lights',
                    'Relax in geothermal hot springs',
                    'Explore waterfalls and geysers',
                    'Experience the unique Icelandic culture'
                ],
                packages: [
                    {
                        type: 'Adventure International Package',
                        duration: '7–9 Days',
                        visaRequirement: 'Visa Required',
                        price: '$1,500',
                        description: 'Glacier hiking and Northern Lights'
                    }
                ]
            },
            'south-africa': {
                name: 'South Africa',
                region: 'Africa',
                image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&h=1080&fit=crop',
                overview: 'Experience the wild beauty of South Africa with safari adventures, stunning coastlines, and vibrant cities.',
                highlights: [
                    'Go on safari to see the Big Five',
                    'Shark cage diving in Gansbaai',
                    'Explore Cape Town and Table Mountain',
                    'Visit the stunning Garden Route',
                    'Experience diverse cultures and history'
                ],
                packages: [
                    {
                        type: 'Adventure International Package',
                        duration: '8–10 Days',
                        visaRequirement: 'Visa Required',
                        price: '$1,200',
                        description: 'Safari and shark cage diving'
                    }
                ]
            },
            // Domestic Destinations
            'rajasthan': {
                name: 'Rajasthan',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop',
                overview: 'Experience the royal heritage and colorful culture of Rajasthan, the land of kings with magnificent palaces, forts, and desert landscapes.',
                highlights: [
                    'Explore the majestic palaces of Jaipur',
                    'Visit the romantic city of Udaipur',
                    'Experience the golden sands of Jaisalmer',
                    'Discover the blue city of Jodhpur',
                    'Immerse in traditional Rajasthani culture'
                ],
                packages: [
                    {
                        type: 'Domestic Group Tour',
                        duration: '6–8 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹22,000',
                        description: 'Royal Rajasthan experience'
                    },
                    {
                        type: 'Domestic Customized Package',
                        duration: '6–7 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹22,000',
                        description: 'Personalized Rajasthan tour'
                    },
                    {
                        type: 'Domestic Adventure Package',
                        duration: '6 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹15,000',
                        description: 'Desert adventure and culture'
                    },
                    {
                        type: 'Domestic MICE Package',
                        duration: '6–8 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹22,000',
                        description: 'Exhibition and networking'
                    }
                ]
            },
            'himachal': {
                name: 'Himachal Pradesh',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&h=1080&fit=crop',
                overview: 'Discover the serene beauty of Himachal Pradesh with its snow-capped mountains, lush valleys, and charming hill stations.',
                highlights: [
                    'Visit the picturesque hill stations',
                    'Trek through scenic mountain trails',
                    'Experience local culture and traditions',
                    'Enjoy adventure activities',
                    'Relax in peaceful mountain settings'
                ],
                packages: [
                    {
                        type: 'Domestic Customized Package',
                        duration: '5–7 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹20,000',
                        description: 'Mountain paradise experience'
                    },
                    {
                        type: 'Domestic MICE Package',
                        duration: '5–7 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹20,000',
                        description: 'Conference with team-building'
                    }
                ]
            },
            'kerala': {
                name: 'Kerala',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&h=1080&fit=crop',
                overview: 'Experience God\'s Own Country with its serene backwaters, lush greenery, Ayurvedic treatments, and rich cultural heritage.',
                highlights: [
                    'Cruise through serene backwaters',
                    'Experience traditional Ayurvedic treatments',
                    'Explore tea and spice plantations',
                    'Visit ancient temples and churches',
                    'Enjoy authentic Kerala cuisine'
                ],
                packages: [
                    {
                        type: 'Domestic Customized Package',
                        duration: '6–7 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹24,000',
                        description: 'Backwater and wellness experience'
                    },
                    {
                        type: 'Domestic MICE Package',
                        duration: '4–5 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹25,000',
                        description: 'Corporate backwater conference'
                    }
                ]
            },
            'kashmir': {
                name: 'Kashmir',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
                overview: 'Discover the paradise on earth with its stunning Dal Lake, snow-capped mountains, and rich cultural heritage.',
                highlights: [
                    'Experience the beauty of Dal Lake',
                    'Visit the stunning Gulmarg',
                    'Explore the historic city of Srinagar',
                    'Enjoy traditional Kashmiri cuisine',
                    'Experience the warm hospitality'
                ],
                packages: [
                    {
                        type: 'Domestic Customized Package',
                        duration: '6–7 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹25,000',
                        description: 'Paradise on earth experience'
                    },
                    {
                        type: 'Domestic Honeymoon Package',
                        duration: '5–6 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹23,000',
                        description: 'Romantic Kashmir getaway'
                    }
                ]
            },
            'manali': {
                name: 'Manali',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&h=1080&fit=crop',
                overview: 'Experience the adventure capital of India with its scenic beauty, adventure activities, and peaceful mountain atmosphere.',
                highlights: [
                    'Enjoy adventure sports and activities',
                    'Visit the famous Hadimba Temple',
                    'Experience the scenic Rohtang Pass',
                    'Relax in peaceful mountain settings',
                    'Enjoy local Himachali cuisine'
                ],
                packages: [
                    {
                        type: 'Domestic Honeymoon Package',
                        duration: '4–5 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹18,000',
                        description: 'Romantic mountain escape'
                    },
                    {
                        type: 'Domestic Adventure Package',
                        duration: '12 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹30,999',
                        description: 'Bike expedition to Srinagar'
                    }
                ]
            },
            'rishikesh': {
                name: 'Rishikesh',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1920&h=1080&fit=crop',
                overview: 'Experience the yoga capital of the world with thrilling adventure activities and spiritual experiences.',
                highlights: [
                    'Experience white water rafting',
                    'Practice yoga and meditation',
                    'Visit ancient temples and ashrams',
                    'Enjoy camping by the Ganges',
                    'Experience the spiritual atmosphere'
                ],
                packages: [
                    {
                        type: 'Domestic Adventure Package',
                        duration: '2–3 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹6,000',
                        description: 'Rafting and camping adventure'
                    }
                ]
            },
            // Add more destinations with comprehensive data
            'goa': {
                name: 'Goa',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&h=1080&fit=crop',
                overview: 'Experience the perfect blend of Portuguese heritage and Indian culture in Goa, with pristine beaches, vibrant nightlife, and delicious seafood.',
                highlights: [
                    'Relax on beautiful beaches like Calangute and Baga',
                    'Explore historic churches and Portuguese architecture',
                    'Enjoy vibrant nightlife and beach parties',
                    'Savor fresh seafood and Goan cuisine',
                    'Experience water sports and adventure activities'
                ],
                packages: [
                    {
                        type: 'Domestic Customized Package',
                        duration: '3–4 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹14,000',
                        description: 'Beach paradise experience'
                    }
                ]
            },
            'gujarat': {
                name: 'Gujarat',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop',
                overview: 'Discover the rich cultural heritage and diverse landscapes of Gujarat, from the white desert of Kutch to the sacred temples of Dwarka.',
                highlights: [
                    'Experience the white desert of Rann of Kutch',
                    'Visit the sacred temples of Dwarka and Somnath',
                    'Explore the historic city of Ahmedabad',
                    'Discover the wildlife of Gir National Park',
                    'Experience traditional Gujarati culture and cuisine'
                ],
                packages: [
                    {
                        type: 'Domestic Customized Package',
                        duration: '6–7 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹23,000',
                        description: 'Cultural and heritage tour'
                    }
                ]
            },
            'uttarakhand': {
                name: 'Uttarakhand',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
                overview: 'Experience the spiritual and natural beauty of Uttarakhand, from the sacred Char Dham to the serene hill stations.',
                highlights: [
                    'Visit the sacred Char Dham temples',
                    'Explore the beautiful hill stations',
                    'Trek through scenic mountain trails',
                    'Experience spiritual practices and meditation',
                    'Enjoy adventure activities in the mountains'
                ],
                packages: [
                    {
                        type: 'Domestic Customized Package',
                        duration: '6–7 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹21,000',
                        description: 'Spiritual and mountain experience'
                    }
                ]
            },
            'chardham': {
                name: 'Chardham Yatra',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop',
                overview: 'Embark on the sacred journey to the four holy shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath in the Himalayas.',
                highlights: [
                    'Visit the sacred temples of Char Dham',
                    'Experience the spiritual atmosphere',
                    'Trek through beautiful mountain trails',
                    'Witness the natural beauty of Himalayas',
                    'Participate in religious ceremonies'
                ],
                packages: [
                    {
                        type: 'Domestic Group Tour',
                        duration: '10–12 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹32,000',
                        description: 'Sacred pilgrimage experience'
                    },
                    {
                        type: 'Domestic Customized Package',
                        duration: '10–12 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹35,000',
                        description: 'Personalized spiritual journey'
                    }
                ]
            },
            'spiti': {
                name: 'Spiti Valley',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&h=1080&fit=crop',
                overview: 'Discover the cold desert mountain valley of Spiti with its ancient monasteries, stunning landscapes, and unique culture.',
                highlights: [
                    'Visit ancient Buddhist monasteries',
                    'Experience the unique cold desert landscape',
                    'Explore the beautiful villages',
                    'Witness the stunning mountain views',
                    'Experience the local culture and traditions'
                ],
                packages: [
                    {
                        type: 'Domestic Group Tour',
                        duration: '7–9 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹25,000',
                        description: 'Mountain desert adventure'
                    },
                    {
                        type: 'Domestic Customized Package',
                        duration: '7–9 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹28,000',
                        description: 'Personalized Spiti experience'
                    },
                    {
                        type: 'Domestic Adventure Package',
                        duration: '8 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹17,999',
                        description: 'Winter backpacking adventure'
                    }
                ]
            },
            'ladakh': {
                name: 'Ladakh',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
                overview: 'Experience the mystical land of Ladakh with its high-altitude landscapes, ancient monasteries, and unique culture.',
                highlights: [
                    'Visit ancient Buddhist monasteries',
                    'Experience high-altitude landscapes',
                    'Explore the beautiful Pangong Lake',
                    'Witness the stunning mountain views',
                    'Experience the unique Ladakhi culture'
                ],
                packages: [
                    {
                        type: 'Domestic Group Tour',
                        duration: '8–10 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹30,000',
                        description: 'High-altitude adventure'
                    },
                    {
                        type: 'Domestic Customized Package',
                        duration: '8–10 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹33,000',
                        description: 'Personalized Ladakh experience'
                    }
                ]
            },
            // Add remaining destinations
            'gulmarg': {
                name: 'Gulmarg',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
                overview: 'Experience the winter wonderland of Gulmarg with its world-class skiing, scenic beauty, and adventure activities.',
                highlights: [
                    'Enjoy world-class skiing and snowboarding',
                    'Experience the scenic beauty of snow-covered mountains',
                    'Take the famous Gulmarg Gondola ride',
                    'Explore the beautiful meadows and landscapes',
                    'Experience the unique winter atmosphere'
                ],
                packages: [
                    {
                        type: 'Domestic Honeymoon Package',
                        duration: '4–5 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹22,000',
                        description: 'Winter wonderland experience'
                    }
                ]
            },
            'mount-abu': {
                name: 'Mount Abu',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop',
                overview: 'Discover the only hill station of Rajasthan with its serene beauty, ancient temples, and peaceful atmosphere.',
                highlights: [
                    'Visit the famous Dilwara Jain Temples',
                    'Explore the beautiful Nakki Lake',
                    'Experience the peaceful hill station atmosphere',
                    'Enjoy scenic viewpoints and gardens',
                    'Experience the unique culture and traditions'
                ],
                packages: [
                    {
                        type: 'Domestic Honeymoon Package',
                        duration: '3–4 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹16,000',
                        description: 'Peaceful hill station escape'
                    },
                    {
                        type: 'Domestic MICE Package',
                        duration: '3 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹16,000',
                        description: 'Incentive retreat experience'
                    }
                ]
            },
            'mussoorie': {
                name: 'Mussoorie',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&h=1080&fit=crop',
                overview: 'Experience the Queen of Hills with its colonial charm, scenic beauty, and pleasant climate.',
                highlights: [
                    'Visit the famous Kempty Falls',
                    'Explore the colonial architecture',
                    'Enjoy scenic viewpoints and walks',
                    'Experience the pleasant climate',
                    'Visit the famous Gun Hill'
                ],
                packages: [
                    {
                        type: 'Domestic Honeymoon Package',
                        duration: '3–4 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹15,000',
                        description: 'Colonial hill station charm'
                    }
                ]
            },
            'shimla': {
                name: 'Shimla',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&h=1080&fit=crop',
                overview: 'Experience the summer capital of British India with its colonial heritage, scenic beauty, and pleasant climate.',
                highlights: [
                    'Visit the famous Ridge and Mall Road',
                    'Explore the colonial architecture',
                    'Enjoy scenic viewpoints and walks',
                    'Experience the pleasant climate',
                    'Visit the famous Christ Church'
                ],
                packages: [
                    {
                        type: 'Domestic Honeymoon Package',
                        duration: '3–4 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹14,000',
                        description: 'Colonial heritage experience'
                    }
                ]
            },
            'triund': {
                name: 'Triund Trek',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&h=1080&fit=crop',
                overview: 'Experience the beautiful Triund trek with stunning views of the Dhauladhar range and adventure activities.',
                highlights: [
                    'Trek to the beautiful Triund top',
                    'Experience paragliding in Bir',
                    'Enjoy stunning mountain views',
                    'Experience camping under the stars',
                    'Enjoy the adventure activities'
                ],
                packages: [
                    {
                        type: 'Domestic Adventure Package',
                        duration: '3 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹5,000',
                        description: 'Trek and paragliding adventure'
                    }
                ]
            },
            'rajasthan-desert': {
                name: 'Rajasthan Desert Adventure',
                region: 'India',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=600&fit=crop',
                bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop',
                overview: 'Experience the golden sands of Rajasthan with desert safaris, cultural experiences, and adventure activities.',
                highlights: [
                    'Experience desert safari in Jaisalmer',
                    'Explore the golden fort of Jaisalmer',
                    'Visit the blue city of Jodhpur',
                    'Experience traditional Rajasthani culture',
                    'Enjoy camel rides and desert camping'
                ],
                packages: [
                    {
                        type: 'Domestic Adventure Package',
                        duration: '6 Days',
                        visaRequirement: 'No Visa Required',
                        price: '₹15,000',
                        description: 'Desert adventure and culture'
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

    const handleWhatsAppContact = (action) => {
        const phoneNumber = '+919818149806'
        const countryName = getDisplayName(countryName)
        let message = ''

        switch (action) {
            case 'book':
                message = `Hi! I'm interested in booking a trip to ${countryName}. Can you please provide me with more details about your packages?`
                break
            case 'itinerary':
                message = `Hi! I would like to get a free customized itinerary for ${countryName}. Please share the best options for my trip.`
                break
            case 'pricing':
                message = `Hi! I'm looking for pricing information for ${countryName} packages. Can you please share the current rates and any ongoing offers?`
                break
            default:
                message = `Hi! I'm interested in traveling to ${countryName}. Can you please help me with more information?`
        }

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
    }

    // const handleCallNow = () => {
    //     window.open('tel:+919818149806', '_self')
    // }

    // Get the first package for display (show only one card)
    const displayPackage = countryData.packages[0];
    // Get remaining packages for grid display
    // const remainingPackages = countryData.packages.slice(1);

    return (
        <div className="country-page">
            <Header />
            <SEO
                title={seoData.title}
                description={seoData.description}
                keywords={seoData.keywords}
            />
            <Banner displayName={displayName} backgroundImage={countryData.bannerImage} />
            <Partners />
            <section className="country-overview">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="w-layout-hflex country-overview-main">
                        <div className="w-layout-vflex country-overview-text">
                            <h2 className="no-margin">country overview</h2>
                            <div className="w-richtext">
                                <p>
                                    {countryData.overview}
                                </p>
                                <p>
                                    discover the unique charm and unforgettable experiences that {countryData.name} has to offer.
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
                                    plan your perfect trip to {countryData.name} with our expert travel advice.
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
                                                    alt={`${countryData.name} ${displayPackage.type}`}
                                                    loading="lazy"
                                                    src={countryData.image}
                                                    className="spacial-cards-image"
                                                />
                                                <div className="spacial-cards-overlay-one" />
                                            </div>
                                            <div className="w-layout-vflex special-cards-content">
                                                <div className="w-layout-vflex special-cards-headings">
                                                    <div className="small-text-two">{displayPackage.duration}</div>
                                                    <div className="heading-style-h4 text-color-white">
                                                        {displayPackage.type}
                                                    </div>
                                                    <div className="spacial-card-location">
                                                        {countryData.name}, {countryData.region}
                                                    </div>
                                                    <div className="small-text" style={{
                                                        color: displayPackage.visaRequirement === 'Visa-Free' || displayPackage.visaRequirement === 'No Visa Required' ? '#4CAF50' : '#FF9800',
                                                        marginTop: '5px'
                                                    }}>
                                                        {displayPackage.visaRequirement}
                                                    </div>
                                                </div>
                                                <div className="w-layout-vflex card-three-text-box">
                                                    <div className="w-layout-hflex card-three-price">
                                                        <div className="heading-style-h4 text-color-white">
                                                            starting from {displayPackage.price}
                                                        </div>
                                                    </div>
                                                    <div className="offer-small-text">
                                                        Per person on twin sharing
                                                    </div>
                                                </div>
                                                <div className="w-layout-vflex spacial-cards-bottom">
                                                    <p className="small-text text-color-white spacial-cards-details">
                                                        {displayPackage.description}. Contact us for personalized itinerary and booking assistance.
                                                    </p>
                                                    <button
                                                        onClick={() => handleBookNow(displayPackage)}
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



            {/* Additional Packages Section */}
            {/* {remainingPackages.length > 0 && (
                <section className="additional-packages">
                    <div className="w-layout-blockcontainer container w-container">
                        <div className="w-layout-vflex additional-packages-main">
                            <h2 className="no-margin">More Packages Available</h2>
                            <p className="text-dark">Explore other package options for {countryData.name}</p>
                            <div className="packages-grid">
                                {remainingPackages.map((packageData, index) => (
                                    <div key={index} className="spacial-cards">
                                        <div className="spacial-cards-background">
                                            <img
                                                width={410}
                                                height={300}
                                                alt={`${countryData.name} ${packageData.type}`}
                                                loading="lazy"
                                                src={countryData.image}
                                                className="spacial-cards-image"
                                            />
                                            <div className="spacial-cards-overlay-one" />
                                        </div>
                                        <div className="w-layout-vflex special-cards-content">
                                            <div className="w-layout-vflex special-cards-headings">
                                                <div className="small-text-two">{packageData.duration}</div>
                                                <div className="heading-style-h4 text-color-white">
                                                    {packageData.type}
                                                </div>
                                                <div className="spacial-card-location">
                                                    {countryData.name}, {countryData.region}
                                                </div>
                                                <div className="small-text" style={{ 
                                                    color: packageData.visaRequirement === 'Visa-Free' || packageData.visaRequirement === 'No Visa Required' ? '#4CAF50' : '#FF9800',
                                                    marginTop: '5px'
                                                }}>
                                                    {packageData.visaRequirement}
                                                </div>
                                            </div>
                                            <div className="w-layout-vflex card-three-text-box">
                                                <div className="w-layout-hflex card-three-price">
                                                    <div className="heading-style-h4 text-color-white">
                                                        Starting from {packageData.price}
                                                    </div>
                                                </div>
                                                <div className="offer-small-text">
                                                    Per person on twin sharing
                                                </div>
                                            </div>
                                            <div className="w-layout-vflex spacial-cards-bottom">
                                                <p className="small-text text-color-white spacial-cards-details">
                                                    {packageData.description}. Contact us for personalized itinerary and booking assistance.
                                                </p>
                                                <button
                                                    onClick={() => handleBookNow(packageData)}
                                                    className="button button-left-auto w-button"
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )} */}
            {/* <BestPlace /> */}
            <Feature />
            <Footer />

            <BookingPopup
                isOpen={isBookingOpen}
                onClose={closeBooking}
                packageData={currentPackage}
                onSubmit={handleBookingSubmit}
                title={bookingTitle}
                buttonText={bookingButtonText}
                isVisaConsultation={isVisaConsultation}
            />

            <style jsx>{`
                .additional-packages {
                    padding: 60px 0;
                    background-color: #f8f9fa;
                }
                
                .additional-packages-main {
                    text-align: center;
                    margin-bottom: 40px;
                }
                
                .packages-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 30px;
                    margin-top: 40px;
                }
                
                .packages-grid .spacial-cards {
                    margin-bottom: 0;
                }
                
                @media (max-width: 768px) {
                    .packages-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default CountryPage; 