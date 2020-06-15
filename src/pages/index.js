import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
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
        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
          className="max-w-2xs"
        >
          <p>The built environment relies on change, and we exist to make progress. This means that we are realistic, and driven to build.  If you’re looking to extend, adapt, refurbish, or to create something new, we can help you.</p>
        </motion.div>
      </motion.section>
    </>
  )
}

export default IndexPage