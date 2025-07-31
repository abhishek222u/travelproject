import React from 'react';
import visaDocs from '../../assets/VISA Documentstions.jpg';
import visaDocs1 from '../../assets/VISA DOCS1.jpg';
import visaFast from '../../assets/VISA fast process.jpg';
import { useBooking } from '../../context/BookingContext';

const VisaAssistant = () => {
    const { openBooking } = useBooking()

    const handleBookNow = () => {
        openBooking(null, 'Book Your Visa Consultation', 'Book Now', true)
    }
    return (
        <section className="relative pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 58C14.3 58 2 45.7 2 30S14.3 2 30 2s28 12.3 28 28-12.3 28-28 28z%22 fill=%22%23E0E7FF%22 fill-opacity=%22.2%22/%3E%3C/svg%3E')] opacity-20"></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl tracking-tight">
                        Simplify your <span className="text-[#046cb8]">visa journey</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        navigate the visa process with ease. our expert team provides personalized support, from application to approval, ensuring a seamless experience.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <div
                        className="relative group bg-white p-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-80"
                        style={{
                            backgroundImage: `url(${visaDocs})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        {/* Overlay with animation */}
                        <div className="absolute inset-0 flex flex-col justify-center opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out bg-white/60 backdrop-blur-md p-8">
                            <div className="relative z-10">
                                <svg className="w-12 h-12 text-[#046cb8] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4-8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4-8h2a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2z"></path>
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-900">Expert Consultation</h3>
                                <p className="mt-3 text-gray-600 leading-relaxed">
                                    Receive tailored guidance from visa specialists to ensure your application is on the right track.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div
                        className="relative group bg-white p-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-80"
                        style={{
                            backgroundImage: `url(${visaDocs1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div className="absolute inset-0 flex flex-col justify-center opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out bg-white/60 backdrop-blur-md p-8">
                            <div className="relative z-10">
                                <svg className="w-12 h-12 text-[#046cb8] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-900">Document Assistance</h3>
                                <p className="mt-3 text-gray-600 leading-relaxed">
                                    We help you gather and organize all required documents for a stress-free application.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div
                        className="relative group bg-white p-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-80"
                        style={{
                            backgroundImage: `url(${visaFast})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div className="absolute inset-0 flex flex-col justify-center opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out bg-white/60 backdrop-blur-md p-8">
                            <div className="relative z-10">
                                <svg className="w-12 h-12 text-[#046cb8] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-900">Fast Processing</h3>
                                <p className="mt-3 text-gray-600 leading-relaxed">
                                    Our efficient process ensures your visa application is handled swiftly and accurately.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <button
                        onClick={handleBookNow}
                        className="button w-button"
                        style={{ cursor: 'pointer' }}                          >
                        Start Your Visa Application Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VisaAssistant;