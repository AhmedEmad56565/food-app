import { AiFillTag } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaHeart, FaWallet, FaQuestionCircle } from 'react-icons/fa';
import { IoMdArrowDropdownCircle, IoMdPeople } from 'react-icons/io';

export const sideBar = [
  { text: 'Orders', icon: <TbTruckDelivery size={25} /> },
  { text: 'Favorites', icon: <FaHeart size={25} /> },
  { text: 'Wallet', icon: <FaWallet size={25} /> },
  { text: 'Help', icon: <FaQuestionCircle size={25} /> },
  { text: 'Promotions', icon: <AiFillTag size={25} /> },
  { text: 'Best Ones', icon: <IoMdArrowDropdownCircle size={25} /> },
  { text: 'Invite Friends', icon: <IoMdPeople size={25} /> },
];
