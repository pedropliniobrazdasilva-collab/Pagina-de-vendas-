import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 font-sans text-slate-50 antialiased selection:bg-emerald-500 selection:text-white">
      <Hero />
      <Features />
      <WhyUs />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <Footer />
    </main>
  );
};

export default App;