import React from 'react';
import Tilt from 'react-tilt';
import HeroImage from '../public/img/takiheroimage.png';

const HeroImageSection = () => {
  return (
    <div className="flex items-center justify-center">
      <Tilt className="Tilt">
        <div className="Tilt-inner">
          <img className="max-w-80" src={HeroImage} alt="" />
        </div>
      </Tilt>
    </div>
  );
};

export default HeroImageSection;
