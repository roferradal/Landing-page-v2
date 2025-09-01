
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-montserrat font-bold tracking-tighter text-gray-900">UPTASKME</h1>
                <a href="#lead-magnet" className="bg-blue-600 text-white font-montserrat font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-sm hover:shadow-md">
                    Get Your Free AI Kit
                </a>
            </div>
        </header>
    );
};

export default Header;
