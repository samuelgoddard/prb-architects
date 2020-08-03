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
              <button className="text-lg md:text-2xl px-px text-black invert-select line-through" onClick={() => goBack() }>Close</button>
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
                            <span className="block ml-auto relative overflow-hidden -mt-3 md:-mt-5">
                              <motion.div variants={revealArrowTopRight}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 md:w-24 transform -rotate-45 -mr-1 md:-mr-3" viewBox="0 0 41.843 35.711"><g data-name="Group 111" fill="none" stroke="currentColor" strokeWidth="3"><path data-name="Path 1" d="M22.927 1.061l16.795 16.8-16.795 16.79"/><path data-name="Path 2" d="M39.722 17.856H0"/></g></svg>
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
                          <span className="block ml-auto relative overflow-hidden -mt-3 md:-mt-5">
                            <motion.div variants={revealArrowRight}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 md:w-24" viewBox="0 0 41.843 35.711"><g data-name="Group 111" fill="none" stroke="currentColor" strokeWidth="3"><path data-name="Path 1" d="M22.927 1.061l16.795 16.8-16.795 16.79"/><path data-name="Path 2" d="M39.722 17.856H0"/></g></svg>
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
                            <span className="block ml-auto relative overflow-hidden -mt-3 md:-mt-5">
                              <motion.div variants={revealArrowTopLeft}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 md:w-24 transform rotate-45 -mr-1 md:-mr-3" viewBox="0 0 41.843 35.711"><g data-name="Group 111" fill="none" stroke="currentColor" strokeWidth="3"><path data-name="Path 1" d="M22.927 1.061l16.795 16.8-16.795 16.79"/><path data-name="Path 2" d="M39.722 17.856H0"/></g></svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 113 92"><g data-name="Group 79"><text data-name="Player Roberts Bell" transform="translate(0 23)" fontSize="35" fontFamily="Founders Grotesk"><tspan x="0" y="0">Player</tspan><tspan x="0" y="28">Roberts</tspan><tspan x="0" y="56">Bell</tspan></text><g data-name="Group 40" fill="none" stroke="#000"><path data-name="Path 1" d="M74.366 66.11v11.747H62.619"/><path data-name="Path 2" d="M74.366 77.857l-13.891-13.89"/></g></g></svg>
                </Link>
              </div>

              <ul className="flex flex-wrap border-t border-black border-b">
                <li className="text-sm lg:text-lg xl:text-xl pr-2 md:pr-3 lg:pr-4 xl:pr-5 block xl:border-r border-black hidden md:block invert-select relative overflow-hidden">
                  <span className="block relative overflow-hidden my-2 md:my-3">
                    <motion.span className="block" variants={reveal}>Architecture + Conservation</motion.span>
                  </span>
                </li>
                  
                <li className="text-sm lg:text-lg xl:text-xl my-2 md:my-3 pr-2 lg:px-3 lg:px-4 xl:px-5 xl:pr-6 hidden xl:block invert-select overflow-hidden relative">
                  <motion.span className="block" variants={reveal}>&copy; 2020</motion.span>
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