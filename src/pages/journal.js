import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import Moment from "react-moment"
import Collapsible from "../components/collapsible"

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

const revealArrowRight = {
	initial: { y: "-100%", x: "100%" },
	enter: { 
    y: "0%",
    x: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  }
}

const revealArrow = {
	initial: { y: "-100%", x: "-100%" },
	enter: { 
    y: "0%",
    x: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  }
}

const reveal = {
	initial: { y: "185%" },
	enter: { 
    y: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  },
}

const JournalPage = ({ data: { entries, studio }, location }) => {
  return (
    <>
      <SEO
        titleOverride={`Journal`}
        pathnameOverride={location.pathname}
      />
        <Scroll callback={location} />
        <header className="p-4 pb-0 md:p-6 md:pb-0 fixed top-0 left-0 right-0 h-14 md:h-22 z-20 flex flex-wrap">
          <nav className="relative z-10 w-full">
            <ul className="flex flex-wrap">
              <li className="ml-auto">
                <Link to="/wayfinder" activeClassName="line-through" className="text-lg md:text-2xl px-px text-black hover:line-through focus:line-through">Menu</Link>
              </li>
            </ul>
          </nav>
          <div className="mt-auto h-px w-full bg-black"></div>
        </header>

        <motion.div initial="initial" animate="enter" exit="exit" variants={fade} className="bg-white p-4 md:p-6 pt-14 md:pt-22">
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="mt-4 flex flex-wrap -mr-1 md:-mr-px"
            variants={{
              enter: { transition: { staggerChildren: 0.025 } }
            }}
          >
            <div className="w-full md:w-auto order-2 md:order-1 mt-32 mb-0 md:mb-0 md:mt-0 text-right md:text-left">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-20 md:w-32 xl:w-48 ml-auto md:ml-0 mt-2 rotate-90 md:rotate-0 transform" viewBox="0 0 157.381 157.38"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M20.352 104.704l84.352-.001.001-84.353"/><path data-name="Path 2" d="M104.704 104.704L4.95 4.95"/></g></svg> */}
              <div className="overflow-hidden relative hidden md:block">
                <motion.div variants={revealArrow}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="studio-arrow ml-auto md:ml-0 mt-0 md:mt-2 rotate-90 md:rotate-0 md:-mb-8 xl:-mb-12 transform md:-mr-8" viewBox="0 0 157.381 157.38"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M20.352 104.704l84.352-.001.001-84.353"/><path data-name="Path 2" d="M104.704 104.704L4.95 4.95"/></g></svg>
                </motion.div>
              </div>

              <div className="overflow-hidden relative block md:hidden">
                <motion.div variants={revealArrowRight}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="studio-arrow ml-auto md:ml-0 mt-0 md:mt-2 md:-mb-8 rotate-90 transform" viewBox="0 0 157.381 157.38"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M20.352 104.704l84.352-.001.001-84.353"/><path data-name="Path 2" d="M104.704 104.704L4.95 4.95"/></g></svg>
                </motion.div>
              </div>
            </div>
            <div className="overflow-hidden w-full md:flex-1 order-1 md:order-2">
              <h1 className="text-right text-screen-display--large m-0 p-0 block mt-3 2xl:mt-4 mb-0 pb-0 -mr-1 lg:-mr-2">
                <span className="block relative overflow-hidden pt-3 md:pt-14 xl:pt-18 2xl:pt-20">
                <motion.span variants={reveal} className="block">Journal</motion.span>
                </span>
              </h1>
            </div>
          </motion.div>

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
                    <Collapsible heading={node.title} index={<Moment format="DD.MM.Y">{ node.date }</Moment>} textLarge={true} key={i}>
                      <div className={ node.gallery.length > 0 ? `block mb-6 w-11/12 md:w-2/3` : `block mb-0 w-11/12 md:w-2/3`} dangerouslySetInnerHTML={{ __html: node.content }}></div>

                      <div className="flex flex-wrap -mx-3 overflow-hidden">
                        {node.gallery.map(({ fluid }, i) => {
                          return(
                            <div className="w-9/12 md:w-3/12 px-3 mb-5" key={i}>
                              <Img fluid={ fluid } className="w-full object-cover"/>
                            </div>
                          )
                        })}
                      </div>
                    </Collapsible>
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
        <section className="bg-prbred pt-12 md:pt-24 lg:pt-32 pb-4 md:pb-6 relative z-20">
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-10/12 ml-auto">
              <div className="flex flex-wrap items-end relative pb-16 md:pb-24 lg:pb-32">
                <div className="w-full">
                  <span className="text-3xl md:text-5xl xl:text-6xl block font-display px-4 leading-none md:px-6 mb-6 invert-select">We’re social, so if you’d<br/>like to talk about your<br/>project, get in touch.</span>

                  <div className="md:flex md:flex-wrap">
                    <a href={`mailto:${ studio.studioEmailAddress }`} rel="noopener noreferrer" target="_blank" className="text-xl md:text-2xl block font-display px-4 leading-extratight underline hover:text-white md:pl-6 focus:text-white invert-select">Email us</a>

                    <a href={`tel:${ studio.studioTelephone }`} rel="noopener noreferrer" target="_blank" className="text-xl md:text-2xl block font-display px-4 leading-extratight underline hover:text-white focus:text-white invert-select">Call us { studio.studioTelephone }</a>

                    <Link to={`/studio`} className="text-xl md:text-2xl block font-display px-4 leading-extratight underline hover:text-white focus:text-white invert-select">About our studio</Link>
                  </div>
                </div>
                <div className="w-full order-2 md:order-1 md:px-3 overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-24 lg:w-32 xl:w-64 ml-auto transform rotate-90 absolute bottom-0 right-0 m-4 md:m-6" viewBox="0 0 157.38 157.381"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M52.676 20.352l.001 84.352 84.353.001"/><path data-name="Path 2" d="M52.676 104.704L152.43 4.95"/></g></svg>
                </div>
            </div>
            </div>
          </div>

          <div className="w-full md:w-10/12 ml-auto mr-4 md:mr-6 px-4 md:px-0 md:pl-12 lg:pl-4">
            <div className="md:hidden">
              <Link 
                className={`block pr-8 pb-4 z-30 w-32 md:w-40`}
                to="/"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 113 92"><g data-name="Group 79"><text data-name="Player Roberts Bell" transform="translate(0 23)" fontSize="35" fontFamily="Founders Grotesk"><tspan x="0" y="0">Player</tspan><tspan x="0" y="28">Roberts</tspan><tspan x="0" y="56">Bell</tspan></text><g data-name="Group 40" fill="none" stroke="#000"><path data-name="Path 1" d="M74.366 66.11v11.747H62.619"/><path data-name="Path 2" d="M74.366 77.857l-13.891-13.89"/></g></g></svg>
              </Link>
            </div>

            <ul className="flex flex-wrap border-t border-black border-b lg:ml-8">
              <li className="lg:text-lg xl:text-2xl pl-0 py-2 md:py-3 px-2 block invert-select">&copy; 2020</li>

              <li className="ml-auto block border-l border-black">
                <a className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 invert-select block hover:text-white focus:text-white hover:line-through focus:line-through" href={`mailto:${ studio.studioEmailAddress }`} target="_blank" rel="noopener noreferrer">{ studio.studioEmailAddress }</a>
              </li>

              <li className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 block border-l border-black pr-4 lg:pr-12 xl:pr-32 2xl:pr-64 hidden md:block invert-select">Architecture + Conservation</li>

              <li className="border-l border-black invert-select">
                <a className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 block hover:text-white focus:text-white hover:line-through focus:line-through invert-select" href={ studio.studioTwitterUrl } target="_blank" rel="noopener noreferrer">Twi<span className="hidden md:inline invert-select">tter</span></a>
              </li>

              <li className="border-l border-black invert-select">
                <a className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 pr-0 lg:pr-0 xl:pr-0 block hover:text-white focus:text-white hover:line-through focus:line-through invert-select" href={ studio.studioInstagramUrl } target="_blank" rel="noopener noreferrer">Insta<span className="hidden md:inline invert-select">gram</span></a>
              </li>
            </ul>
            <ul className="flex flex-wrap border-b border-black md:hidden">
              <li className="md:text-lg py-2 block pr-12 block invert-select">Architecture + Conservation</li>
            </ul>
          </div>
          
        </section>
      </motion.div>
    </>
  )
}

export default JournalPage

export const query = graphql`
  query JournalQuery {
    entries: allDatoCmsJournal(sort: {fields: date, order: DESC}) {
      edges {
        node {
          title
          date
          content
          gallery {
            fluid(imgixParams: {h: "900", w: "900", fit: "crop", dpi: 1, q: 100, auto: "format"}) {
              ...GatsbyDatoCmsFluid
            }    
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