import React from "react";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import Img from "gatsby-image";
import Scroll from "../components/locomotiveScroll";

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

const fadeSlow = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
  },
	exit: {
		opacity: 0,
		transition: { duration: 0, ease: [0.76, 0, 0.24, 1] }
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
	initial: { y: "100%" },
	enter: { 
    y: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  },
}

const revealMeta = {
	initial: { y: "200%" },
	enter: { 
    y: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  },
}

const revealArrowTopRight = {
	initial: { y: "100%", x: "-100%" },
	enter: { 
    y: "0%",
    x: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  }
}

const GalleryIndexPage = ({ data: { work, workCategories, development }, location }) => {
  return (
    <>
      <Scroll callback={location} />
      <SEO
        titleOverride={`Gallery Index`}
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
          <header className="p-4 pb-0 md:p-6 md:pb-0 hidden absolute md:fixed top-0 left-0 right-0 h-14 md:h-22 z-20 md:flex flex-wrap" data-scroll-sticky data-scroll data-scroll-target="#___gatsby">
            <nav className="relative z-10 w-full">
              <ul className="flex flex-wrap">
                <li className="overflow-hidden relative">
                  <motion.div variants={revealInOut}>
                    <Link className="text-lg md:text-2xl pr-px opacity-25 transition ease-in-out duration-500 hover:line-through focus:line-through invert-select" activeClassName="opacity-100" to="/">Gallery</Link>
                  </motion.div>
                </li>
                <li className="text-xl md:text-2xl px-1 opacity-25 relative overflow-hidden">
                  <motion.div variants={revealInOut}>/</motion.div>
                </li>
                <li className="relative overflow-hidden">
                  <motion.div variants={revealInOut}>
                    <Link className="text-lg md:text-2xl px-px opacity-25 transition ease-in-out duration-500 invert-select" activeClassName="opacity-100 line-through" to="/gallery-index">Index</Link>
                  </motion.div>
                </li>

                <li className="ml-auto">
                  <Link to="/wayfinder" activeClassName="line-through" className="text-lg md:text-2xl px-px text-black hover:line-through focus:line-through invert-select">Menu</Link>
                </li>
              </ul>
            </nav>
            <div className="mt-auto -mb-px h-px w-full border-b border-black transition ease-in-out duration-500"></div>
          </header>

          <header className="p-4 pb-0 md:p-6 md:pb-0 relative top-0 left-0 right-0 h-14 md:h-22 z-30 flex flex-wrap md:hidden">
            <nav className="relative z-10 w-full">
              <ul className="flex flex-wrap">
                <li className="overflow-hidden relative">
                  <motion.div variants={revealInOut}>
                    <Link className="text-lg md:text-2xl pr-px opacity-25 transition ease-in-out duration-500 hover:line-through focus:line-through invert-select" activeClassName="opacity-100" to="/">Gallery</Link>
                  </motion.div>
                </li>
                <li className="text-xl md:text-2xl px-1 opacity-25 relative overflow-hidden">
                  <motion.div variants={revealInOut}>/</motion.div>
                </li>
                <li className="relative overflow-hidden">
                  <motion.div variants={revealInOut}>
                    <Link className="text-lg md:text-2xl px-px opacity-25 transition ease-in-out duration-500 invert-select" activeClassName="opacity-100 line-through" to="/gallery-index">Index</Link>
                  </motion.div>
                </li>

                <li className="ml-auto">
                  <Link to="/wayfinder" activeClassName="line-through" className="text-lg md:text-2xl px-px text-black hover:line-through focus:line-through invert-select">Menu</Link>
                </li>
              </ul>
            </nav>
            <div className="mt-auto -mb-px h-px w-full border-b border-black transition ease-in-out duration-500"></div>
          </header>
        </motion.div>

        <motion.div initial="initial" animate="enter" exit="exit" variants={fade} className="bg-prbred p-4 md:p-6 min-h-screen pt-14 md:pt-22 -mt-16 md:mt-0 pb-20 md:pb-0">
          <div className="h-14 md:h-22 z-20 fixed top-0 left-0 bg-prbred w-full fixed-when-scroll md:hidden" data-scroll-sticky data-scroll data-scroll-target="#___gatsby"></div>
          
          <div className="h-14 md:h-22 z-10 fixed top-0 left-0 bg-prbred w-full hidden md:block" data-scroll-sticky data-scroll data-scroll-target="#___gatsby"></div>

          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="flex flex-wrap"
            variants={{
              enter: { transition: { staggerChildren: 0.02 } }
            }}
          >
            <div className="w-full md:w-2/12 relative">
              {/* {work.edges.map(({ node }, i) => {
                return (
                  <div key={i} className="absolute top-0 left-0 w-10/12">
                    <Img fluid={ node.featuredImage.fluid } className="w-full" />
                  </div>
                )
              })} */}
            </div>
            <div className="w-full md:w-10/12 ml-auto mt-8 md:mt-16">
            {workCategories.edges.map(({ node }, i) => {
              const parentCat = node.slug;
              const length = workCategories.edges.length - 1;

              return (
                <nav className={`pb-5 md:pb-8 pt-5`} key={i}>
                  <div className="relative overflow-hidden">
                    <motion.span variants={reveal} className="block uppercase pb-4 invert-select">{ node.title }</motion.span>
                  </div>
                  <div>
                    {work.edges.map(({ node }, i) => {
                      return (
                        <div key={i}>
                          {/* Query the child to the parent cat... */}
                          { node.category[0].slug === parentCat && (
                            <div className="relative group overflow-hidden border-b border-black">
                                <Link to={`/work/${node.slug}`} className="block hover:text-white relative invert-select strike py-3 md:py-4">
                                  <div className="relative overflow-hidden">
                                    <div className="flex flex-wrap items-center relative overflow-hidden">
                                      <motion.div variants={revealMeta} className="">
                                        <span className="flex flex-wrap w-20 md:w-24 text-xs md:text-sm leading-none items-center">
                                          <span className="block text-2xs pt-px mr-1 invert-select">PRB</span>
                                          <span className="block leading-none invert-select">{ node.projectCode }</span>
                                        </span>
                                      </motion.div>
                                      <motion.div variants={reveal} className="">
                                        <span className="block text-lg md:text-3xl font-display leading-none mt-2 strike__inner strike__inner--small invert-select">{ node.title }</span>
                                      </motion.div>
                                      <span className="block ml-auto relative overflow-hidden">
                                        <motion.div variants={revealArrowTopRight}>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 -mr-1" viewBox="0 0 17.938 17.937"><g data-name="Group 33" fill="none" stroke="currentColor"><path data-name="Path 1" d="M2.18 5.752h10.006v10.005"/><path data-name="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg>
                                        </motion.div>
                                      </span>
                                    </div>
                                  </div>
                                </Link>
                              <div className="fixed top-0 left-0 ml-6 mt-64" data-scroll-sticky data-scroll data-scroll-target="#___gatsby">
                                <div className="gallery-index-hidden-image hidden xl:block opacity-0 group-hover:opacity-75">
                                  <Img fluid={ node.indexSupportingImage.fluid } className="w-full" />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </nav>
              )
            })}

            <nav className="pb-18 md:pb-32 pt-5 md:pt-5">
              <div className="relative overflow-hidden">
                <motion.span variants={reveal} className="block uppercase pb-4 invert-select">In Development</motion.span>
              </div>
              {development.edges.map(({ node }, i) => {
                return (
                  <div key={i}>
                      <div className="relative group overflow-hidden border-b border-black">
                        <Link to={`/journal/${ node.slug }`} className="block hover:text-white relative invert-select strike py-3 md:py-4">
                          <div className="relative overflow-hidden">
                            <div className="flex flex-wrap items-center relative overflow-hidden">
                              <motion.div variants={revealMeta} className="">
                                <span className="flex flex-wrap w-20 md:w-24 text-xs md:text-sm leading-none items-center">
                                  <span className="block text-2xs pt-px mr-1 invert-select">DEV</span>
                                  <span className="block leading-none invert-select">
                                    { node.indexProjectCode ? (
                                    <>{ node.indexProjectCode }</>
                                    ) : (
                                    <>xx—z</>
                                    ) }
                                  </span>
                                </span>
                              </motion.div>
                              <motion.div variants={reveal} className="">
                                <span className="block text-lg md:text-3xl font-display leading-none mt-2 strike__inner strike__inner--small invert-select">{ node.indexTitle }</span>
                              </motion.div>
                              <span className="block ml-auto relative overflow-hidden">
                                <motion.div variants={revealArrowTopRight}>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 -mr-1" viewBox="0 0 17.938 17.937"><g data-name="Group 33" fill="none" stroke="currentColor"><path data-name="Path 1" d="M2.18 5.752h10.006v10.005"/><path data-name="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg>
                                </motion.div>
                              </span>
                            </div>
                          </div>
                        </Link>
                        {/* <div className="fixed top-0 left-0 ml-6 mt-64" data-scroll-sticky data-scroll data-scroll-target="#___gatsby">
                          <div className="gallery-index-hidden-image hidden xl:block opacity-0 group-hover:opacity-75">
                            <Img fluid={ node.indexSupportingImage.fluid } className="w-full" />
                          </div>
                        </div> */}
                      </div>
                  </div>
                )
              })}
            </nav>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default GalleryIndexPage

export const query = graphql`
  query WorkIndexPageQuery {
    workCategories: allDatoCmsWorkCategory {
      edges {
        node {
          id
          title
          hidden
          slug
        }
      }
    }
    development: allDatoCmsJournal(filter: {showInGalleryIndex: {eq: true}}) {
      edges {
        node {
          indexTitle
          indexProjectCode
          slug
        }
      }
    }
    work: allDatoCmsWork {
      edges {
        node {
          id
          title
          indexSupportingImage {
            fluid(
              imgixParams: {h: "720", w: "450", fit: "crop", crop: "faces, edges" }) {
                ...GatsbyDatoCmsFluid
            }
          }
          slug
          projectCode
          category {
            slug
            title
          }
        }
      }
    }
  }
`
