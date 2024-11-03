'use client';
import { useState, useEffect } from 'react'

const projects = [
    {
        name: 'Web site development',
        category: "Web",
        img: 'bg-web-site-design'
    },
    {
        name: 'Web App development',
        category: "Web",
        img: 'bg-web-app'
    },
    {
        name: 'Mobile Application Development',
        category: "Mobile",
        img: 'bg-mobile-app'
    },
    {
        name: 'Web Site Design',
        category: "Design",
        img: 'bg-web-design'
    },
    {
        name: 'Mobile App Design',
        category: "Design",
        img: 'bg-mobile-design'
    },
]

const Projects = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');
    const handleFilterChange = (event) => {
        console.log(event)
        setSelectedFilter(event);
    };
    return (
        <div className='flex flex-col items-center justify-center pt-10 gap-4  bg-primary rounded-xl'>
            <h1 className='text-3xl xl:text-5xl font-extrabold'>Works & Projects</h1>
            <p className='xl:w-[50%] text-center font-semibold text-sm text-white/50'>Check out some of my design projects, meticulously crafted with love and dedication, each one reflecting the passion and soul I poured into every detail</p>

            <div className='w-full p-5 pl-10 pr-10'>
                <div className='flex items-center justify-center xl:justify-start gap-8'>
                    <h1 className={` ${selectedFilter === 'All' && "text-accent border-b-2 border-accent"} text-sm font-semibold `} onClick={() => { handleFilterChange('All') }}>All</h1>
                    <h1 className={` ${selectedFilter === 'Web' && "text-accent border-b-2 border-accent"} text-sm font-semibold `} onClick={() => { handleFilterChange('Web') }}>Web</h1>
                    <h1 className={` ${selectedFilter === 'Mobile' && "text-accent border-b-2 border-accent"} text-sm font-semibold`} onClick={() => { handleFilterChange('Mobile') }}>Mobile</h1>
                    <h1 className={` ${selectedFilter === 'Design' && "text-accent border-b-2 border-accent"} text-sm font-semibold`} onClick={() => { handleFilterChange('Design') }}>Design</h1>
                </div>
            </div>

            <div className='w-full grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-8 p-5 pt-2'>

                {projects.map((project, index) => ((selectedFilter === 'All' || project.category.includes(selectedFilter)) ?
                    (
                        <div className=' border-2 hover:scale-105 ease-in duration-300 border-neutral-800 rounded-b-xl' key={index}>
                            <div className={`w-full h-[180px]  ${project.img} bg-center bg-cover`}></div>
                            <p className='ml-5 mt-5  text-sm text-white/80'>{project.category}</p>
                            <h1 className='text-lg ml-5 font-semibold mb-5'>{project.name}</h1>
                        </div>
                    ) : []
                ))}

            </div>
        </div>
    )
}

export default Projects