import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../constants/routes';
import Dropdown from './dropdown'

export default function Sidebar({setToggleMenu, toggleMenu}) {

    const sideDatas = [
        {
            link: ROUTES.VISUALIZATION,
            name: 'Visualization',
            dropdown: false
        },
        {
            link: ROUTES.DEVICE,
            name: 'Device management',
            dropdown: true,
            option: ['Gateway', 'Polling Method']

        },
        {
            link: ROUTES.APPLICATION,
            name: 'Application',
            dropdown: false
        },
        {
            link: ROUTES.AUTHENTICATION,
            name: 'Authentication',
            dropdown: false
        },
        {
            link: ROUTES.ECOMMERCE,
            name: 'Ecommerce',
            dropdown: false
        },
        {
            link: ROUTES.ECOMMERCE,
            name: 'Alert management',
            dropdown: true,
            option: ['User alerts', 'System alerts']
        },
        {
            link: ROUTES.ECOMMERCE,
            name: 'Notification Management',
            dropdown: true,
            option: ['Settings']
        },
        {
            link: ROUTES.ECOMMERCE,
            name: 'Report management',
            dropdown: true,
            option: ['Report', 'Template designer', 'Report generator']
        },
        {
            link: ROUTES.ECOMMERCE,
            name: 'User management',
            dropdown: false
        },
        {
            link: ROUTES.ECOMMERCE,
            name: 'Liscense information',
            dropdown: false
        },
        {
            link: ROUTES.ECOMMERCE,
            name: 'Help',
            dropdown: false
        },
    ]

    return(
        <div className={` ${toggleMenu ? 'w-1/5' : 'w-24'} transition-all overflow-x-hidden h-full border py-8  flex flex-col justify-center items-center`}>
            <div className='text-xl font-semibold'>
                IIOT ALARMS
            </div>
            {/* <Dropdown name='Test' options={options} /> */}
        <ul className='flex flex-col w-full px-4 gap-4 mt-4 select-none '>
            <li className=' border bg-white shadow  px-4 py-1 rounded-xl cursor-pointer overflow-x-hidden'>
            <Link to={ROUTES.DASHBOARD}>
                <div className='flex items-center font-semibold gap-3'>
                <span className={`material-icons text-3xl`}>dashboard</span>
                Dashboard
                </div>
            </Link>
            </li>
            <span className='font-semibold text-gray-700 text-sm'>
            Pages
            </span>
            {sideDatas.map((sideData) => (
               !sideData.dropdown ? (
                <li className=' border shadow  px-4 py-1 rounded-xl cursor-pointer overflow-x-hidden'>
                <Link to={sideData.link}>
                <div className='flex items-center text-sm gap-3'>
                <span className="material-icons text-2xl ">dashboard</span>
                {sideData.name}
                </div>
                </Link>
            </li>
               ) : (
                <Dropdown name={sideData.name} options={sideData.option} />
               )
            
            ))}
            
        </ul>

       
            
        </div>
    )
}