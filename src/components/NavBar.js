import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "./Logo";
import { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";


const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span
                className={`h-[1px] inline-block w-0 bg-dark 
                absolute left-0 -bottom-0.5 } dark:bg-light
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath ===href? 'w-full' : 'w-0'}
                `}
                
            >&nbsp;
            </span>
        </Link>
    );
};


const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick= ()=>{
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-black my-2`} onClick={handleClick}>
            {title}

            <span
                className={`h-[1px] inline-block w-0 bg-light 
                absolute left-0 -bottom-0.5 } dark:bg-light
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath ===href? 'w-full' : 'w-0'}
                dark:bg-black`}
                
            >&nbsp;
            </span>
        </button>
    );
};

const NavBar =() => {

    const [mode,setMode]=useThemeSwitcher();
    const [isOpen, setIsOpen]= useState(false);

    const handleClick=()=>{
        setIsOpen(!isOpen)
    }

    return(
        <header
        className="w-full px-32 py-8 font-medium flex items-center justify-between
        dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8
        ">

            <button className="flex flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-black dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>
                <span className={`bg-black dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0':'opacity-100'}`}></span>
                <span className={`bg-black dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
            </button>


            
            <div id="desktop" className="w-full flex justify-between items-center lg:hidden">
            <nav>
                <CustomLink href="/" title="Home" className="mr-4"/>
                <CustomLink href="/about" title="About" className="mx-4"/>
                <CustomLink href="/projects" title="Projects" className="mx-4"/>
            </nav>
            
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} className="w-6 mr-3" whileTap={{scale:0.9}}>
                    <TwitterIcon />
                </motion.a>
                <motion.a href="https://github.com/Khong06" target={"_blank"} whileHover={{y:-2}} className="w-6 mx-3" whileTap={{scale:0.9}}>
                    <GithubIcon />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/yik-khong-ho-55a693202" target={"_blank"} whileHover={{y:-2}} className="w-6 mx-3" whileTap={{scale:0.9}}>
                    <LinkedInIcon />
                </motion.a>
                <motion.a href="https://www.pinterest.com/yikkhong/" target={"_blank"} whileHover={{y:-2}} className="w-6 mx-3" whileTap={{scale:0.9}}>
                    <PinterestIcon />
                </motion.a>
                


                <button onClick={()=> setMode(mode === "light"? "dark":"light")}
                className={`ml-3 flex items-center justify-center p-1 rounded-full
                ${mode === "light"? "bg-dark text-light" :"bg-light text-dark"}
                '}
                `}>
                    {
                        mode==="dark"? 
                        <SunIcon className={"fill-dark"}/>
                        : <MoonIcon className={"fill-dark"}/>
                    }
                </button>
          
            </nav>
            </div>

            {
                isOpen ?

                <motion.div
                initial={{scale:0, opacity:0, x: "-50%", y:"-50%"}}
                animate={{scale:1, opacity:1}}
                id="mobile" className="min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                bg-black/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
                ">
                <nav className="flex items flex-col justify-center">
                    <CustomMobileLink href="/" title="Home" className="" toggle={handleClick}/>
                    <CustomMobileLink href="/about" title="About" className="" toggle={handleClick}/>
                    <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick}/>
                </nav>
                
                <nav className="flex items-center justify-center flex-wrap mt-2">
                    <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} className="w-6 mr-3 sm:mx-1" whileTap={{scale:0.9}}>
                        <TwitterIcon />
                    </motion.a>
                    <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} className="w-6 mx-3 bg-light rounded-full dark:bg-dark  sm:mx-1" whileTap={{scale:0.9}}>
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/yik-khong-ho-55a693202" target={"_blank"} whileHover={{y:-2}} className="w-6 mx-3  sm:mx-1" whileTap={{scale:0.9}}>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} className="w-6 mx-3  sm:mx-1" whileTap={{scale:0.9}}>
                        <PinterestIcon />
                    </motion.a>
                    <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} className="w-6 ml-3  sm:mx-1" whileTap={{scale:0.9}}>
                        <DribbbleIcon />
                    </motion.a>
    
    
                    <button onClick={()=> setMode(mode === "light"? "dark":"light")}
                    className={`ml-3 flex items-center justify-center p-1 rounded-full
                    ${mode === "light"? "bg-dark text-light" :"bg-light text-dark"}
                    '}
                    `}>
                        {
                            mode==="dark"? 
                            <SunIcon className={"fill-dark"}/>
                            : <MoonIcon className={"fill-dark"}/>
                        }
                    </button>
              
                </nav>
                </motion.div>


                : null
            }

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default NavBar