import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

export default function Dashboard() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <div className='flex'>
           <Sidebar toggleMenu={toggleMenu}setToggleMenu={setToggleMenu} />
           <Header toggleMenu={toggleMenu}setToggleMenu={setToggleMenu} />
        </div>
    )
}