import React from "react"
import { Link } from "gatsby"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import "../styles/main.css"

function Layout({ children, location, location: { pathname } }) {
  return (
    <>
      <Link 
        className={ 
          pathname === "/project" || pathname === "/wayfinder" || pathname === "/studio" || pathname === "/journal" || pathname.includes("work")
          ? 'fixed bottom-0 left-0 block p-4 md:p-6 md:pb-3 z-30 w-28 md:w-40 transition duration-500 ease-in-out opacity-0 md:opacity-100'
          : 'fixed bottom-0 block left-0 p-4 md:p-6 md:pb-3 z-30 w-28 md:w-40 transition duration-500 ease-in-out opacity-100'
        }
        to="/"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 113 92"><g data-name="Group 79"><text data-name="Player Roberts Bell" transform="translate(0 23)" fontSize="35" fontFamily="Founders Grotesk"><tspan x="0" y="0">Player</tspan><tspan x="0" y="28">Roberts</tspan><tspan x="0" y="56">Bell</tspan></text><g data-name="Group 40" fill="none" stroke="#000"><path data-name="Path 1" d="M74.366 66.11v11.747H62.619"/><path data-name="Path 2" d="M74.366 77.857l-13.891-13.89"/></g></g></svg>
      </Link>
    
      {/* <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        animate={{
          height: 0
        }}
        transition={{ duration: 0.5, delay: 7.6 }}
        className="h-full w-full bg-transparent fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 100 }}
          className="relative bg-white overflow-hidden h-full">
          <div className="flex flex-wrap items-center h-full w-full relative">

            <div className="mt-5 md:mt-8 ml-5 md:ml-8 absolute top-0 left-0 w-full md:w-5/12 overflow-hidden">
              <span className="block text-lg text-left pt-1 pb-1">
                <span className="border-t border-b border-black py-3 px-3 block">
                  Player Roberts Bell
                </span>
              </span>
            </div>

            <div className="my-auto">
              <div className="flex flex-wrap items-center h-full w-full relative flex-grow-0">
                <span className="inline-block font-display font-light leading-negative intro-text intro-top-line md:text-right md:ml-auto mt-20 xl:mt-0 overflow-hidden relative">
                  <motion.span
                  className="block"
                    initial={{ y: "200%" }}
                    animate={{
                      y: "0%"
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    PRB
                  </motion.span>
                </span>
                
                <span className="inline-block font-display font-light leading-negative intro-text intro-mid-line text-left relative -ml-8 md:-ml-16">
                  ARCHITE
                </span>
                
                <span className="inline-block font-display font-light leading-negative intro-text intro-text__bottom-line text-left relative -ml-16">
                  CTS
                </span>
              </div>
            </div>
            
            <div className="mb-5 md:mb-8 mr-5 md:mr-8 absolute bottom-0 right-0 w-full md:w-5/12 overflow-hidden">
              <span className="block text-lg text-right pt-1 pb-1">
                <span className="border-t border-b border-black py-3 px-3 block">
                  Architectural Design + Conservation
                </span>
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div> */}
        
      <div id="scroll-container" data-scroll-container>
        <AnimatePresence exitBeforeEnter initial={false}>
          {children}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Layout
