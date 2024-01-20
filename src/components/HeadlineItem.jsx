/* eslint-disable react/prop-types */
export default function HeadlineItem({ meal }) {
  return (
    <div className='relative max-h-[200px]'>
      <div className='absolute top-0 left-0 w-full h-full bg-black/40 text-white p-3 flex flex-col rounded-2xl'>
        <h3 className='text-3xl md:text-2xl font-bold'>{meal.title}</h3>
        <p className='mb-auto text-xl'>{meal.description}</p>
        <button className='bg-white text-black self-start'>Order Now</button>
      </div>
      <img
        className='w-full max-h-full object-cover rounded-2xl'
        src={meal.image}
        alt={meal.title}
      />
    </div>
  );
}
