/* eslint-disable react/prop-types */
export default function FoodsItem({ food }) {
  return (
    <div className='rounded-lg duration-300 hover:scale-105'>
      <img
        src={food.image}
        alt={food.title}
        className='w-full h-[200px] object-cover rounded-t-lg'
      />
      <div className='flex flex-col sm:flex-row justify-between sm:items-center p-3 shadow-xl'>
        <h5 className='font-bold mb-2 sm:mb-0'>{food.title}</h5>
        <p className='bg-orange-500 text-white p-2 rounded-md self-start'>
          {food.price}
        </p>
      </div>
    </div>
  );
}
