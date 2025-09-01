
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Testimonials from './components/Testimonials';
import LeadMagnet from './components/LeadMagnet';
import Founder from './components/Founder';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="font-sans">
            <Header />
            <main>
                <Hero />
                <Problem />
                <Solution />
                <Testimonials />
                <LeadMagnet />
                <Founder />
            </main>
            <Footer />
        </div>
    );
};

export default App;