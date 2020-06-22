import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { motion } from 'framer-motion'

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

const item = {
	initial: { y: 15, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: {
    y: 15,
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

const fade = {
	initial: { opacity: 0 },
	enter: { opacity: 1, transition },
	exit: {
		opacity: 0,
		transition: { duration: 0.5, ...transition }
	}
}

const GalleryIndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.header variants={header} className="p-4 pb-0 md:p-6 md:pb-0 fixed top-0 left-0 right-0 h-16 md:h-20 z-20 flex flex-wrap">
          <nav className="relative z-10 w-full">
            <ul className="flex flex-wrap">
              <li className="ml-auto">
                <Link to="/wayfinder" activeClassName="line-through" className="text-lg md:text-xl px-px text-black">Menu</Link>
              </li>
            </ul>
          </nav>
          <div className="mt-auto h-px w-full border-b border-black"></div>
        </motion.header>

        <motion.div variants={fade} className="bg-prbred p-4 md:p-6 min-h-screen pt-16 md:pt-20">
          <div className="flex flex-wrap items-center h-screen-no-header overflow-hidden mt-6">
            <nav className="mt-auto mb-auto w-full">
              <ul>
                <motion.li variants={item}>
                  <Link className="text-black text-6xl md:text-7xl font-display leading-none pt-8 md:pt-12 pb-3 md:pb-6 border-b-2 border-black flex flex-wrap items-center hover:text-white" to="/">
                    <span className="block relative pr-6 md:pr-12">
                      Work
                      <span className="absolute top-0 right-0 text-3xl md:text-5xl -mt-2 -mr-1">17</span>
                    </span>
                    <span className="block ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 md:w-24 transform -rotate-45 -mr-1 md:-mr-3" viewBox="0 0 41.843 35.711"><g data-name="Group 111" fill="none" stroke="currentColor" strokeWidth="3"><path data-name="Path 1" d="M22.927 1.061l16.795 16.8-16.795 16.79"/><path data-name="Path 2" d="M39.722 17.856H0"/></g></svg>
                    </span>
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link className="text-black text-6xl md:text-7xl font-display leading-none pt-8 md:pt-12 pb-3 md:pb-6 border-b-2 border-black flex flex-wrap items-center hover:text-white" to="/">
                    <span className="block">Studio</span>
                    <span className="block ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 md:w-24" viewBox="0 0 41.843 35.711"><g data-name="Group 111" fill="none" stroke="currentColor" strokeWidth="3"><path data-name="Path 1" d="M22.927 1.061l16.795 16.8-16.795 16.79"/><path data-name="Path 2" d="M39.722 17.856H0"/></g></svg>
                    </span>
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link className="text-black text-6xl md:text-7xl font-display leading-none pt-8 md:pt-12 pb-3 md:pb-6 flex flex-wrap items-center hover:text-white" to="/">
                    <span className="block">Journal</span>
                    <span className="block ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 md:w-24 transform rotate-45 -mr-1 md:-mr-3" viewBox="0 0 41.843 35.711"><g data-name="Group 111" fill="none" stroke="currentColor" strokeWidth="3"><path data-name="Path 1" d="M22.927 1.061l16.795 16.8-16.795 16.79"/><path data-name="Path 2" d="M39.722 17.856H0"/></g></svg>
                    </span>
                  </Link>
                </motion.li>
              </ul>
            </nav>

            <motion.div variants={item}className="w-full md:w-10/12 ml-auto mt-auto">
              <Link className="pt-4 pt-4 pb-4 w-24 transition duration-500 ease-in-out block md:hidden" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full block" viewBox="0 0 113 92"><g data-name="Group 79"><text data-name="Player Roberts Bell" transform="translate(0 23)" fontSize="35" fontFamily="Founders Grotesk"><tspan x="0" y="0">Player</tspan><tspan x="0" y="28">Roberts</tspan><tspan x="0" y="56">Bell</tspan></text><g data-name="Group 40" fill="none" stroke="#000"><path data-name="Path 1" d="M74.366 66.11v11.747H62.619"/><path data-name="Path 2" d="M74.366 77.857l-13.891-13.89"/></g></g></svg>
              </Link>
              
              <ul className="flex flex-wrap border-t border-black border-b">
                <li className="md:text-lg xl:text-2xl pl-0 py-2 md:py-3 px-2 block">&copy; 2020</li>

                <li className="ml-auto block border-l border-black">
                  <a className="md:text-lg xl:text-2xl py-2 md:py-3 px-2 block hover:text-white" href="mailto:hello@prb-a.com" target="_blank" rel="noopener noreferrer">hello@prb-a.com</a>
                </li>

                <li className="md:text-lg xl:text-2xl py-2 md:py-3 px-2 block border-l border-black pr-12 xl:pr-32 2xl:pr-64 hidden lg:block">Architecture + Restoration</li>

                <li className="border-l border-black">
                  <a className="md:text-lg md:text-lg xl:text-2xl py-2 md:py-3 px-2 xl:px-4 block hover:text-white" href="https://example.com" target="_blank" rel="noopener noreferrer">Twi<span className="hidden md:inline">tter</span></a>
                </li>

                <li className="border-l border-black">
                  <a className="md:text-lg md:text-lg xl:text-2xl py-2 md:py-3 px-2 xl:px-4 pr-0 block hover:text-white" href="https://example.com" target="_blank" rel="noopener noreferrer">Insta<span className="hidden md:inline">gram</span></a>
                </li>
              </ul>
              <ul className="flex flex-wrap border-b border-black md:hidden">
                <li className="md:text-lg py-2 block pr-12 block">Architecture + Restoration</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default GalleryIndexPage