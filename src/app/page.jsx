import Photo from "@/components/Photo";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiDownload } from 'react-icons/fi'

export default function Home() {
  return (
    <section className="h-full container flex flex-col gap-8">
      <div className=" flex-col xl:flex-row  w-full  flex justify-around items-center gap-5">
        <div className="xl:w-[30%] p-5 w-full bg-primary rounded-xl flex flex-col items-center justify-center gap-4">
          <Image src="/assets/1.jpg" priority quality={100} width={500}
            height={500} alt="" className="object-contain rounded-full w-[65%] mb-10" />
          <h1 className="text-4xl text-center font-extrabold">Iroshan <br /> Dhananjaya</h1>
          <p className="text-sm text-center text-white/80">I am a Software Enginer based in <br /> Sri Lanka.</p>
          <div className="mb-8 xl:mb-0">
            <Socials
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-blue-700 rounded-lg flex justify-center 
                items-center text-blue-700 text-base hover:bg-blue-700 hover:text-primary 
                hover:transition-all duration-500"/>
          </div>
        </div>
        <div className="xl:w-[70%] w-full flex flex-col justify-between gap-5">
          <div className="xl:h-[60%] p-5 bg-primary rounded-xl flex flex-col items-start justify-center gap-6">
            <p className="text-sm text-center text-white/80">Hello There!</p>
            <h1 className="text-4xl text-left font-semibold"> develop innovative mobile apps, websites, and web applications, providing tailored solutions for diverse digital needs</h1>
            <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-lime-600"></div>
            <p className="text-sm text-center text-white/80 flex items-center gap-2">Available for Freelancing</p>
            </div>
           
            <Button className="bg-blue-700 text-white rounded-lg">Download CV</Button>
          </div>
          <div className="xl:h-[30%] bg-primary rounded-xl p-5">
            <Stats />
          </div>
        </div>
      </div>
      <div className="w-full bg-primary rounded-xl">
        <Projects/>
      </div>
    </section>
  );
}
