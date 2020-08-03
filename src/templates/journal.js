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
          <header className="p-4 pb-0 md:p-6 md:pb-0 fixed top-0 left-0 right-0 h-14 md:h-22 z-20 flex flex-wrap" data-scroll-sticky data-scroll data-scroll-target="#___gatsby">

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
        
        <div className="bg-white pt-2 w-full h-full">
        <motion.div initial="initial" animate="enter" exit="exit" variants={fade} className="p-4 md:p-6 pt-14 md:pt-22 max-w-screen-3xl mx-auto">
          
        <div className="h-14 md:h-22 z-10 fixed top-0 left-0 bg-white w-full" data-scroll-sticky data-scroll data-scroll-target="#___gatsby"></div>

          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="mt-4 flex flex-wrap mb-8 md:mb-10 xl:mb-12"
            variants={{
              enter: { transition: { staggerChildren: 0.025 } }
            }}
          >
            <div className="overflow-hidden w-11/12 md:w-8/12">
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="studio-arrow ml-auto md:ml-0 mt-0 md:mt-2 rotate-90 transform" viewBox="0 0 157.381 157.38"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M20.352 104.704l84.352-.001.001-84.353"/><path data-name="Path 2" d="M104.704 104.704L4.95 4.95"/></g></svg>
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
                  {entry.gallery.map(({ fluid }, i) => {
                    return(
                      <motion.div variants={fade} className="w-1/2 md:w-4/12 px-3 mb-5" key={i}>
                        <Img fluid={ fluid } className="w-full object-cover"/>
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
                  <div className="content text-lg leading-tight w-10/12 md:w-full md:max-w-md xl:max-w-lg" dangerouslySetInnerHTML={{ __html: entry.content }}></div>
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
                  {entry.gallery.map(({ fluid }, i) => {
                    return(
                      <motion.div variants={fade} className={ entry.gallery.length === 2 ? `w-1/2 md:w-1/2 lg:w-1/2 px-3 mb-5` : `w-full px-3 mb-5` } key={i}>
                        <Img fluid={ fluid } className="w-full object-cover"/>
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
                  <div className="content xl:text-lg leading-tight w-10/12 md:w-full md:max-w-md xl:max-w-lg" dangerouslySetInnerHTML={{ __html: entry.content }}></div>
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
        <section className="bg-prbred pt-8 md:pt-24 lg:pt-32 pb-4 md:pb-6 relative z-20">
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-10/12 ml-auto">
              <div className="flex flex-wrap items-end relative pb-16 md:pb-24 lg:pb-32">
                <div className="w-full md:px-3 overflow-hidden mb-3 md:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-24 lg:w-32 xl:w-64 md:ml-auto transform -rotate-90 md:rotate-90 md:absolute top-0 left-0 md:left-auto md:top-auto md:bottom-0 md:right-0 ml-4 md:m-6" viewBox="0 0 157.38 157.381"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M52.676 20.352l.001 84.352 84.353.001"/><path data-name="Path 2" d="M52.676 104.704L152.43 4.95"/></g></svg>
                </div>
                <div className="w-full mb-12 md:mb-8 lg:mb-3">
                  <span className="text-3xl md:text-5xl xl:text-6xl block font-display px-4 leading-none md:px-6 mb-6 invert-select">We’re social, so if you’d<br/>like to talk about your<br/>project, get in touch.</span>

                  <div className="md:flex md:flex-wrap">
                  <a href={`mailto:${ studio.studioEmailAddress }`} rel="noopener noreferrer" target="_blank" className="text-lg md:text-xl block pl-4 lg:px-3 md:pl-6 lg:pl-6 lg:ml-px leading-extratight hover:line-through focus:line-through hover:text-white focus:text-white invert-select mb-1">Email us</a>

                  <a href={`tel:${ studio.studioTelephone }`} rel="noopener noreferrer" target="_blank" className="text-lg md:text-xl block pl-4 lg:px-3 lg:pl-6 leading-extratight hover:line-through focus:line-through hover:text-white focus:text-white invert-select mb-1">Call us { studio.studioTelephone }</a>

                  <a href="https://www.google.com/maps/place/Player+Roberts+Bell+Architects/@52.9888236,-0.9303382,17z/data=!3m1!4b1!4m5!3m4!1s0x4879c94b2ea00ee3:0xf9402e81b6228e50!8m2!3d52.9888236!4d-0.9281442" rel="noopener noreferrer" target="_blank" className="text-lg md:text-xl block pl-4 lg:pl-6 lg:px-3 leading-extratight hover:line-through focus:line-through hover:text-white focus:text-white invert-select mb-1">Find us</a>

                  <Link to={`/studio`} className="text-lg md:text-xl block pl-4 lg:pl-6 lg:px-3 leading-extratight hover:line-through focus:line-through hover:text-white focus:text-white invert-select">Our studio</Link>
                  </div>
                </div>
            </div>
            </div>
          </div>

          <div className="w-full md:w-10/12 ml-auto mr-4 md:mr-6 px-4 md:px-0 md:pl-12 lg:pl-4">
            <div className="md:hidden">
              <Link 
                className={`block pr-8 pb-4 z-30 w-28 md:w-40`}
                to="/"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 113 92"><g data-name="Group 79"><text data-name="Player Roberts Bell" transform="translate(0 23)" fontSize="35" fontFamily="Founders Grotesk"><tspan x="0" y="0">Player</tspan><tspan x="0" y="28">Roberts</tspan><tspan x="0" y="56">Bell</tspan></text><g data-name="Group 40" fill="none" stroke="#000"><path data-name="Path 1" d="M74.366 66.11v11.747H62.619"/><path data-name="Path 2" d="M74.366 77.857l-13.891-13.89"/></g></g></svg>
              </Link>
            </div>

            <ul className="flex flex-wrap border-t border-black border-b lg:ml-8">

              <li className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 pr-2 md:pr-3 lg:pr-4 xl:pr-5 block xl:border-r border-black hidden md:block invert-select">Architecture + Conservation</li>
                
              <li className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 pr-2 lg:px-3 lg:px-4 xl:px-5 xl:pr-6 hidden xl:block invert-select">&copy; 2020</li>
              
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
          imgixParams: {auto: "format", sharp:10, h: "950", w: "950", fit: "crop", crop: "faces, center"}) {
          ...GatsbyDatoCmsFluid
        }
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