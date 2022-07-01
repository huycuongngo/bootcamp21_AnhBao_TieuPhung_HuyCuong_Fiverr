import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsPinterest,
  BsInstagram,
} from 'react-icons/bs';
import { RiEarthLine } from 'react-icons/ri';
import { ImAccessibility } from 'react-icons/im';

export const FooterTemplate = () => {
  return (
    <footer className='py-6 border-t flex justify-center items-center'>
      <div className='container px-6 space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50'>
        <div className='grid grid-cols-12 gap-y-4 xl:flex xl:justify-between'>
          <div className='col-span-6 text-center md:text-left md:col-span-3'>
            <p className='pb-1 text-lg font-medium'>Category</p>
            <ul>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
            </ul>
          </div>
          <div className='col-span-6 text-center md:text-left md:col-span-3'>
            <p className='pb-1 text-lg font-medium'>About</p>
            <ul>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
            </ul>
          </div>
          <div className='col-span-6 text-center md:text-left md:col-span-3'>
            <p className='pb-1 text-lg font-medium'>Support</p>
            <ul>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
            </ul>
          </div>
          <div className='col-span-6 text-center md:text-left md:col-span-3'>
            <p className='pb-1 text-lg font-medium'>Community</p>
            <ul>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
            </ul>
          </div>
          <div className='col-span-6 text-center md:text-left md:col-span-3'>
            <p className='pb-1 text-lg font-medium'>
              More From Fiverr
            </p>
            <ul>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='hover:dark:text-violet-400'
                >
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex lg:justify-between flex-wrap justify-center  text-center  pt-6 '>
          <div className='flex items-center lg:justify-start justify-center gap-x-5'>
            <NavLink to='/'>
              <svg
                width='91'
                height='27'
                viewBox='0 0 91 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='#7A7D85'>
                  <path d='m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z'></path>
                </g>
                <g fill='#7A7D85'>
                  <path d='m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z'></path>
                </g>
              </svg>
            </NavLink>
            <span className='text-lg text-[#8e8f92]'>
              ©2022 All rights reserved
            </span>
          </div>
          <div className='flex justify-center pt-4 flex-wrap space-x-2 lg:pt-0 lg:col-end-13'>
            <div className='w-10 h-10 cursor-pointer flex justify-center items-center hover:bg-gray-300 rounded-full text-xl transition-all'>
              <BsTwitter />
            </div>
            <div className='w-10 h-10 cursor-pointer flex justify-center items-center hover:bg-gray-300 rounded-full text-xl transition-all'>
              <BsFacebook />
            </div>
            <div className='w-10 h-10 cursor-pointer flex justify-center items-center hover:bg-gray-300 rounded-full text-xl transition-all'>
              <BsLinkedin />
            </div>
            <div className='w-10 h-10 cursor-pointer flex justify-center items-center hover:bg-gray-300 rounded-full text-xl transition-all'>
              <BsPinterest />
            </div>
            <div className='w-10 h-10 cursor-pointer flex justify-center items-center hover:bg-gray-300 rounded-full text-xl transition-all'>
              <BsInstagram />
            </div>
            <div className=' text-gray-700 cursor-pointer justify-center flex items-center text-xl font-semibold  gap-x-1 h-10 w-32 hover:bg-gray-300 rounded-full transition-all'>
              <RiEarthLine />
              <span>English</span>
            </div>
            <div className=' text-gray-700 cursor-pointer justify-center flex items-center text-xl font-semibold   h-10 w-32 hover:bg-gray-300 rounded-full transition-all'>
              US$ USD
            </div>
            <div className=' text-gray-700 cursor-pointer justify-center flex items-center text-xl font-semibold   h-10 w-10 hover:bg-gray-300 rounded-full transition-all border border-gray-500 hover:border-white'>
              <ImAccessibility />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
