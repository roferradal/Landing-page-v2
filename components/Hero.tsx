
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative overflow-hidden py-20 md:py-32 bg-gray-50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_rgba(59,130,246,0)_70%)]"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-montserrat font-extrabold tracking-tighter text-gray-900 pt-16">
                        Stop Guessing. Start <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Growing with AI.</span>
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                        Practical AI strategies and workflows for overwhelmed entrepreneurs who want to reclaim their time and scale their business—without needing a tech team.
                    </p>
                    <div className="mt-10">
                        <a href="#lead-magnet" className="inline-block bg-blue-600 text-white font-montserrat font-bold py-4 px-10 rounded-lg text-lg hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                            Download Your Free AI Growth Kit
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
