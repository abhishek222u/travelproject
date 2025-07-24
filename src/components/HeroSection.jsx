import React, { useState, useEffect } from 'react'
import './HeroSection.css'
import web1 from '../assets/cave3.jpg'
import web2 from '../assets/wildlife.jpg'
import web3 from '../assets/volcano.jpg'
import web4 from '../assets/web4.jpg'
import web5 from '../assets/web5.jpg'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: web1,
      title: "Deep Caves",
      subtitle: "Underground wonders",
      description: "Explore magnificent underground caverns and discover ancient geological formations in nature's hidden cathedral."
    },
    {
      image: web2,
      title: "Wild Life",
      subtitle: "Journey through nature",
      description: "Immerse yourself in pristine wilderness where wildlife roams free and untouched landscapes await your discovery."
    },
    {
      image: web3,
      title: "Volcano",
      subtitle: "Australian desert",
      description: "Experience the raw power of volcanic landscapes and traverse vast desert terrains under endless starlit skies."
    },
    {
      image: web5,
      title: "Mountain Peaks",
      subtitle: "Reach new heights",
      description: "Conquer majestic mountain peaks and witness breathtaking panoramic views from the world's highest summits."
    },
    {
      image: web4,
      title: "Ocean Depths",
      subtitle: "Marine exploration",
      description: "Dive into the mysterious depths of the ocean and discover vibrant coral reefs and marine life."
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="home-three-hero">
      <div className="hero-slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`
            }}
          >
            <div className="hero-overlay" />
            <div className="hero-content">
              <div className="hero-big-text text-color-white">
                {slide.title}
              </div>
              {/* <h1 className="text-color-white">
                {slide.subtitle}
              </h1> */}
              {/* <p className="hero-description">
                {slide.description}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HeroSection
