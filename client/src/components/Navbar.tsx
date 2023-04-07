import React, { useState } from 'react';
import ThemeChanger from './ThemeChanger';

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center
      text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            {/* <ion-icon name="logo-ionic"></ion-icon> */}
          </span>
          Designer
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
          {/* <ion-icon name={open ? 'close':'menu'}></ion-icon> */}
          <span className="material-icons-outlined text-3xl">
            {open ? "close" : "menu"}
          </span>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }

            <div className='mx-3 mt-2'>
            <ThemeChanger/>
            </div>

          <button className='btn btn-success m-3'>
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;