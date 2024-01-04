import Image from 'next/image';
import React, { useState } from 'react';

export default function EventDetailsPage() {
  const [selectedItem, setSelectedItem] = useState(1);

  const handleRadioChange = (itemNumber) => {
    setSelectedItem(itemNumber);
  };

  return (
    <div className='newbody z-0'>
      <div className='eventpage animate-fade-in opacity-0'>
        <div className='custom-gradient relative flex-wrap p-7 pt-10 md:flex-wrap md:pt-10 lg:flex lg:pt-24'>
          {/* <img
            src='https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/03/SIH2.png?w=327&ssl=1'
            alt='Event Image'
            className='event-image animate-entry mx-auto h-48 rounded-2xl bg-black shadow-lg md:mx-auto md:flex md:h-44 lg:mx-0 lg:h-56'
          /> */}
          <Image
            src='https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/03/SIH2.png?w=327&ssl=1'
            alt='detailed event image'
            className='event-image animate-entry mx-auto h-48 rounded-2xl bg-black shadow-lg md:mx-auto md:flex md:h-44 lg:mx-0 lg:h-56'
            width={512}
            height={512}
            quality={100}
          />
          <header className='text-white'>
            <h1 className='eventname animate-fade-in pt-8 text-center text-xl font-bold md:pt-10 md:text-center md:text-5xl lg:pl-10 lg:pt-24 lg:text-7xl'>
              Smart India Hackathon
            </h1>
          </header>
        </div>
        <div className='eventdetails mx-auto w-full px-4 py-8 shadow-lg'>
          <section className='px-4 py-6'>
            <p className='mb-4 text-justify text-white'>
              <b>Date </b>: October 2023
            </p>
            <p className='mb-4 text-justify text-white'>
              <b>Location </b>: Bharati vidyapeeth college of engineering Navi
              Mumbai
            </p>
            <p className='mb-8 text-justify leading-relaxed text-white'>
              <b>Description </b>: Smart India Hackathon is a nationwide
              initiative to provide students with a platform to solve problems
              and offer innovative solutions.
            </p>
          </section>
        </div>
        <div className='container'>
          <input
            type='radio'
            name='slider'
            id='item-1'
            checked={selectedItem === 1}
            onChange={() => handleRadioChange(1)}
          />
          <input
            type='radio'
            name='slider'
            id='item-2'
            checked={selectedItem === 2}
            onChange={() => handleRadioChange(2)}
          />
          <input
            type='radio'
            name='slider'
            id='item-3'
            checked={selectedItem === 3}
            onChange={() => handleRadioChange(3)}
          />
          <div className='cards'>
            <label className='card' htmlFor='item-1' id='song-1'>
              {/* <img
                src='https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f'
                alt='song'
                className='memory'
                style={{ display: selectedItem === 1 ? 'block' : 'none' }}
              /> */}
              <Image
                src='https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f'
                alt='song'
                className='memory'
                style={{ display: selectedItem === 1 ? 'block' : 'none' }}
                width={512}
                height={512}
                quality={100}
              />
            </label>
            <label className='card' htmlFor='item-2' id='song-2'>
              {/* <img
                src='https://images.unsplash.com/photo-1559386484-97dfc0e15539'
                alt='song'
                className='memory'
                style={{ display: selectedItem === 2 ? 'block' : 'none' }}
              /> */}
              <Image
                src='https://images.unsplash.com/photo-1559386484-97dfc0e15539'
                alt='song'
                className='memory'
                style={{ display: selectedItem === 2 ? 'block' : 'none' }}
                width={512}
                height={512}
                quality={100}
              />
            </label>
            <label className='card' htmlFor='item-3' id='song-3'>
              {/* <img
                src='https://images.unsplash.com/photo-1533461502717-83546f485d24'
                alt='song'
                style={{ display: selectedItem === 3 ? 'block' : 'none' }}
                className='memory'
              /> */}
              <Image
                src='https://images.unsplash.com/photo-1533461502717-83546f485d24'
                alt='song'
                className='memory'
                style={{ display: selectedItem === 3 ? 'block' : 'none' }}
                width={512}
                height={512}
                quality={100}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
