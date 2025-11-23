import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import Features from '../Features/Features';
import OurPriority from '../OurPriority/OurPriority';
import Faq from '../Faq/Faq';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <Features></Features>
      <OurPriority></OurPriority>
      <Faq></Faq>
    </div>
  );
};

export default Home;
