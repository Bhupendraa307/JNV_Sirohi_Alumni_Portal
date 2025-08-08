import React from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon, UserGroupIcon, GlobeAltIcon, ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';

const notableAlumni = [
    { name: 'Rahul Meena', batch: '2012', achievement: 'IAS Officer' },
    { name: 'Sneha Sharma', batch: '2015', achievement: 'Research Scientist at ISRO' },
    { name: 'Vikas Singh', batch: '2010', achievement: 'Entrepreneur & Founder of EduTech' },
];

const AnimatedSection = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {children}
        </div>
    );
};

export default function LandingPage() {
    return (
        <>
            {/* Blue Theme Hero Section */}
            <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden p-0 m-0">
                {/* Blue Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-600"></div>
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Subtle floating elements */}
                    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
                    <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-white/10 rounded-full blur-lg animate-pulse delay-1500"></div>
                    
                    {/* Twinkling Stars */}
                    <div className="star star-1"></div>
                    <div className="star star-2"></div>
                    <div className="star star-3"></div>
                    <div className="star star-4"></div>
                    <div className="star star-5"></div>
                    <div className="star star-6"></div>
                    <div className="star star-7"></div>
                    <div className="star star-8"></div>
                    <div className="star star-9"></div>
                    <div className="star star-10"></div>
                    <div className="star star-11"></div>
                    <div className="star star-12"></div>
                    <div className="star star-13"></div>
                    <div className="star star-14"></div>
                    <div className="star star-15"></div>
                    
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }}></div>
                    </div>
                </div>
                {/* Content Container (centered) */}
                <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
                    {/* Premium Badge with Enhanced Effects */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-premium border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in shadow-premium relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                        <SparklesIcon className="h-5 w-5 text-blue-400 animate-glow relative z-10" />
                        <span className="text-sm font-medium relative z-10">Join 1000+ JNV Sirohi Alumni</span>
                    </div>
                    <div className="space-y-6 mb-8">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
                            <span className="block text-white/90">Welcome to</span>
                            <span className="block gradient-text">
                                Jawahar Navodaya Vidyalaya, Sirohi
                            </span>
                        </h1>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white">
                            Alumni Portal
                        </h2>
                    </div>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
                        Connect with fellow JNV Sirohi alumni, share opportunities, and stay in touch with your alma mater. 
                        <span className="block text-blue-400 font-medium mt-2">Building bridges, creating opportunities.</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                        <Link 
                            to="/register" 
                            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-bold py-4 px-10 rounded-2xl text-lg shadow-premium hover:shadow-premium-hover transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 premium-button overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                            <span className="relative z-10">Get Started</span>
                            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                        <Link 
                            to="/login" 
                            className="group relative inline-flex items-center gap-3 bg-white/10 backdrop-blur-premium border-2 border-white/30 text-white font-bold py-4 px-10 rounded-2xl text-lg hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 premium-button shadow-premium overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                            <span className="relative z-10">Sign In</span>
                            <div className="absolute inset-0 bg-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Main content in container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* About JNV Sirohi Section */}
                <section id="about" className="py-20">
                    <AnimatedSection>
                        <div className="container mx-auto max-w-5xl text-center">
                            <h3 className="text-4xl font-bold text-blue-800 mb-4">About Jawahar Navodaya Vidyalaya, Sirohi</h3>
                            <p className="text-blue-700 text-lg leading-relaxed">
                                Jawahar Navodaya Vidyalaya, Sirohi is a premier residential school dedicated to nurturing talented students from rural areas. Established with the vision of providing quality education and holistic development, JNV Sirohi fosters academic excellence, leadership, and social responsibility. Our vibrant community encourages curiosity, creativity, and lifelong learning, empowering students to excel in all walks of life and contribute meaningfully to society.
                            </p>
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="p-6 bg-blue-50 rounded-xl shadow-lg"><AcademicCapIcon className="h-12 w-12 mx-auto text-blue-600" />
                                    <h4 className="text-xl font-bold mt-4 text-blue-700">Academic Excellence</h4><p className="text-blue-600 mt-2">Consistently outstanding results and a culture of learning.</p></div>
                                <div className="p-6 bg-blue-50 rounded-xl shadow-lg"><UserGroupIcon className="h-12 w-12 mx-auto text-blue-600" />
                                    <h4 className="text-xl font-bold mt-4 text-blue-700">Vibrant Community</h4><p className="text-blue-600 mt-2">Strong bonds among students, staff, and alumni.</p></div>
                                <div className="p-6 bg-blue-50 rounded-xl shadow-lg"><GlobeAltIcon className="h-12 w-12 mx-auto text-blue-600" />
                                    <h4 className="text-xl font-bold mt-4 text-blue-700">Future Leaders</h4><p className="text-blue-600 mt-2">Empowering students to become responsible citizens.</p></div>
                            </div>
                        </div>
                    </AnimatedSection>
                </section>

                {/* Notable Alumni Section */}
                <section id="notable-alumni" className="py-20 bg-blue-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="container mx-auto max-w-5xl text-center">
                            <h3 className="text-4xl font-bold text-blue-800 mb-12">Our Notable Alumni</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {notableAlumni.map((alumnus, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                                        <h4 className="text-xl font-bold text-blue-700">{alumnus.name}</h4>
                                        <p className="text-sm font-semibold text-blue-500">Batch of {alumnus.batch}</p>
                                        <p className="mt-3 text-blue-800">{alumnus.achievement}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </section>
                <section id="developer">
                    {/* Footer Section */}
                </section>
            </div>
        </>
    );
}