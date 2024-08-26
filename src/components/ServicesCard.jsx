import React from 'react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

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
        <div className='w-full'>
            <div className='w-full flex flex-col mx-auto xl:flex-row items-center justify-between p-5'>
                {
                    services1.map((service, index) => {
                        return (
                            <div className='w-[100%] xl:w-[45%] h-[50%] text-center p-5'  key={index}>
                                <div className='w-full flex justify-around mb-5'>
                                    <h1 className='text-2xl font-extrabold'>{service.title}</h1>
                                </div>
                                <Separator className="bg-accent "/>
                                <p className='m-4 text-sm'>{service.dec}</p>
                                <Button className="text-sm">Contact Me</Button>
                            </div>
                        )
                    })
                }
            </div>

            <div className='w-full flex mx-auto flex-col xl:flex-row items-center justify-between p-5'>
                {
                    services2.map((service, index) => {
                        return (
                            <div className='w-[100%] xl:w-[45%] h-[50%] text-center bg-primary/80 p-5' key={index}>
                                <div className='w-full flex justify-center mb-5'>
                                    <h1 className='text-2xl font-extrabold'>{service.title}</h1>
                                </div>
                                <Separator className="bg-accent "/>
                                <p className='m-4 text-sm'>{service.dec}</p>
                                <Button className="text-sm">Contact Me</Button>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ServicesCard