import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({position, company, companyLink,time, address, work})=>{
    const ref =useRef(null)
    return (<li ref={ref} className='my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center- justify-between md:w-[80%]'>
        
        <LiIcon reference={ref}/>
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-small w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>)
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
        target: ref,
        offset: ["start end", "start"]
    }
  )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Experience</h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div 
                style={{ scaleY: scrollYProgress }}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]
                ' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                   <Details position="Developer" company="Aioi Nissay Dowa Insurance Company, Limited"
                   companyLink="https://www.linkedin.com/company/aioi-nissay-dowa-uk/mycompany/"
                   time="Sep 2022 - Present" address="Newcastle, UK" 
                   work={
                    <>
                    <br />
                   <span className='font-bold'>1. </span>Debug and develop solutions for real-life problems using Java language <br />
                   <span className='font-bold'>2. </span>Problem Resolution and Adaptability: Resolved stakeholder issues promptly, showcasing an ability to find solutions that balanced technical requirements and business objectives. <br />
                   <span className='font-bold'>3. </span>Collaborate with cross-functional teams to gather requirements, design software solutions, and implement new features <br />
                   <span className='font-bold'>4. </span>Assist in the maintenance and enhancement of existing applications, ensuring code quality and adherence to best practices <br />
                   <span className='font-bold'>5. </span>Document technical specifications, system designs, and software configurations for future reference <br/>
                    </>
                   }
                   />

                  <Details position="Technology Internship Experience UK 2023 (Software Developer)" company="Bright Network"
                   companyLink="https://www.brightnetwork.co.uk/dashboard/"
                   time="June 2023 - July 2023" address="Remote" 
                   work={
                    <>
                    <br />
                    <span className='font-bold'>1. </span> Developed innovative solutions to assist SMEs in achieving Net Zero carbon emissions <br />
                    <span className='font-bold'>2. </span> Collaborate with industry experts to research barriers faced by SMEs in sustainability. <br />
                    <span className='font-bold'>3. </span> Created the EcoVantage Shop app, which connecting eco-conscious consumers with sustainable SME products <br />
                    <span className='font-bold'>4. </span> The application served as a platform connecting consumers and retailers, facilitating the purchase and sale of eco-friendly items and products.<br/>
                    </>
                   }
                   />

                  <Details position="Healthy App Developer" company="University of Sunderland (Final Year Project)"
                   companyLink="https://www.sunderland.ac.uk/?utm_source=google&utm_medium=cpc&utm_campaign=rh-always-on-ug-23-24-brand&gad_source=1&gclid=CjwKCAiA-P-rBhBEEiwAQEXhHztfT_llnldegc3Hk9CXufD9ndXCeBj5BR5dRTrfaFBodzVRurgTdRoCRmIQAvD_BwE"
                   time="Sep 2022 - June 2022" address="Sunderland, UK" 
                   work={
                    <>
                    <br />
                    <span className='font-bold'>1. </span> Cooperate with a client to develop a healthy application which helps improve lifestyle in this modern era.<br />
                    <span className='font-bold'>2. </span> The app allowed users to calculate their calories automatically or manually, providing advice and recommendation to the users to improve their lifestyle.<br />
                    <span className='font-bold'>3. </span> Additional features such as gaming aspect, youtube vides, notepad and food calories calculator have been implemented to the app. <br />
                    <span className='font-bold'>4. </span> Users able to compete with their friends, calculate the calories without popping to other website made it a success project. <br/>
                    </>
                   }
                   />

                  <Details position="Data Analyst (Placement)" company="Gentoo Group"
                   companyLink="https://www.gentoogroup.com/"
                   time="Aug 2021 - Oct 2021" address="Sunderland, UK" 
                   work={
                    <>
                    <br />
                    <span className='font-bold'>1. </span> Mining data from primary and secondary sources <br />
                    <span className='font-bold'>2. </span> Helped the company to improve the service charge system. <br />
                    <span className='font-bold'>3. </span> Used statistical tools to interpret data sets from different sources <br />
                    <span className='font-bold'>4. </span> Reorganized data and prepared reports for decision making<br/>
                    </>
                   }
                   />

                  <Details position="Web Developer" company="Durham Constabulary"
                   companyLink="https://www.durham.police.uk/Home.aspx"
                   time="Dec 2020 - May 2021" address="Sunderland" 
                   work={
                    <>
                    <br />
                    <span className='font-bold'>1. </span> Worked as a Secretary and Developer in a group to create a website for Durham Constabulary that used for recruitment.<br />
                    <span className='font-bold'>2. </span> Conducted marketing analysis to assess the demographics and characteristics of the potential audience interested in joining the company. <br />
                    <span className='font-bold'>3. </span> Contributed to the entire process of the website development. <br />
                    <span className='font-bold'>4. </span> Ideas and website created have been selected as reference for Durham Constabulary in 2022.<br/>
                    </>
                   }
                   />
                </ul>
            </div>
        
    </div>


  )
}

export default Experience