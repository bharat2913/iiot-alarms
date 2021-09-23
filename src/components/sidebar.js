import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../constants/routes';

export default function Sidebar({setToggleMenu, toggleMenu}) {

    const sideDatas = [
        {
            link: ROUTES.PAGE,
            name: 'Page'
        },
        {
            link: ROUTES.DEVICE,
            name: 'Device management'
        },
        {
            link: ROUTES.VISUALIZATION,
            name: 'Visualization'
        },
        {
            link: ROUTES.APPLICATION,
            name: 'Application'
        },
        {
            link: ROUTES.AUTHENTICATION,
            name: 'Authentication'
        },
        {
            link: ROUTES.ECOMMERCE,
            name: 'Ecommerce'
        },
        {
            link: ROUTES.ECOMMERCE,
            name: 'Alert management'
        },
        {
            link: ROUTES.ECOMMERCE,
            name: 'Notification Management'
        },
        {
            link: ROUTES.ECOMMERCE,
            name: 'Report management'
        },
        {
            link: ROUTES.ECOMMERCE,
            name: 'User management'
        },
        {
            link: ROUTES.ECOMMERCE,
            name: 'Liscense information'
        },
        {
            link: ROUTES.ECOMMERCE,
            name: 'Help'
        },
    ]

    return(
        <div className={` ${toggleMenu ? 'w-1/5' : 'w-24'} transition-all overflow-hidden h-full border py-8  flex flex-col justify-center items-center`}>
            <div className='text-xl font-semibold'>
                IIOT ALARMS
            </div>

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
                <li className=' border shadow  px-4 py-1 rounded-xl cursor-pointer overflow-x-hidden'>
                <Link to={sideData.link}>
                <div className='flex items-center text-sm gap-3'>
                <span className="material-icons text-2xl ">dashboard</span>
                {sideData.name}
                </div>
                </Link>
            </li>
            
            ))}
            
        </ul>
            
        </div>
    )
}