import React from 'react';
import HeroSection from '../components/HeroSection';
import Header from '../components/common/Header';
import ProductShowcase from '../components/ProductShowcase';
import FeelSpecial from '../components/FeelSpecial';

const homePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
    </>
  );
};

export default homePage;
