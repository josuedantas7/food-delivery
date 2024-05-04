import React from 'react'
import { IoIosMenu, IoIosSearch } from "react-icons/io";

import { TypesSearchRestaurantes } from './TypesSearchRestaurants';

export const SearchRestaurants = ({type, action} : TypesSearchRestaurantes) => {
  return (
    <div className='relative w-full bg-white rounded-lg'>
        <input placeholder='Buscar Restaurantes' className='border-gray-100 rounded-lg py-2 px-4 w-full' type='text'  />
        {type === 'menu' ? (
            <IoIosMenu className='bg-red-600 hover:cursor-pointer h-[40px] w-[40px] absolute right-0 top-0 text-white rounded-lg p-2' />
        ) : type === 'search' ? (
            <IoIosSearch className='bg-green-600 hover:cursor-pointer h-[40px] w-[40px] absolute right-0 top-0 text-white rounded-lg p-2' />
        ) : null}
    </div>
  )
}