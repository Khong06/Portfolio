import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/projects/Portfolio.jpg"
import portfolioPic from "../../public/images/profile/PersonalPortfolio.png"
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
       
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:-p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={portfolioPic} alt="Yik Khong Ho" className='w-full h-auto lg:hidden md:inline-block md:w-full'
              priority sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text ="Yik Khong Ho" className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              '/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              Passionate Junior Software Developer with a strong foundation in Java and different programming language, business process management, and data integration. Explore my latest projects and biographgy, where I showcase my expertise as a developer in Android, Web development and UI/ UX design. 
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
              <a href='/Yik_Khong_Ho_CV.pdf' target={'_blank'}
              className='flex items-center bg-black text-light p-2.5 px-6
              rounded-lg text-lg font-semibold hover:bg-light hover:text-black
              border-2 border-solid border-transparent hover:border-black
              dark:bg-light dark:text-black hover:dark:bg-black hover:dark:text-light
              hover:dark:border-light
              md:p-2 md:px-4 md:text-base
              '
              download={true}
              >
                  Resume/CV <LinkArrow className={"w-6 ml-1"}/>
                </a>
                <a href='mailto:yik.khong06@gmail.com' target={'_blank'}
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >Contact</a>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className='absolute right-8 bottom-8 inline-block w-16 md:hidden'>
          <Image src={lightBulb} alt="YikKhong" className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}
