import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import honeyH from '../assets/ManaliH.jpg'
import spitiV from '../assets/spitivillage.jpg'

// Complete categorized destination data structure with all packages and images
const destinationsData = {
    'Group': {
        name: 'Group Category',
        'Domestic': [
            {
                id: 1,
                href: '/product/chardham-yatra-group',
                image: 'https://uttarakhandtourism.gov.in/assets/media/UTDB_media_1740661833CHAR-DHAM.jpg',
                srcSet: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=500&h=630&fit=crop 500w, https://uttarakhandtourism.gov.in/assets/media/UTDB_media_1740661833CHAR-DHAM.jpg 820w',
                title: 'Chardham Yatra',
                price: '₹32,000',
                originalPrice: '₹38,000',
                rating: '4.8 (245)',
                duration: '10-12 Days',
                featured: 'Featured',
                discount: '15% off'
            },
            {
                id: 2,
                href: '/product/spiti-valley-group-tour',
                image: spitiV,
                srcSet: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=630&fit=crop 500w,' + spitiV,
                title: 'Spiti Valley Tour',
                price: '₹25,000',
                originalPrice: '₹30,000',
                rating: '4.9 (189)',
                duration: '7-9 Days',
                featured: '',
                discount: '17% off'
            },
            {
                id: 3,
                href: '/product/ladakh-bike-group-tour',
                image: 'https://gulliveradventures.com/wp-content/uploads/2022/06/motorcycle-trip-to-ladakh.jpg',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://gulliveradventures.com/wp-content/uploads/2022/06/motorcycle-trip-to-ladakh.jpg ',
                title: 'Ladakh Bike Tour',
                price: '₹30,000',
                originalPrice: '₹35,000',
                rating: '4.7 (198)',
                duration: '8-10 Days',
                featured: '',
                discount: '14% off'
            },
            {
                id: 98,
                href: '/product/rajasthan-customized',
                image: 'https://images.unsplash.com/photo-1616693139578-f1c17deb0d4f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                srcSet: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1616693139578-f1c17deb0d4f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 820w',
                title: 'Rajasthan Tour',
                price: '₹22,000',
                originalPrice: '₹26,000',
                rating: '4.8 (289)',
                duration: '6-8 Days',
                featured: 'Featured',
                discount: '15% off'
            },
        ],
        'International': [
            {
                id: 4,
                href: '/product/europe-group-tour',
                image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=820&h=1030&fit=crop 820w',
                title: 'Europe Tour',
                price: '$1,100',
                originalPrice: '$1,300',
                rating: '4.9 (324)',
                duration: '10-15 Days • Visa Required',
                featured: 'Featured',
                discount: '15% off'
            },
            {
                id: 5,
                href: '/product/vietnam-group-tour',
                image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=820&h=1030&fit=crop 820w',
                title: 'Vietnam Tour',
                price: '$400',
                originalPrice: '$480',
                rating: '4.8 (267)',
                duration: '5-6 Days • Visa-Free',
                featured: '',
                discount: '17% off'
            },
            {
                id: 6,
                href: '/product/bali-group-tour',
                image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=820&h=1030&fit=crop 820w',
                title: 'Bali Tour',
                price: '$450',
                originalPrice: '$530',
                rating: '4.9 (298)',
                duration: '5-7 Days • Visa-Free',
                featured: '',
                discount: '15% off'
            },
            {
                id: 7,
                href: '/product/thailand-group-tour',
                image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=820&h=1030&fit=crop 820w',
                title: 'Thailand Tour',
                price: '$400',
                originalPrice: '$470',
                rating: '4.8 (276)',
                duration: '5-6 Days • Visa-Free',
                featured: '',
                discount: '15% off'
            },
            {
                id: 8,
                href: '/product/dubai-group-tour',
                image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=820&h=1030&fit=crop 820w',
                title: 'Dubai Tour',
                price: '$550',
                originalPrice: '$650',
                rating: '4.7 (234)',
                duration: '4-5 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 9,
                href: '/product/singapore-group-tour',
                image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1565967511849-76a60a516170?w=820&h=1030&fit=crop 820w',
                title: 'Singapore Tour',
                price: '$500',
                originalPrice: '$590',
                rating: '4.8 (187)',
                duration: '4-5 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 10,
                href: '/product/egypt-group-tour',
                image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=820&h=1030&fit=crop 820w',
                title: 'Egypt Tour',
                price: '$750',
                originalPrice: '$880',
                rating: '4.6 (156)',
                duration: '6-7 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 11,
                href: '/product/australia-group-tour',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop 820w',
                title: 'Australia Tour',
                price: '$1,800',
                originalPrice: '$2,100',
                rating: '4.9 (145)',
                duration: '10-12 Days • Visa Required',
                featured: '',
                discount: '14% off'
            }
        ]
    },
    'Customized': {
        name: 'Customized Category',
        'Domestic': [
            {
                id: 12,
                href: '/product/rajasthan-customized',
                image: 'https://images.unsplash.com/photo-1616693139578-f1c17deb0d4f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                srcSet: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1616693139578-f1c17deb0d4f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'Rajasthan Tour',
                price: '₹22,000',
                originalPrice: '₹26,000',
                rating: '4.8 (289)',
                duration: '6-8 Days',
                featured: 'Featured',
                discount: '15% off'
            },
            {
                id: 13,
                href: '/product/himachal-customized',
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=820&h=1030&fit=crop 820w',
                title: 'Himachal Tour',
                price: '₹20,000',
                originalPrice: '₹24,000',
                rating: '4.9 (234)',
                duration: '5-7 Days',
                featured: '',
                discount: '17% off'
            },
            {
                id: 14,
                href: '/product/chardham-customized',
                image: 'https://uttarakhandtourism.gov.in/assets/media/UTDB_media_1740661833CHAR-DHAM.jpg',
                srcSet: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=500&h=630&fit=crop 500w, https://uttarakhandtourism.gov.in/assets/media/UTDB_media_1740661833CHAR-DHAM.jpg ',
                title: 'Chardham Yatra',
                price: '₹35,000',
                originalPrice: '₹41,000',
                rating: '4.8 (198)',
                duration: '10-12 Days',
                featured: '',
                discount: '15% off'
            },
            {
                id: 15,
                href: '/product/spiti-customized',
                image: 'https://www.shutterstock.com/shutterstock/photos/1747947332/display_1500/stock-photo-a-vertical-shot-of-spiti-valley-in-winter-with-frozen-river-and-snow-peak-mountains-1747947332.jpg',
                srcSet: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=630&fit=crop 500w, https://www.shutterstock.com/shutterstock/photos/1747947332/display_1500/stock-photo-a-vertical-shot-of-spiti-valley-in-winter-with-frozen-river-and-snow-peak-mountains-1747947332.jpg ',
                title: 'Spiti Valley Tour',
                price: '₹28,000',
                originalPrice: '₹33,000',
                rating: '4.9 (167)',
                duration: '7-9 Days',
                featured: '',
                discount: '15% off'
            },
            {
                id: 16,
                href: '/product/ladakh-customized',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop 820w',
                title: 'Ladakh Bike Tour',
                price: '₹33,000',
                originalPrice: '₹39,000',
                rating: '4.8 (189)',
                duration: '8-10 Days',
                featured: '',
                discount: '15% off'
            },
            {
                id: 17,
                href: '/product/kerala-customized',
                image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=820&h=1030&fit=crop 820w',
                title: 'Kerala Tour',
                price: '₹24,000',
                originalPrice: '₹28,000',
                rating: '4.7 (267)',
                duration: '6-7 Days',
                featured: '',
                discount: '14% off'
            },
            {
                id: 18,
                href: '/product/kashmir-customized',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop 820w',
                title: 'Kashmir Tour',
                price: '₹25,000',
                originalPrice: '₹29,000',
                rating: '4.8 (245)',
                duration: '6-7 Days',
                featured: '',
                discount: '14% off'
            },
            {
                id: 19,
                href: '/product/uttarakhand-customized',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop 820w',
                title: 'Uttarakhand Tour',
                price: '₹21,000',
                originalPrice: '₹25,000',
                rating: '4.7 (198)',
                duration: '6-7 Days',
                featured: '',
                discount: '16% off'
            },
            {
                id: 20,
                href: '/product/goa-customized',
                image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=820&h=1030&fit=crop 820w',
                title: 'Goa Tour',
                price: '₹14,000',
                originalPrice: '₹16,500',
                rating: '4.6 (234)',
                duration: '3-4 Days',
                featured: '',
                discount: '15% off'
            },
            {
                id: 21,
                href: '/product/gujarat-customized',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=820&h=1030&fit=crop 820w',
                title: 'Gujarat Tour',
                price: '₹23,000',
                originalPrice: '₹27,000',
                rating: '4.7 (178)',
                duration: '6-7 Days',
                featured: '',
                discount: '15% off'
            }
        ],
        'International': [
            {
                id: 22,
                href: '/product/europe-customized',
                image: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=820&h=1030&fit=crop 820w',
                title: 'Europe Customized',
                price: '$1,200',
                originalPrice: '$1,400',
                rating: '4.9 (356)',
                duration: '10-15 Days • Visa Required',
                featured: 'Featured',
                discount: '14% off'
            },
            {
                id: 23,
                href: '/product/bali-customized',
                image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=820&h=1030&fit=crop 820w',
                title: 'Bali Customized',
                price: '$500',
                originalPrice: '$590',
                rating: '4.8 (287)',
                duration: '5-7 Days • Visa-Free',
                featured: '',
                discount: '15% off'
            },
            {
                id: 24,
                href: '/product/vietnam-customized',
                image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=820&h=1030&fit=crop 820w',
                title: 'Vietnam Customized',
                price: '$450',
                originalPrice: '$530',
                rating: '4.8 (234)',
                duration: '5-6 Days • Visa-Free',
                featured: '',
                discount: '15% off'
            },
            {
                id: 25,
                href: '/product/maldives-customized',
                image: 'https://img.freepik.com/premium-photo/beautiful-drone-aerial-resort-maldives-islands-exotic-travel-destination-ocean-lagoon-palm-trees_663265-2103.jpg',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://img.freepik.com/premium-photo/beautiful-drone-aerial-resort-maldives-islands-exotic-travel-destination-ocean-lagoon-palm-trees_663265-2103.jpg ',
                title: 'Maldives Tour',
                price: '$700',
                originalPrice: '$820',
                rating: '4.9 (189)',
                duration: '4-5 Days • Visa-Free',
                featured: '',
                discount: '15% off'
            },
            {
                id: 26,
                href: '/product/japan-customized',
                image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=820&h=1030&fit=crop 820w',
                title: 'Japan Tour',
                price: '$1,600',
                originalPrice: '$1,900',
                rating: '4.8 (234)',
                duration: '7-9 Days • Visa Required',
                featured: '',
                discount: '16% off'
            },
            {
                id: 27,
                href: '/product/georgia-customized',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=820&h=1030&fit=crop 820w',
                title: 'Georgia Tour',
                price: '$600',
                originalPrice: '$710',
                rating: '4.7 (156)',
                duration: '5-6 Days • Visa-Free',
                featured: '',
                discount: '15% off'
            },
            {
                id: 28,
                href: '/product/uk-customized',
                image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=820&h=1030&fit=crop 820w',
                title: 'UK Tour',
                price: '$1,800',
                originalPrice: '$2,100',
                rating: '4.8 (198)',
                duration: '10-12 Days • Visa Required',
                featured: '',
                discount: '14% off'
            },
            {
                id: 29,
                href: '/product/usa-customized',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop 820w',
                title: 'USA Tour',
                price: '$2,000',
                originalPrice: '$2,350',
                rating: '4.9 (267)',
                duration: '12-15 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 30,
                href: '/product/thailand-customized',
                image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=820&h=1030&fit=crop 820w',
                title: 'Thailand Tour',
                price: '$450',
                originalPrice: '$530',
                rating: '4.8 (234)',
                duration: '5-7 Days • Visa-Free',
                featured: '',
                discount: '15% off'
            },
            {
                id: 31,
                href: '/product/dubai-customized',
                image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=820&h=1030&fit=crop 820w',
                title: 'Dubai Tour',
                price: '$600',
                originalPrice: '$710',
                rating: '4.7 (189)',
                duration: '4-6 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 32,
                href: '/product/azerbaijan-customized',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=820&h=1030&fit=crop 820w',
                title: 'Azerbaijan Tour',
                price: '$500',
                originalPrice: '$590',
                rating: '4.6 (134)',
                duration: '5-6 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 33,
                href: '/product/singapore-customized',
                image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1565967511849-76a60a516170?w=820&h=1030&fit=crop 820w',
                title: 'Singapore Tour',
                price: '$550',
                originalPrice: '$650',
                rating: '4.8 (178)',
                duration: '4-5 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 34,
                href: '/product/malaysia-customized',
                image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=820&h=1030&fit=crop 820w',
                title: 'Malaysia Tour',
                price: '$500',
                originalPrice: '$590',
                rating: '4.7 (167)',
                duration: '5-6 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 35,
                href: '/product/egypt-customized',
                image: 'https://images.unsplash.com/photo-1575377222312-dd1a63a51638?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1575377222312-dd1a63a51638?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1575377222312-dd1a63a51638?w=820&h=1030&fit=crop 820w',
                title: 'Egypt Tour',
                price: '$800',
                originalPrice: '$940',
                rating: '4.6 (145)',
                duration: '6-7 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 36,
                href: '/product/australia-customized',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop 820w',
                title: 'Australia Tour',
                price: '$1,900',
                originalPrice: '$2,200',
                rating: '4.9 (189)',
                duration: '10-12 Days • Visa Required',
                featured: '',
                discount: '14% off'
            },
            {
                id: 37,
                href: '/product/south-america-customized',
                image: 'https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=820&h=1030&fit=crop 820w',
                title: 'South America Tour',
                price: '$2,500',
                originalPrice: '$2,900',
                rating: '4.8 (123)',
                duration: '12-15 Days • Visa Required',
                featured: '',
                discount: '14% off'
            },
            {
                id: 38,
                href: '/product/east-america-customized',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop 820w',
                title: 'East America Tour',
                price: '$2,300',
                originalPrice: '$2,700',
                rating: '4.8 (167)',
                duration: '12-14 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 39,
                href: '/product/africa-customized',
                image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=820&h=1030&fit=crop 820w',
                title: 'Africa Tour',
                price: '$1,200',
                originalPrice: '$1,400',
                rating: '4.7 (134)',
                duration: '8-10 Days • Visa Required',
                featured: '',
                discount: '14% off'
            },
            {
                id: 40,
                href: '/product/turkey-customized',
                image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=820&h=1030&fit=crop 820w',
                title: 'Turkey Tour',
                price: '$700',
                originalPrice: '$820',
                rating: '4.8 (189)',
                duration: '6-7 Days • Visa-Free',
                featured: '',
                discount: '15% off'
            },
            {
                id: 41,
                href: '/product/china-customized',
                image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=820&h=1030&fit=crop 820w',
                title: 'China Tour',
                price: '$1,300',
                originalPrice: '$1,530',
                rating: '4.7 (156)',
                duration: '7-8 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 42,
                href: '/product/kazakhstan-customized',
                image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=820&h=1030&fit=crop 820w',
                title: 'Kazakhstan Tour',
                price: '$600',
                originalPrice: '$710',
                rating: '4.6 (123)',
                duration: '5-6 Days • Visa-Free',
                featured: '',
                discount: '15% off'
            }
        ]
    },
    'Honeymoon': {
        name: 'Honeymoon Category',
        'Domestic': [
            {
                id: 43,
                href: '/product/manali-honeymoon',
                image: honeyH,
                srcSet: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&h=630&fit=crop 500w,' + honeyH,
                title: 'Manali',
                price: '₹18,000',
                originalPrice: '₹21,000',
                rating: '4.9 (298)',
                duration: '4-5 Days',
                featured: 'Featured',
                discount: '14% off'
            },
            {
                id: 44,
                href: '/product/kashmir-honeymoon',
                image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Square_Panorama_of_Aru_Valley%2C_Jammu_and_Kashmir%2C_India.jpg',
                srcSet: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&h=630&fit=crop 500w, https://upload.wikimedia.org/wikipedia/commons/6/66/Square_Panorama_of_Aru_Valley%2C_Jammu_and_Kashmir%2C_India.jpg ',
                title: 'Kashmir',
                price: '₹23,000',
                originalPrice: '₹27,000',
                rating: '4.8 (234)',
                duration: '5-6 Days',
                featured: '',
                discount: '15% off'
            },
            {
                id: 45,
                href: '/product/gulmarg-honeymoon',
                image: 'https://thumbs.dreamstime.com/b/winter-season-gulmarg-town-hill-station-popular-tourist-skiing-destination-kashmir-india-220931261.jpg',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://thumbs.dreamstime.com/b/winter-season-gulmarg-town-hill-station-popular-tourist-skiing-destination-kashmir-india-220931261.jpg',
                title: 'Gulmarg',
                price: '₹22,000',
                originalPrice: '₹26,000',
                rating: '4.7 (176)',
                duration: '4-5 Days',
                featured: '',
                discount: '15% off'
            },
            {
                id: 46,
                href: '/product/mount-abu-honeymoon',
                image: 'https://thumbs.dreamstime.com/b/toad-rock-mount-abu-india-hill-station-rajasthan-state-172680205.jpg',
                srcSet: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=630&fit=crop 500w, https://thumbs.dreamstime.com/b/toad-rock-mount-abu-india-hill-station-rajasthan-state-172680205.jpg 820w',
                title: 'Mount Abu',
                price: '₹16,000',
                originalPrice: '₹19,000',
                rating: '4.6 (145)',
                duration: '3-4 Days',
                featured: '',
                discount: '16% off'
            },
            {
                id: 47,
                href: '/product/mussoorie-honeymoon',
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=820&h=1030&fit=crop 820w',
                title: 'Mussoorie',
                price: '₹15,000',
                originalPrice: '₹18,000',
                rating: '4.7 (167)',
                duration: '3-4 Days',
                featured: '',
                discount: '17% off'
            },
            {
                id: 48,
                href: '/product/shimla-honeymoon',
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=820&h=1030&fit=crop 820w',
                title: 'Shimla',
                price: '₹14,000',
                originalPrice: '₹16,500',
                rating: '4.6 (189)',
                duration: '3-4 Days',
                featured: '',
                discount: '15% off'
            }
        ],
        'International': [
            {
                id: 49,
                href: '/product/bali-honeymoon',
                image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=820&h=1030&fit=crop 820w',
                title: 'Bali ',
                price: '$500',
                originalPrice: '$590',
                rating: '4.9 (345)',
                duration: '5-6 Days • Visa-Free',
                featured: 'Featured',
                discount: '15% off'
            },
            {
                id: 50,
                href: '/product/maldives-honeymoon',
                image: 'https://img.freepik.com/premium-photo/beautiful-drone-aerial-resort-maldives-islands-exotic-travel-destination-ocean-lagoon-palm-trees_663265-2103.jpg',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://img.freepik.com/premium-photo/beautiful-drone-aerial-resort-maldives-islands-exotic-travel-destination-ocean-lagoon-palm-trees_663265-2103.jpg 820w',
                title: 'Maldives',
                price: '$750',
                originalPrice: '$880',
                rating: '4.9 (287)',
                duration: '4-5 Days • Visa-Free',
                featured: '',
                discount: '15% off'
            },
            {
                id: 51,
                href: '/product/switzerland-honeymoon',
                image: 'https://images.pexels.com/photos/28677183/pexels-photo-28677183.jpeg?cs=srgb&dl=pexels-gsn-travel-28677183.jpg&fm=jpg',
                srcSet: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=500&h=630&fit=crop 500w, https://images.pexels.com/photos/28677183/pexels-photo-28677183.jpeg?cs=srgb&dl=pexels-gsn-travel-28677183.jpg&fm=jpg 820w',
                title: 'Switzerland',
                price: '$1,600',
                originalPrice: '$1,900',
                rating: '4.8 (198)',
                duration: '7-9 Days • Visa Required',
                featured: '',
                discount: '16% off'
            },
            {
                id: 52,
                href: '/product/thailand-honeymoon',
                image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=820&h=1030&fit=crop 820w',
                title: 'Thailand',
                price: '$450',
                originalPrice: '$530',
                rating: '4.8 (234)',
                duration: '5-6 Days • Visa-Free',
                featured: '',
                discount: '15% off'
            }
        ]
    },
    'Adventure': {
        name: 'Adventure Category',
        'Domestic': [
            {
                id: 53,
                href: '/product/rishikesh-rafting',
                image: 'https://media1.thrillophilia.com/filestore/l1stgsdtm1wlcgkfhkg49pers7qj_WDEFRGTYH.png',
                srcSet: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&h=630&fit=crop 500w, https://media1.thrillophilia.com/filestore/l1stgsdtm1wlcgkfhkg49pers7qj_WDEFRGTYH.png 820w',
                title: 'Rishikesh Rafting & Camping',
                price: '₹6,000',
                originalPrice: '₹7,000',
                rating: '4.8 (567)',
                duration: '2-3 Days',
                featured: 'Featured',
                discount: '14% off'
            },
            {
                id: 54,
                href: '/product/manali-srinagar-bike',
                image: 'https://www.ladakhtravelco.com/uploads/7/3/4/1/73415203/2138742_orig.jpg',
                srcSet: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=630&fit=crop 500w, https://www.ladakhtravelco.com/uploads/7/3/4/1/73415203/2138742_orig.jpg 820w',
                title: 'Manali to Srinagar Bike',
                price: '₹30,999',
                originalPrice: '₹36,000',
                rating: '4.9 (189)',
                duration: '12 Days',
                featured: '',
                discount: '14% off'
            },
            {
                id: 55,
                href: '/product/spiti-winter-trek',
                image: 'https://raachotrekkers.com//wp-content/uploads/2020/04/Shichling-village.jpeg',
                srcSet: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&h=630&fit=crop 500w, https://raachotrekkers.com//wp-content/uploads/2020/04/Shichling-village.jpeg 820w',
                title: 'Winter Spiti Backpacking',
                price: '₹17,999',
                originalPrice: '₹21,000',
                rating: '4.7 (145)',
                duration: '8 Days',
                featured: '',
                discount: '14% off'
            },
            {
                id: 56,
                href: '/product/triund-paragliding',
                image: 'https://www.trekkersofindia.com/blog/1814526569100426.webp',
                srcSet: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=630&fit=crop 500w, https://www.trekkersofindia.com/blog/1814526569100426.webp 820w',
                title: 'Triund Trek with Bir Paragliding',
                price: '₹5,000',
                originalPrice: '₹6,000',
                rating: '4.8 (234)',
                duration: '3 Days',
                featured: '',
                discount: '17% off'
            },
            {
                id: 57,
                href: '/product/desert-adventure',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=820&h=1030&fit=crop 820w',
                title: 'Jaipur-Jodhpur-Jaisalmer Desert Adventure',
                price: '₹15,000',
                originalPrice: '₹18,000',
                rating: '4.7 (198)',
                duration: '6 Days',
                featured: '',
                discount: '17% off'
            }
        ],
        'International': [
            {
                id: 58,
                href: '/product/nepal-trekking',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=820&h=1030&fit=crop 820w',
                title: 'Nepal Himalayas Trekking (Annapurna Circuit)',
                price: '$800',
                originalPrice: '$950',
                rating: '4.9 (234)',
                duration: '10-15 Days • Visa Required',
                featured: 'Featured',
                discount: '16% off'
            },
            {
                id: 59,
                href: '/product/newzealand-extreme',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop 820w',
                title: 'New Zealand Extreme Sports (Queenstown)',
                price: '$1,200',
                originalPrice: '$1,400',
                rating: '4.8 (187)',
                duration: '7-10 Days • Visa Required',
                featured: '',
                discount: '14% off'
            },
            {
                id: 60,
                href: '/product/costa-rica-adventure',
                image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=820&h=1030&fit=crop 820w',
                title: 'Costa Rica Rainforest Ziplining and Surfing',
                price: '$1,000',
                originalPrice: '$1,200',
                rating: '4.7 (156)',
                duration: '8-10 Days • Visa-Free',
                featured: '',
                discount: '17% off'
            },
            {
                id: 61,
                href: '/product/iceland-glacier',
                image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=820&h=1030&fit=crop 820w',
                title: 'Iceland Glacier Hiking and Northern Lights',
                price: '$1,500',
                originalPrice: '$1,800',
                rating: '4.8 (123)',
                duration: '7-9 Days • Visa Required',
                featured: '',
                discount: '17% off'
            },
            {
                id: 62,
                href: '/product/south-africa-safari',
                image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=820&h=1030&fit=crop 820w',
                title: 'South Africa Safari and Shark Cage Diving',
                price: '$1,200',
                originalPrice: '$1,400',
                rating: '4.8 (167)',
                duration: '8-10 Days • Visa Required',
                featured: '',
                discount: '14% off'
            }
        ]
    },
    'MICE': {
        name: 'MICE Category',
        'Domestic': [
            {
                id: 63,
                href: '/product/kerala-corporate',
                image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=820&h=1030&fit=crop 820w',
                title: 'Kerala Corporate Backwater Conference',
                price: '₹25,000',
                originalPrice: '₹29,000',
                rating: '4.8 (123)',
                duration: '4-5 Days',
                featured: 'Featured',
                discount: '14% off'
            },
            {
                id: 64,
                href: '/product/imphal-business',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=820&h=1030&fit=crop 820w',
                title: 'Imphal Business Meeting & Cultural Tour',
                price: '₹15,000',
                originalPrice: '₹18,000',
                rating: '4.6 (89)',
                duration: '4 Days',
                featured: '',
                discount: '17% off'
            },
            {
                id: 65,
                href: '/product/mount-abu-retreat',
                image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=820&h=1030&fit=crop 820w',
                title: 'Mount Abu Incentive Retreat',
                price: '₹16,000',
                originalPrice: '₹19,000',
                rating: '4.7 (134)',
                duration: '3 Days',
                featured: '',
                discount: '16% off'
            },
            {
                id: 66,
                href: '/product/himachal-conference',
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=820&h=1030&fit=crop 820w',
                title: 'Himachal Conference with Team-Building',
                price: '₹20,000',
                originalPrice: '₹24,000',
                rating: '4.8 (178)',
                duration: '5-7 Days',
                featured: '',
                discount: '17% off'
            },
            {
                id: 67,
                href: '/product/rajasthan-exhibition',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=820&h=1030&fit=crop 820w',
                title: 'Rajasthan Exhibition and Networking Package',
                price: '₹22,000',
                originalPrice: '₹26,000',
                rating: '4.7 (167)',
                duration: '6-8 Days',
                featured: '',
                discount: '15% off'
            }
        ],
        'International': [
            {
                id: 68,
                href: '/product/singapore-corporate',
                image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1565967511849-76a60a516170?w=820&h=1030&fit=crop 820w',
                title: 'Singapore Corporate Conference',
                price: '$550',
                originalPrice: '$650',
                rating: '4.8 (234)',
                duration: '4-5 Days • Visa Required',
                featured: 'Featured',
                discount: '15% off'
            },
            {
                id: 69,
                href: '/product/dubai-incentive',
                image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=820&h=1030&fit=crop 820w',
                title: 'Dubai Incentive Meeting',
                price: '$600',
                originalPrice: '$710',
                rating: '4.7 (189)',
                duration: '4-6 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 70,
                href: '/product/usa-business',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop 820w',
                title: 'USA Business Exhibition (East Coast)',
                price: '$2,300',
                originalPrice: '$2,700',
                rating: '4.9 (145)',
                duration: '12-14 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 71,
                href: '/product/europe-conference',
                image: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1520986606214-8b456906c813?w=820&h=1030&fit=crop 820w',
                title: 'Europe Multi-City Conference Tour',
                price: '$1,200',
                originalPrice: '$1,400',
                rating: '4.8 (167)',
                duration: '10-15 Days • Visa Required',
                featured: '',
                discount: '14% off'
            },
            {
                id: 72,
                href: '/product/australia-incentive',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop 820w',
                title: 'Australia Incentive and Exhibition',
                price: '$1,900',
                originalPrice: '$2,200',
                rating: '4.8 (156)',
                duration: '10-12 Days • Visa Required',
                featured: '',
                discount: '14% off'
            }
        ]
    },
    'Spiritual': {
        name: 'Spiritual Category',
        'Domestic': [
            {
                id: 73,
                href: '/product/varanasi-spiritual',
                image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=820&h=1030&fit=crop 820w',
                title: 'Varanasi Spiritual Journey',
                price: '₹18,000',
                originalPrice: '₹21,000',
                rating: '4.9 (456)',
                duration: '5-6 Days',
                featured: 'Featured',
                discount: '14% off'
            },
            {
                id: 74,
                href: '/product/bodh-gaya-meditation',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop 820w',
                title: 'Bodh Gaya Meditation Retreat',
                price: '₹15,000',
                originalPrice: '₹18,000',
                rating: '4.8 (234)',
                duration: '4-5 Days',
                featured: '',
                discount: '17% off'
            },
            {
                id: 75,
                href: '/product/amritsar-golden-temple',
                image: 'https://img.freepik.com/premium-photo/golden-temple-amritsar_163782-3654.jpg',
                srcSet: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=630&fit=crop 500w, https://img.freepik.com/premium-photo/golden-temple-amritsar_163782-3654.jpg 820w',
                title: 'Amritsar Golden Temple',
                price: '₹12,000',
                originalPrice: '₹14,000',
                rating: '4.7 (189)',
                duration: '3-4 Days',
                featured: '',
                discount: '14% off'
            },
            {
                id: 76,
                href: '/product/rishikesh-yoga',
                image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=820&h=1030&fit=crop 820w',
                title: 'Rishikesh Yoga & Meditation',
                price: '₹10,000',
                originalPrice: '₹12,000',
                rating: '4.9 (345)',
                duration: '5-7 Days',
                featured: 'Featured',
                discount: '17% off'
            },
            {
                id: 77,
                href: '/product/kedarnath-yatra',
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=820&h=1030&fit=crop 820w',
                title: 'Kedarnath Yatra',
                price: '₹25,000',
                originalPrice: '₹29,000',
                rating: '4.8 (267)',
                duration: '6-8 Days',
                featured: '',
                discount: '14% off'
            },
            {
                id: 78,
                href: '/product/badrinath-dham',
                image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=820&h=1030&fit=crop 820w',
                title: 'Badrinath Dham',
                price: '₹22,000',
                originalPrice: '₹26,000',
                rating: '4.7 (198)',
                duration: '5-7 Days',
                featured: '',
                discount: '15% off'
            },
            {
                id: 79,
                href: '/product/gangotri-yamunotri',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop 820w',
                title: 'Gangotri & Yamunotri',
                price: '₹20,000',
                originalPrice: '₹24,000',
                rating: '4.8 (234)',
                duration: '6-8 Days',
                featured: '',
                discount: '17% off'
            },
            {
                id: 80,
                href: '/product/vaishno-devi',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=820&h=1030&fit=crop 820w',
                title: 'Vaishno Devi Yatra',
                price: '₹8,000',
                originalPrice: '₹9,500',
                rating: '4.6 (178)',
                duration: '3-4 Days',
                featured: '',
                discount: '16% off'
            }
        ],
        'International': [
            {
                id: 81,
                href: '/product/tibet-buddhist',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop 820w',
                title: 'Tibet Buddhist Pilgrimage',
                price: '$800',
                originalPrice: '$950',
                rating: '4.8 (234)',
                duration: '8-10 Days • Visa Required',
                featured: 'Featured',
                discount: '16% off'
            },
            {
                id: 82,
                href: '/product/nepal-buddhist',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=820&h=1030&fit=crop 820w',
                title: 'Nepal Buddhist Temples',
                price: '$600',
                originalPrice: '$710',
                rating: '4.7 (189)',
                duration: '6-8 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 83,
                href: '/product/sri-lanka-buddhist',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop 820w',
                title: 'Sri Lanka Buddhist Heritage',
                price: '$500',
                originalPrice: '$590',
                rating: '4.8 (167)',
                duration: '5-7 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 84,
                href: '/product/cambodia-angkor',
                image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=820&h=1030&fit=crop 820w',
                title: 'Cambodia Angkor Temples',
                price: '$450',
                originalPrice: '$530',
                rating: '4.7 (145)',
                duration: '4-6 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 85,
                href: '/product/myanmar-pagan',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=820&h=1030&fit=crop 820w',
                title: 'Myanmar Pagan Temples',
                price: '$550',
                originalPrice: '$650',
                rating: '4.6 (123)',
                duration: '5-7 Days • Visa Required',
                featured: '',
                discount: '15% off'
            },
            {
                id: 86,
                href: '/product/japan-zen',
                image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=820&h=1030&fit=crop 820w',
                title: 'Japan Zen Temples',
                price: '$1,200',
                originalPrice: '$1,400',
                rating: '4.8 (198)',
                duration: '7-9 Days • Visa Required',
                featured: '',
                discount: '14% off'
            },
            {
                id: 87,
                href: '/product/thailand-buddhist',
                image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=820&h=1030&fit=crop 820w',
                title: 'Thailand Buddhist Temples',
                price: '$400',
                originalPrice: '$470',
                rating: '4.7 (167)',
                duration: '4-6 Days • Visa-Free',
                featured: '',
                discount: '15% off'
            },
            {
                id: 88,
                href: '/product/indonesia-bali-temples',
                image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=820&h=1030&fit=crop',
                srcSet: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500&h=630&fit=crop 500w, https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=820&h=1030&fit=crop 820w',
                title: 'Bali Temple Tour',
                price: '$450',
                originalPrice: '$530',
                rating: '4.8 (189)',
                duration: '5-7 Days • Visa-Free',
                featured: '',
                discount: '15% off'
            }
        ]
    }
}

