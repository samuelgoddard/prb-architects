import React from "react"
import { Link } from "gatsby"
import { AnimatePresence } from "framer-motion"
import Header from "./header"
import Scroll from "./locomotiveScroll"
import "../styles/main.css"

const Layout = ({ children, location }) => {
  return (
    <>
      <Link 
        className={ 
          location.pathname === "/project" || location.pathname === "/wayfinder"
          ? 'fixed bottom-0 left-0 block fixed bottom-0 left-0 p-4 md:p-6 md:pb-3 z-30 w-32 md:w-40 transition duration-500 ease-in-out opacity-0 md:opacity-100'
          : 'block fixed bottom-0 left-0 p-4 md:p-6 md:pb-3 z-30 w-32 md:w-40 transition duration-500 ease-in-out'
        }
        to="/"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 113 92"><g data-name="Group 79"><text data-name="Player Roberts Bell" transform="translate(0 23)" fontSize="35" fontFamily="Founders Grotesk"><tspan x="0" y="0">Player</tspan><tspan x="0" y="28">Roberts</tspan><tspan x="0" y="56">Bell</tspan></text><g data-name="Group 40" fill="none" stroke="#000"><path data-name="Path 1" d="M74.366 66.11v11.747H62.619"/><path data-name="Path 2" d="M74.366 77.857l-13.891-13.89"/></g></g></svg>
      </Link>

      <AnimatePresence exitBeforeEnter intial={false}>
        <Scroll callback={location} />
        
        <div id="scroll-container" data-scroll-container>
          <div className={location.pathname === "/gallery-index" || location.pathname === "/wayfinder" ? `bg-prbred p-4 md:p-6 transition ease-in-out duration-300 min-h-screen` : `bg-white p-4 md:p-6 transition ease-in-out duration-300 min-h-screen`}>
            <Header />

            {children}
          </div>
        </div>
      </AnimatePresence>
    </>
  )
}

export default Layout
