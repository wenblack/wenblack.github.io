"use-client"

import React from 'react';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {Project} from '@/components/Project';
import { AboutMe } from '@/components/AboutMe';
import { Skills } from '@/components/Skills';
import { SoftSkills } from '@/components/SoftSkills';

const App = () => {
  return (
    <div className=' flex flex-col justify-between mx-8 min-h-screen'>
      <Header />
      <header className="py-8">
        <div className="flex flex-col gap-8 items-center justify-center mx-auto px-4 h-[80vh]">
          <h2 className="text-3xl text-center font-bold">Let&apos;s create <strong className='text-blue-600'>remarkable</strong> web experiences together!</h2>
          <p className="text-slate-400 text-center mt-4">
          Trying to create captivating user experiences that combine aesthetics and functionality
          </p>
          <a href="#about" className="mt-4 inline-block bg-blue-700 hover:opacity-70 text-white font-bold py-2 px-4 rounded">Learn More</a>
        </div>
      </header>
      <section id='about' className='flex  self-center pt-16 w-full max-w-[800px] '>
        <AboutMe/>
      </section>
      <section id='projects' className='pt-16'>
      <Project />
      </section>
      <section id='skills' className='pt-16'>
      <SoftSkills/>
      <Skills/>
      </section>
      <Footer />
    </div>
  );
};


export default App;
