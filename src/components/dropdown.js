/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown(data) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=' border shadow  px-4 py-1 rounded-xl cursor-pointer overflow-x-hidden'>
        <div className='flex items-center text-sm gap-3'>
                <span className={`material-icons text-2xl`}>dashboard</span>
                {data.name}
                <span class="material-icons">expand_more</span>
                </div>
        </Menu.Button>
      </div>
      {/* <div>
        <Menu.Button className=' border bg-white shadow  px-4 py-1 rounded-xl cursor-pointer overflow-x-hidden'>
        <div className='flex items-center font-semibold gap-3'>
                <span className={`material-icons text-3xl`}>dashboard</span>
                {data.name}
                <span class="material-icons">expand_more</span>
                </div>
        </Menu.Button>
      </div> */}

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute z-50 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {data.options.map((option) => (
              <Menu.Item>
              {({ active }) => (
                <Link
                  to='/'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {option}
                </Link>
              )}
            </Menu.Item>
            ))}
            </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
