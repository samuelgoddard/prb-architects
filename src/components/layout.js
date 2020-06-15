import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from 'framer-motion'
import Scroll from "./locomotiveScroll"

import Header from "./header"
import "../styles/main.css"

const duration = 0.35

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: duration,
    },
  },
}

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Scroll callbacks={location} />
      <Link className="block fixed bottom-0 left-0 p-4 md:p-6 z-20" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="113" height="92" viewBox="0 0 113 92"><g dataName="Group 79"><text dataName="Player Roberts Bell" transform="translate(0 23)" fontSize="35" fontFamily="Founders Grotesk"><tspan x="0" y="0">Player</tspan><tspan x="0" y="28">Roberts</tspan><tspan x="0" y="56">Bell</tspan></text><g dataName="Group 40" fill="none" stroke="#000"><path dataName="Path 1" d="M74.366 66.11v11.747H62.619"/><path dataName="Path 2" d="M74.366 77.857l-13.891-13.89"/></g></g></svg>
      </Link>

      <div id="scroll-container" className={ location.pathname == '/gallery-index' ? 'p-4 md:p-6 bg-prbred min-h-screen transition duration-500 ease-in-out' : 'p-4 md:p-6 min-h-screen transition duration-500 ease-in-out' }>
        <div data-scroll-section>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