// Main category tabs
const mainTabs = [
    { id: 'Group', label: 'Group' },
    { id: 'Customized', label: 'Customized' },
    { id: 'Honeymoon', label: 'Honeymoon' },
    { id: 'Adventure', label: 'Adventure' },
    { id: 'MICE', label: 'MICE' },
    { id: 'Spiritual', label: 'Spiritual' }
]

// Sub-category tabs
const subTabs = [
    { id: 'Domestic', label: 'Domestic' },
    { id: 'International', label: 'International' }
]

// DestinationCard Component (keeping the same design)
const DestinationCard = ({ destination, category }) => {
    const { image, srcSet, title, price, originalPrice, rating, duration, featured, discount } = destination

    // Extract country name from title for routing
    const getCountryFromTitle = (title) => {
        const countryMap = {
            'Thailand Tour': 'thailand',
            'Vietnam Tour': 'vietnam',
            'Bali Tour': 'bali',
            'Dubai Tour': 'dubai',
            'Singapore Tour': 'singapore',
            'Egypt Tour': 'egypt',
            'Australia Tour': 'australia',
            'Europe Tour': 'europe',
            'Japan Tour': 'japan',
            'Maldives Tour': 'maldives',
            'Turkey Tour': 'turkey',
            'USA Tour': 'usa',
            'UK Tour': 'uk',
            'Switzerland Tour': 'switzerland',
            'China Tour': 'china',
            'Malaysia Tour': 'malaysia',
            'Thailand Honeymoon': 'thailand',
            'Vietnam Honeymoon': 'vietnam',
            'Bali Honeymoon': 'bali',
            'Maldives Honeymoon': 'maldives',
            'Switzerland Honeymoon': 'switzerland',
            'Thailand Customized': 'thailand',
            'Vietnam Customized': 'vietnam',
            'Bali Customized': 'bali',
            'Dubai Customized': 'dubai',
            'Singapore Customized': 'singapore',
            'Egypt Customized': 'egypt',
            'Australia Customized': 'australia',
            'Europe Customized': 'europe',
            'Japan Customized': 'japan',
            'Maldives Customized': 'maldives',
            'Turkey Customized': 'turkey',
            'USA Customized': 'usa',
            'UK Customized': 'uk',
            'Switzerland Customized': 'switzerland',
            'China Customized': 'china',
            'Malaysia Customized': 'malaysia',
            'Thailand Group': 'thailand',
            'Vietnam Group': 'vietnam',
            'Bali Group': 'bali',
            'Dubai Group': 'dubai',
            'Singapore Group': 'singapore',
            'Egypt Group': 'egypt',
            'Australia Group': 'australia',
            'Europe Group': 'europe',
            'Japan Group': 'japan',
            'Maldives Group': 'maldives',
            'Turkey Group': 'turkey',
            'USA Group': 'usa',
            'UK Group': 'uk',
            'Switzerland Group': 'switzerland',
            'China Group': 'china',
            'Malaysia Group': 'malaysia',
            // Domestic destinations
            'Rajasthan Tour': 'rajasthan',
            'Himachal Tour': 'himachal',
            'Chardham Yatra': 'chardham',
            'Spiti Valley Tour': 'spiti',
            'Ladakh Bike Tour': 'ladakh',
            'Kerala Tour': 'kerala',
            'Kashmir Tour': 'kashmir',
            'Uttarakhand Tour': 'uttarakhand',
            'Goa Tour': 'goa',
            'Gujarat Tour': 'gujarat',
            'Manali Honeymoon': 'manali',
            'Kashmir Honeymoon': 'kashmir',
            'Gulmarg Honeymoon': 'gulmarg',
            'Mount Abu Honeymoon': 'mount-abu',
            'Mussoorie Honeymoon': 'mussoorie',
            'Shimla Honeymoon': 'shimla',
            'Rishikesh Rafting & Camping': 'rishikesh',
            'Manali to Srinagar Bike Expedition': 'manali-srinagar',
            'Winter Spiti Backpacking': 'spiti-winter',
            'Triund Trek with Bir Paragliding': 'triund',
            'Jaipur-Jodhpur-Jaisalmer Desert Adventure': 'rajasthan-desert',
            'Nepal Himalayas Trekking (Annapurna Circuit)': 'nepal',
            'New Zealand Extreme Sports (Queenstown)': 'newzealand',
            'Costa Rica Rainforest Ziplining and Surfing': 'costa-rica',
            'Iceland Glacier Hiking and Northern Lights': 'iceland',
            'South Africa Safari and Shark Cage Diving': 'south-africa',
            'Kerala Corporate Backwater Conference': 'kerala-corporate',
            'Imphal Business Meeting & Cultural Tour': 'imphal',
            'Mount Abu Incentive Retreat': 'mount-abu-retreat',
            'Himachal Conference with Team-Building': 'himachal-conference',
            'Rajasthan Exhibition and Networking Package': 'rajasthan-exhibition',
            'Singapore Corporate Conference': 'singapore-corporate',
            'Dubai Incentive Meeting': 'dubai-incentive',
            'USA Business Exhibition (East Coast)': 'usa-business',
            'Europe Multi-City Conference Tour': 'europe-conference',
            'Australia Incentive and Exhibition': 'australia-incentive',
            'Varanasi Spiritual Journey': 'varanasi',
            'Bodh Gaya Meditation Retreat': 'bodh-gaya',
            'Amritsar Golden Temple': 'amritsar',
            'Rishikesh Yoga & Meditation': 'rishikesh-yoga',
            'Kedarnath Yatra': 'kedarnath',
            'Badrinath Dham': 'badrinath',
            'Gangotri & Yamunotri': 'gangotri',
            'Vaishno Devi Yatra': 'vaishno-devi',
            'Tibet Buddhist Pilgrimage': 'tibet',
            'Nepal Buddhist Temples': 'nepal-buddhist',
            'Sri Lanka Buddhist Heritage': 'sri-lanka',
            'Cambodia Angkor Temples': 'cambodia',
            'Myanmar Pagan Temples': 'myanmar',
            'Japan Zen Temples': 'japan-zen',
            'Thailand Buddhist Temples': 'thailand-buddhist',
            'Bali Temple Tour': 'bali-temple'
        };
        return countryMap[title] || 'thailand'; // fallback to thailand
    };

    const countrySlug = getCountryFromTitle(title);
    const detailPageUrl = `/countries/${countrySlug}`;

    return (
        <div className="destination-slide-item">
            <Link to={detailPageUrl} className="destination-cards-two w-inline-block">
                <div className="destination-cards-two-image">
                    <img
                        width={300}
                        // height={387}
                        alt=""
                        loading="lazy"
                        src={image}
                        sizes="100vw"
                        srcSet={srcSet}
                        className="tab-image-full-width"
                        style={{
                            width: '300px',
                            height: '387px'
                        }}
                    />
                    <div className="destination-cards-two-overlay" />
                </div>
                <div className="destination-cards-two-text">
                    <div className="destination-card-two-name">
                        <div className="text-color-white small-text">{category}</div>
                        <div className="heading-style-h6 text-color-white">{title}</div>
                        <div className="w-layout-hflex card-price">
                            <div className="text-light-white">From </div>
                            <div className="card-one-sell-price">&nbsp;{price}&nbsp;</div>
                            <div className="text-strike-through text-light-white">&nbsp;{originalPrice}&nbsp;</div>
                        </div>
                    </div>
                    <div className="w-layout-hflex cards-ratings">
                        <div className="w-layout-hflex trip-ratings">
                            <img
                                width={16}
                                loading="lazy"
                                alt="Icon"
                                src="https://cdn.prod.website-files.com/66920f2a1e03460f2a6e88a5/671b618e1c1b5cffd4b5015d_Rating%20Star.svg"
                            />
                            <div className="text-color-white small-text">{rating}</div>
                        </div>
                        <div className="text-color-white small-text">{duration}</div>
                    </div>
                </div>
                <div className="w-layout-vflex offer-box">
                    <div className={`offer-text featured ${!featured ? 'w-dyn-bind-empty' : ''}`}>
                        {featured}
                    </div>
                    <div className="offer-text off">{discount}</div>
                </div>
            </Link>
        </div>
    )
}

