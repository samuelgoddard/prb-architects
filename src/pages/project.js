import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'

const transition = { duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96] }

const item = {
	initial: { y: 20, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: {
		opacity: 0,
		transition: { duration: 0.3, ...transition }
	}
}

const ProjectPage = () => {
  return (
    <>
      <SEO title="Home" />
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <div className="flex flex-wrap items-end md:-mx-3 md:mb-16">
          <div className="w-full md:w-1/2 lg:w-5/12 xl:w-4/12 md:px-3">
            <motion.div className="w-full h-screen-inner" variants={item}>
              <img src="https://placedog.net/700/1200" alt="placeholder" className="w-full h-full object-cover" />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 lg:w-7/12 xl:w-8/12 md:px-3 mt-32">
            <div className="flex flex-wrap items-end">
              <motion.h1 variants={item} className="text-7xl lg:text-8xl leading-negative block md:-mb-8 lg:-mb-10 order-2 lg:order-1 w-full lg:w-auto">Ivy<br/>Farm</motion.h1>
              <div className="ml-auto order-1 lg:order-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 lg:w-32 xl:w-40 md:-mb-10 lg:-mb-8 xl:-mb-10" viewBox="0 0 157.38 157.381"><g data-name="Group 66" fill="none" stroke="#000" stroke-width="14"><path data-name="Path 1" d="M52.676 20.352l.001 84.352 84.353.001"/><path data-name="Path 2" d="M52.676 104.704L152.43 4.95"/></g></svg>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <div className="bg-black -mx-4 md:-mx-6 pt-24 pb-6 px-6">
          <div className="w-full flex flex-wrap md:-mx-4 items-end">
            <motion.div variants={item} className="w-full md:w-1/2 lg:w-5/12 xl:w-4/12 md:px-4 text-white">
              <div className="max-w-xs flex flex-wrap hidden md:flex">
                <div className="ml-auto flex flex-wrap items-center mb-3">
                  <span className="text-2xs mt-1 mr-1">PRB</span>
                  <span className="block">19-034</span>
                </div>
                <div className="w-full">
                  <img src="https://placedog.net/700/700" alt="placeholder" className="w-full" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="w-full md:w-1/2 lg:w-7/12 xl:w-8/12 md:px-4 ml-auto text-white pb-8 md:pb-24">
              <p className="md:text-lg max-w-xs md:max-w-lg mb-10 md:mb-16">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Conservation Accreditations enable us to manage complex repairs, alterations and specialist grant aided works. It also means we are adept at finding new uses for old buildings.</p>

              <ul className="border-t border-white">
                <li className="flex flex-wrap items-center border-b border-white py-2 md:py-5">
                  <span className="block text-xs mr-3">01</span>
                  <span className="block md:text-xl">Project Planning</span>
                  <span className="block ml-auto"><svg dataName="Group 118" xmlns="http://www.w3.org/2000/svg" width="17.104" height="17.104" viewBox="0 0 17.104 17.104"><path dataName="Line 29" fill="none" stroke="currentColor" d="M8.552 0v17.104"/><path dataName="Line 30" fill="none" stroke="currentColor" d="M17.104 8.552H0"/></svg></span>
                </li>
                <li className="flex flex-wrap items-center border-b border-white py-2 md:py-5">
                  <span className="block text-xs mr-3">02</span>
                  <span className="block md:text-xl">Architectural Design</span>
                  <span className="block ml-auto"><svg dataName="Group 118" xmlns="http://www.w3.org/2000/svg" width="17.104" height="17.104" viewBox="0 0 17.104 17.104"><path dataName="Line 29" fill="none" stroke="currentColor" d="M8.552 0v17.104"/><path dataName="Line 30" fill="none" stroke="currentColor" d="M17.104 8.552H0"/></svg></span>
                </li>
                <li className="flex flex-wrap items-center border-b border-white py-2 md:py-5">
                  <span className="block text-xs mr-3">03</span>
                  <span className="block md:text-xl">Project Delivery</span>
                  <span className="block ml-auto"><svg dataName="Group 118" xmlns="http://www.w3.org/2000/svg" width="17.104" height="17.104" viewBox="0 0 17.104 17.104"><path dataName="Line 29" fill="none" stroke="currentColor" d="M8.552 0v17.104"/><path dataName="Line 30" fill="none" stroke="currentColor" d="M17.104 8.552H0"/></svg></span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

    </>
  )
}

export default ProjectPage