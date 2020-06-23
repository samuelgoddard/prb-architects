import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Scroll from "../components/locomotiveScroll"

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

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

const IndexPage = ({ location }) => {
  return (
    <>
    <Scroll callback={location} />
      <SEO title="Home" />
        <motion.section
          initial="initial"
          animate="enter"
          exit="exit"
          data-scroll-section
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
          
          <motion.div variants={fade} className="bg-white p-4 md:p-6 min-h-screen pt-16 md:pt-20">
            <motion.div 
              className="content"
              variants={fade}
              className="max-w-2xs mt-4 md:mt-6"
            >
              <p>The built environment relies on change, and we exist to make progress. This means that we are realistic, and driven to build.  If you’re looking to extend, adapt, refurbish, or to create something new, we can help you.</p>
            </motion.div>
          </motion.div>
        </motion.section>
    </>
  )
}

export default IndexPage