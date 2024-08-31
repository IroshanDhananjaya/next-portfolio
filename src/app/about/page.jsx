import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import React from 'react'
import { Book } from 'lucide-react';

const Experience = [
  {
    date_range: '2023 - Present',
    role: 'Associate Software Engineer',
    company: 'Kainovation Technologies'
  },
  {
    date_range: '2023(Mar) - 2023(Jun)',
    role: 'Associate Software Engineer',
    company: 'Intelleon Company'
  },
  {
    date_range: '2022 - 2023',
    role: 'Intern Software Engineer',
    company: 'Intelleon Company'
  },
]

const Education = [
  {
    date_range: '2021 - 2023',
    detail: 'Graduate Diploma In Software Engineer (GDSE)',
    institute: 'Institute of Software Engineering'
  },
  {
    date_range: '2018 -2020',
    detail: 'G.C.E Advance Level Technology Stream',
    institute: 'R/Gankanda Central Collage'
  },
  {
    date_range: '2012 -2017',
    detail: 'G.C.E Ordinary Level',
    institute: 'R/Gankanda Central Collage'
  },
]

const About = () => {
  return (
    <section className="h-full container flex flex-col gap-8">
      <div className=" flex-col xl:flex-row  w-full  flex justify-around items-center gap-5">
        <div className="xl:w-[30%] p-4 w-full bg-primary rounded-xl flex flex-col items-center justify-center">
          <Image src="/assets/2.jpg" priority quality={100} width={1000}
            height={1000} alt="" className="object-contain rounded-full w-[70%] mb-5" />
        </div>
        <div className="xl:w-[70%] w-full flex flex-col justify-start gap-5">
        <div className="xl:h-[100%] p-5 bg-primary rounded-xl flex flex-col items-start justify-center gap-8">
          <h1 className='xl:text-6xl text-4xl font-semibold text-left'>I’m Iroshan Dhananjaya, <br></br>a software engineer.</h1>
          <p className='text-lg font-semibold text-left text-white/50'>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. 
            I have a diverse range of experience having worked across various fields and industries.<br/><br/>Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC, 
            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
            looked up one of the more obscure Latin words, consectetur, from 
            a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>

            <Button className="bg-blue-700 text-white rounded-lg">Get In Touch</Button>
        </div>
          
        </div>
      </div>

      

      <div className='w-full flex flex-col xl:flex-row justify-between items-center gap-5'>
        {/* Experience */}
        <div className=' bg-primary rounded-xl w-full xl:w-[50%] p-5 xl:p-10 flex flex-col gap-10'>
          <h1 className='text-2xl font-semibold'>Experience</h1>

          

          {Experience.map((experience, index) => (
            <div className='w-full flex border-b pb-8 border-neutral-800' key={index}>
            <div className='w-[20%] flex justify-center gap-4'>
              <div className='xl:w-[50px] xl:h-[50px] w-[30px] h-[30px] bg-white rounded-lg flex items-center justify-center'><Book className='text-accent'/></div>
            </div>
            <div className='w-[80%] flex flex-col'>
              <h1 className='text-white/50 font-semibold mb-2'>{experience.date_range}</h1>
              <h1 className='text-1xl font-semibold mb-2'>{experience.role}</h1>
              <h1 className='text-white/50 font-semibold'>{experience.company}</h1>
            </div>
          </div>
          ))}

          
  
        </div>
        {/* Education */}
         <div className=' bg-primary rounded-xl w-full xl:w-[50%] p-5 xl:p-10 flex flex-col gap-10'>
          <h1 className='text-2xl font-semibold'>Education</h1>

          

          {Education.map((Education, index) => (
            <div className='w-full flex border-b pb-8 border-neutral-800' key={index}>
            <div className='w-[20%] flex justify-center'>
              <div className='xl:w-[50px] xl:h-[50px] w-[30px] h-[30px] bg-white rounded-lg flex items-center justify-center'><Book className='text-accent'/></div>
            </div>
            <div className='w-[80%] flex flex-col'>
              <h1 className='text-white/50 font-semibold mb-2'>{Education.date_range}</h1>
              <h1 className='text-1xl font-semibold mb-2'>{Education.detail}</h1>
              <h1 className='text-white/50 font-semibold'>{Education.date_range}</h1>
            </div>
          </div>
          ))}

          
  
        </div>
      </div>

      <div className="">
        <Footer/>
      </div>
    </section>
  )
}

export default About