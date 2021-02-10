import React, { useEffect} from "react"
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

const IndexPage = ({ data: { home, work, workCategories }, location }) => {
  const shuffledPosts = shuffleArray(work.edges);

  return (
    <div className="home-wrapper">
      <div className="home-wrapper--inner">
        <SEO
          titleOverride={home.metaTags && home.metaTags.title ? home.metaTags.title : null }
          descriptionOverride={home.metaTags && home.metaTags.description ? home.metaTags.description : null }
          pathnameOverride={location.pathname}
          imageOverride={home.metaTags && home.metaTags.image ? home.metaTags.image.url : null }
          elasticDisable
        />

        <Scroll callback={location} />

        <header className="p-4 pb-0 md:p-6 md:pb-0 fixed top-0 left-0 right-0 h-14 md:h-22 z-20 flex flex-wrap">
          <motion.nav
            initial="initial"
            animate="enter"
            exit="exit"
            className="relative z-10 w-full"
          
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
          <div className="mt-auto -mb-px h-px w-full border-b border-black transition ease-in-out duration-500"></div>
        </header>

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={fade}
        >
          <Div100vh>
            <motion.div className="h-full pt-14 md:pt-22 md:flex md:flex-wrap md:flex-grow-0" variants={fade}>
              <div className="w-auto h-28 md:h-40 3xl:h-48 pl-4 pt-2 md:p-6 hidden md:block home-arrow relative group">
                <motion.div className="relative overflow-hidden" variants={fade}>
                  <motion.div variants={revealArrow} className="relative z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 md:w-32 2xl:w-40 3xl:w-40 -mb-8 -mr-8" viewBox="0 0 157.381 157.38"><g data-name="Group 66" fill="none" stroke="currentColor" strokeWidth="14"><path data-name="Path 1" d="M20.352 104.704l84.352-.001.001-84.353"/><path data-name="Path 2" d="M104.704 104.704L4.95 4.95"/></g></svg>
                  </motion.div>
                </motion.div>

                <div className="absolute top-0 right-0 -mr-24 mt-18 text-black font-display opacity-0 group-hover:opacity-100">
                  <div className="pt-px">
                    <div className="overflow-hidden relative pt-2 mb-1 2xl:pt-8">
                      <span className="opacity-0 block text-lg md:text-xl home-arrow__easter-egg leading-none">Nottingham</span>
                    </div>
                    <div className="overflow-hidden relative">
                      <span className="opacity-0 block text-sm home-arrow__easter-egg--delay leading-none">52.9548° N, 1.1581° W</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="content"
                className="w-full"
              >
                <div className="slider home-slider mt-10 md:mt-0">
                  <HomeCarousel slides={shuffledPosts} />
                </div>
              </div>

              {/* <motion.div 
                className="z-10 ml-auto text-right mt-auto w-1/2 md:w-auto p-4 pb-4 md:p-6 md:pt-12 absolute bottom-0 right-0 md:relative"
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{
                  enter: { transition: { staggerChildren: 0.025 } }
                }}
              >
                <motion.nav className="" variants={fade}>
                  <div className="md:flex md:flex-wrap justify-end leading-none md:leading-extratight mb-px">
                    <div className="relative overflow-hidden">
                      <motion.div variants={reveal}>
                        <Link className="text-base md:text-lg lg:text-2xl leading-extratight pr-px transition ease-in-out duration-500 opacity-100 line-through block pb-1" to="/">All</Link>
                      </motion.div>
                    </div>
                    <div className="relative overflow-hidden">
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
                              <Link className="text-base md:text-lg lg:text-2xl leading-extratight px-px opacity-25 transition ease-in-out duration-500 hover:line-through focus:line-through block pb-1" to={`gallery/${node.slug}`} state={{ prevPath: "home" }}>{ node.title }</Link>
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
              </motion.div> */}
            </motion.div>
          </Div100vh>
        </motion.div>
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
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
    work: allDatoCmsWork {
      edges {
        node {
          id
          teaserVideo {
            url
          }
          featuredImageSmall: teaserImage {
            url
            fluid(
              maxWidth: 1600,
              imgixParams: { auto: "compress", sharp: 10, w: "1600", h: "1100", fit: "fillmax", crop: "center" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
            alt
          }
          featuredImageBig: teaserImage {
            url
            fluid(
              maxWidth: 1600,
              imgixParams: { auto: "compress", sharp: 10, w: "1600", h: "1100", fit: "fillmax", crop: "center" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
            alt
          }
          featuredImageMobile: homeMobileImage {
            url
            fluid(
              maxWidth: 720,
              imgixParams: { auto: "compress", sharp: 10, w: "520", h: "1000", fit: "fillmax", crop: "center" }) {
              ...GatsbyDatoCmsFluid_noBase64
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