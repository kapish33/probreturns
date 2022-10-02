import { useState } from 'react';
import Piles from './Piles';
import BlackHeart from '../../assets/balckHeart.png';
import RedHeart from '../../assets/redheart.png';
import Image from 'next/image';
import Services from './Services';

const Card = ({ topButtons, price, street, services, image }) => {
  const [heart, setHeart] = useState(true);
  return (
    <div className='pb-3 shadow-2xl rounded-[26px]'>
      <div className='relative'>
        <Image className='w-[100%] rounded-[26px]' src={image} alt={image} />
        <div className='absolute top-2 left-2'>
          <div className='flex h-12 '>
            <div className='flex'>
              {topButtons &&
                topButtons.map((btn, i) => (
                  <Piles classes={''} key={i} {...btn} />
                ))}
            </div>
            <div
              className='bg-white m-2 rounded-md'
              onClick={() => setHeart(!heart)}>
              {heart && heart ? (
                <Image
                  height={'30px'}
                  width={'30px'}
                  src={BlackHeart}
                  alt={'img'}
                />
              ) : (
                <Image
                  height={'30px'}
                  width={'30px'}
                  src={RedHeart}
                  alt={'img'}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='pl-3 m-3 pr-3'>
        <div className='font-bold text-[25px] text-black'>{price}</div>
        <p className='text-lg py-2'>{street}</p>
        <div className='flex justify-between gap-3'>
          {services &&
            services.map((service, i) => <Services key={i} service={service} />)}
        </div>
      </div>
    </div>
  );
};

export default Card;
