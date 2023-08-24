import Image from 'next/image';
import React from 'react';

export function Project  () {
  return (
    <section className="container mx-auto px-4  py-8">
      <h3 className="text-2xl text-white font-bold mb-4">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
      <div className=" p-4 flex  flex-col border  border-blue-500 rounded">
          <span className='text-xl'>👩‍💻</span>
          <a  href='https://github.com/wenblack/food-explorer-api' target='blank' className="text-lg text-gray-100 font-bold hover:text-blue-600">Food explorer Api</a>
          <p className="text-slate-400 mt-2">
          A complete Node.js backend application as part of the RocketSeat Explorer course, utilizing TypeScript, Multer, Prisma ORM, and JWT-token authentication.
            </p>
        </div>

        
        <div className=" p-4 flex  flex-col border border-blue-500 rounded">
          <span className='text-xl'>💻</span>
          <a  href='https://github.com/wenblack/food-explorer-next-tailwind-ts' target='blank' className="text-lg hover:text-blue-600 text-gray-100 font-bold">Food Explorer Page </a>
          <p className="text-slate-400 mt-2">
          A complete React application as part of the RocketSeat Explorer course, utilizing NextJs, TypeScript, Axios , and Tailwind CSS.
          </p>
        </div>

        
        <div className=" p-4 flex  flex-col border border-blue-500 rounded">
          <span className='text-xl'>📱</span>
          <a  href='https://github.com/wenblack/appHabitsNlw2023' target='blank' className="text-lg hover:text-blue-600 text-gray-100 font-bold"> Habit Tracker</a>
          <p className="text-slate-400 mt-2">Mobile app created  in nlw program of rocketSeat School, using nativeWind and Expo SDK</p>
        </div>
      </div>
    </section>
  );
};

