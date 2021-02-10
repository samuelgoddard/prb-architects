import React from "react"
import { Link } from "gatsby";
import { AnimatePresence } from "framer-motion"
import "../styles/main.css"

function Layout({ children, location, location: { pathname } }) {
  return (
    <>
      <a className="skip-link sr-only" href="#scroll-container">Skip to content</a>
      { !pathname.includes("studio") ? (
        <Link 
          className={ 
            pathname === "/project" || pathname === "/404" || pathname === "/wayfinder" || pathname === "/studio" || pathname === "/journal" || pathname === "/gallery-index" || pathname === "/privacy" || pathname.includes("work") || pathname.includes("/journal/")
            ? 'fixed bottom-0 left-0 block p-4 md:p-6 md:pb-3 w-28 md:w-40 transition duration-500 ease-in-out opacity-0 md:opacity-100 z-0 md:z-30'
            : 'fixed bottom-0 block left-0 p-4 md:p-6 md:pb-3 z-30 w-28 md:w-40 transition duration-500 ease-in-out opacity-100'
          }
          to="/"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full md:mb-3 md:pr-2" viewBox="0 0 906.3 620"><g data-name="Group 177"><path data-name="Path 58" d="M906 620z" fill="#fff"/><path data-name="Path 77" d="M25.1 183.5H.1V0h66.6c45.4 0 71.4 21.5 71.4 57.4 0 36.1-25.9 57.7-71.4 57.7H25.1zm41.1-89.1c32 0 47.5-13.1 47.5-37 0-23.6-15.4-36.7-47.5-36.7H25.1v73.7z" fill="#000000"/><path data-name="Path 78" d="M185 0v183.5h-24.2V0z" fill="#000000"/><path data-name="Path 79" d="M320.4 158.5c0 6.7 3.8 9.9 9.9 9.9a25.1 25.1 0 0011.1-2.9v13.1c-4.4 4.4-9.6 7.6-19.5 7.6-13.1 0-22.4-9.9-23.9-25.1-7 14.9-25 25.9-45.7 25.9-24.8 0-40.8-13.4-40.8-35.2 0-24.2 20.7-34.1 51.3-40.2l34.4-7v-4.9c0-17.5-10.2-28.2-28-28.2-18.4 0-28.2 10.8-32 25.6l-21.6-2.9c4.9-23.9 23.9-41.4 53.9-41.4 32 0 51 16.3 51 48.6zm-23.3-37.9l-28.5 6.1c-20.1 4.4-32.9 8.2-32.9 23.6 0 10.8 7.3 18.9 21.8 18.9 22.4 0 39.6-16.9 39.6-42.5z" fill="#000000"/><path data-name="Path 80" d="M373.7 232.5l20.7-49.2-53.6-127h25.3l40.5 97.9h1.2l39-97.9h23.9l-73.4 176.2z" fill="#000000"/><path data-name="Path 81" d="M602.9 140.7c-6.4 28.8-27.7 46.3-59.4 46.3-37.9 0-65.5-25.6-65.5-65.2 0-40.2 27.7-69 64.4-69 40.5 0 61.2 28.8 61.2 63.5v9.6H502.2c1.2 24.8 18.9 42.2 41.6 42.2 21.3 0 33.8-10.2 39-29.7zm-24.1-30.6c-.9-20.4-12.2-39-36.4-39-23 0-36.7 18.1-39.6 39z" fill="#000000"/><path data-name="Path 82" d="M704.6 80.4c-7-3.8-11.9-5.2-19.8-5.2-18.3 0-32 16.6-32 41.1v67.3h-24.2V56.2h24.1v25.9c4.7-14.6 17.8-29.4 36.1-29.4 7.9 0 13.7 2 18.1 5.8z" fill="#000000"/><path data-name="Path 83" d="M120 400c-3.5-5-6.1-18.4-7.6-39.9-1.1-20.4-10.7-34.1-35.8-34.1H24.8v74H0V216.5h74.6c46.6 0 69 21.6 69 54.2 0 28.2-19.2 43.1-41.7 45.7 22.4 4.4 33.2 18.1 35 39.6 2.3 26.8 3.2 37.3 9.3 44zm-46.9-94.1c31.2 0 45.1-11.6 45.1-34.4 0-21-14-34.4-45.1-34.4H24.8v68.7h48.3z" fill="#000000"/><path data-name="Path 84" d="M229.6 403.4c-37.3 0-64.7-27.4-64.7-67s27.4-67.3 64.7-67.3c37.6 0 65.2 27.7 65.2 67.3s-27.7 67-65.2 67zm0-18.6c25.9 0 40.5-20.1 40.5-48.4 0-28.5-14.6-48.3-40.5-48.3-25.6 0-39.9 19.8-39.9 48.3 0 28.3 14.2 48.4 39.9 48.4z" fill="#000000"/><path data-name="Path 85" d="M338.2 400h-18.3V216.5h24.2v83c5.5-15.7 21.8-30.3 45.7-30.3 37.6 0 58.2 29.7 58.2 67.3s-20.7 67-58.5 67c-23.6 0-40.2-14-46-30zm5.2-60c0 28 17.8 44.3 40.8 44.3 25 0 38.7-18.6 38.7-47.8s-13.7-47.8-38.7-47.8c-23 0-40.8 16.3-40.8 44z" fill="#000000"/><path data-name="Path 86" d="M590.7 357.1c-6.4 28.8-27.7 46.3-59.4 46.3-37.9 0-65.5-25.6-65.5-65.2 0-40.2 27.7-69 64.4-69 40.5 0 61.2 28.8 61.2 63.5v9.6H489.9c1.2 24.8 18.9 42.2 41.6 42.2 21.3 0 33.8-10.2 39-29.7zm-24.2-30.5c-.9-20.4-12.2-39-36.4-39-23 0-36.7 18.1-39.6 39z" fill="#000000"/><path data-name="Path 87" d="M692.4 296.8c-7-3.8-11.9-5.2-19.8-5.2-18.3 0-32 16.6-32 41.1V400h-24.2V272.7h24.2v25.9c4.7-14.6 17.8-29.4 36.1-29.4 7.9 0 13.7 2 18.1 5.8z" fill="#000000"/><path data-name="Path 88" d="M720.6 290.1h-19.2V277l8.2-1.5c11.9-2.3 14.6-8.1 17.5-20.4l3.8-17.8h13.7v35.2h35.8V290h-35.8v77.2c0 11.4 4.7 16.6 15.7 16.6 8.2 0 16.6-3.5 23.9-7.6v16.3c-9.3 7-18.6 10.8-32.6 10.8-18.1 0-30.9-8.4-30.9-33.2v-80z" fill="#000000"/><path data-name="Path 89" d="M816.4 355.7c2.3 19.5 16 30 37.9 30 16.9 0 29.4-6.1 29.4-18.9 0-12-8.5-16-24.2-18.9l-21.6-3.8c-23.9-3.8-38.2-14-38.2-35.8 0-23.3 19.5-39 48.9-39 33.8 0 53.6 15.7 55.9 45.1l-19.5 1.2c-2.9-19.5-14.9-28.5-36.4-28.5-16 0-26.5 7.3-26.5 18.9 0 10.2 6.4 15.4 19.5 17.8l23.9 3.8c25.6 4.4 40.8 14 40.8 37 0 25.3-22.4 39-52.1 39-31.7 0-55.9-14.9-58.2-46.3z" fill="#000000"/><path data-name="Path 90" d="M78.1 616.4H0V432.9h74.9c45.4 0 64.1 19.8 64.1 48.9 0 21.3-15.1 35.8-34.7 39.3 22.4 3.8 39.9 18.7 39.9 44.9 0 31.7-23.3 50.4-66.1 50.4zM24.5 512.1h51.3c26.5 0 37.9-11.4 37.9-29.1 0-17.5-11.4-29.4-37.9-29.4H24.5zm0 19.5v64.1h53c27.4 0 41.7-11.9 41.7-31.8 0-20.1-14.3-32.3-41.7-32.3z" fill="#000000"/><path data-name="Path 91" d="M289.2 573.5c-6.4 28.8-27.7 46.3-59.4 46.3-37.9 0-65.5-25.6-65.5-65.2 0-40.2 27.7-69 64.4-69 40.5 0 61.2 28.8 61.2 63.5v9.6H188.5c1.2 24.8 18.9 42.2 41.6 42.2 21.3 0 33.8-10.2 39-29.7zM265.1 543c-.9-20.4-12.2-39-36.4-39-23 0-36.7 18.1-39.6 39z" fill="#000000"/><path data-name="Path 92" d="M344.3 432.9v183.5h-24.2V432.9z" fill="#000000"/><path data-name="Path 93" d="M406.6 432.9v183.5h-24.2V432.9z" fill="#000000"/><path data-name="Path 94" d="M617.7 474.5v119.3L499 475.1l-9.4 9.3 118.8 118.8H489v13.2h141.9V474.5z"/></g></svg>
        </Link>
      ) : (
        <Link 
          className={`fixed bottom-0 left-0 block p-4 md:p-6 md:pb-3 z-30 w-28 md:w-40 transition duration-500 ease-in-out opacity-0`
          }
          to="/"
        > 
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full md:mb-3 md:pr-2" viewBox="0 0 906.3 620"><g data-name="Group 177"><path data-name="Path 58" d="M906 620z" fill="#fff"/><path data-name="Path 77" d="M25.1 183.5H.1V0h66.6c45.4 0 71.4 21.5 71.4 57.4 0 36.1-25.9 57.7-71.4 57.7H25.1zm41.1-89.1c32 0 47.5-13.1 47.5-37 0-23.6-15.4-36.7-47.5-36.7H25.1v73.7z" fill="#1d1d1b"/><path data-name="Path 78" d="M185 0v183.5h-24.2V0z" fill="#1d1d1b"/><path data-name="Path 79" d="M320.4 158.5c0 6.7 3.8 9.9 9.9 9.9a25.1 25.1 0 0011.1-2.9v13.1c-4.4 4.4-9.6 7.6-19.5 7.6-13.1 0-22.4-9.9-23.9-25.1-7 14.9-25 25.9-45.7 25.9-24.8 0-40.8-13.4-40.8-35.2 0-24.2 20.7-34.1 51.3-40.2l34.4-7v-4.9c0-17.5-10.2-28.2-28-28.2-18.4 0-28.2 10.8-32 25.6l-21.6-2.9c4.9-23.9 23.9-41.4 53.9-41.4 32 0 51 16.3 51 48.6zm-23.3-37.9l-28.5 6.1c-20.1 4.4-32.9 8.2-32.9 23.6 0 10.8 7.3 18.9 21.8 18.9 22.4 0 39.6-16.9 39.6-42.5z" fill="#1d1d1b"/><path data-name="Path 80" d="M373.7 232.5l20.7-49.2-53.6-127h25.3l40.5 97.9h1.2l39-97.9h23.9l-73.4 176.2z" fill="#1d1d1b"/><path data-name="Path 81" d="M602.9 140.7c-6.4 28.8-27.7 46.3-59.4 46.3-37.9 0-65.5-25.6-65.5-65.2 0-40.2 27.7-69 64.4-69 40.5 0 61.2 28.8 61.2 63.5v9.6H502.2c1.2 24.8 18.9 42.2 41.6 42.2 21.3 0 33.8-10.2 39-29.7zm-24.1-30.6c-.9-20.4-12.2-39-36.4-39-23 0-36.7 18.1-39.6 39z" fill="#1d1d1b"/><path data-name="Path 82" d="M704.6 80.4c-7-3.8-11.9-5.2-19.8-5.2-18.3 0-32 16.6-32 41.1v67.3h-24.2V56.2h24.1v25.9c4.7-14.6 17.8-29.4 36.1-29.4 7.9 0 13.7 2 18.1 5.8z" fill="#1d1d1b"/><path data-name="Path 83" d="M120 400c-3.5-5-6.1-18.4-7.6-39.9-1.1-20.4-10.7-34.1-35.8-34.1H24.8v74H0V216.5h74.6c46.6 0 69 21.6 69 54.2 0 28.2-19.2 43.1-41.7 45.7 22.4 4.4 33.2 18.1 35 39.6 2.3 26.8 3.2 37.3 9.3 44zm-46.9-94.1c31.2 0 45.1-11.6 45.1-34.4 0-21-14-34.4-45.1-34.4H24.8v68.7h48.3z" fill="#1d1d1b"/><path data-name="Path 84" d="M229.6 403.4c-37.3 0-64.7-27.4-64.7-67s27.4-67.3 64.7-67.3c37.6 0 65.2 27.7 65.2 67.3s-27.7 67-65.2 67zm0-18.6c25.9 0 40.5-20.1 40.5-48.4 0-28.5-14.6-48.3-40.5-48.3-25.6 0-39.9 19.8-39.9 48.3 0 28.3 14.2 48.4 39.9 48.4z" fill="#1d1d1b"/><path data-name="Path 85" d="M338.2 400h-18.3V216.5h24.2v83c5.5-15.7 21.8-30.3 45.7-30.3 37.6 0 58.2 29.7 58.2 67.3s-20.7 67-58.5 67c-23.6 0-40.2-14-46-30zm5.2-60c0 28 17.8 44.3 40.8 44.3 25 0 38.7-18.6 38.7-47.8s-13.7-47.8-38.7-47.8c-23 0-40.8 16.3-40.8 44z" fill="#1d1d1b"/><path data-name="Path 86" d="M590.7 357.1c-6.4 28.8-27.7 46.3-59.4 46.3-37.9 0-65.5-25.6-65.5-65.2 0-40.2 27.7-69 64.4-69 40.5 0 61.2 28.8 61.2 63.5v9.6H489.9c1.2 24.8 18.9 42.2 41.6 42.2 21.3 0 33.8-10.2 39-29.7zm-24.2-30.5c-.9-20.4-12.2-39-36.4-39-23 0-36.7 18.1-39.6 39z" fill="#1d1d1b"/><path data-name="Path 87" d="M692.4 296.8c-7-3.8-11.9-5.2-19.8-5.2-18.3 0-32 16.6-32 41.1V400h-24.2V272.7h24.2v25.9c4.7-14.6 17.8-29.4 36.1-29.4 7.9 0 13.7 2 18.1 5.8z" fill="#1d1d1b"/><path data-name="Path 88" d="M720.6 290.1h-19.2V277l8.2-1.5c11.9-2.3 14.6-8.1 17.5-20.4l3.8-17.8h13.7v35.2h35.8V290h-35.8v77.2c0 11.4 4.7 16.6 15.7 16.6 8.2 0 16.6-3.5 23.9-7.6v16.3c-9.3 7-18.6 10.8-32.6 10.8-18.1 0-30.9-8.4-30.9-33.2v-80z" fill="#1d1d1b"/><path data-name="Path 89" d="M816.4 355.7c2.3 19.5 16 30 37.9 30 16.9 0 29.4-6.1 29.4-18.9 0-12-8.5-16-24.2-18.9l-21.6-3.8c-23.9-3.8-38.2-14-38.2-35.8 0-23.3 19.5-39 48.9-39 33.8 0 53.6 15.7 55.9 45.1l-19.5 1.2c-2.9-19.5-14.9-28.5-36.4-28.5-16 0-26.5 7.3-26.5 18.9 0 10.2 6.4 15.4 19.5 17.8l23.9 3.8c25.6 4.4 40.8 14 40.8 37 0 25.3-22.4 39-52.1 39-31.7 0-55.9-14.9-58.2-46.3z" fill="#1d1d1b"/><path data-name="Path 90" d="M78.1 616.4H0V432.9h74.9c45.4 0 64.1 19.8 64.1 48.9 0 21.3-15.1 35.8-34.7 39.3 22.4 3.8 39.9 18.7 39.9 44.9 0 31.7-23.3 50.4-66.1 50.4zM24.5 512.1h51.3c26.5 0 37.9-11.4 37.9-29.1 0-17.5-11.4-29.4-37.9-29.4H24.5zm0 19.5v64.1h53c27.4 0 41.7-11.9 41.7-31.8 0-20.1-14.3-32.3-41.7-32.3z" fill="#1d1d1b"/><path data-name="Path 91" d="M289.2 573.5c-6.4 28.8-27.7 46.3-59.4 46.3-37.9 0-65.5-25.6-65.5-65.2 0-40.2 27.7-69 64.4-69 40.5 0 61.2 28.8 61.2 63.5v9.6H188.5c1.2 24.8 18.9 42.2 41.6 42.2 21.3 0 33.8-10.2 39-29.7zM265.1 543c-.9-20.4-12.2-39-36.4-39-23 0-36.7 18.1-39.6 39z" fill="#1d1d1b"/><path data-name="Path 92" d="M344.3 432.9v183.5h-24.2V432.9z" fill="#1d1d1b"/><path data-name="Path 93" d="M406.6 432.9v183.5h-24.2V432.9z" fill="#1d1d1b"/><path data-name="Path 94" d="M617.7 474.5v119.3L499 475.1l-9.4 9.3 118.8 118.8H489v13.2h141.9V474.5z"/></g></svg>
        </Link>
      ) }
    
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
        
      <div id="scroll-container" className="content-inner" data-scroll-container>
        <AnimatePresence exitBeforeEnter>
          {children}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Layout
