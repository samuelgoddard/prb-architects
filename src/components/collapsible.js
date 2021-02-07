import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import { Power2, gsap } from "gsap/all"
import { isBrowser } from "react-device-detect"
import { motion } from 'framer-motion'

const reveal = {
	initial: { y: "200%" },
	enter: { 
    y: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  },
}

//! This method is essential to keep the scroll height up to date.
const updateScroll = () => isBrowser && window.scroll.update()

const collapsible = node => {
  const tl = gsap.timeline({
    defaults: {
      duration: 0.35,
      ease: Power2.easeInOut,
    },
  })

  //! We call this method after every change that impacts the page height.
  const animation = tl
    .call(() => setTimeout(function() { updateScroll(); }, 350))
    .fromTo(
      node,
      { height: 0, opacity: 0, willChange: "height" },
      { height: "auto", opacity: 1, clearProps: "willChange" }
    )
    .call(() => setTimeout(function() { updateScroll(); }, 350))
    .pause()

  let open = () => animation.play()
  let close = () => animation.reverse(0)

  return { open, close }
}

const Collapsible = ({ children, heading, index, textLarge, link }) => {

  const [state, setState] = useState({
    initial: false,
    clicked: null,
  })

  let body = useRef(null)

  const handleClick = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
      })
    }
  }

  useEffect(() => {
    if (state.clicked === false) {
      collapsible(body).close()
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      collapsible(body).open()
    }
  }, [state])

  return (
    <div className="relative">
    <button className="Collapse w-full group" onClick={() => handleClick()}>
      <div className="border-b border-current w-full py-1 md:py-3 xl:py-5 overflow-hidden">
        <div className="relative overflow-hidden py-3">
          <motion.div variants={reveal} className="flex flex-wrap items-start">
            <span className={`block text-xs mr-4 w-full md:w-auto text-left mb-2 md:mb-0 md:mt-px xl:mt-1`}>{ index }</span>
            <span className={textLarge ? `block text-xl md:text-2xl xl:text-3xl text-left font-display leading-extratight mb-0 pb-0 md:-mb-3 hover:line-through w-7/12 md:w-7/12 lg:w-8/12` : `block text-xl md:text-2xl text-left font-display leading-extratight mb-0 pb-0 md:-mb-2 w-7/12 md:w-7/12 lg:w-8/12 hover:line-through`}>{ heading }</span>
            <span className="block ml-auto pl-4 transform origin-center rotate-0">
              <svg xmlns="http://www.w3.org/2000/svg" className={state.clicked ? `w-4 md:w-6 transform rotate-90 transition duration-500 ease-in-out` : `transition duration-500 ease-in-out w-4 md:w-6 transform -rotate-90`} viewBox="0 0 27.197 23.217"><g data-name="Group 116" fill="none" stroke="currentColor" strokeWidth="2"><path data-name="Path 1" d="M12.314 22.51l-10.9-10.9 10.9-10.9"/><path data-name="Path 2" d="M1.414 11.609h25.783"/></g></svg>
            </span>
          </motion.div>
        </div>
      </div>
    </button>
    {children && (
      <div className="Collapse_Content relative" ref={el => (body = el)}>
        { link && (
          <Link to={link} className="absolute top-0 right-0 z-10 hover:line-through pt-px md:pt-0 mt-3 md:mt-5 mr-0 font-display md:text-lg lg:text-2xl"><span className="mt-px block mr-px">Go to article</span></Link>
        )}
        <div className="pt-3 md:pt-5 pb-8 md:pb-8 pr-12 md:pr-24 border-b border-black">{children}</div>
      </div>
    )}
    </div>
  )
}

export default Collapsible