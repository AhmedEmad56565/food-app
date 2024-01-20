import { ratings } from '../constants/ratings';
import RateItem from './RateItem';

export default function Rating() {
  return (
    <>
      <h1 className='text-4xl md:text-5xl font-bold text-orange-600 text-center mb-6'>
        Top Rated Menu Items
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14'>
        {ratings.map((rate) => (
          <RateItem key={rate.text} rate={rate} />
        ))}
      </div>
    </>
  );
}
