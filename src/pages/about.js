import AnimatedText from '@/components/AnimatedText'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Skills from '@/components/Skills'
import Image from 'next/image'
import Education from '@/components/Education'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/downloadPic.png"
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import Experience from '@/components/Experience'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers=({value})=> {
    const ref = useRef(null);
    const motionValue =useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000});
    const isInView= useInView(ref);


    useEffect(()=>{
        if(isInView)
        {
            motionValue.set(value);
        }
    },[isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest)=>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent= latest.toFixed(0);
            }
        })
    }, [springValue,value])
    


    return <span ref={ref}>

    </span>


}




const about = () => {
  return (
   <>
    <Head>
        <title> Yik Khong Ho | About Page</title>
        <meta name='description' content="any description"/>
    </Head>
    <TransitionEffect/>
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text ="Coding Journeys!" className='mb-16 lg:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8'/>
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-1 text-lg font-bold uppercase text-dark mt-5 dark:text-light'>
                        Biography
                    </h2>
                    <p className='font-medium'>
                    Hi, I'm Yik Khong Ho, a results-oriented Developer currently contributing my skills at Aioi Nissay Dowa EU.
                    With a solid foundation in Java programming, business process management, and data integration, I bring a 
                    proactive and innovative approach to software development.
                     </p>
                    <p className='my-4 font-medium'>
                    In my role at Aioi Nissay Dowa EU, I am engaged in debugging and developing solutions using the Java language. 
                    Collaborating seamlessly with cross-functional teams, I gather requirements, design software solutions, and 
                    implement new features. My responsibilities extend to the maintenance and enhancement of existing applications, 
                    ensuring code quality and adherence to best practices. Through this experience, I have strengthened my problem-solving 
                    skills and contributed to real-life solutions.


                    </p>
                    <p className='font-medium'>
                    Outside of my professional role, my academic background includes a First-Class BSc in Computer Science from the University of Sunderland. 
                    My commitment to continuous learning is evident in my coursework, covering areas such as Android Software Development, Data Analysis,
                    Web Development, UI/UX Design, React, Tailwind, Next, and Artificial Intelligence. 
                    <br />
                    <br/>
                    I am enthusiastic about bringing my expertise to your company, leveraging my technical abilities to drive innovative solutions for your team.
                    </p>
                </div>
                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                bg-light p-8 dark:bg-black dark:border-light xl:col-span-4 md:order-1 md:col-span-8
                '>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-light '/>
                    <Image src={profilePic} alt="Yik Khong Ho" className="w-full h-auto rounded-2xl
                    priority sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw'"/>
                </div>


                <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                    
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={2}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                            Colleagues Review
                        </h2>
                    </div>

                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={10}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                            Projects Completed
                        </h2>
                    </div>

                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={3}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                            Years of Experience
                        </h2>
                    </div>
                </div>
            </div>
            <Skills />
            <Experience/>
            <Education/>
        </Layout>
        
    </main>
   </>
  )
}

export default about