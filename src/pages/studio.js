import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Scroll from "../components/locomotiveScroll"

const windowGlobal = typeof window !== 'undefined' && window

const header = {
	initial: { opacity: 1 },
	enter: { opacity: 1, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
	exit: {
		opacity: 1,
		transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
	}
}

const image = {
	initial: { scale: 1.35 },
	enter: { 
    scale: 1,
    transition: { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }
  },
	exit: {
		transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
	}
}

const fade = {
	initial: { opacity: 0 },
	enter: { opacity: 1, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
	exit: {
		opacity: 0,
		transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
	}
}

const StudioPage = ({ data: { testImage, testImage2, heroImage }, location}) => {
  return (
    <>
      <SEO title="Studio" /> 
      
      <Scroll callback={location} />
      
      <motion.header variants={header} className="p-4 pb-0 md:p-6 md:pb-0 fixed top-0 left-0 right-0 h-16 md:h-22 z-50 flex flex-wrap text-white" data-scroll-sticky data-scroll data-scroll-target="#___gatsby">
        <nav className="relative z-10 w-full">
          <ul className="flex flex-wrap">
            <motion.li variants={fade}>
              <button onClick={() => windowGlobal.scroll.scrollTo(document.querySelector('#studio'))} className="text-lg md:text-2xl pr-px opacity-100 transition ease-in-out duration-500 hover:border-transparent outline-none">Studio</button>
            </motion.li>
            <motion.li variants={fade} className="text-xl md:text-2xl px-2 opacity-25">/</motion.li>
            <motion.li variants={fade}>
              <button onClick={() => windowGlobal.scroll.scrollTo(document.querySelector('#expertise'), -75)} className="text-lg md:text-2xl pr-px opacity-25 transition ease-in-out duration-500 hover:border-transparent outline-none">Expertise</button>
            </motion.li>
            <motion.li variants={fade} className="text-xl md:text-2xl px-2 opacity-25">/</motion.li>
            <motion.li variants={fade}>
              <button onClick={() => windowGlobal.scroll.scrollTo(document.querySelector('#team'), -75)} className="text-lg md:text-2xl pr-px opacity-25 transition ease-in-out duration-500 hover:border-transparent outline-none">Team</button>
            </motion.li>
            <motion.li variants={fade} className="text-xl md:text-2xl px-2 opacity-25">/</motion.li>
            <motion.li variants={fade}>
              <button onClick={() => windowGlobal.scroll.scrollTo(document.querySelector('#services'), -75)} className="text-lg md:text-2xl pr-px opacity-25 transition ease-in-out duration-500 hover:border-transparent outline-none">Services</button>
            </motion.li>
            <motion.li variants={fade} className="text-xl md:text-2xl px-2 opacity-25">/</motion.li>
            <motion.li variants={fade}>
              <button onClick={() => windowGlobal.scroll.scrollTo(document.querySelector('#contact'), -75)} className="text-lg md:text-2xl pr-px opacity-25 transition ease-in-out duration-500 hover:border-transparent outline-none">Contact</button>
            </motion.li>
            <li className="ml-auto">
              <Link to="/wayfinder" activeClassName="line-through" className="text-lg md:text-2xl px-px text-white transition ease-in-out duration-500">Menu</Link>
            </li>
          </ul>
        </nav>
        <div className="mt-auto h-px w-full border-b border-white transition ease-in-out duration-500"></div>
      </motion.header>

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
      >
        <motion.div variants={fade} className="h-16 md:h-22 z-30 fixed top-0 left-0 bg-offblack w-full" data-scroll-sticky data-scroll data-scroll-target="#___gatsby"></motion.div>

        <div className="bg-offblack p-4 md:p-6 pb-0 md:pb-0 min-h-screen pt-16 md:pt-22 text-white min-h-screen" id="studio">
          <div className="flex flex-wrap -mx-4 md:-mx-3 md:mt-8 md:h-screen-inner" id="something">
            <div className="w-full md:w-1/2 flex flex-wrap md:px-3">
              <div className="w-full px-3 md:px-0 mt-12">
                <div className="flex flex-wrap h-full">
                  <div className="w-full mb-auto">
                    <motion.h1 variants={fade} className="text-screen-display leading-negative block order-2 lg:order-1 w-full lg:w-auto mb-0 md:mb-2 lg:-mb-2"  data-scroll-sticky data-scroll data-scroll-target="#___gatsby">Our<br/>Studio</motion.h1>
                  </div>
                  <div className="mt-auto" data-scroll-sticky data-scroll data-scroll-target="#___gatsby">
                    <motion.div variants={fade} className="w-auto ml-auto order-1 lg:order-2 mb-2 md:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-24 md:w-40 mt-24 md:mt-0" viewBox="0 0 157.381 157.38"><g data-name="Group 66" fill="none" stroke="#FFF" strokeWidth="14"><path data-name="Path 1" d="M20.352 104.704l84.352-.001.001-84.353"/><path data-name="Path 2" d="M104.704 104.704L4.95 4.95"/></g></svg>
                    </motion.div>
                    <motion.div variants={fade} className="w-full lg:w-2/3 mb-10 mt-auto">
                      <p className="text-lg leading-snug">The built environment relies on change, and we exist to make progress. This means that we are realistic, and driven to build. If you’re looking to extend, adapt, refurbish, or to create something new, we can help you.</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:px-3">
              <div className="flex flex-wrap h-full">
                <div className="mt-auto w-full">
                  <motion.div variants={fade}>
                    <div className="hidden md:block md:ml-auto md:text-right w-64 mb-6 leading-snug" data-scroll-sticky data-scroll data-scroll-target="#___gatsby">
                      <p>We’re Architects and Building Conservation specialists who are known for delivering projects with an authentic sense of place. We’re an RIBA Chartered Practice based in the Midlands.</p>
                    </div>
                  </motion.div>
                  <div className="w-full relative overflow-hidden" data-scroll-sticky data-scroll data-scroll-target="#___gatsby">
                    <motion.div variants={image} className="w-full transform image-transform-center relative overflow-hidden">
                      <Img fluid={ heroImage.childImageSharp.fluid } className="w-full object-cover mb-0 studio-image"/>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-white p-4 md:p-6 relative z-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-24 lg:w-32 xl:w-40 absolute bottom-0 right-0 mr-4 md:mr-6" viewBox="0 0 157.38 157.381"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M52.676 20.352l.001 84.352 84.353.001"/><path data-name="Path 2" d="M52.676 104.704L152.43 4.95"/></g></svg>

          <div className="w-full flex flex-wrap md:-mx-4 pt-6 md:pt-10 xl:pt-16">
            <div className="w-full md:w-1/2 lg:w-5/12 xl:w-4/12 md:px-4 hidden md:block">
              <div className="w-full">
                <Img fluid={ testImage2.childImageSharp.fluid } className="w-full max-w-full object-cover"/>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 lg:w-7/12 xl:w-8/12 md:px-4 ml-auto text-black pb-8 md:pb-24">
              <p className="leading-slightnegative w-10/12 md:w-9/12 lg:w-8/12 font-display text-screen-studio-blurb xl:pt-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our combined experience has seen us work with a diverse mix of commercial and private clients, residential developers, housing associations and local authorities, schools, and in the retail, care and health sectors.</p>
            </div>
          </div>
        </div>

        <div className="md:mx-auto md:w-full pb-20 pt-12 md:pt-16 xl:pt-20 bg-white relative z-20" id="expertise">
            <div className="overflow-hidden md:w-9/12 max-w-screen-xl mx-auto px-4 md:px-8">
              <span className="block uppercase mb-8 md:mb-12 xl:mb-16">Our Expertise</span>
              <div className="w-full flex flex-wrap md:-mx-8">
                <div className="w-full md:w-1/2 md:px-8 mb-8 md:mb-16">
                  <span className="text-xl md:text-2xl block w-full border-b border-black mb-6 pb-2 font-display">Architectural Design</span>
                  <p className="leading-tight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Conservation Accreditations enable us to manage complex repairs, alterations and specialist grant aided works. It also means we are adept at finding new uses for old buildings.</p>
                </div>
                <div className="w-full md:w-1/2 md:px-8 mb-8 md:mb-16">
                  <span className="text-xl md:text-2xl block w-full border-b border-black mb-6 pb-2 font-display">Restoration Projects</span>
                  <p className="leading-tight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Conservation Accreditations enable us to manage complex repairs, alterations and specialist grant aided works. It also means we are adept at finding new uses for old buildings.</p>
                </div>
                <div className="w-full md:w-1/2 md:px-8 mb-8 md:mb-16">
                  <span className="text-xl md:text-2xl block w-full border-b border-black mb-6 pb-2 font-display">Residential Schemes</span>
                  <p className="leading-tight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Conservation Accreditations enable us to manage complex repairs, alterations and specialist grant aided works. It also means we are adept at finding new uses for old buildings.</p>
                </div>
                <div className="w-full md:w-1/2 md:px-8 mb-8 md:mb-16">
                  <span className="text-xl md:text-2xl block w-full border-b border-black mb-6 pb-2 font-display">Commercial Spaces</span>
                  <p className="leading-tight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Conservation Accreditations enable us to manage complex repairs, alterations and specialist grant aided works. It also means we are adept at finding new uses for old buildings.</p>
                </div>
              </div>
            </div>
          </div>

        <div className="bg-offblack relative z-20 text-white -xm-4 md:-mx-8 pb-8" id="team">
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/3 lg:w-3/12">
              <div className="px-4 md:px-12 md:ml-3 mb-12 md:mb-0 mt-6 md:mt-12">
                <span className="block uppercase mb-4 md:mb-6 xl:mb-8 pt-12">Team</span>
                <p className="leading-snug md:max-w-2xs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The built environment relies on change, and we exist to make progress. This means that we are realistic, and driven to build.  If you’re looking to extend, adapt, refurbish, or to create something new, we can help you.</p>
              </div>
            </div>

            <div className="w-full md:w-2/3 lg:w-8/12 ml-auto">
              <div className="flex flex-wrap justify-end">
                <div className="w-1/2 md:w-1/3 pb-6">
                  <div className="w-full bg-black h-128 mb-1"></div>
                  <span className="text-lg md:text-xl block mb-0 pb-0">Joe Player</span>
                  <span className="text-sm">Director</span>
                </div>
                <div className="w-1/2 md:w-1/3 pb-6">
                  <div className="w-full bg-black h-128 mb-1"></div>
                  <span className="text-lg md:text-xl block mb-0 pb-0">Joe Player</span>
                  <span className="text-sm">Director</span>
                </div>
                <div className="w-1/2 md:w-1/3 pb-6">
                  <div className="w-full bg-black h-128 mb-1"></div>
                  <span className="text-lg md:text-xl block mb-0 pb-0">Joe Player</span>
                  <span className="text-sm">Director</span>
                </div>
                <div className="w-1/2 md:w-1/3 pb-6">
                  <div className="w-full bg-black h-128 mb-1"></div>
                  <span className="text-lg md:text-xl block mb-0 pb-0">Joe Player</span>
                  <span className="text-sm">Director</span>
                </div>
                <div className="w-1/2 md:w-1/3 pb-6">
                  <div className="w-full bg-black h-128 mb-1"></div>
                  <span className="text-lg md:text-xl block mb-0 pb-0">Joe Player</span>
                  <span className="text-sm">Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 relative z-20 pt-8 md:pt-16 xl:pt-24" id="services">
          <div className="w-full flex flex-wrap md:-mx-4 items-end">
            <div className="w-full md:w-4/12 md:px-4 hidden lg:block">
              <div className="w-1/2">
                <Img fluid={ heroImage.childImageSharp.fluid } className="w-full max-w-full object-cover"/>
              </div>
            </div>

            <div className="w-full lg:w-8/12 ml-auto md:px-4 pb-12 md:pb-24 xl:pb-32">
              <div className="overflow-hidden">
                <span className="block uppercase mb-8 md:mb-12 xl:mb-16">Our Services</span>
                <div className="w-full flex flex-wrap md:-mx-8">
                  <ul className="w-full md:w-1/2 md:px-8">
                    <li className="border-t border-black text-lg md:text-xl py-4 flex flex-wrap items-center">
                      <span className="block text-xs mr-2">01</span>
                      <span className="block">Technical Advice</span>
                    </li>
                    <li className="border-t border-black text-lg md:text-xl py-4 flex flex-wrap items-center">
                      <span className="block text-xs mr-2">02</span>
                      <span className="block">Project Management</span>
                    </li>
                    <li className="border-t md:border-b border-black text-lg md:text-xl py-4 flex flex-wrap items-center">
                      <span className="block text-xs mr-2">03</span>
                      <span className="block">Planning Process</span>
                    </li>
                  </ul>
                  <ul className="w-full md:w-1/2 md:px-8">
                    <li className="border-t border-black text-lg md:text-xl py-4 flex flex-wrap items-center">
                      <span className="block text-xs mr-2">04</span>
                      <span className="block">Masterplanning</span>
                    </li>
                    <li className="border-t border-black text-lg md:text-xl py-4 flex flex-wrap items-center">
                      <span className="block text-xs mr-2">05</span>
                      <span className="block">Visualisation + Concepting</span>
                    </li>
                    <li className="border-t border-b border-black text-lg md:text-xl py-4 flex flex-wrap items-center">
                      <span className="block text-xs mr-2">06</span>
                      <span className="block">Feasability Studies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <section className="bg-prbred pt-12 md:pt-24 lg:pt-32 pb-4 md:pb-8 relative z-20" id="contact">
        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-10/12 ml-auto">
            <div className="flex flex-wrap items-end relative pb-16 md:pb-24 lg:pb-32">
              <div className="w-full">
                <span className="text-3xl md:text-5xl xl:text-6xl block font-display px-4 leading-extratight md:px-6 mb-6">Looking for an architectual<br/>team for your project?</span>
                <a href="https://example.com" rel="noopener noreferrer" target="_blank" className="text-xl md:text-2xl block font-display px-4 leading-extratight md:px-6 underline hover:text-white focus:text-white">Get in touch</a>
              </div>
              <div className="w-full order-2 md:order-1 md:px-3 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 lg:w-32 xl:w-64 ml-auto transform rotate-90 absolute bottom-0 right-0 m-4 md:m-6" viewBox="0 0 157.38 157.381"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M52.676 20.352l.001 84.352 84.353.001"/><path data-name="Path 2" d="M52.676 104.704L152.43 4.95"/></g></svg>
              </div>
          </div>
          </div>
        </div>

        <motion.div variants={fade} className="w-full md:w-10/12 ml-auto mr-4 md:mr-6 px-4 md:px-0 md:pl-12 lg:pl-4">
          <div className="md:hidden">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" className="w-24 mb-5" viewBox="0 0 906.89 620.42"><defs></defs><path className="cls-1" d="M25.39 183.53H.34V0H67c45.44 0 71.36 21.55 71.36 57.37 0 36.12-25.92 57.67-71.36 57.67H25.39zM66.46 94.4c32 0 47.47-13.1 47.47-37 0-23.59-15.43-36.69-47.47-36.69H25.39V94.4zM185.29 0v183.53h-24.18V0zM320.72 158.48c0 6.7 3.79 9.9 9.91 9.9a24.11 24.11 0 0011.06-2.91v13.11c-4.36 4.37-9.61 7.57-19.51 7.57-13.11 0-22.43-9.9-23.88-25.05-6.99 14.9-25.05 25.9-45.73 25.9-24.76 0-40.78-13.4-40.78-35.25 0-24.17 20.68-34.07 51.26-40.19l34.37-7v-4.91c0-17.48-10.19-28.25-28-28.25-18.35 0-28.25 10.77-32 25.63l-21.55-2.92c4.95-23.88 23.88-41.36 53.88-41.36 32 0 51 16.32 51 48.64zm-23.3-37.86l-28.54 6.11c-20.1 4.37-32.91 8.16-32.91 23.6 0 10.77 7.28 18.93 21.84 18.93 22.43 0 39.61-16.89 39.61-42.53zM374 232.46l20.68-49.22-53.59-127h25.34l40.48 97.86h1.17l39-97.86H471l-73.4 176.21zM603.24 140.71c-6.41 28.84-27.67 46.29-59.42 46.29-37.86 0-65.53-25.64-65.53-65.25 0-40.19 27.67-69 64.37-69 40.48 0 61.16 28.84 61.16 63.5v9.61H502.47c1.16 24.76 18.93 42.23 41.65 42.23 21.26 0 33.78-10.19 39-29.71zm-24.17-30.58c-.88-20.39-12.24-39-36.41-39-23 0-36.7 18.06-39.61 39zM704.89 80.42c-7-3.78-11.94-5.24-19.81-5.24-18.35 0-32 16.6-32 41.07v67.28h-24.21V56.25H653v25.92c4.67-14.56 17.77-29.42 36.12-29.42 7.87 0 13.69 2 18.06 5.83zM120.34 400c-3.49-4.95-6.12-18.35-7.57-39.9C111.6 339.66 102 326 76.94 326H25.1v74H.34V216.46H74.9c46.61 0 69 21.55 69 54.17 0 28.25-19.22 43.11-41.65 45.73 22.43 4.37 33.21 18.06 34.95 39.61 2.33 26.79 3.21 37.28 9.32 44zm-46.89-94.13c31.16 0 45.14-11.65 45.14-34.37 0-21-14-34.37-45.14-34.37H25.1v68.74zM229.85 403.44c-37.28 0-64.66-27.37-64.66-67s27.38-67.28 64.66-67.28c37.58 0 65.25 27.67 65.25 67.28s-27.67 67-65.25 67zm0-18.64c25.93 0 40.49-20.09 40.49-48.35 0-28.54-14.56-48.34-40.49-48.34-25.63 0-39.9 19.8-39.9 48.34.05 28.26 14.27 48.35 39.9 48.35zM338.49 400h-18.35V216.46h24.18v83c5.53-15.72 21.84-30.29 45.72-30.29 37.58 0 58.25 29.71 58.25 67.28s-20.67 67-58.54 67c-23.59 0-40.19-14-46-30zm5.24-60c0 28 17.77 44.27 40.78 44.27 25.05 0 38.74-18.64 38.74-47.77s-13.69-47.76-38.74-47.76c-23 0-40.78 16.31-40.78 44zM591 357.13c-6.41 28.84-27.67 46.31-59.41 46.31-37.87 0-65.54-25.63-65.54-65.24 0-40.19 27.67-69 64.37-69 40.49 0 61.16 28.84 61.16 63.5v9.61H490.23c1.16 24.76 18.93 42.23 41.65 42.23 21.26 0 33.78-10.19 39-29.71zm-24.17-30.58c-.88-20.39-12.24-39-36.41-39-23 0-36.7 18.06-39.61 39zM692.65 296.84c-7-3.78-11.94-5.24-19.81-5.24-18.34 0-32 16.6-32 41.07V400h-24.21V272.67h24.18v25.92c4.66-14.56 17.76-29.42 36.11-29.42 7.87 0 13.69 2 18.06 5.83zM720.9 290.14h-19.23V277l8.16-1.46c11.94-2.33 14.56-8.15 17.47-20.39l3.79-17.76h13.69v35.24h35.82v17.47h-35.82v77.19c0 11.36 4.66 16.6 15.73 16.6 8.15 0 16.6-3.5 23.88-7.57v16.31c-9.32 7-18.64 10.77-32.62 10.77-18.06 0-30.87-8.44-30.87-33.2zM816.72 355.68c2.33 19.51 16 30 37.86 30 16.9 0 29.42-6.12 29.42-18.93 0-11.95-8.45-16-24.17-18.94L838.27 344c-23.88-3.79-38.15-14-38.15-35.83 0-23.3 19.51-39 48.93-39 33.79 0 53.59 15.73 55.92 45.15l-19.51 1.16c-2.92-19.51-14.86-28.54-36.41-28.54-16 0-26.51 7.28-26.51 18.93 0 10.2 6.41 15.44 19.52 17.77l23.88 3.79c25.63 4.36 40.78 14 40.78 37 0 25.33-22.43 39-52.14 39-31.74 0-55.92-14.85-58.25-46.31zM78.4 616.37H.34v-183.5H75.2c45.43 0 64.07 19.81 64.07 48.94 0 21.26-15.14 35.82-34.66 39.31 22.43 3.79 39.91 18.65 39.91 44.86 0 31.75-23.31 50.39-66.12 50.39zM24.81 512.1h51.26c26.5 0 37.86-11.36 37.86-29.13 0-17.47-11.36-29.42-37.86-29.42H24.81zm0 19.51v64.08h53c27.38 0 41.65-11.94 41.65-31.75 0-20.1-14.27-32.33-41.65-32.33zM289.55 573.55c-6.4 28.84-27.67 46.31-59.41 46.31-37.87 0-65.54-25.63-65.54-65.24 0-40.19 27.67-69 64.37-69 40.49 0 61.17 28.84 61.17 63.5v9.61H188.78c1.16 24.76 18.93 42.23 41.65 42.23 21.26 0 33.78-10.19 39-29.71zM265.38 543c-.88-20.39-12.23-39-36.41-39-23 0-36.7 18.06-39.61 39zM344.6 432.87v183.5h-24.18v-183.5zM406.93 432.87v183.5h-24.18v-183.5z"/><g id="Group_40" data-name="Group 40"><path d="M631.25 616.4H489.33v-13.22h128.7v-128.7h13.22V616.4z"/><path transform="rotate(-45 559.62 544.768)" d="M553.01 452.82h13.22v183.91h-13.22z"/></g></svg>
          </div>

          <ul className="flex flex-wrap border-t border-black border-b">
            <li className="lg:text-lg xl:text-2xl pl-0 py-2 md:py-3 px-2 block">&copy; 2020</li>

            <li className="ml-auto block border-l border-black">
              <a className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 block hover:text-white focus:text-white hover:line-through hover:line-through" href="mailto:hello@prb-a.com" target="_blank" rel="noopener noreferrer">hello@prb-a.com</a>
            </li>

            <li className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 block border-l border-black pr-4 lg:pr-12 xl:pr-32 2xl:pr-64 hidden md:block">Architecture + Conservation</li>

            <li className="border-l border-black">
              <a className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 block hover:text-white focus:text-white hover:line-through hover:line-through" href="https://twitter.com/prbarchitects" target="_blank" rel="noopener noreferrer">Twi<span className="hidden md:inline">tter</span></a>
            </li>

            <li className="border-l border-black">
              <a className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 pr-0 lg:pr-0 xl:pr-0 block hover:text-white focus:text-white hover:line-through hover:line-through" href="https://www.instagram.com/prbarchitects/" target="_blank" rel="noopener noreferrer">Insta<span className="hidden md:inline">gram</span></a>
            </li>
          </ul>
          <ul className="flex flex-wrap border-b border-black md:hidden">
            <li className="md:text-lg py-2 block pr-12 block">Architecture + Conservation</li>
          </ul>
        </motion.div>
        
      </section>
    </>
  )
}

export default StudioPage

export const query = graphql`
  query StudioPageQuery {
    heroImage: file(relativePath: { eq: "ivy-farm.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    testImage: file(relativePath: { eq: "test.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    testImage2: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`