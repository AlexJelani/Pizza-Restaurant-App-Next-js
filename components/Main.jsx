import React from 'react';
import Image from 'next/image';
import { Tilt } from 'react-next-tilt'; // Importing Tilt from react-next-tilt
import HeroImage from '../public/img/takiheroimage.png';

function Main() {
  return (
      <section className='w-full h-screen xl:h-screen 2xl:h-screen flex items-center pt-12' id='main'>
        <div className='w-full md:grid grid-cols-2 gap-5 bg-red-500'>
          <div className='justify-self-center text-center mt-10 pt-10 text-white ml-6'>
            <p className='text-3xl md:text-5xl xl:text-7xl 2xl:text-7xl md:mt-10 hover:scale-110 duration-200'>TAKI PIZZA</p>
            <hr className="w-1/2 mx-auto h-0.5 bg-white mb-2"></hr>
            <p className='text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-bold hover:scale-110 duration-200'>BEST PIZZA</p>
            <hr className="w-1/2 mx-auto h-0.5 bg-white"></hr>
            <p className='text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-4 hover:scale-110 duration-200'>ORDER NOW</p>
            <hr className="w-1/2 mx-auto h-0.5 bg-white"></hr>
            <p className='text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-4 hover:scale-110 duration-200'>090-1862-1728</p>
            <hr className="w-1/2 mx-auto h-0.5 bg-white md:mb-10"></hr>
          </div>
          <div className='w-full mt-5'>
            <Tilt className="Tilt" tiltReverse={true} tiltMaxAngleX={15} tiltMaxAngleY={15}>
              <div className="Tilt-inner">
                <Image src={HeroImage} alt="Hero Image" width={700} height={400} />
              </div>
            </Tilt>
          </div>
        </div>
      </section>
  );
}

export default Main;
