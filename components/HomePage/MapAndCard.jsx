import { DragHandleIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { cardData } from '../../constant/cardConst';

import Card from './Card';

const MapAndCard = () => {
  return (
    <section className='text-gray-600 body-font relative'>
      <div className='container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap'>
        <div className='lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
          {cardData && (
            <div className='grid grid-rows-2 grid-flow-col gap-7 '>
              {cardData.map((card, id) => (
                <Card key={id} {...card} />
              ))}
            </div>
          )}
          <div className='mx-auto my-7'>
            <Button
              leftIcon={<DragHandleIcon />}
              width={'109px'}
              backgroundColor={'gray.100'}
              variant={'outline'}
              fontWeight={'400'}
              padding={'0 15px'}>
              Settings
            </Button>
          </div>
        </div>
        <div className='lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative m-10 '>
          <iframe
            width='100%'
            height='100%'
            className='absolute inset-0'
            frameBorder='0'
            title='map'
            marginHeight='0'
            marginWidth='0'
            scrolling='no'
            src='https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed'
            style={{
              filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
            }}></iframe>
          <div className='bg-white relative flex flex-wrap py-6 rounded shadow-md'>
            <div className='lg:w-1/2 px-6'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                ADDRESS
              </h2>
              <p className='mt-1'>It Can Be targated with Google Api</p>
            </div>
            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                EMAIL
              </h2>
              <a className='text-indigo-500 leading-relaxed'>
                example@email.com
              </a>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-4'>
                PHONE
              </h2>
              <p className='leading-relaxed'>123-456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapAndCard;
