import RealEstate from '../../../assets/RealEstate.png';
import Image from 'next/image';
import { Routes } from '../../../constant/routeConst';
import AnchorLink from '../../AnchorLink';
import { useRouter } from 'next/router';

const Header = () => {
  const { asPath } = useRouter();
  return (
    <div className='container mx-auto my-5 '>
      <div className='flex'>
        <Image
          className='flex-none'
          priority
          height='28px'
          width={'188px'}
          src={RealEstate}
          alt='Real Estate'
        />
        <div className='grow w-64 '>
          <div className='flex justify-evenly'>
            {Routes.map((routeData, i) => (
              <AnchorLink key={i} {...routeData} asPath={asPath} />
            ))}
          </div>
        </div>
        <div className='flex-2 w-32 '>
          <div className='flex justify-between'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-[#B7B7B7] my-1'
              fill='#B7B7B7'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>
            <div className='p-4 shadow-sm bg-purple-500 w-4 h-4 rounded-full '></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
