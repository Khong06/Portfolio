import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Link from 'next/link'
import Image from 'next/image'
import project1 from "../../public/images/projects/UtoopiaProjectsRe.png";
import project2 from "../../public/images/projects/E_Commerce.png";
import project3 from "../../public/images/projects/ConnectTech.png"
import TransitionEffect from '@/components/TransitionEffect'


const FeaturedProject =({type, title, summary, img, link, github}) =>{

    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-black bg-light shadow-2xl p-12 dark:bg-black dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>


            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <Image src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw'/>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                   <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
                <Link href={link} target="_blank" 
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-black
                sm:px-4 sm:text-base
                '>Visit Project</Link>
            </div>            
            </div>
            
        </article>
    )
}

const Project=({title, type, img, link, github})=>{
    return(
        <article className='w-full-flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-black dark:border-light
        xs:p-4
        '>
             <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
            rounded-br-3xl dark:bg-light
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            '/>


            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className="w-full h-auto" style={{ height: '300px' }}/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                   <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                
                <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={link} target="_blank" 
                className= 'text-lg font-semibold bg-dark text-light rounded-lg p-2 px-6 dark:bg-light dark:text-black md:text-base'>Visit</Link>
                <Link href={github} target="_blank" className='w-10 md:w-6'><GithubIcon /></Link>
                
            </div>            
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
    <Head>
        <title> Yik Khong Ho | Projects Page</title>
        <meta name='description' content="any description"/>
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="~ Digital Canvas ~" 
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

            <div className='grid grid-cols-12 gap-24 gapy-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                    <FeaturedProject title="Healthy App Application"
                    summary="A Modern Healthy Application that developed which improving people's lifestyle. Additional features such as leaderboard that allowed competition, Youtube video, Notepad in application and Food calories calculator have been developed in the application."
                    img={project1}
                    link="https://github.com/Khong06/H-F-Utoopia"
                    github="https://github.com/Khong06/H-F-Utoopia"
                    type="Featured Project"/>
                </div>
                <div className='col-span-6 sm:col-span-12'>
                    <Project title="E-Commerce Website "
                        summary="E-Commerce website that provides a platform which allow the retailer to sell their products"
                        img={project2}
                        link="https://github.com/FreeLancerrrrr/Furniture"
                        github="https://github.com/FreeLancerrrrr/Furniture"
                        type="Featured Project"/>
                </div>
                <div className='col-span-6 sm:col-span-12'>
                    <Project title="Recruitment Website "
                        summary="A Modern Healthy Application that developed which improving people's lifestyle. Additional features such as leaderboard that allowed competition, Youtube video, Notepad in application and Food calories calculator have been developed in the application."
                        img={project3}
                        link="https://yikkhong06.wixsite.com/durham-constabulary"
                        github="https://yikkhong06.wixsite.com/durham-constabulary"
                        type="Featured Project"/>   
                </div>
        

            </div>

        </Layout>
    </main>
    </>
    
  )
}

export default projects