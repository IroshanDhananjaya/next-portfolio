'use client';

import CountUp from "react-countup"

const stats = [
    {
        num: 3,
        text: 'Years of experience',
    },
    {
        num: 50,
        text: 'Projects Completed',
    },
    {
        num: 8,
        text: 'Technologies masterd',
    },{
        num: 300,
        text: 'Code commits',
    }

]

const Stats = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none">
                {
                    stats.map((item,index) => {
                        return(
                            <div className="flex-1 flex flex-col gap-4 items-center justify-center xl:justify-start" key={index}>
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p
                                    className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]" } leading-snug text-white/80 text-center`}
                                >{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Stats