import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Dropdown from '../components/dropdown'

export default function Dashboard() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const options = ['test1', 'test2', 'test3']
    return(
        <div className='flex'>
           <Sidebar toggleMenu={toggleMenu}setToggleMenu={setToggleMenu} />
           {/* <div className='w-full'> */}
            <Header toggleMenu={toggleMenu}setToggleMenu={setToggleMenu} />
           {/* </div> */}
        </div>
    )
}