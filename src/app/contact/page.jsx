'use client';

import { Label } from '@/components/ui/label';

import { MapPin, Phone, Mail   } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const Contact = () => {

  return (
    <section className="h-full container flex flex-col gap-8">
      <div className="w-full bg-primary flex flex-col items-center rounded-xl p-5 gap-10">
        <h1 className='text-5xl font-semibold'>Get in Touch with Me!</h1>

        <div className='w-full flex justify-center gap-8'>
          <div className='border-2 flex flex-col gap-10 rounded-xl border-neutral-800 w-full xl:w-[30%] pt-12 pb-12 pl-8 '>

            <div className='flex flex-col'>
              <MapPin className='text-accent mb-2'/>
              <h1 className='font-semibold text-white/70 '>My Office :</h1>
              <h1 className='font-semibold text-white/50'>Rathnapura, Sri Lanka</h1>
            </div>

            <div className='flex flex-col'>
              <Phone  className='text-accent mb-2'/>
              <h1 className='font-semibold text-white/70 '>contact number :</h1>
              <h1 className='font-semibold text-white/50'>+9474 289 3976</h1>
            </div>

            <div className='flex flex-col'>
              <Mail  className='text-accent mb-2'/>
              <h1 className='font-semibold text-white/70 '>Email us :</h1>
              <h1 className='font-semibold text-white/50'>iroshandhananjaya0322@gmail.com</h1>
            </div>

          </div>
          <div className='border-2 border-neutral-800 w-[65%] rounded-xl'>
            <div className='w-full flex justify-center pt-10 pr-10 pl-10 gap-10'>
              <div className='w-[50%] flex flex-col gap-3'>
                <Label className="text-sm font-semibold text-white/50">Full Name</Label>
                <Input className="h-16 text-black font-semibold text-1xl"/>
              </div>
              <div className='w-[50%] flex flex-col gap-3'>
                <Label className="text-sm font-semibold text-white/50">Email Address</Label>
                <Input type="email" className="h-16 text-black font-semibold text-1xl"/>
              </div>
            </div>
            <div className='w-full flex justify-center pt-10 pr-10 pl-10 gap-10'>
            <div className='w-full flex flex-col gap-3'>
                <Label className="text-sm font-semibold text-white/50">Your Message</Label>
                <Textarea type='textArea' className="h-32  text-black font-semibold text-1xl"/>
              </div>
            </div>

            <div className='w-full flex justify-left pt-10 pr-10 pl-10'>
              <Button className="bg-blue-700 text-white rounded-lg">Send Me Message </Button>
            </div>
            
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
      </section>
  )
}

export default Contact