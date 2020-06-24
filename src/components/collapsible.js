import React, { useState, useRef, useEffect } from "react"
import { Power3, gsap } from "gsap/all"
import { isBrowser } from "react-device-detect"

const windowGlobal = typeof window !== 'undefined' && window

//! This method is essential to keep the scroll height up to date.
const updateScroll = () => isBrowser && windowGlobal.scroll.update()

const collapsible = node => {
  const tl = gsap.timeline({
    defaults: {
      duration: 0.65,
      ease: Power3.easeInOut,
    },
  })

  //! We call this method after every change that impacts the page height.
  const animation = tl
    // .call(() => setTimeout(updateScroll(), 650))
    .fromTo(
      node,
      { height: 0, willChange: "height" },
      { height: "auto", clearProps: "willChange" }
    )
    .call(() => setTimeout(updateScroll(), 650))
    .pause()

  let open = () => animation.play()
  let close = () => animation.reverse(0)

  return { open, close }
}

const Collapsible = ({ children, heading, index }) => {

  const [state, setState] = useState({
    initial: false,
    clicked: null,
  })

  let body = useRef(null)
  let icon = useRef(null)

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
    <button className="Collapse" onClick={() => handleClick()}>
      <div className="flex flex-wrap items-center border-b border-white py-2 md:py-5">
        <span className="block text-xs mr-3">{ index }</span>
        <span className="block text-lg md:text-xl">{ heading }</span>
        <span className="block ml-auto pl-4 transform origin-center rotate-0" ref={el => (icon = el)}>
          <svg xmlns="http://www.w3.org/2000/svg" className={state.clicked ? `w-4 md:w-6 transform rotate-90 transition duration-500 ease-in-out` : `transition duration-500 ease-in-out w-4 md:w-6 transform -rotate-90`} viewBox="0 0 27.197 23.217"><g data-name="Group 116" fill="none" stroke="currentColor" strokeWidth="2"><path data-name="Path 1" d="M12.314 22.51l-10.9-10.9 10.9-10.9"/><path data-name="Path 2" d="M1.414 11.609h25.783"/></g></svg>
        </span>

        {children && (
          <div className="Collapse_Content" ref={el => (body = el)}>
            <div className="pt-3 md:pt-5 pb-2 md:pb-1 pr-12 md:pr-24">{children}</div>
          </div>
        )}
      </div>
    </button>
  )
}

export default Collapsible