/* eslint-disable react/prop-types */
export default function RateItem({ rate }) {
  return (
    <div className='flex-between bg-gray-200 p-3 rounded-md'>
      <h5 className='font-bold text-xl'>{rate.text}</h5>
      <img src={rate.image} alt={rate.text} className='w-[70px] h-[90px]' />
    </div>
  );
}
