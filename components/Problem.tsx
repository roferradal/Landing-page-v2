
import React from 'react';

const Problem: React.FC = () => {
    return (
        <section className="py-20 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-4xl md:text-5xl font-montserrat font-extrabold text-gray-900">Feeling Overwhelmed by the AI Hype?</h3>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        You're told AI will change everything, but you're left with more questions than answers. How do you separate fleeting trends from genuinely transformative tools? How do you implement AI without a dedicated tech team? You know you need to adapt, but you don't know where to start.
                    </p>
                    <div className="mt-10">
                        <a href="#lead-magnet" className="inline-block bg-white text-blue-600 border-2 border-blue-600 font-montserrat font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300 transform hover:-translate-y-0.5">
                            Book a 1:1 Call With Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
