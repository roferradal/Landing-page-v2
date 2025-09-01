import React from 'react';

const regions = ['America', 'Europe', 'Asia', 'Oceanian'];

const toolNames = [
    'Google',
    'n8n',
    'Make',
    'OpenAI',
    'Github',
    'Hostinger',
    'Cloudflare',
    'Canva',
    'Softr',
    'Airtable'
];


const TrustedBy: React.FC = () => {
    return (
        <section className="py-12 bg-white border-y border-gray-200">
            <div className="container mx-auto px-6">
                <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest">
                    TRUSTED BY ENTREPRENEURS WORLDWIDE
                </p>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    {regions.map((region, index) => (
                        <div 
                            key={index}
                            className="text-center text-xl font-semibold text-gray-500 tracking-wider hover:text-gray-800 transition-colors duration-300"
                        >
                            {region}
                        </div>
                    ))}
                </div>

                <p className="mt-16 text-center text-sm font-bold text-gray-500 uppercase tracking-widest">
                    SEAMLESSLY INTEGRATES WITH YOUR FAVORITE TOOLS
                </p>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
                    {toolNames.map((tool, index) => (
                         <div 
                            key={`tool-${index}`}
                            className="text-center text-lg font-medium text-gray-500 tracking-wider hover:text-gray-800 transition-colors duration-300"
                        >
                            {tool}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;