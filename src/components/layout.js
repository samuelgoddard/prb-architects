import React from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import Header from "./header"
import Scroll from "./locomotiveScroll"
import "../styles/main.css"

const duration = 0.2

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: duration,
    },
  },
}

const Layout = ({ children, location }) => {
  return (
    <>
      <Scroll callback={location} />
      <div data-scroll-container className={location.pathname === "/gallery-index" || location.pathname === "/wayfinder" ? `bg-prbred p-4 md:p-6` : `bg-white p-4 md:p-6`}>
        <Link 
          data-scroll data-scroll-sticky data-scroll-target="#___gatsby"
          className={ 
            location.pathname === "/project" || location.pathname === "/wayfinder"
            ? 'block fixed bottom-0 left-0 p-4 md:p-6 md:pb-3 z-30 w-32 md:w-40 transition duration-500 ease-in-out opacity-0 md:opacity-100'
            : 'block fixed bottom-0 left-0 p-4 md:p-6 md:pb-3 z-30 w-32 md:w-40 transition duration-500 ease-in-out'
          }
          to="/"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 113 92"><g data-name="Group 79"><text data-name="Player Roberts Bell" transform="translate(0 23)" fontSize="35" fontFamily="Founders Grotesk"><tspan x="0" y="0">Player</tspan><tspan x="0" y="28">Roberts</tspan><tspan x="0" y="56">Bell</tspan></text><g data-name="Group 40" fill="none" stroke="#000"><path data-name="Path 1" d="M74.366 66.11v11.747H62.619"/><path data-name="Path 2" d="M74.366 77.857l-13.891-13.89"/></g></g></svg>
        </Link>

        {/* { JSON.stringify(location)} */}
        <Header />

          {/* <Scroll callbacks={location} /> */}
          {/* <AnimatePresence exitBeforeEnter>
            {children}
          </AnimatePresence> */}

          {/* <AnimatePresence exitBeforeEnter initial={false}>
            <motion.main
              key={location.pathname}
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
            > */}
              <main data-scroll-section>
                {children}
              </main>
            {/* </motion.main>
          </AnimatePresence> */}
      </div>
    </>
  )
}

export default Layout
