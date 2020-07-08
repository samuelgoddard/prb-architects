import React from "react";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import Img from "gatsby-image";
import Scroll from "../components/locomotiveScroll";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

const item = {
	initial: { y: 15, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: {
    y: 0,
		opacity: 0,
		transition: { duration: 0.5, ...transition }
	}
}

const fade = {
	initial: { opacity: 0 },
	enter: { opacity: 1, transition },
	exit: {
		opacity: 0,
		transition: { duration: 0.5, ...transition }
	}
}

const header = {
	initial: { opacity: 1 },
	enter: { opacity: 1, transition },
	exit: {
		opacity: 1,
		transition: { duration: 0.5, ...transition }
	}
}

const GalleryIndexPage = ({ data: { work, workCategories },location }) => {
  return (
    <>
    <Scroll callback={location} />
      <SEO title="Index" />
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.header variants={header} className="p-4 pb-0 md:p-6 md:pb-0 fixed top-0 left-0 right-0 h-14 md:h-22 z-20 flex flex-wrap">
            <nav className="relative z-10 w-full">
              <ul className="flex flex-wrap">
                <motion.li variants={fade}>
                  <Link className="text-lg md:text-2xl pr-px opacity-25 transition ease-in-out duration-500 hover:line-through focus:line-through invert-select" activeClassName="opacity-100" to="/">Gallery</Link>
                </motion.li>
                <motion.li variants={fade} className="text-xl md:text-2xl px-1 opacity-25">/</motion.li>
                <motion.li variants={fade}>
                  <Link className="text-lg md:text-2xl px-px opacity-25 transition ease-in-out duration-500 invert-select" activeClassName="opacity-100 line-through" to="/gallery-index">Index</Link>
                </motion.li>

                <li className="ml-auto">
                  <Link to="/wayfinder" activeClassName="line-through" className="text-lg md:text-2xl px-px text-black hover:line-through focus:line-through invert-select">Menu</Link>
                </li>
              </ul>
            </nav>
            <div className="mt-auto h-px w-full bg-black"></div>
          </motion.header>
        </motion.div>

        <motion.div initial="initial" animate="enter" exit="exit" variants={fade} className="bg-prbred p-4 md:p-6 min-h-screen pt-14 md:pt-22">
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="flex flex-wrap"
            variants={{
              enter: { transition: { staggerChildren: 0.1 } }
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
                <nav className={ i == length ? `pb-32 md:pt-5` : `pb-5 md:pb-8 pt-5`} key={i}>
                  <motion.span variants={fade} className="block uppercase pb-4 invert-select">{ node.title }</motion.span>
                  <div>
                    {work.edges.map(({ node }, i) => {
                      return (
                        <div key={i}>
                          {/* Query the child to the parent cat... */}
                          { node.category.slug == parentCat && (
                            <div className="relative group">
                              <motion.div variants={item}>
                                <Link to={`/work/${node.slug}`} className="flex flex-wrap items-center border-b border-black py-3 md:py-5 hover:text-white relative invert-select">
                                  <span className="flex flex-wrap w-20 md:w-24 text-xs md:text-sm leading-none items-center">
                                    <span className="block text-2xs pt-px mr-1 invert-select">PRB</span>
                                    <span className="block leading-none invert-select">{ node.projectCode }</span>
                                  </span>
                                  <span className="block text-lg md:text-3xl font-display leading-none mt-2 group-hover:line-through invert-select">{ node.title }</span>
                                  <span className="block ml-auto"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8" viewBox="0 0 17.938 17.937"><g data-name="Group 33" fill="none" stroke="currentColor"><path data-name="Path 1" d="M2.18 5.752h10.006v10.005"/><path data-name="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg></span>
                                </Link>
                              </motion.div>
                              <div className="fixed top-0 left-0 ml-6 mt-64" data-scroll-sticky data-scroll data-scroll-target="#___gatsby">
                                <div className="gallery-index-hidden-image hidden xl:block opacity-0 group-hover:opacity-75 transition ease-in-out duration-500">
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
