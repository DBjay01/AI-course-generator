"use client"

import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { HiHome, HiMiniRectangleStack, HiShieldCheck, HiOutlineArrowSmallLeft } from "react-icons/hi2";

function SideBar() {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            icon: <HiHome />,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Explore',
            icon: <HiMiniRectangleStack />,
            path: '/dashboard/explore'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: <HiShieldCheck />,
            path: '/dashboard/upgrade'
        },
        {
            id: 4,
            name: 'Back',
            icon: <HiOutlineArrowSmallLeft />,
            path: '/dashboard/back'
        }
    ];

    const path = usePathname();

    // Log the Menu array to check the paths
    console.log(Menu);

    return (
        <div className='fixed h-full md:w-64 p-4 shadow-md'>
            <div className='flex items-center gap-4'>
                <Image src={'/logo.png'} width={40} height={40} alt='logo'></Image>
                <h1 className='text-xl font-bold'>Vivid Fusion</h1>
            </div>
            <hr className='my-5'></hr>

            <ul>
                {Menu.map((item) => {
                    // Safeguard against undefined paths
                    if (!item.path) {
                        console.error(`Menu item with id ${item.id} has an undefined path.`);
                        return null; // Skip rendering if path is undefined
                    }
                    return (
                        <Link href={item.path} key={item.id}>
                            <div className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${item.path === path && 'bg-gray-100 text-black'}`}>
                                <div className='text-2xl'>{item.icon}</div>
                                <h2>{item.name}</h2>
                            </div>
                        </Link>
                    );
                })}
            </ul>

            <div className='absolute bottom-10 w-[80%]'>
                <h2 className='text-lg m-5 font-bold'>Make best use of it </h2>
                <h2 className='text-sm mt-5 text-gray-400 '>-By Vivid Fusion</h2>
            </div>
        </div>
    );
}

export default SideBar;