// Simple Grid Component
const DestinationGrid = ({ destinations, category }) => {
    // Show only first 4 destinations
    const displayDestinations = destinations ? destinations.slice(0, 4) : []

    if (!destinations || destinations.length === 0) {
        return <div className="no-destinations">No packages available</div>
    }

    return (
        <div className="destination-grid">
            {displayDestinations.map((destination) => (
                <div key={destination.id} className="destination-grid-item">
                    <DestinationCard
                        destination={destination}
                        category={category}
                    />
                </div>
            ))}
        </div>
    )
}

// SubTabContent Component with Grid
const SubTabContent = ({ mainTab, subTab, activeMainTab, activeSubTab, destinations, category }) => {
    const isActive = activeMainTab === mainTab && activeSubTab === subTab

    return (
        <div
            className={`w-tab-pane ${isActive ? 'w--tab-active' : ''}`}
            style={{ display: isActive ? 'block' : 'none' }}
        >
            <DestinationGrid destinations={destinations} category={category} />
        </div>
    )
}

// Main Destinations Component
const Destinations = () => {
    const [activeMainTab, setActiveMainTab] = useState('Group')
    const [activeSubTab, setActiveSubTab] = useState('Domestic')

    const handleMainTabClick = (tabId) => {
        setActiveMainTab(tabId)
        setActiveSubTab('Domestic') // Reset to Domestic when changing main tab
    }

    const handleSubTabClick = (subTabId) => {
        setActiveSubTab(subTabId)
    }

    return (
        <>
            <style jsx>{`
                .destination-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 20px;
                    padding: 20px 0;
                }

                .destination-grid-item {
                    display: flex;
                    justify-content: center;
                }

                .destination-cards-two {
                    max-width: 100%;
                    margin: 0 auto;
                }

                .no-destinations {
                    text-align: center;
                    padding: 40px;
                    color: #666;
                    font-size: 18px;
                }

                @media (max-width: 768px) {
                    .destination-grid {
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        gap: 15px;
                        padding: 15px 0;
                    }
                }

                @media (max-width: 480px) {
                    .destination-grid {
                        grid-template-columns: 1fr;
                        gap: 15px;
                    }
                }
            `}</style>

            <section className="home-three-top-destinations">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="w-layout-vflex home-two-trip-main">
                        <h2
                            data-w-id="ff0385ae-cfbf-ca85-8978-184c11f0b128"
                            className="no-margin"
                            style={{
                                opacity: 1,
                                transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d"
                            }}
                        >
                            find your perfect travel package
                        </h2>
                        <div
                            data-w-id="ff0385ae-cfbf-ca85-8978-184c11f0b12a"
                            data-current="Group"
                            data-easing="ease"
                            data-duration-in={300}
                            data-duration-out={100}
                            className="trips-tab margin-bottom-twenty w-tabs"
                            style={{
                                opacity: 1,
                                transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d"
                            }}
                        >
                            {/* Main Category Tabs */}
                            <div className="tab-menu w-tab-menu" role="tablist">
                                {mainTabs.map((tab, index) => (
                                    <a
                                        key={tab.id}
                                        data-w-tab={tab.id}
                                        className={`tab-link w-inline-block w-tab-link ${activeMainTab === tab.id ? 'w--current' : ''}`}
                                        id={`w-tabs-0-data-w-tab-${index}`}
                                        href={`#w-tabs-0-data-pane-${index}`}
                                        role="tab"
                                        aria-controls={`w-tabs-0-data-pane-${index}`}
                                        aria-selected={activeMainTab === tab.id}
                                        tabIndex={activeMainTab === tab.id ? 0 : -1}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleMainTabClick(tab.id)
                                        }}
                                    >
                                        <div>{tab.label}</div>
                                    </a>
                                ))}
                            </div>

                            {/* Sub Category Tabs */}
                            <div className="tab-menu w-tab-menu" role="tablist" style={{ marginTop: '20px', paddingTop: '15px' }}>
                                {subTabs.map((subTab, index) => (
                                    <a
                                        key={subTab.id}
                                        className={`tab-link w-inline-block w-tab-link ${activeSubTab === subTab.id ? 'w--current' : ''}`}
                                        href={`#sub-tab-${index}`}
                                        role="tab"
                                        aria-selected={activeSubTab === subTab.id}
                                        tabIndex={activeSubTab === subTab.id ? 0 : -1}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleSubTabClick(subTab.id)
                                        }}
                                    >
                                        <div>{subTab.label}</div>
                                    </a>
                                ))}
                            </div>

                            {/* Tab Content with Slider */}
                            <div className="home-two-trip-content w-tab-content">
                                {mainTabs.map((mainTab) => (
                                    subTabs.map((subTab) => (
                                        <SubTabContent
                                            key={`${mainTab.id}-${subTab.id}`}
                                            mainTab={mainTab.id}
                                            subTab={subTab.id}
                                            activeMainTab={activeMainTab}
                                            activeSubTab={activeSubTab}
                                            destinations={destinationsData[mainTab.id]?.[subTab.id]}
                                            category={destinationsData[mainTab.id]?.name}
                                        />
                                    ))
                                ))}
                            </div>
                        </div>
                        <Link
                            to="/destinations"
                            className="button w-button"
                            style={{
                                opacity: 1,
                                transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d"
                            }}
                        >
                            View all packages
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destinations
