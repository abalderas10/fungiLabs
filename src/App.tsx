import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import MushroomShowcase from './components/MushroomShowcase';
import MushroomCards from './components/MushroomCards';
import Guarantee from './components/Guarantee';
import ExpandableInfo from './components/ExpandableInfo';
import DownloadGuide from './components/DownloadGuide';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <MushroomShowcase />
        <MushroomCards />
        <Guarantee />
        <ExpandableInfo />
        <DownloadGuide />
      </main>
      <Footer />
    </div>
  );
}

export default App;