import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:pt-8 xl:pb-24">
          <div className="text-center">
            <span className="text-xl">
              Software Engineer
            </span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Iroshan Dhananjaya</span></h1>
            <p className=" mb-9 text-white/80">
              As a dedicated software engineer with a passion for crafting efficient and scalable solutions,
              I specialize in turning complex problems into streamlined, user-friendly applications.
              With a strong foundation in full-stack development,
            </p>
            <div className="flex flex-col items-center justify-center xl:flex-row items-center gap-8">
              <Button 
              variant = 'outline'
              size= 'lg'
              className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials 
                containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                items-center text-accent text-base hover:bg-accent hover:text-primary 
                hover:transition-all duration-500"/>
              </div>
            </div>
          </div>

          {/* <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div> */}
        </div>
      </div>
      <Stats/>
    </section>
  );
}
