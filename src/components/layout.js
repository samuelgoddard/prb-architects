import React from "react"
import { Link } from "gatsby";
import { AnimatePresence } from "framer-motion"
import "../styles/main.css"

function Layout({ children, location, location: { pathname } }) {
  return (
    <>
      <a className="skip-link sr-only" href="#scroll-container">Skip to content</a>

      { !pathname.includes("studio/") && (
        <Link 
          className={ 
            pathname === "/project" || pathname === "/404" || pathname === "/wayfinder" || pathname === "/studio" || pathname === "/journal" || pathname.includes("work")
            ? 'fixed bottom-0 left-0 block p-4 md:p-6 md:pb-3 z-30 w-28 md:w-40 transition duration-500 ease-in-out opacity-0 md:opacity-100'
            : 'fixed bottom-0 block left-0 p-4 md:p-6 md:pb-3 z-30 w-28 md:w-40 transition duration-500 ease-in-out opacity-100'
          }
          to="/"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 113 92"><g data-name="Group 79"><text data-name="Player Roberts Bell" transform="translate(0 23)" fontSize="35" fontFamily="Founders Grotesk"><tspan x="0" y="0">Player</tspan><tspan x="0" y="28">Roberts</tspan><tspan x="0" y="56">Bell</tspan></text><g data-name="Group 40" fill="none" stroke="#000"><path data-name="Path 1" d="M74.366 66.11v11.747H62.619"/><path data-name="Path 2" d="M74.366 77.857l-13.891-13.89"/></g></g></svg>
        </Link>
      )}
    
      {/* <motion.div
        initial={{ opacity: 1, height: "100%" }}
        animate={{
          height: 0,
          opacity: 0
        }}
        transition={{ duration: 0, delay: 3.8 }}
        className="w-full bg-transparent fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          initial={{ opacity: 1}}
          animate={{
            opacity: 0,
          }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 3.3 }}
          className="relative overflow-hidden h-full animation-overlay"
        >

          <div className="flex flex-wrap items-center h-full w-full relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 3.5, ease: [0.76, 0, 0.24, 1] }}
              className="mt-5 md:mt-6 ml-5 md:ml-6 absolute top-0 left-0 w-full md:w-5/12 overflow-hidden"
            >
              <span className="block text-lg text-left pt-1 pb-1 mt-1 mb-1">
                <span className="border-t border-b border-black py-3 px-3 block">
                  <span className="block relative overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "100%" }}
                    animate={{
                      y: "0%"
                    }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.45 }}
                  >
                    Player Roberts Bell
                  </motion.span>
                  </span>
                </span>
              </span>
            </motion.div>

            <div className="my-auto">
              <div className="flex flex-wrap items-center h-full w-full relative flex-grow-0">
                <span className="inline-block font-display font-light leading-negative intro-text intro-top-line md:text-right md:ml-auto md:mt-0 xl:-mt-20">
                  <div className="overflow-hidden relative">
                    <motion.span
                      className="block md:pb-12 mt-16 md:mt-32 lg:mt-40 xl:mt-48 2xl:mt-56"
                      initial={{ y: "265%" }}
                      animate={{
                        y: ["265%", "0%", "-265%"]
                      }}
                      transition={{ duration: 3.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
                    >
                      PRB
                    </motion.span>
                  </div>
                </span>
                
                <span className="inline-block font-display font-light leading-negative intro-text intro-mid-line text-left relative -ml-8 md:-ml-16">
                  <div className="overflow-hidden relative">
                    <motion.span
                      className="block md:pb-12 mt-16 md:mt-32 lg:mt-40 xl:mt-48 2xl:mt-56"
                      initial={{ y: "265%" }}
                      animate={{
                        y: ["265%", "0%", "-265%"]
                      }}
                      transition={{ duration: 3.2, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
                    >
                      ARCHITE
                    </motion.span>
                  </div>
                </span>
                
                <span className="inline-block font-display font-light leading-negative intro-text intro-text__bottom-line text-left relative -ml-16">
                  <div className="overflow-hidden relative">
                    <motion.span
                      className="block md:pb-12 mt-16 md:mt-32 lg:mt-40 xl:mt-48 2xl:mt-56"
                      initial={{ y: "265%" }}
                      animate={{
                        y: ["265%", "0%", "-265%"]
                      }}
                      transition={{ duration: 3.2, ease: [0.76, 0, 0.24, 1], delay: 0.7 }}
                    >
                      CTS
                    </motion.span>
                  </div>
                </span>
              </div>
            </div>
            
            <div className="mb-5 md:mb-6 mr-5 md:mr-6 absolute bottom-0 right-0 w-full md:w-5/12 overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 3.5, ease: [0.76, 0, 0.24, 1] }}
              >
                <span className="block text-lg text-right pt-1 pb-1">
                  <span className="border-t border-b border-black py-3 px-3 block">
                    <span className="block relative overflow-hidden">
                    <motion.span
                      className="block"
                      initial={{ y: "100%" }}
                      animate={{
                        y: "0%"
                      }}
                      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.45 }}
                    >
                      Architectural Design + Conservation
                    </motion.span>
                    </span>
                  </span>
                </span>
              </motion.div>
            </div>
          </div>

        </motion.div>
      </motion.div> */}
        
      <div id="scroll-container" data-scroll-container>
        <AnimatePresence exitBeforeEnter>
          {children}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Layout
