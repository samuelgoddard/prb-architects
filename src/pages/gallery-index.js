import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { motion } from 'framer-motion'

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

const item = {
	initial: { y: 15, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: {
    y: 0,
		opacity: 0,
		transition: { duration: 0.5, ...transition }
	}
}

const fade = {
	initial: { opacity: 0 },
	enter: { opacity: 1, transition },
	exit: {
		opacity: 0,
		transition: { duration: 0.5, ...transition }
	}
}

const header = {
	initial: { opacity: 1 },
	enter: { opacity: 1, transition },
	exit: {
		opacity: 1,
		transition: { duration: 0.5, ...transition }
	}
}

const GalleryIndexPage = () => {
  return (
    <>
      <SEO title="Home" />
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.header variants={header} className="p-4 pb-0 md:p-6 md:pb-0 fixed top-0 left-0 right-0 h-16 md:h-20 z-20 flex flex-wrap">
            <nav className="relative z-10 w-full">
              <ul className="flex flex-wrap">
                <motion.li variants={fade}>
                  <Link className="text-lg md:text-xl pr-px opacity-25 transition ease-in-out duration-500" activeClassName="opacity-100" to="/">Gallery</Link>
                </motion.li>
                <motion.li variants={fade} className="text-xl px-1 opacity-25">/</motion.li>
                <motion.li variants={fade}>
                  <Link className="text-lg md:text-xl px-px opacity-25 transition ease-in-out duration-500" activeClassName="opacity-100" to="/gallery-index">Index</Link>
                </motion.li>

                <li className="ml-auto">
                  <Link to="/wayfinder" activeClassName="line-through" className="text-lg md:text-xl px-px text-black">Menu</Link>
                </li>
              </ul>
            </nav>
            <div className="mt-auto h-px w-full border-b border-black"></div>
          </motion.header>
        </motion.div>
        
        <motion.div initial="initial" animate="enter" exit="exit" variants={fade} className="bg-prbred p-4 md:p-6 min-h-screen pt-16 md:pt-20">
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="w-full md:w-10/12 ml-auto mt-4 md:mt-8"
            variants={{
              enter: { transition: { staggerChildren: 0.1 } }
            }}
          >
          <nav className="pb-12 pt-12">
            <motion.span variants={fade} className="block uppercase pb-4">Residential</motion.span>
            <ul>
              {[...Array(6)].map((e, i) => {
                return (
                  <motion.li
                    key={i}
                    variants={item}
                  >
                    <Link to="/project" className="flex flex-wrap items-center border-b border-black py-3 md:py-5 hover:text-white">
                      <span className="block mr-6 md:mr-8 text-xs md:text-sm leading-none">PRB001</span>
                      <span className="block text-lg md:text-3xl font-display leading-none mt-2">Keyworth</span>
                      <span className="block ml-auto"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8" viewBox="0 0 17.938 17.937"><g data-name="Group 33" fill="none" stroke="currentColor"><path data-name="Path 1" d="M2.18 5.752h10.006v10.005"/><path data-name="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg></span>
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </nav>
          <nav className="pb-12">
            <motion.span variants={item} className="block uppercase pb-4">Commercial</motion.span>
            <ul>
              {[...Array(2)].map((e, i) => {
                return (
                  <motion.li
                    key={i}
                    variants={item}
                  
                  >
                    <Link to="/project" className="flex flex-wrap items-center border-b border-black py-3 md:py-5 hover:text-white">
                      <span className="block mr-6 md:mr-8 text-xs md:text-sm leading-none">PRB001</span>
                      <span className="block text-lg md:text-3xl font-display leading-none mt-2">Keyworth</span>
                      <span className="block ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="17.938" height="17.937" viewBox="0 0 17.938 17.937"><g data-name="Group 33" fill="none" stroke="currentColor"><path data-name="Path 1" d="M2.18 5.752h10.006v10.005"/><path data-name="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg></span>
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </nav>
          <nav className="pb-32">
            <motion.span variants={item} className="block uppercase pb-4">Restorations</motion.span>
            <ul>
              {[...Array(3)].map((e, i) => {
                return (
                  <motion.li
                    key={i}
                    variants={item}
                  
                  >
                    <Link to="/project" className="flex flex-wrap items-center border-b border-black py-3 md:py-5 hover:text-white">
                      <span className="block mr-6 md:mr-8 text-xs md:text-sm leading-none">PRB001</span>
                      <span className="block text-lg md:text-3xl font-display leading-none mt-2">Keyworth</span>
                      <span className="block ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="17.938" height="17.937" viewBox="0 0 17.938 17.937"><g data-name="Group 33" fill="none" stroke="currentColor"><path data-name="Path 1" d="M2.18 5.752h10.006v10.005"/><path data-name="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg></span>
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </nav>
        </motion.div>
      </motion.div>
    </>
  )
}

export default GalleryIndexPage