import { useContext } from 'react';
import { FoodsContext } from '../store/FoodsContext';

/* eslint-disable react/prop-types */
export default function FilteredTypeBtn({ type }) {
  const { handleFilteringType } = useContext(FoodsContext);

  return (
    <li>
      <button
        className='hover:bg-orange-700 hover:text-white duration-300'
        onClick={() => handleFilteringType(type)}
      >
        {type}
      </button>
    </li>
  );
}
