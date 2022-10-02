import Filters from './Filters';
import MapAndCard from './MapAndCard';

const HomePage = () => {
  return (
    <div className='container mx-auto  my-6'>
      <Filters />
      <MapAndCard />
    </div>
  );
};

export default HomePage;
