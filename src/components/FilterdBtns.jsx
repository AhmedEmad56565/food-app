/* eslint-disable react/prop-types */
import { filterPrice, filterType } from '../constants/foods';
import FilteredTypeBtn from './FilteredTypeBtn';
import FilteredPriceBtn from './FilteredPriceBtn';

export default function FilterdBtns() {
  return (
    <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center'>
      <div>
        <h3 className='font-bold mb-2'>Filter Type</h3>
        <ul className='flex items-center flex-wrap gap-2'>
          {filterType.map((type) => (
            <FilteredTypeBtn key={type} type={type} />
          ))}
        </ul>
      </div>
      <div>
        <h3 className='font-bold mb-2'>Filter Price</h3>
        <ul className='flex items-center flex-wrap gap-2'>
          {filterPrice.map((price) => (
            <FilteredPriceBtn key={price} price={price} />
          ))}
        </ul>
      </div>
    </div>
  );
}
