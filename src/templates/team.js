import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Scroll from "../components/locomotiveScroll"
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

const PersonTemplate = ({ data: { person }, location }) => {
  return (
    <>

      <SEO
        titleOverride={"Person" }
        pathnameOverride={location.pathname}
      />

      <Scroll callback={location} />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { staggerChildren: 0.05 } }
        }}
      >
        <header className="p-4 pb-0 md:p-6 md:pb-0 h-14 md:h-22 z-50 flex flex-wrap text-white fixed top-0 left-0 right-0">
          <nav className="relative z-10 w-full overflow-hidden">
            <ul className="flex flex-wrap pb-0 mb-0 relative overflow-hidden">
              <li className="ml-auto">
                <Link to="/studio#team" activeClassName="line-through" className="text-lg md:text-2xl px-px text-white transition ease-in-out duration-500 hover:line-through focus:line-through">Close Bio</Link>
              </li>
            </ul>
          </nav>
        </header>
      </motion.div>

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className=""
        variants={fade}
      >
        <div className="min-h-screen">
          <div className="flex flex-wrap items-center h-full pt-14 md:pt-22 min-h-screen bg-offblack">
            <div className="text-white relative bg-offblack pb-24 md:pb-32 w-full">
              <div className="w-10/12 lg:w-9/12 mx-auto relative">
                <h1 className="text-2xl lg:text-3xl block w-full border-b border-white pb-1 mb-6 lg:mb-10 xl:mb-14">{ person.name }</h1>
                <div className="flex flex-wrap relative">

                  <div className="w-full lg:w-1/3 2xl:w-1/4 mb-8 lg:mb-0">
                    <Img fluid={ person.image.fluid } className="w-full object-cover mb-1 relative z-10 opacity-25 "/>
                  </div>
                  <div className="w-full lg:flex-1 relative z-10">
                    <div className="lg:w-10/12 xl:w-8/12 lg:pl-8">
                      <div className="content lg:text-lg leading-snug max-w-md" dangerouslySetInnerHTML={{ __html: person.profileText }}></div>
                    </div>
                  </div>

                  <div className="w-full lg:w-auto relative z-10">
                    { person.linkedinUrl && (
                      <div className="lg:text-right">
                        <span className="block uppercase mb-3 text-sm">Social</span>
                        <a className="underline flex flex-wrap lg:justify-end items-center hover:line-through focus:line-through" href={ person.linkedinUrl } target="_blank" rel="noreferrer noopener">
                          <span>LinkedIn</span>
                          <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="16.073" height="16.073" viewBox="0 0 16.073 16.073"><g data-name="Group 151" fill="none" stroke="#fff"><path data-name="Path 1" d="M10.875 14.095V5.2H1.978"/><path data-name="Path 2" d="M10.875 5.199L.354 15.719"/></g></svg>
                        </a>
                      </div>
                    )}

                    { person.relatedWork.length > 0 && (
                      <div className="mt-8 lg:text-right">
                        <span className="block uppercase mb-3 text-sm">Projects</span>

                        {person.relatedWork.map(({ title, slug }, i) => {
                          return(
                            <div key={i}>
                              <Link to={`/work/${slug}`} className="underline flex flex-wrap lg:justify-end items-center hover:line-through focus:line-through">
                                <span>{title}</span>
                                <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="16.073" height="16.073" viewBox="0 0 16.073 16.073"><g data-name="Group 151" fill="none" stroke="#fff"><path data-name="Path 1" d="M10.875 14.095V5.2H1.978"/><path data-name="Path 2" d="M10.875 5.199L.354 15.719"/></g></svg>
                              </Link>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default PersonTemplate

export const query = graphql`
  query PersonQuery($slug: String!) {
    person: datoCmsTeam(slug: { eq: $slug}) {
      name
      slug
      jobTitle
      profileText
      linkedinUrl
      relatedWork {
        title
        slug
      }
      image {
        fluid(
          imgixParams: {h: "1100", w: "800", fit: "crop", dpi: 1, q: 100, auto: "format"}) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`