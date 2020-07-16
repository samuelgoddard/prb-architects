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
    
      <motion.div
        animate={{
          height: 0
        }}
        transition={{ duration: 0.5, delay: 5.5 }}
        className="h-full w-full bg-transparent fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 5 }}
          className="relative bg-white overflow-hidden h-full">
          <div className="flex flex-wrap items-center h-full">

            <motion.span
              animate={{ 
                opacity: [0, 1, 0],
                x: ["25%", "0%", "25%", ]
              }}
              transition={{ duration: 4.5, ease: "easeInOut", delay: 0.2 }}
              className="inline-block mt-8 ml-8 absolute top-0 left-0 w-5/12"
            >
              <motion.span
                animate={{
                  width: ["100%", "0%", "100%"]
                }}
                transition={{ duration: 4.5, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-0 right-0 bottom-0 w-full h-full bg-white"
              ></motion.span>
              <span className="h-px w-full bg-black block"></span>
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: [1, 1, 1],
                x: ["-25%", "5%", "-25%"]
              }}
              transition={{ duration: 4.5, ease: [0.645, 0.135, 0.250, 0.880], delay: 0.65 }}
              className="inline-block font-display font-light leading-negative intro-text intro-top-line text-right relative ml-auto opacity-0"
            >
              <motion.span
                animate={{
                  width: ["100%", "0%", "100%"]
                }}
                transition={{ duration: 4.5, ease: [0.645, 0.135, 0.250, 0.880], delay: 0.6 }}
                className="absolute top-0 right-0 bottom-0 w-full h-full bg-white -mt-16 2xl:-mt-20"
              ></motion.span>
              PRB
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: [1, 1, 1],
                x: ["25%", "-4%", "25%"]
              }}
              transition={{ duration: 4.5, ease: [0.645, 0.135, 0.250, 0.880], delay: 0.65 }}
              className="inline-block font-display font-light leading-negative intro-text intro-mid-line text-left relative opacity-0"
            >
              <motion.span
                animate={{
                  width: ["100%", "0%", "100%"]
                }}
                transition={{ duration: 4.5, ease: [0.645, 0.135, 0.250, 0.880], delay: 0.6 }}
                className="absolute top-0 left-0 bottom-0 w-full h-full bg-white -mt-16 2xl:-mt-20"
              ></motion.span>
              ARCHIT
            </motion.span>
            
            <motion.span
              animate={{ 
                // opacity: [1, 1, 1],
                x: ["25%", "0%", "25%"]
              }}
              transition={{ duration: 4.5, ease: "easeInOut", delay: 0.2 }}
              className="inline-block text-lg text-right mb-8 mr-8 absolute bottom-0 right-0 w-4/12 pt-1 pb-1"
            >
              <motion.span
                animate={{
                  width: ["100%", "0%", "100%"]
                }}
                transition={{ duration: 4.5, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-0 right-0 bottom-0 w-full h-full bg-white"
              ></motion.span>
              <span className="border-t border-b border-black py-3 px-2 block">
                Architectural Design + Conservation
              </span>
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [1, 1, 1],
                x: ["-25%", "-5%", "-25%"]
              }}
              transition={{ duration: 4.5, ease: [0.645, 0.135, 0.250, 0.880], delay: 0.65 }}
              className="inline-block font-display font-light leading-negative intro-text intro-text__bottom-line text-left relative opacity-0"
            >
              <motion.span
                animate={{
                  width: ["100%", "0%", "100%"]
                }}
                transition={{ duration: 4.5, ease: [0.645, 0.135, 0.250, 0.880], delay: 0.6 }}
                className="absolute top-0 right-0 bottom-0 w-full h-full bg-white -mt-16 2xl:-mt-20"
              ></motion.span>
              CTS
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
        
      <div id="scroll-container" data-scroll-container>
        <AnimatePresence exitBeforeEnter initial={false}>
          {children}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Layout
