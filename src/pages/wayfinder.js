import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import Div100vh from "react-div-100vh";
import { navigate } from "@reach/router";

const goBack = () => {
  navigate(-1);
}

const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
  },
	exit: {
		opacity: 0,
		transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
	}
}

const revealArrowTopRight = {
	initial: { y: "100%", x: "-100%" },
	enter: { 
    y: "0%",
    x: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  }
}

const revealArrowTopLeft = {
	initial: { y: "-100%", x: "-100%" },
	enter: { 
    y: "0%",
    x: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  }
}

const revealArrowRight = {
	initial: { y: "0%", x: "-100%" },
	enter: { 
    y: "0%",
    x: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  }
}

const reveal = {
	initial: { y: "150%" },
	enter: { 
    y: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  },
}

const WayfinderPage = ({ data: { work, studio }, location }) => {
  return (
    <>
      <SEO
        titleOverride={"Wayfinder"}
        descriptionOverride={null}
        pathnameOverride={location.pathname}
        imageOverride={null }
      />

      <Scroll callback={location} />

      <header className="p-4 pb-0 md:p-6 md:pb-0 fixed top-0 left-0 right-0 h-14 md:h-22 z-20 flex flex-wrap">
        <nav className="relative z-10 w-full">
          <ul className="flex flex-wrap">
            <li className="ml-auto">
              <button className="text-lg md:text-2xl px-px text-black invert-select" onClick={() => goBack() }>Close</button>
            </li>
          </ul>
        </nav>
        <div className="mt-auto -mb-px h-px w-full border-b border-black transition ease-in-out duration-500"></div>
      </header>

      <Div100vh>
        <motion.div initial="initial" animate="enter" variants={fade} exit="exit" className="bg-prbred p-4 md:p-6 h-full pt-14 md:pt-22">
          <div className="flex flex-wrap items-center h-full overflow-hidden pt-2">
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              className="mt-auto mb-auto w-full"
              variants={{
                enter: { transition: { staggerChildren: 0.035, delayChildren: 0.025 } }
              }}
            >
              <nav className="h-full">
                <ul>
                  <li className="overflow-hidden relative border-b-2 border-black">
                    <span className="block">
                      <Link className="text-black wayfinder-item font-display pt-0 md:pt-10 2xl:pt-12 pb-0 md:pb-10 2xl:pb-12 hover:text-white strike relative overflow-hidden block" to="/" state={{ prevPath: location.pathname }}>
                        <div className="pt-5 md:pt-8 xl:pt-10 overflow-hidden relative">
                          <div className="flex flex-wrap items-center">
                            <div className="">
                              <motion.div variants={reveal}>
                                <span className="block relative pr-6 md:pr-12">
                                  <span className=" block invert-select strike__inner strike__inner--white">Work</span>
                                  <span className="absolute top-0 right-0 text-3xl md:text-5xl md:-mt-6 xl:-mt-8 2xl:-mt-12 -ml-2">{ work.edges.length }</span>
                                </span>
                              </motion.div>
                            </div>
                            <span className="block ml-auto relative overflow-hidden -mt-3 md:-mt-5 xl:-mt-10 3xl:-mt-10">
                              <motion.div variants={revealArrowTopRight}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-14 md:w-32 xl:w-38 3xl:w-46 transform -rotate-45 -mr-1 md:-mr-3" viewBox="0 0 41.843 35.711"><g data-name="Group 111" fill="none" stroke="currentColor" strokeWidth="3"><path data-name="Path 1" d="M22.927 1.061l16.795 16.8-16.795 16.79"/><path data-name="Path 2" d="M39.722 17.856H0"/></g></svg>
                              </motion.div>  
                            </span>
                          </div>
                        </div>
                      </Link>
                    </span>
                  </li>
                  <li className="overflow-hidden relative border-b-2 border-black">
                    <span className="block relative overflow-hidden">
                    <Link className="text-black wayfinder-item font-display pt-0 md:pt-10 2xl:pt-12 pb-0 md:pb-10 2xl:pb-12 hover:text-white strike relative overflow-hidden block" to="/studio">
                      <div className="overflow-hidden relative pt-5 md:pt-8 xl:pt-10">
                        <div className="flex flex-wrap items-center">
                          <div className="">
                            <motion.div variants={reveal}>
                              <span className="block relative pr-6 md:pr-12">
                                <span className=" block invert-select strike__inner strike__inner--white">Studio</span>
                              </span>
                            </motion.div>
                          </div>
                          <span className="block ml-auto relative overflow-hidden -mt-3 md:-mt-5 xl:-mt-10 3xl:-mt-10">
                            <motion.div variants={revealArrowRight}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 md:w-28 xl:w-32 3xl:w-40" viewBox="0 0 41.843 35.711"><g data-name="Group 111" fill="none" stroke="currentColor" strokeWidth="3"><path data-name="Path 1" d="M22.927 1.061l16.795 16.8-16.795 16.79"/><path data-name="Path 2" d="M39.722 17.856H0"/></g></svg>
                            </motion.div>  
                          </span>
                        </div>
                      </div>
                    </Link>
                    </span>
                  </li>
                  <li className="overflow-hidden relative">
                    <span className="block relative overflow-hidden">
                      <Link className="text-black wayfinder-item font-display pt-0 md:pt-10 2xl:pt-12 pb-0 md:pb-10 2xl:pb-12 hover:text-white strike overflow-hidden relative block" to="/journal">
                        <div className="overflow-hidden relative pt-5 md:pt-8 xl:pt-10">
                          
                          <div className="flex flex-wrap items-center">
                            <div className="">
                              <motion.div variants={reveal}>
                                <span className="block relative pr-6 md:pr-12">
                                  <span className=" block invert-select strike__inner strike__inner--white">Journal</span>
                                </span>
                              </motion.div>
                            </div>
                            <span className="block ml-auto relative overflow-hidden -mt-3 md:-mt-5 xl:-mt-10 3xl:-mt-10">
                              <motion.div variants={revealArrowTopLeft}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-14 md:w-32 xl:w-38 3xl:w-46 transform rotate-45 -mr-1 md:-mr-3" viewBox="0 0 41.843 35.711"><g data-name="Group 111" fill="none" stroke="currentColor" strokeWidth="3"><path data-name="Path 1" d="M22.927 1.061l16.795 16.8-16.795 16.79"/><path data-name="Path 2" d="M39.722 17.856H0"/></g></svg>
                              </motion.div>  
                            </span>
                          </div>
                        </div>
                      </Link>
                    </span>
                  </li>
                </ul>
              </nav>
            </motion.div>
            
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              className="w-full md:w-10/12 md:ml-auto mt-auto"
              variants={{
                enter: { transition: { staggerChildren: 0.0325 } }
              }}
            >
              <div className="md:hidden">
                <Link
                  className={`block pr-8 pb-4 z-30 w-28 md:w-40`}
                  to="/"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full md:mb-3 md:pr-2" viewBox="0 0 906.3 620"><g data-name="Group 177"><path data-name="Path 58" d="M906 620z" fill="#fff"/><path data-name="Path 77" d="M25.1 183.5H.1V0h66.6c45.4 0 71.4 21.5 71.4 57.4 0 36.1-25.9 57.7-71.4 57.7H25.1zm41.1-89.1c32 0 47.5-13.1 47.5-37 0-23.6-15.4-36.7-47.5-36.7H25.1v73.7z" fill="#000000"/><path data-name="Path 78" d="M185 0v183.5h-24.2V0z" fill="#000000"/><path data-name="Path 79" d="M320.4 158.5c0 6.7 3.8 9.9 9.9 9.9a25.1 25.1 0 0011.1-2.9v13.1c-4.4 4.4-9.6 7.6-19.5 7.6-13.1 0-22.4-9.9-23.9-25.1-7 14.9-25 25.9-45.7 25.9-24.8 0-40.8-13.4-40.8-35.2 0-24.2 20.7-34.1 51.3-40.2l34.4-7v-4.9c0-17.5-10.2-28.2-28-28.2-18.4 0-28.2 10.8-32 25.6l-21.6-2.9c4.9-23.9 23.9-41.4 53.9-41.4 32 0 51 16.3 51 48.6zm-23.3-37.9l-28.5 6.1c-20.1 4.4-32.9 8.2-32.9 23.6 0 10.8 7.3 18.9 21.8 18.9 22.4 0 39.6-16.9 39.6-42.5z" fill="#000000"/><path data-name="Path 80" d="M373.7 232.5l20.7-49.2-53.6-127h25.3l40.5 97.9h1.2l39-97.9h23.9l-73.4 176.2z" fill="#000000"/><path data-name="Path 81" d="M602.9 140.7c-6.4 28.8-27.7 46.3-59.4 46.3-37.9 0-65.5-25.6-65.5-65.2 0-40.2 27.7-69 64.4-69 40.5 0 61.2 28.8 61.2 63.5v9.6H502.2c1.2 24.8 18.9 42.2 41.6 42.2 21.3 0 33.8-10.2 39-29.7zm-24.1-30.6c-.9-20.4-12.2-39-36.4-39-23 0-36.7 18.1-39.6 39z" fill="#000000"/><path data-name="Path 82" d="M704.6 80.4c-7-3.8-11.9-5.2-19.8-5.2-18.3 0-32 16.6-32 41.1v67.3h-24.2V56.2h24.1v25.9c4.7-14.6 17.8-29.4 36.1-29.4 7.9 0 13.7 2 18.1 5.8z" fill="#000000"/><path data-name="Path 83" d="M120 400c-3.5-5-6.1-18.4-7.6-39.9-1.1-20.4-10.7-34.1-35.8-34.1H24.8v74H0V216.5h74.6c46.6 0 69 21.6 69 54.2 0 28.2-19.2 43.1-41.7 45.7 22.4 4.4 33.2 18.1 35 39.6 2.3 26.8 3.2 37.3 9.3 44zm-46.9-94.1c31.2 0 45.1-11.6 45.1-34.4 0-21-14-34.4-45.1-34.4H24.8v68.7h48.3z" fill="#000000"/><path data-name="Path 84" d="M229.6 403.4c-37.3 0-64.7-27.4-64.7-67s27.4-67.3 64.7-67.3c37.6 0 65.2 27.7 65.2 67.3s-27.7 67-65.2 67zm0-18.6c25.9 0 40.5-20.1 40.5-48.4 0-28.5-14.6-48.3-40.5-48.3-25.6 0-39.9 19.8-39.9 48.3 0 28.3 14.2 48.4 39.9 48.4z" fill="#000000"/><path data-name="Path 85" d="M338.2 400h-18.3V216.5h24.2v83c5.5-15.7 21.8-30.3 45.7-30.3 37.6 0 58.2 29.7 58.2 67.3s-20.7 67-58.5 67c-23.6 0-40.2-14-46-30zm5.2-60c0 28 17.8 44.3 40.8 44.3 25 0 38.7-18.6 38.7-47.8s-13.7-47.8-38.7-47.8c-23 0-40.8 16.3-40.8 44z" fill="#000000"/><path data-name="Path 86" d="M590.7 357.1c-6.4 28.8-27.7 46.3-59.4 46.3-37.9 0-65.5-25.6-65.5-65.2 0-40.2 27.7-69 64.4-69 40.5 0 61.2 28.8 61.2 63.5v9.6H489.9c1.2 24.8 18.9 42.2 41.6 42.2 21.3 0 33.8-10.2 39-29.7zm-24.2-30.5c-.9-20.4-12.2-39-36.4-39-23 0-36.7 18.1-39.6 39z" fill="#000000"/><path data-name="Path 87" d="M692.4 296.8c-7-3.8-11.9-5.2-19.8-5.2-18.3 0-32 16.6-32 41.1V400h-24.2V272.7h24.2v25.9c4.7-14.6 17.8-29.4 36.1-29.4 7.9 0 13.7 2 18.1 5.8z" fill="#000000"/><path data-name="Path 88" d="M720.6 290.1h-19.2V277l8.2-1.5c11.9-2.3 14.6-8.1 17.5-20.4l3.8-17.8h13.7v35.2h35.8V290h-35.8v77.2c0 11.4 4.7 16.6 15.7 16.6 8.2 0 16.6-3.5 23.9-7.6v16.3c-9.3 7-18.6 10.8-32.6 10.8-18.1 0-30.9-8.4-30.9-33.2v-80z" fill="#000000"/><path data-name="Path 89" d="M816.4 355.7c2.3 19.5 16 30 37.9 30 16.9 0 29.4-6.1 29.4-18.9 0-12-8.5-16-24.2-18.9l-21.6-3.8c-23.9-3.8-38.2-14-38.2-35.8 0-23.3 19.5-39 48.9-39 33.8 0 53.6 15.7 55.9 45.1l-19.5 1.2c-2.9-19.5-14.9-28.5-36.4-28.5-16 0-26.5 7.3-26.5 18.9 0 10.2 6.4 15.4 19.5 17.8l23.9 3.8c25.6 4.4 40.8 14 40.8 37 0 25.3-22.4 39-52.1 39-31.7 0-55.9-14.9-58.2-46.3z" fill="#000000"/><path data-name="Path 90" d="M78.1 616.4H0V432.9h74.9c45.4 0 64.1 19.8 64.1 48.9 0 21.3-15.1 35.8-34.7 39.3 22.4 3.8 39.9 18.7 39.9 44.9 0 31.7-23.3 50.4-66.1 50.4zM24.5 512.1h51.3c26.5 0 37.9-11.4 37.9-29.1 0-17.5-11.4-29.4-37.9-29.4H24.5zm0 19.5v64.1h53c27.4 0 41.7-11.9 41.7-31.8 0-20.1-14.3-32.3-41.7-32.3z" fill="#000000"/><path data-name="Path 91" d="M289.2 573.5c-6.4 28.8-27.7 46.3-59.4 46.3-37.9 0-65.5-25.6-65.5-65.2 0-40.2 27.7-69 64.4-69 40.5 0 61.2 28.8 61.2 63.5v9.6H188.5c1.2 24.8 18.9 42.2 41.6 42.2 21.3 0 33.8-10.2 39-29.7zM265.1 543c-.9-20.4-12.2-39-36.4-39-23 0-36.7 18.1-39.6 39z" fill="#000000"/><path data-name="Path 92" d="M344.3 432.9v183.5h-24.2V432.9z" fill="#000000"/><path data-name="Path 93" d="M406.6 432.9v183.5h-24.2V432.9z" fill="#000000"/><path data-name="Path 94" d="M617.7 474.5v119.3L499 475.1l-9.4 9.3 118.8 118.8H489v13.2h141.9V474.5z"/></g></svg>
                </Link>
              </div>

              <ul className="flex flex-wrap border-t border-black border-b">
                <li className="text-sm lg:text-lg xl:text-xl pr-2 md:pr-3 lg:pr-4 xl:pr-5 block xl:border-r border-black hidden md:block invert-select relative overflow-hidden">
                  <span className="block relative overflow-hidden my-2 md:my-3">
                    <motion.span className="block" variants={reveal}>Architecture + Conservation</motion.span>
                  </span>
                </li>
                  
                <li className="text-sm lg:text-lg xl:text-xl my-2 md:my-3 pr-2 lg:px-3 lg:px-4 xl:px-5 xl:pr-6 hidden xl:block invert-select overflow-hidden relative">
                  <motion.span className="block" variants={reveal}>&copy; 2021</motion.span>
                </li>
                
                <li className="block md:border-l border-black invert-select">
                  <Link className="text-sm lg:text-lg xl:text-xl my-2 md:my-3 md:px-2 lg:px-4 xl:px-5 invert-select block hover:text-white focus:text-white hover:line-through focus:line-through relative overflow-hidden" to={`/privacy`} target="_blank" rel="noopener noreferrer">
                    <motion.span className="block" variants={reveal}>Privacy</motion.span>
                  </Link>
                </li>

                <li className="ml-auto block border-l border-black invert-select">
                  <a className="text-sm lg:text-lg xl:text-xl my-2 md:my-3 px-2 lg:px-4 xl:px-5 invert-select block hover:text-white focus:text-white hover:line-through focus:line-through relative overflow-hidden" href={`tel:${ studio.studioTelephone }`} target="_blank" rel="noopener noreferrer"><motion.span className="block invert-select md:hidden" variants={reveal}>Tel</motion.span><motion.span className="hidden invert-select md:block" variants={reveal}>{studio.studioTelephone }</motion.span></a>
                </li>

                <li className="invert-select block border-l border-black">
                  <a className="text-sm lg:text-lg xl:text-xl my-2 md:my-3 px-2 lg:px-4 xl:px-5 invert-select block hover:text-white focus:text-white hover:line-through focus:line-through relative overflow-hidden" href={`mailto:${ studio.studioEmailAddress }`} target="_blank" rel="noopener noreferrer"><motion.span className="block" variants={reveal}>Email</motion.span></a>
                </li>

                <li className="border-l border-black invert-select">
                  <a className="text-sm lg:text-lg xl:text-xl my-2 md:my-3 px-2 lg:px-4 xl:px-5 block hover:text-white focus:text-white hover:line-through focus:line-through invert-select overflow-hidden relative" href={ studio.studioTwitterUrl } target="_blank" rel="noopener noreferrer">
                  <motion.span className="block" variants={reveal}>Twi<span className="hidden md:inline invert-select">tter</span></motion.span></a>
                </li>

                <li className="border-l border-black invert-select">
                  <a className="text-sm lg:text-lg xl:text-xl my-2 md:my-3 px-2 lg:px-4 xl:px-5 pr-0 lg:pr-0 xl:pr-0 block hover:text-white focus:text-white hover:line-through focus:line-through invert-select overflow-hidden relative" href={ studio.studioInstagramUrl } target="_blank" rel="noopener noreferrer"><motion.span className="block" variants={reveal}>Insta<span className="hidden md:inline invert-select">gram</span></motion.span></a>
                </li>
              </ul>
              <ul className="flex flex-wrap border-b border-black md:hidden">
                <li className="text-sm md:text-lg py-2 block pr-12 block invert-select overflow-hidden relative"><motion.span className="block" variants={reveal}>Architecture + Conservation</motion.span></li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </Div100vh>
    </>
  )
}

export default WayfinderPage

export const query = graphql`
  query WayfinderQuery {
    studio: datoCmsStudio {
      studioTwitterUrl
      studioInstagramUrl
      studioLinkedinUrl
      studioEmailAddress
      studioTelephone
      heroSupportingText
    }
    work: allDatoCmsWork {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`