import React from 'react';

const testimonials = [
    {
        quote: `"Before Uptaskme, AI felt like a different language. Rodrigo's strategies saved us 10+ hours a week on content creation alone. It's the most practical business investment we've made this year."`,
        name: "Jane Smith",
        title: "Founder of Marketing Co.",
    },
    {
        quote: `"The AI Growth Kit was a game-changer. We implemented the client onboarding workflow immediately and it completely streamlined our process. This is the real deal—no fluff, just results."`,
        name: "Michael Brown",
        title: "CEO of Innovate Solutions",
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 md:py-24 bg-gray-50">
             <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-4xl md:text-5xl font-montserrat font-extrabold text-gray-900">What Our Clients Say</h3>
                </div>
                <div className="mt-16 grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
                            <p className="text-gray-600 leading-relaxed">{testimonial.quote}</p>
                            <div className="mt-6">
                                <p className="font-bold text-gray-900">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;