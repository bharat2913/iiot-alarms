import React, {useState} from 'react';

export default function Header({setToggleMenu, toggleMenu}) {
    const [sidebar, setSidebar] = useState(true)
    return(
        <div className='flex w-full justify-between items-center m-8 h-12 select-none'>
        <div>
        <span onClick={() => setToggleMenu(!toggleMenu)} className="material-icons cursor-pointer">menu</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className="shadow border rounded-xl flex">
              <span className="bg-white rounded-l-xl w-auto flex justify-end items-center text-gray-500 p-2 cursor-pointer">
                  <i className="material-icons text-xl">search</i>
              </span>
              <input className=" w-48 bg-white rounded-md outline-none rounded-r-xl p-2" type="text" placeholder="Search" />
          </div>
          <div className='flex text-sm justify-center items-center cursor-pointer'>
          <span className=" material-icons  text-xl px-2">account_circle</span>Logout
          </div>
          <span class="material-icons text-xl cursor-pointer">settings</span>
          <span class="material-icons text-xl cursor-pointer">notifications</span>
        </div>
        </div>
    )
}