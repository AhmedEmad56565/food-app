import { useContext } from 'react';
import FoodsItem from './FoodsItem';
import FilterdBtns from './filterdBtns';
import { FoodsContext } from '../store/FoodsContext';

export default function Foods() {
  const { filterdFoods } = useContext(FoodsContext);

  return (
    <div className='mt-6 mb-12'>
      <h1 className='text-4xl md:text-5xl font-bold text-orange-600 text-center mb-6'>
        Top Rated Menu Items
      </h1>
      <FilterdBtns />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 rounded-lg'>
        {filterdFoods.map((food) => (
          <FoodsItem key={food.title} food={food} />
        ))}
      </div>
    </div>
  );
}
