import React from "react"
import SEO from "../components/seo"
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

const IndexPage = () => {
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
        <motion.div 
          className="content"
          variants={item}
          className="max-w-2xs"
        >
          <motion.p>The built environment relies on change, and we exist to make progress. This means that we are realistic, and driven to build.  If you’re looking to extend, adapt, refurbish, or to create something new, we can help you.</motion.p>
        </motion.div>
      </motion.section>
    </>
  )
}

export default IndexPage