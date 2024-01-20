import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { sideBar } from '../constants/side-bar';

/* eslint-disable react/prop-types */
export default function Sidebar({ showSidebar, onClose }) {
  const SidebarComponent = (
    <>
      {/* overlay */}
      {showSidebar && (
        <div
          className='fixed top-0 left-0 w-full h-screen bg-black/80 z-10'
          onClick={() => onClose()}
        />
      )}
      {/* Sidebar Menu */}
      <div
        className={
          showSidebar
            ? 'fixed top-0 left-0 w-[200px] md:w-[300px] h-screen bg-white z-20 duration-300 p-4'
            : 'fixed top-0 -left-[100%] w-[200px] md:w-[300px] h-screen bg-white z-20 duration-300 p-4'
        }
      >
        <div className='flex-between'>
          <h3 className='text-[14px] sm:text-xl lg:text-2xl'>
            Best <span className='font-bold'>Eats</span>
          </h3>

          <div onClick={() => onClose()} className='cursor-pointer'>
            <AiOutlineClose size={25} />
          </div>
        </div>

        <ul className='pt-12'>
          {sideBar.map((list) => (
            <li key={list.text} className='mb-8'>
              <div className='flex items-center space-x-4 text-slate-800'>
                <span>{list.icon}</span>
                <p className='text-xl'>{list.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return createPortal(SidebarComponent, document.getElementById('side-bar'));
}
