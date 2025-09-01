
import React from 'react';

const LightningIcon: React.FC = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
);
const CheckIcon: React.FC = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);
const UsersIcon: React.FC = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>
);

const solutionItems = [
    {
        icon: <LightningIcon />,
        title: "Practicality Over Hype",
        description: "We focus on real-world applications that deliver tangible results, not fleeting trends."
    },
    {
        icon: <CheckIcon />,
        title: "Simplicity in Action",
        description: "Our strategies are designed to be implemented easily, without a technical background."
    },
    {
        icon: <UsersIcon />,
        title: "Empowerment, Not Replacement",
        description: "We believe AI is a tool to augment your potential, freeing you to focus on strategic work."
    }
];

const Solution: React.FC = () => {
    return (
        <section className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-4xl md:text-5xl font-montserrat font-extrabold text-gray-900">Clarity in a Complex World.</h3>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
                    {solutionItems.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                                {item.icon}
                            </div>
                            <h4 className="text-2xl font-montserrat font-bold mt-6 text-gray-900">{item.title}</h4>
                            <p className="mt-2 text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
