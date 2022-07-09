import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='bg-[#f8f5eb]'>
        <section className="container px-4 pt-20 xl:pt-24 mx-auto">
      <div className="w-full px-4 md:mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-6  lg:text-7xl text-5xl font-extrabold leading-1 tracking-normal text-black-700 md:text-6xl md:tracking-tight">
        Awesome & Competitive Racing <br />
          <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-[#e40c2b]  to-[#e40c2b] lg:inline">
          in F1 2022 with RPM Esports F1
          </span>{' '}
        </h1>
        <p className="px-0 mb-6 text-lg text-black-500 md:text-xl lg:px-24 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo tempore, aut, eum dolores nostrum beatae quam quibusdam omnis perspiciatis repellat architecto modi sed esse provident eaque consequuntur aliquam corporis?
        </p>
      </div>
      <div className="flex justify-center w-full mx-auto text-center md:w-10/12">
        <img src="/assets/community.svg" className="h-64" />
      </div>
    </section>
    </div>
    
  );
}