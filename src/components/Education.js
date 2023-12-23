import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({type, time, place, info})=>{
    const ref =useRef(null)
    return (<li ref={ref} className='my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center- justify-between  md:w-[80%]'>
        
        <LiIcon reference={ref}/>
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}&nbsp;
           </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-small w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>)
}

const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
        target: ref,
        offset: ["start end", "center start"]
    }
  )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Education</h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div 
                style={{ scaleY: scrollYProgress }}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
                md:w-[2px] md:left-[30px] xs:left-[20px]
                ' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                   <Details type="BSc (Hons) Computer Science" time="2019-2022"
                   place="University of Sunderland, UK"
                   info={
                    <>
                    <br />
                    Modules <br/>
                   1. Android Software Development(Java) <br />
                   2. Data analyst(SQL, C) <br />
                   3. Web Development(JavaScript, HTML, PHP)<br />
                   4. UI/ UX Design <br/>
                   5. Intermediate Software Development (C#, JavaScript, HTML, PHP) <br />
                   6. Artificial Intelligence (Python) <br/>
                   7. Advanced Cyber Security <br />
                    </>
                   }
                    
                   />

                  <Details type="Monash University Foundation Year (MUFY)" time="2019-2022"
                   place="Sunway University, Selangor, Malaysia"
                   info={
                    <>
                    <br />
                    Modules <br/>
                   1. Accouting <br />
                   2. Information Technology <br />
                   3. Mathematics<br />
                   4. English <br/>
                    </>
                   }
                    
                   />
                </ul>
            </div>
        
    </div>


  )
}

export default Education