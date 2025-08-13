import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';

interface HoneyPageProps {
  onBack: () => void;
}

function HoneyPage({ onBack }: HoneyPageProps) {
  return (
    <div className="min-h-screen">
      <Header onBack={onBack} />
      <main>
        <Hero />
        <About />
        <Products />
        <Technology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default HoneyPage;
