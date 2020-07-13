import React from "react"
import { Link } from "gatsby"
import { AnimatePresence } from "framer-motion"
import Header from "./header"
import "../styles/main.css"

function Layout({ children, location, location: { pathname } }) {
  return (
    <>
      <Link 
        className={ 
          pathname === "/project" || pathname === "/wayfinder" || pathname === "/studio" || pathname === "/journal" || pathname.includes("work")
          ? 'fixed bottom-0 left-0 block fixed bottom-0 left-0 p-4 md:p-6 md:pb-3 z-30 w-28 md:w-40 transition duration-500 ease-in-out opacity-0 md:opacity-100'
          : 'fixed bottom-0 left-0 block fixed bottom-0 left-0 p-4 md:p-6 md:pb-3 z-30 w-28 md:w-40 transition duration-500 ease-in-out opacity-100'
        }
        to="/"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 113 92"><g data-name="Group 79"><text data-name="Player Roberts Bell" transform="translate(0 23)" fontSize="35" fontFamily="Founders Grotesk"><tspan x="0" y="0">Player</tspan><tspan x="0" y="28">Roberts</tspan><tspan x="0" y="56">Bell</tspan></text><g data-name="Group 40" fill="none" stroke="#000"><path data-name="Path 1" d="M74.366 66.11v11.747H62.619"/><path data-name="Path 2" d="M74.366 77.857l-13.891-13.89"/></g></g></svg>
      </Link>
      
      {/* <div
        className={ 
          pathname === "/project"
          ? 'p-4 pb-0 md:p-6 md:pb-0 h-16 md:h-20 fixed top-0 left-0 right-0 z-30 flex flex-wrap bg-white'
          : 'hidden'
        }
      ></div> */}
      
        
        
        <div id="scroll-container" data-scroll-container>
          <AnimatePresence exitBeforeEnter initial={false}>
            {children}
          </AnimatePresence>
        </div>
    </>
  )
}

export default Layout
