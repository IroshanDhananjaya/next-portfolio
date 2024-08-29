import React from 'react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import Image from "next/image";
import Link from 'next/link';

const services1 = [
    {
        id: '01',
        title: 'Mobile App Development',
        dec: 'Transforming ideas into intuitive and powerful mobile applications that connect, engage, and delight users, while delivering seamless performance across all devices.'
    },
    {
        id: '02',
        title: 'Web App Development',
        dec: 'Transforming ideas into intuitive and powerful mobile applications that connect, engage, and delight users, while delivering seamless performance across all devices.'
    },
    // {
    //     title: 'Web Site Development',
    //     dec: 'Transforming ideas into intuitive and powerful mobile applications that connect, engage, and delight users, while delivering seamless performance across all devices.'
    // },
    // {
    //     title: 'UI/UX Design',
    //     dec: 'Transforming ideas into intuitive and powerful mobile applications that connect, engage, and delight users, while delivering seamless performance across all devices.'
    // }

]


const services2 = [

    {
        id: '03',
        title: 'Web Site Development',
        dec: 'Transforming ideas into intuitive and powerful mobile applications that connect, engage, and delight users, while delivering seamless performance across all devices.'
    },
    {
        id: '04',
        title: 'UI/UX Design',
        dec: 'Transforming ideas into intuitive and powerful mobile applications that connect, engage, and delight users, while delivering seamless performance across all devices.'
    }

]

const ServicesCard = () => {
    return (
        <div className='w-full h-full'>
            <div className='flex flex-col xl:flex-row items-center justify-between gap-8 mt-5 truncate'>
                <div className=' w-[300px] h-[300px] flex flex-col justify-end text-left p-5 rounded-lg bg-cyan-950'>
                   <h1 className='text-8xl font-extrabold'>01</h1>
                   <h1 className='text-1xl font-semibold mb-5'>Web Site Development</h1>
                   <Link href="/contact"> <h1 className="text-sm - font-semibold text-accent"> Contact me</h1>
                    </Link>
                </div>

                <div className=' w-[300px] h-[300px] flex flex-col justify-end text-left p-5 rounded-lg bg-cyan-950'>
                   <h1 className='text-8xl font-extrabold'>02</h1>
                   <h1 className='text-1xl font-semibold mb-5'>Web App Development</h1>
                   <Link href="/contact"> <h1 className="text-sm - font-semibold text-accent"> Contact me</h1>
                    </Link>
                </div>

                <div className=' w-[300px] h-[300px] flex flex-col justify-end text-left p-5 rounded-lg bg-cyan-950'>
                   <h1 className='text-8xl font-extrabold'>03</h1>
                   <h1 className='text-1xl font-semibold mb-5'>Mobile App Development</h1>
                   <Link href="/contact"> <h1 className="text-sm - font-semibold text-accent"> Contact me</h1>
                    </Link>
                </div>

                <div className=' w-[300px] h-[300px] flex flex-col justify-end text-left p-5 rounded-lg bg-cyan-950'>
                   <h1 className='text-8xl font-extrabold'>04</h1>
                   <h1 className='text-1xl font-semibold mb-5'>UI/UX Design</h1>
                   <Link href="/contact"> <h1 className="text-sm - font-semibold text-accent"> Contact me</h1>
                    </Link>
                </div> 
                

            </div>

        </div>
    )
}

export default ServicesCard