import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Scroll from "../components/locomotiveScroll"
import HomeCarousel from "../components/homeCarousel"
import Div100vh from "react-div-100vh";

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

const reveal = {
	initial: { y: "100%" },
	enter: { 
    y: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  },
}

const revealArrow = {
	initial: { y: "-100%", x: "-100%" },
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

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const IndexGalleryPage = ({ data: { home, work, workCategories }, location }) => {
  const shuffledPosts = shuffleArray(work.edges);
  return (
    <>

      <SEO
        titleOverride={home.metaTags && home.metaTags.title ? home.metaTags.title : null }
        descriptionOverride={home.metaTags && home.metaTags.description ? home.metaTags.description : null }
        pathnameOverride={location.pathname}
        imageOverride={home.metaTags && home.metaTags.image ? home.metaTags.image.url : null }
      />

      <Scroll callback={location} />
        <header className="p-4 pb-0 md:p-6 md:pb-0 fixed top-0 left-0 right-0 h-14 md:h-22 z-20 flex flex-wrap">
          <motion.nav
            initial="initial"
            animate="enter"
            exit="exit"
            className="relative z-10 w-full"
            variants={{
              enter: { transition: { staggerChildren: 0.05 } }
            }}
          >
            <ul className="flex flex-wrap">
              <li className="relative overflow-hidden">
                <motion.div variants={revealInOut}>
                  <Link className="text-lg md:text-2xl pr-px transition ease-in-out duration-500 opacity-100 line-through" to="/">Gallery</Link>
                </motion.div>
              </li>
              <li className="text-xl md:text-2xl px-1 opacity-25 relative overflow-hidden">
              <motion.div variants={revealInOut}>/</motion.div></li>
              <li className="relative overflow-hidden">
                <motion.div variants={revealInOut}>
                <Link className="text-lg md:text-2xl px-px opacity-25 transition ease-in-out duration-500 hover:line-through focus:line-through relative overflow-hidden" activeClassName="opacity-100" to="/gallery-index">
                Index</Link>
                </motion.div>
              </li>

              <li className="ml-auto">
                <Link to="/wayfinder" activeClassName="line-through" className="text-lg md:text-2xl px-px text-black hover:line-through focus:line-through">Menu</Link>
              </li>
            </ul>
          </motion.nav>
          <div className="mt-auto h-px w-full bg-black"></div>
        </header>

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={fade}
        >
          <Div100vh>
            {/* { JSON.stringify(location) } */}
            <div className="h-full pt-14 md:pt-22 md:flex md:flex-wrap md:flex-grow-0">
              <div className="mt-4 md:mt-6 w-auto h-28 md:h-40 3xl:h-40 pl-4 pt-2 md:p-6 hidden md:block">
                <motion.div className="relative overflow-hidden" variants={fade}>
                  <motion.div variants={revealArrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 md:w-32 2xl:w-40 3xl:w-48 -mb-8 -mr-8" viewBox="0 0 157.381 157.38"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M20.352 104.704l84.352-.001.001-84.353"/><path data-name="Path 2" d="M104.704 104.704L4.95 4.95"/></g></svg>
                  </motion.div>
                </motion.div>
              </div>

              <div 
                className="content"
                className="w-full"
              >
                <div className="slider home-slider mt-10 md:mt-0">
                  <HomeCarousel slides={shuffledPosts} />
                </div>
              </div>

              <motion.div 
                className="z-10 ml-auto text-right mt-auto w-1/2 md:w-auto p-4 pb-4 md:p-6 md:pt-12 absolute bottom-0 right-0 md:relative"
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{
                  enter: { transition: { staggerChildren: 0.05 } }
                }}
              >
                <motion.nav variants={fade}>
                  <div className="md:flex md:flex-wrap justify-end leading-none md:leading-extratight mb-px">
                    <div className="overflow-hidden relative">
                      <motion.div variants={reveal}>
                        <Link className="text-base md:text-lg lg:text-2xl leading-extratight pr-px transition ease-in-out duration-500 opacity-25 block pb-1" to="/">All</Link>
                      </motion.div>
                    </div>
                    <div className="overflow-hidden relative">
                      <motion.div variants={reveal} className="text-base md:text-lg lg:text-2xl leading-extratight px-1 hidden md:block">
                        <span className="opacity-25 ">/</span>
                      </motion.div>
                    </div>

                    {workCategories.edges.map(({ node }, i) => {
                      const length = workCategories.edges.length - 1;

                      return (
                        <div key={i} className="md:flex leading-none md:leading-extratight mb-px">
                          <div className="overflow-hidden relative">
                            <motion.div variants={reveal}>
                              <Link className={
                                location.pathname === `/gallery/${node.slug}` ? `text-base md:text-lg lg:text-2xl leading-extratight px-px opacity-100 line-through transition ease-in-out duration-500 block pb-1` : `text-base md:text-lg lg:text-2xl leading-extratight px-px opacity-25 transition ease-in-out duration-500 block pb-1`} to={`/gallery/${node.slug}`} to={`/gallery/${node.slug}`}>{ node.title }</Link>
                            </motion.div>
                          </div>
                          
                          { i !== length && (
                            <div className="overflow-hidden relative">
                            <motion.div variants={reveal} className="text-base md:text-lg lg:text-2xl leading-extratight px-1 hidden md:block">
                              <span className="opacity-25">/</span>
                            </motion.div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </motion.nav>
              </motion.div>
            </div>
          </Div100vh>
        </motion.div>
    </>
  )
}

export default IndexGalleryPage

export const query = graphql`
  query GalleryPageQuery($slug: String!) {
    home: datoCmsHome {
      title
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
    }
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
          teaserVideo {
            url
          }
          featuredImageSmall: teaserImage {
            url
            fluid(imgixParams: { w: "1000", h: "700", fm: "jpg", fit: "fillmax" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          featuredImageBig: teaserImage {
            url
            fluid(imgixParams: { w: "1000", h: "700", fm: "jpg", fit: "fillmax" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          featuredImageMobile: featuredImage {
            url
            fluid(imgixParams: { w: "700", h: "1000", fm: "jpg", fit: "fillmax" }) {
              ...GatsbyDatoCmsFluid
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