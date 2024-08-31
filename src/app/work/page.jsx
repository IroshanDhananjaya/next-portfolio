import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
import React from 'react'

const Work = () => {
  return (
    <section className="h-full container flex flex-col gap-8">
      <Projects/>

      <div className="">
        <Footer/>
      </div>

    </section>
  )
}

export default Work