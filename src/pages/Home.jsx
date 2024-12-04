import React from 'react'
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Business from '../components/Business';
import Portfolio from '../components/Portfolio';
import Faq from '../components/Faq';

export default function Home() {
  return (
    <div className="w-full h-auto">
      <Hero/>
      <Projects/>
      <Business/>
      <Portfolio/>
      <Faq/>
    </div>
  );
}
