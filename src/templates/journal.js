import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import Moment from "react-moment"

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

const revealArrowRight = {
	initial: { y: "-100%", x: "100%" },
	enter: { 
    y: "0%",
    x: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  }
}

const revealInOut = {
	initial: { y: "100%", opacity: 0 },
	enter: { 
    y: "0%",
    opacity: 1,
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  },
  exit: { 
    y: "100%",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
  }
}

const reveal = {
	initial: { y: "185%" },
	enter: { 
    y: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  },
}

const JournalEntryPage = ({ data: { entries, studio, entry }, location }) => {
  return (
    <>
      <Scroll callback={location} />
      <SEO
        titleOverride={`Journal - ${entry.title}`}
        pathnameOverride={location.pathname}
      />
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { staggerChildren: 0.05 } }
          }}
        >
          <header className="p-4 pb-0 md:p-6 md:pb-0 absolute md:fixed top-0 left-0 right-0 h-14 md:h-22 z-20 hidden md:flex flex-wrap" data-scroll-sticky data-scroll data-scroll-target="#___gatsby">

            <nav className="relative z-10 w-full">
              <ul className="flex flex-wrap">
                <li className="block relative overflow-hidden">
                  <Link className="text-lg md:text-2xl pr-px hover:line-through focus:line-through block relative overflow-hidden" to="/journal">
                    <motion.div variants={revealInOut}>
                      <div className="flex flex-wrap items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 27.197 23.217"><g data-name="Group 116" fill="none" stroke="currentColor" strokeWidth="2"><path data-name="Path 1" d="M12.314 22.51l-10.9-10.9 10.9-10.9"/><path data-name="Path 2" d="M1.414 11.609h25.783"/></g></svg>
                        <span className="block ml-3">All Journal Entries</span>
                      </div>
                    </motion.div>
                  </Link>
                </li>
                <li className="ml-auto">
                  <Link to="/wayfinder" activeClassName="line-through" className="text-lg md:text-2xl px-px text-black hover:line-through focus:line-through">Menu</Link>
                </li>
              </ul>
            </nav>
            <div className="mt-auto -mb-px h-px w-full border-b border-black transition ease-in-out duration-500"></div>
          </header>


          <header className="p-4 pb-0 md:p-6 md:pb-0 h-14 md:h-22 z-50 flex flex-wrap bg-white relative top-0 left-0 right-0 md:hidden">
            <nav className="relative z-10 w-full">
              <ul className="flex flex-wrap">
                <li className="block relative overflow-hidden">
                  <Link className="text-lg md:text-2xl pr-px hover:line-through focus:line-through block relative overflow-hidden" to="/journal">
                    <motion.div variants={revealInOut}>
                      <div className="flex flex-wrap items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 27.197 23.217"><g data-name="Group 116" fill="none" stroke="currentColor" strokeWidth="2"><path data-name="Path 1" d="M12.314 22.51l-10.9-10.9 10.9-10.9"/><path data-name="Path 2" d="M1.414 11.609h25.783"/></g></svg>
                        <span className="block ml-3">All Journal Entries</span>
                      </div>
                    </motion.div>
                  </Link>
                </li>
                <li className="ml-auto">
                  <Link to="/wayfinder" activeClassName="line-through" className="text-lg md:text-2xl px-px text-black hover:line-through focus:line-through">Menu</Link>
                </li>
              </ul>
            </nav>
            <div className="mt-auto -mb-px h-px w-full border-b border-black transition ease-in-out duration-500"></div>
          </header>
        </motion.div>
        
        <div className="bg-white pt-2 w-full h-full -mt-14 md:mt-0">
        <motion.div initial="initial" animate="enter" exit="exit" variants={fade} className="p-4 md:p-6 pt-14 md:pt-22 mx-auto">
          
        <div className="h-14 md:h-22 z-10 fixed top-0 left-0 bg-white w-full hidden md:block" data-scroll-sticky data-scroll data-scroll-target="#___gatsby"></div>

          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="mt-4 flex flex-wrap mb-8 md:mb-10 xl:mb-12"
            variants={{
              enter: { transition: { staggerChildren: 0.025 } }
            }}
          >
            <div className="overflow-hidden w-11/12 md:w-8/12 -mt-6 md:-mt-2">
              <h1 className="text-left font-display text-screen-display--journal m-0 p-0 block">
                <span className="block relative overflow-hidden pt-6">
                <motion.span variants={reveal} className="block">{ entry.title }</motion.span>
                </span>
              </h1>
            </div>

            <div className="w-full md:w-auto mt-20 mb-0 md:mb-0 md:mt-0 text-right ml-auto">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-20 md:w-32 xl:w-48 ml-auto md:ml-0 mt-2 rotate-90 md:rotate-0 transform" viewBox="0 0 157.381 157.38"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M20.352 104.704l84.352-.001.001-84.353"/><path data-name="Path 2" d="M104.704 104.704L4.95 4.95"/></g></svg> */}
              <div className="overflow-hidden relative block">
                <motion.div variants={revealArrowRight}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-24 md:w-32 xl:w-40 ml-auto md:ml-0 mt-0 md:mt-2 rotate-90 transform" viewBox="0 0 157.381 157.38"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M20.352 104.704l84.352-.001.001-84.353"/><path data-name="Path 2" d="M104.704 104.704L4.95 4.95"/></g></svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          { entry.gallery.length > 2 ? (
            <>
              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                className="w-full mb-12 md:mb-16 xl:mb-24"
                variants={{
                  enter: { transition: { delayChildren: 0.5 } }
                }}
              >
                <div className="flex flex-wrap -mx-3 overflow-hidden">
                  {entry.gallery.map(({ alt, fluid }, i) => {
                    return(
                      <motion.div variants={fade} className="w-1/2 md:w-4/12 px-3 mb-5" key={i}>
                        <Img alt={alt} backgroundColor={ '#dc481e'} fluid={ fluid } className="w-full object-cover"/>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                className="w-full md:w-10/12 ml-auto mb-16 md:mb-16 xl:mb-24"
                variants={{
                  enter: { transition: { delayChildren: 0.5 } }
                }}
              >
                <motion.div variants={fade}>
                  <div className="mb-8 text-sm">
                    <Moment format="DD.MM.Y">{ entry.date }</Moment>
                  </div>
                  <div className="content text-lg xl:text-xl leading-tight w-10/12 md:w-full md:max-w-md xl:max-w-lg" dangerouslySetInnerHTML={{ __html: entry.content }}></div>
                </motion.div>
              </motion.div>
            </>
          ) : (
            <div className="flex flex-wrap mb-12 md:mb-16 xl:mb-24 md:-mx-4">
              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                className={ entry.gallery.length === 2 ? `w-full lg:w-1/2` : `w-full lg:w-3/12`}
                variants={{
                  enter: { transition: { delayChildren: 0.5 } }
                }}
              >
                <div className="flex flex-wrap -mx-3 overflow-hidden md:px-4 mb-6 md:mb-10 xl:mb-0">
                  {entry.gallery.map(({ alt, fluid }, i) => {
                    return(
                      <motion.div variants={fade} className={ entry.gallery.length === 2 ? `w-1/2 md:w-1/2 lg:w-1/2 px-3 mb-5` : `w-full px-3 mb-5` } key={i}>
                        <Img alt={alt} backgroundColor={ '#dc481e'} fluid={ fluid } className="w-full object-cover"/>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                className="w-full lg:w-1/2 md:px-4"
                variants={{
                  enter: { transition: { delayChildren: 0.5 } }
                }}
              >
                <motion.div variants={fade}>
                  <div className="mb-8 text-sm">
                    <Moment format="DD.MM.Y">{ entry.date }</Moment>
                  </div>
                  <div className="content text-lg xl:text-xl leading-snug w-11/12 md:w-full md:max-w-md xl:max-w-lg lg:text-lg" dangerouslySetInnerHTML={{ __html: entry.content }}></div>
                </motion.div>
              </motion.div>
            </div>
          )}

          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="w-full md:w-10/12 ml-auto mt-6 md:mt-8"
            variants={{
              enter: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } }
            }}
          >
            <nav className="pb-12 md:pb-24 pt-0 md:pt-16">
              <div>
                {entries.edges.map(({ node }, i) => {
                  return (
                    <div className="overflow-hidden" key={i}>
                      <Link to={`/journal/${node.slug}`} className="Collapse w-full group strike">
                        <div className="border-b border-current w-full pt-1 pb-0 md:pt-2 md:pb-2 xl:pt-3 xl:pb-3 overflow-hidden">
                          <div className="relative overflow-hidden py-3">
                            <motion.div variants={reveal} className="flex flex-wrap items-center">
                              <span className={`block text-xs mr-3 w-full md:w-auto text-left mb-2 md:mb-0 md:mt-px xl:mt-1`}><Moment format="DD.MM.Y">{ node.date }</Moment></span>
                              <span className={`block text-xl md:text-2xl xl:text-3xl text-left font-display leading-extratight mb-0 pb-0 md:-mb-3 strike__inner strike__inner--small w-9/12 md:w-auto`}>{ node.title }</span>
                              <span className="block ml-auto pl-4 transform origin-center rotate-0">
                              <motion.div variants={revealArrowTopRight}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 -mr-1" viewBox="0 0 17.938 17.937"><g data-name="Group 33" fill="none" stroke="currentColor"><path data-name="Path 1" d="M2.18 5.752h10.006v10.005"/><path data-name="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg>
                              </motion.div>
                              </span>
                            </motion.div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </nav>
          </motion.div>
      </motion.div>
      
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
      >
        <section className="bg-prbred pt-8 md:pt-24 lg:pt-32 pb-32 md:pb-6 relative z-20">
          <div className="w-full md:w-10/12 ml-auto mr-4 md:mr-6 px-4 md:px-0 md:pl-12 lg:pl-4">
            <div className="flex flex-wrap items-end relative">
              <div className="w-full md:px-3 overflow-hidden mb-3 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 lg:w-32 xl:w-64 md:ml-auto transform -rotate-90 md:rotate-90 md:absolute top-0 left-0 md:left-auto md:top-auto md:bottom-0 md:right-0 md:m-6 md:mr-0" viewBox="0 0 157.38 157.381"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M52.676 20.352l.001 84.352 84.353.001"/><path data-name="Path 2" d="M52.676 104.704L152.43 4.95"/></g></svg>
              </div>
              <div className="w-full md:mb-8 lg:mb-3">
                <span className="text-3xl md:text-5xl xl:text-6xl block font-display leading-none mb-32 md:mb-0 lg:mb-6 lg:pl-8 invert-select">We’re social, so if you’d<br/>like to talk about your<br/>project, get in touch.</span>
              </div>

              <div className="hidden md:flex flex-wrap border-t border-b border-black w-full md:pr-0 md:max-w-xl lg:max-w-3xl lg:ml-8 mb-16 md:mb-40 lg:mb-40">
                <a href={`mailto:${ studio.studioEmailAddress }`} rel="noopener noreferrer" target="_blank" className="text-sm sm:text-lg md:text-xl block py-2 lg:py-3 pr-3 lg:pr-4 leading-tight hover:line-through focus:line-through hover:text-white focus:text-white lg:mb-0 border-r border-black">Email</a>

                <a href={`tel:${ studio.studioTelephone }`} rel="noopener noreferrer" target="_blank" className="text-sm sm:text-lg md:text-xl block pl-2 lg:pl-3 px-3 lg:px-4 py-2 lg:py-3 leading-tight hover:line-through focus:line-through hover:text-white focus:text-white lg:mb-0 border-r border-black">
                  <span className="hidden md:block">{ studio.studioTelephone }</span>
                  <span className="block md:hidden">Tel</span>
                </a>

                <a href="https://www.google.com/maps/place/Player+Roberts+Bell+Architects/@52.9888236,-0.9303382,17z/data=!3m1!4b1!4m5!3m4!1s0x4879c94b2ea00ee3:0xf9402e81b6228e50!8m2!3d52.9888236!4d-0.9281442" rel="noopener noreferrer" target="_blank" className="text-sm sm:text-lg md:text-xl block leading-tight hover:line-through focus:line-through hover:text-white focus:text-white py-2 lg:py-3 pl-3 lg:pl-4 lg:pr-16 pr-8">Find us</a>

                <Link to={`/studio`} className="text-sm sm:text-lg md:text-xl block leading-tight hover:line-through focus:line-through hover:text-white focus:text-white pl-3 lg:pl-4 py-2 lg:py-3 ml-auto border-l border-black">Studio</Link>
              </div>
            </div>
            <div className="md:hidden">
              <Link 
                className={`block pr-8 pb-4 z-30 w-28 md:w-40`}
                to="/"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full md:mb-3 md:pr-2" viewBox="0 0 906.3 620"><g data-name="Group 177"><path data-name="Path 58" d="M906 620z" fill="#fff"/><path data-name="Path 77" d="M25.1 183.5H.1V0h66.6c45.4 0 71.4 21.5 71.4 57.4 0 36.1-25.9 57.7-71.4 57.7H25.1zm41.1-89.1c32 0 47.5-13.1 47.5-37 0-23.6-15.4-36.7-47.5-36.7H25.1v73.7z" fill="#1d1d1b"/><path data-name="Path 78" d="M185 0v183.5h-24.2V0z" fill="#1d1d1b"/><path data-name="Path 79" d="M320.4 158.5c0 6.7 3.8 9.9 9.9 9.9a25.1 25.1 0 0011.1-2.9v13.1c-4.4 4.4-9.6 7.6-19.5 7.6-13.1 0-22.4-9.9-23.9-25.1-7 14.9-25 25.9-45.7 25.9-24.8 0-40.8-13.4-40.8-35.2 0-24.2 20.7-34.1 51.3-40.2l34.4-7v-4.9c0-17.5-10.2-28.2-28-28.2-18.4 0-28.2 10.8-32 25.6l-21.6-2.9c4.9-23.9 23.9-41.4 53.9-41.4 32 0 51 16.3 51 48.6zm-23.3-37.9l-28.5 6.1c-20.1 4.4-32.9 8.2-32.9 23.6 0 10.8 7.3 18.9 21.8 18.9 22.4 0 39.6-16.9 39.6-42.5z" fill="#1d1d1b"/><path data-name="Path 80" d="M373.7 232.5l20.7-49.2-53.6-127h25.3l40.5 97.9h1.2l39-97.9h23.9l-73.4 176.2z" fill="#1d1d1b"/><path data-name="Path 81" d="M602.9 140.7c-6.4 28.8-27.7 46.3-59.4 46.3-37.9 0-65.5-25.6-65.5-65.2 0-40.2 27.7-69 64.4-69 40.5 0 61.2 28.8 61.2 63.5v9.6H502.2c1.2 24.8 18.9 42.2 41.6 42.2 21.3 0 33.8-10.2 39-29.7zm-24.1-30.6c-.9-20.4-12.2-39-36.4-39-23 0-36.7 18.1-39.6 39z" fill="#1d1d1b"/><path data-name="Path 82" d="M704.6 80.4c-7-3.8-11.9-5.2-19.8-5.2-18.3 0-32 16.6-32 41.1v67.3h-24.2V56.2h24.1v25.9c4.7-14.6 17.8-29.4 36.1-29.4 7.9 0 13.7 2 18.1 5.8z" fill="#1d1d1b"/><path data-name="Path 83" d="M120 400c-3.5-5-6.1-18.4-7.6-39.9-1.1-20.4-10.7-34.1-35.8-34.1H24.8v74H0V216.5h74.6c46.6 0 69 21.6 69 54.2 0 28.2-19.2 43.1-41.7 45.7 22.4 4.4 33.2 18.1 35 39.6 2.3 26.8 3.2 37.3 9.3 44zm-46.9-94.1c31.2 0 45.1-11.6 45.1-34.4 0-21-14-34.4-45.1-34.4H24.8v68.7h48.3z" fill="#1d1d1b"/><path data-name="Path 84" d="M229.6 403.4c-37.3 0-64.7-27.4-64.7-67s27.4-67.3 64.7-67.3c37.6 0 65.2 27.7 65.2 67.3s-27.7 67-65.2 67zm0-18.6c25.9 0 40.5-20.1 40.5-48.4 0-28.5-14.6-48.3-40.5-48.3-25.6 0-39.9 19.8-39.9 48.3 0 28.3 14.2 48.4 39.9 48.4z" fill="#1d1d1b"/><path data-name="Path 85" d="M338.2 400h-18.3V216.5h24.2v83c5.5-15.7 21.8-30.3 45.7-30.3 37.6 0 58.2 29.7 58.2 67.3s-20.7 67-58.5 67c-23.6 0-40.2-14-46-30zm5.2-60c0 28 17.8 44.3 40.8 44.3 25 0 38.7-18.6 38.7-47.8s-13.7-47.8-38.7-47.8c-23 0-40.8 16.3-40.8 44z" fill="#1d1d1b"/><path data-name="Path 86" d="M590.7 357.1c-6.4 28.8-27.7 46.3-59.4 46.3-37.9 0-65.5-25.6-65.5-65.2 0-40.2 27.7-69 64.4-69 40.5 0 61.2 28.8 61.2 63.5v9.6H489.9c1.2 24.8 18.9 42.2 41.6 42.2 21.3 0 33.8-10.2 39-29.7zm-24.2-30.5c-.9-20.4-12.2-39-36.4-39-23 0-36.7 18.1-39.6 39z" fill="#1d1d1b"/><path data-name="Path 87" d="M692.4 296.8c-7-3.8-11.9-5.2-19.8-5.2-18.3 0-32 16.6-32 41.1V400h-24.2V272.7h24.2v25.9c4.7-14.6 17.8-29.4 36.1-29.4 7.9 0 13.7 2 18.1 5.8z" fill="#1d1d1b"/><path data-name="Path 88" d="M720.6 290.1h-19.2V277l8.2-1.5c11.9-2.3 14.6-8.1 17.5-20.4l3.8-17.8h13.7v35.2h35.8V290h-35.8v77.2c0 11.4 4.7 16.6 15.7 16.6 8.2 0 16.6-3.5 23.9-7.6v16.3c-9.3 7-18.6 10.8-32.6 10.8-18.1 0-30.9-8.4-30.9-33.2v-80z" fill="#1d1d1b"/><path data-name="Path 89" d="M816.4 355.7c2.3 19.5 16 30 37.9 30 16.9 0 29.4-6.1 29.4-18.9 0-12-8.5-16-24.2-18.9l-21.6-3.8c-23.9-3.8-38.2-14-38.2-35.8 0-23.3 19.5-39 48.9-39 33.8 0 53.6 15.7 55.9 45.1l-19.5 1.2c-2.9-19.5-14.9-28.5-36.4-28.5-16 0-26.5 7.3-26.5 18.9 0 10.2 6.4 15.4 19.5 17.8l23.9 3.8c25.6 4.4 40.8 14 40.8 37 0 25.3-22.4 39-52.1 39-31.7 0-55.9-14.9-58.2-46.3z" fill="#1d1d1b"/><path data-name="Path 90" d="M78.1 616.4H0V432.9h74.9c45.4 0 64.1 19.8 64.1 48.9 0 21.3-15.1 35.8-34.7 39.3 22.4 3.8 39.9 18.7 39.9 44.9 0 31.7-23.3 50.4-66.1 50.4zM24.5 512.1h51.3c26.5 0 37.9-11.4 37.9-29.1 0-17.5-11.4-29.4-37.9-29.4H24.5zm0 19.5v64.1h53c27.4 0 41.7-11.9 41.7-31.8 0-20.1-14.3-32.3-41.7-32.3z" fill="#1d1d1b"/><path data-name="Path 91" d="M289.2 573.5c-6.4 28.8-27.7 46.3-59.4 46.3-37.9 0-65.5-25.6-65.5-65.2 0-40.2 27.7-69 64.4-69 40.5 0 61.2 28.8 61.2 63.5v9.6H188.5c1.2 24.8 18.9 42.2 41.6 42.2 21.3 0 33.8-10.2 39-29.7zM265.1 543c-.9-20.4-12.2-39-36.4-39-23 0-36.7 18.1-39.6 39z" fill="#1d1d1b"/><path data-name="Path 92" d="M344.3 432.9v183.5h-24.2V432.9z" fill="#1d1d1b"/><path data-name="Path 93" d="M406.6 432.9v183.5h-24.2V432.9z" fill="#1d1d1b"/><path data-name="Path 94" d="M617.7 474.5v119.3L499 475.1l-9.4 9.3 118.8 118.8H489v13.2h141.9V474.5z"/></g></svg>
              </Link>
            </div>

            <ul className="flex flex-wrap border-t border-black border-b lg:ml-8">

              <li className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 pr-2 md:pr-3 lg:pr-4 xl:pr-5 block xl:border-r border-black hidden md:block invert-select">Architecture + Conservation</li>
                
              <li className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 pr-2 lg:px-3 lg:px-4 xl:px-5 xl:pr-6 hidden xl:block invert-select">&copy; 2021</li>
              
              <li className="block md:border-l border-black invert-select">
                <Link className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 md:px-2 lg:px-4 xl:px-5 invert-select block hover:text-white focus:text-white hover:line-through focus:line-through" to={`/privacy`} target="_blank" rel="noopener noreferrer">Privacy</Link>
              </li>

              <li className="ml-auto block border-l border-black invert-select">
                <a className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 invert-select block hover:text-white focus:text-white hover:line-through focus:line-through" href={`tel:${ studio.studioTelephone }`} target="_blank" rel="noopener noreferrer"><span className="block invert-select md:hidden">Tel</span><span className="hidden invert-select md:block">{ studio.studioTelephone }</span></a>
              </li>

              <li className="invert-select block border-l border-black">
                <a className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 invert-select block hover:text-white focus:text-white hover:line-through focus:line-through" href={`mailto:${ studio.studioEmailAddress }`} target="_blank" rel="noopener noreferrer">Email</a>
              </li>

              <li className="border-l border-black invert-select">
                <a className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 block hover:text-white focus:text-white hover:line-through focus:line-through invert-select" href={ studio.studioTwitterUrl } target="_blank" rel="noopener noreferrer">Twi<span className="hidden md:inline invert-select">tter</span></a>
              </li>

              <li className="border-l border-black invert-select">
                <a className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 pr-0 lg:pr-0 xl:pr-0 block hover:text-white focus:text-white hover:line-through focus:line-through invert-select" href={ studio.studioInstagramUrl } target="_blank" rel="noopener noreferrer">Insta<span className="hidden md:inline invert-select">gram</span></a>
              </li>
            </ul>
            <ul className="flex flex-wrap border-b border-black md:hidden">
              <li className="text-sm md:text-lg py-2 block pr-12 block invert-select">Architecture + Conservation</li>
            </ul>
          </div>
        </section>
      </motion.div>
      </div>
    </>
  )
}

export default JournalEntryPage

export const query = graphql`
  query JournalEntryQuery($slug: String!) {
    entry: datoCmsJournal(slug: { eq: $slug}) {
      title
      date
      content
      gallery {
        fluid(
          maxWidth: 950,
          imgixParams: {auto: "format", sharp:10, h: "950", w: "950", fit: "crop", crop: "faces, center"}) {
          ...GatsbyDatoCmsFluid_noBase64
        }
        alt
      }
      slug
    }
    entries: allDatoCmsJournal(sort: {fields: date, order: DESC}, filter: {slug: {ne: $slug}}, limit: 6) {
      edges {
        node {
          title
          date
          content
          gallery {
            fluid(
              maxWidth: 900,
              imgixParams: {h: "900", w: "900", fit: "crop", dpi: 1, q: 100, auto: "format"}) {
              ...GatsbyDatoCmsFluid_noBase64
            }   
            alt
          }
          slug
        }
      }
    }
    studio: datoCmsStudio {
      studioTwitterUrl
      studioInstagramUrl
      studioLinkedinUrl
      studioEmailAddress
      studioTelephone
      heroSupportingText
    }
  }
`