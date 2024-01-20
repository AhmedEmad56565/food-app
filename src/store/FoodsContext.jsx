/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { foods } from '../constants/foods';

export const FoodsContext = createContext({
  filterdFoods: [],
  handleFilteringType: () => {},
  handleFilteringPrice: () => {},
});

export function FoodsComponent({ children }) {
  const [filterdFoods, setFilterdFoods] = useState(foods);

  function handleFilteringType(cate) {
    if (cate === 'All') {
      setFilterdFoods(foods);
    } else {
      const filterdFoodsType = foods.filter((food) => food.category === cate);
      setFilterdFoods(filterdFoodsType);
    }
  }

  function handleFilteringPrice(pri) {
    const filterdFoodsPrice = foods.filter((food) => food.price === pri);
    setFilterdFoods(filterdFoodsPrice);
  }

  const val = {
    filterdFoods,
    handleFilteringType,
    handleFilteringPrice,
  };

  return <FoodsContext.Provider value={val}>{children}</FoodsContext.Provider>;
}
