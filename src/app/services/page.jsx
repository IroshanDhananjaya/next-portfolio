
import Footer from '@/components/Footer';
import { LayoutGrid, PanelsTopLeft, Layers3   } from 'lucide-react';

const services = () => {
  return (
    <section className="h-full container flex flex-col gap-8">
      <div className="w-full bg-primary flex flex-col items-center rounded-xl p-5">
          <h1 className="text-1xl text-white/60 font-semibold">Services</h1>
          <h1 className="text-6xl  font-semibold">Quality Services</h1>

          <div className="w-full flex items-center justify-between p-16">
            <div className="border-2 w-[30%] flex flex-col items-start justify-center p-10 rounded-xl h-[300px] border-neutral-800 hover:border-accent-hover transition delay-75 gap-5" >
              <h1 className='text-white/50'><LayoutGrid size={50}/></h1>
              <h1 className='text-white/50 text-2xl font-semibold'>UI/UX Design</h1>
              <p className='text-white/50 text-sm font-semibold'>Bentos gives you the blocks & kits you need to create a true website within minutes.</p>
            </div>
            <div className="border-2 w-[30%] flex flex-col items-start justify-center p-10 rounded-xl h-[300px] border-neutral-800 hover:border-accent-hover transition delay-75 gap-5" >
              <h1 className='text-white/50'><PanelsTopLeft size={50}/></h1>
              <h1 className='text-white/50 text-2xl font-semibold'>Website Design</h1>
              <p className='text-white/50 text-sm font-semibold'>Bentos gives you the blocks & kits you need to create a true website within minutes.</p>
            </div>
            <div className="border-2 w-[30%] flex flex-col items-start justify-center p-10 rounded-xl h-[300px] border-neutral-800 hover:border-accent-hover transition delay-75 gap-5" >
              <h1 className='text-white/50'><Layers3  size={50}/></h1>
              <h1 className='text-white/50 text-2xl font-semibold'>App Development</h1>
              <p className='text-white/50 text-sm font-semibold'>Bentos gives you the blocks & kits you need to create a true website within minutes.</p>
            </div>
          </div>
      </div>
      <div className="">
        <Footer/>
      </div>
    </section>
  )
}

export default services