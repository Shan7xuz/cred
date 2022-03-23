import React from 'react';
import HeroSection from '../components/HeroSection';
import Header from '../components/common/Header';
import ProductShowcase from '../components/ProductShowcase';
import FeelSpecial from '../components/FeelSpecial';
import CredExperience from '../components/CredExperience';

const homePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <CredExperience />
    </>
  );
};

export default homePage;
