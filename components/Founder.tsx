import React from 'react';

const Founder: React.FC = () => {
    return (
        <section className="py-20 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-4xl md:text-5xl font-montserrat font-extrabold text-gray-900">Hi, I'm Rodrigo.</h3>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Like you, I've faced the challenge of scaling a business with a small team and a limited budget. I was spending 60+ hours a week on tasks that AI could do in a fraction of the time. I founded Uptaskme to share the exact, practical AI systems that helped me reclaim my time and focus on what truly matters: growing the business.
                    </p>
                    <div className="mt-10">
                        <a href="#lead-magnet" className="inline-block bg-blue-600 text-white font-montserrat font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                            Book a 1:1 Call With Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;