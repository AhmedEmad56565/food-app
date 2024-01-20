export default function Hero() {
  return (
    <div className='max-h-[500px] relative mt-7'>
      <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex items-center'>
        <div>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold'>
            The <span className='text-orange-500'>Best</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold'>
            <span className='text-orange-500'>Foods</span> Devlivered
          </h1>
        </div>
      </div>
      <img
        src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='main image'
        className='w-full max-h-[500px] object-cover'
      />
    </div>
  );
}
