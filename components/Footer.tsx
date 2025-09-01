
import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-8 text-center">
                <p className="font-montserrat font-bold text-lg">UPTASKME</p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
                </div>
                <p className="mt-8 text-sm text-gray-500">&copy; {currentYear} Uptaskme. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
