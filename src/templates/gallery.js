import React, { useRef } from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Scroll from "../components/locomotiveScroll"
// const Marquee3k = require('marquee3000');

// import Img from "gatsby-image"
import HomeCarousel from "../components/homeCarousel"

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

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

const IndexPage = ({ data: { work, workCategories }, location }) => {
  return (
    <>
    <Scroll callback={location} />
      <SEO title="Gallery" />
        <motion.section
          initial="initial"
          animate="enter"
          exit="exit"
          data-scroll-section
        >
          <motion.header variants={header} className="p-4 pb-0 md:p-6 md:pb-0 fixed top-0 left-0 right-0 h-16 md:h-22 z-20 flex flex-wrap">
            <nav className="relative z-10 w-full">
              <ul className="flex flex-wrap">
                <motion.li variants={fade}>
                  <Link className="text-lg md:text-2xl pr-px transition ease-in-out duration-500 opacity-100 line-through" to="/">Gallery</Link>
                </motion.li>
                <motion.li variants={fade} className="text-xl md:text-2xl px-1 opacity-25">/</motion.li>
                <motion.li variants={fade}>
                  <Link className="text-lg md:text-2xl px-px opacity-25 transition ease-in-out duration-500" activeClassName="opacity-100" to="/gallery-index">Index</Link>
                </motion.li>

                <li className="ml-auto">
                  <Link to="/wayfinder" activeClassName="line-through" className="text-lg md:text-2xl px-px text-black">Menu</Link>
                </li>
              </ul>
            </nav>
            <div className="mt-auto h-px w-full bg-black"></div>
          </motion.header>

          <div className="w-full">
            <motion.div variants={fade} className=" min-h-screen pt-16 md:pt-22 flex flex-wrap flex-grow-0">
              <motion.div 
                className="content"
                variants={fade}
                className="mt-4 md:mt-6 w-auto h-24 md:h-40 xl:h-48 p-4 md:p-6"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 md:w-40 xl:w-48" viewBox="0 0 157.381 157.38"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M20.352 104.704l84.352-.001.001-84.353"/><path data-name="Path 2" d="M104.704 104.704L4.95 4.95"/></g></svg>
              </motion.div>

              <motion.div 
                className="content"
                variants={fade}
                className="w-full"
              >
                <div className="slider opacity-0">
                  <HomeCarousel slides={work.edges} />
                </div>
              </motion.div>

              <nav className="relative z-10 ml-auto text-right mt-auto w-1/2 md:w-auto p-4 md:p-6">
                <div className="flex flex-wrap justify-end">
                  <motion.div variants={fade}>
                    <Link className="text-lg md:text-2xl leading-extratight pr-px opacity-25 transition ease-in-out duration-500" to="/">All</Link>
                  </motion.div>
                  <motion.div variants={fade} className="text-xl md:text-2xl leading-extratight px-1">
                    <span className="opacity-25 block">/</span>
                  </motion.div>


                  {workCategories.edges.map(({ node }, i) => {
                    const length = workCategories.edges.length - 1;

                    return (
                      <div key={i} className="flex">
                        {/* slug: { `/gallery/${node.slug}` }
                        name: { location.pathname } */}
                        <motion.div variants={fade}>

                          <Link
                            className={location.pathname === `/gallery/${node.slug}` ? `text-lg md:text-2xl leading-extratight px-px opacity-100 line-through transition ease-in-out duration-500` : `text-lg md:text-2xl leading-extratight px-px opacity-25 transition ease-in-out duration-500`} to={`/gallery/${node.slug}`}>
                                { node.title }
                            </Link>
                        </motion.div>
                        
                        { i !== length && (
                          <motion.div variants={fade} className="text-xl md:text-2xl leading-extratight px-1">
                            <span className="opacity-25 block">/</span>
                          </motion.div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </nav>
            </motion.div>
          </div>
        </motion.section>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query GalleryPageQuery($slug: String!) {
    workCategories: allDatoCmsWorkCategory {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
    work: allDatoCmsWork(filter: {category: {slug: {eq: $slug}}}) {
      edges {
        node {
          id
          featuredImage {
            url
            fixed(imgixParams: { h: "350", fm: "png" }) {
              ...GatsbyDatoCmsFixed
            }
          }
          title
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