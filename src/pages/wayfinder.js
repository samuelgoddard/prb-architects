import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { motion } from 'framer-motion'

const transition = { duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96] }

const item = {
	initial: { y: 20, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: {
		opacity: 0,
		transition: { transition }
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
        variants={{
          enter: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <div className="flex flex-wrap items-center h-screen-no-header overflow-hidden">
          <nav className="mt-auto mb-auto w-full">
            <ul>
              <motion.li variants={item}>
                <Link className="text-black text-6xl md:text-7xl font-display leading-none pt-8 md:pt-12 pb-3 md:pb-6 border-b-2 border-black flex flex-wrap items-center hover:text-white" to="/">
                  <span className="block">Work</span>
                  <span className="block ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 md:w-24" viewBox="0 0 97.604 97.604"><g data-name="Group 65" fill="none" stroke="currentColor" strokeWidth="7"><path data-name="Path 1" d="M12.227 31.959h53.418v53.418"/><path data-name="Path 2" d="M65.645 31.959l-63.17 63.17"/></g></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 md:w-24" viewBox="0 0 97.604 97.605"><g data-name="Group 66" fill="none" stroke="currentColor" strokeWidth="7"><path data-name="Path 1" d="M65.645 12.228v53.418H12.227"/><path data-name="Path 2" d="M65.645 65.646L2.475 2.476"/></g></svg>
                  </span>
                </Link>
              </motion.li>
            </ul>
          </nav>

          <motion.div variants={item}className="lg:border-t lg:border-black lg:border-b mt-auto w-10/12 ml-auto">
            <ul className="flex flex-wrap">
              <li className="text-xl xl:text-2xl py-3 px-4 hidden lg:block">&copy; 2020</li>

              <li className="ml-auto hidden lg:block">
                <a className="text-xl xl:text-2xl py-3 px-4 block" href="mailto:hello@prbarchitects.com" target="_blank" rel="noopener noreferrer">hello@prbarchitects.com</a>
              </li>

              <li className="text-xl xl:text-2xl py-3 px-4 block border-l border-black pr-12 xl:pr-32 2xl:pr-64 hidden lg:block">Architectural Design</li>

              <li className="block lg:hidden ml-auto">
                <a className="text-lg lg:text-xl xl:text-2xl lg:py-3 px-2 xl:px-4 block" href="mailto:hello@prbarchitects.com" target="_blank" rel="noopener noreferrer">Email</a>
              </li>

              <li className="lg:border-l lg:border-black">
                <a className="text-lg lg:text-xl xl:text-2xl lg:py-3 px-2 xl:px-4 block" href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>

              <li className="lg:border-l lg:border-black">
                <a className="text-lg lg:text-xl xl:text-2xl lg:py-3 px-2 xl:px-4 pr-0 block" href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default GalleryIndexPage