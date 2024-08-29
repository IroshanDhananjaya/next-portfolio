'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div 
        initial={{opacity: 0}} 
        animate ={{opacity: 1, 
        transition: {delay: 2, duration: 0.4, ease: "easeIn"}}}>
            <motion.div
              initial={{opacity: 0}} 
              animate ={{opacity: 1, 
              transition: {delay: 2, duration: 0.4, ease: "easeInOut"}}}
            className="w-[398px] h-[398px] xl:w-[598px] xl:h-[598px] mix-blend-lighten rounded-full">
                <Image src="/assets/1.jpg" priority quality={100}  alt="" className="object-contain rounded-full w-10"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Photo