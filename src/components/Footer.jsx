import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-col items-center justify-center p-5 gap-6 w-full bg-primary rounded-xl'>
                <h1 className='text-4xl text-center font-semibold'>Are You Ready to kickstart <br />your project with a touch of magic?</h1>
                <p className='text-sm xl:w-[60%] text-white/80 text-center font-semibold'>Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push the boundaries of design and deliver exceptional work.</p>
                <Button className="bg-blue-700 text-white rounded-lg font-bold">Let's Talk</Button>
            </div>
            <div className='w-full flex justify-between items-center flex-col xl:flex-row  mt-5 mb-5 pr-5'>
                <h1 className=' text-white font-semibold text-center'>Copyright @2024, <span className='text-accent'>Iroshan</span> All Rights Reserved.</h1>
                <h1 className=' text-white font-semibold'>Crafted with ❤️ theme_ocean</h1>
            </div>
        </div>
    )
}

export default Footer