import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { motion } from 'framer-motion'

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.075,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
      >
        <div className="w-full md:w-10/12 ml-auto">
          <nav className="pb-12 pt-12">
            <motion.span variants={item} transition="easeInOut" className="block uppercase pb-4">Residential</motion.span>
            <ul>
              {[...Array(6)].map((e, i) => {
                return (
                  <motion.li
                    key={i}
                    variants={item}
                    transition="easeInOut"
                  >
                    <Link to="/" className="flex flex-wrap items-center border-b border-black py-3 md:py-5 hover:text-white">
                      <span className="block mr-6 md:mr-8 text-xs md:text-sm leading-none">PRB001</span>
                      <span className="block text-lg md:text-3xl font-display leading-none mt-2">Keyworth</span>
                      <span className="block ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="17.938" height="17.937" viewBox="0 0 17.938 17.937"><g dataName="Group 33" fill="none" stroke="currentColor"><path dataName="Path 1" d="M2.18 5.752h10.006v10.005"/><path dataName="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg></span>
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </nav>
          <nav className="pb-12">
            <motion.span variants={item} transition="easeInOut" className="block uppercase pb-4">Commercial</motion.span>
            <ul>
              {[...Array(2)].map((e, i) => {
                return (
                  <motion.li
                    key={i}
                    variants={item}
                    transition="easeInOut"
                  >
                    <Link to="/" className="flex flex-wrap items-center border-b border-black py-3 md:py-5 hover:text-white">
                      <span className="block mr-6 md:mr-8 text-xs md:text-sm leading-none">PRB001</span>
                      <span className="block text-lg md:text-3xl font-display leading-none mt-2">Keyworth</span>
                      <span className="block ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="17.938" height="17.937" viewBox="0 0 17.938 17.937"><g dataName="Group 33" fill="none" stroke="currentColor"><path dataName="Path 1" d="M2.18 5.752h10.006v10.005"/><path dataName="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg></span>
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </nav>
          <nav className="pb-32">
            <motion.span variants={item} transition="easeInOut" className="block uppercase pb-4">Restorations</motion.span>
            <ul>
              {[...Array(3)].map((e, i) => {
                return (
                  <motion.li
                    key={i}
                    variants={item}
                    transition="easeInOut"
                  >
                    <Link to="/" className="flex flex-wrap items-center border-b border-black py-3 md:py-5 hover:text-white">
                      <span className="block mr-6 md:mr-8 text-xs md:text-sm leading-none">PRB001</span>
                      <span className="block text-lg md:text-3xl font-display leading-none mt-2">Keyworth</span>
                      <span className="block ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="17.938" height="17.937" viewBox="0 0 17.938 17.937"><g dataName="Group 33" fill="none" stroke="currentColor"><path dataName="Path 1" d="M2.18 5.752h10.006v10.005"/><path dataName="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg></span>
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </nav>
        </div>
      </motion.section>
    </>
  )
}

export default IndexPage