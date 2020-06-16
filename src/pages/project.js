import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import { Link } from "gatsby"
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll"

const transition = { duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96] }

const item = {
	initial: { y: 20, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: {
		opacity: 0,
		transition: { transition }
	}
}

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.timelines = {};
  }
  componentDidMount() {
    // this.timelines["overlayIn"] = gsap.from("#welcome", {
    //   autoAlpha: 0,
    //   paused: true
    // });
    this.timelines["overlayOut"] = gsap.to("#something", {
      autoAlpha: 0,
      scaleX: 0.9, scaleY: 0.9, rotationX: 25,
      paused: true,
      transformOrigin:'50% 50%'
    });
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#scroll-container"),
      smooth: false,
    });
    scroll.on("scroll", () => {
      const timelineEls = document.querySelectorAll("[data-scroll-timeline]");
      for (let i = 0; i < timelineEls.length; i++) {
        const progress = this.getProgress(timelineEls[i]);
        const timelineKey = timelineEls[i].dataset.scrollTimeline;
        const timeline = this.timelines[timelineKey];
        const duration = timeline.duration();
        if (progress > 0 && progress <= 1) {
          timeline.seek(progress * (duration));
        } else {
          if (progress <= 0) {
            this.timelines[timelineKey].seek(0);
          } else {
            this.timelines[timelineKey].seek(duration);
          }
        }
      }
    });
  }
  getProgress(elem) {
    var distance = elem.getBoundingClientRect();
    return (
      (window.innerHeight - distance.bottom - distance.height) /
      window.innerHeight
    );
  }
  render() {
    return (
      <>
        <SEO title="Home" /> 
        <motion.section
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { staggerChildren: 0.1 } }
          }}
        >          
          <div className="flex flex-wrap md:mb-16 -mx-5 md:-mx-3 -mt-64 md:mt-0" id="something">
            <div className="w-full md:w-1/2 lg:w-5/12 xl:w-4/12 mb-5 md:mb-0 md:px-3">
              <motion.div className="w-full h-screen-inner" variants={item}>
                <img src="https://placedog.net/700/1200" alt="placeholder" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 lg:w-7/12 xl:w-8/12 flex flex-wrap md:px-3">
              <motion.div variants={item} className="flex flex-wrap w-full mb-auto px-4 md:px-0">
                <div className="md:ml-auto md:text-right">
                  <div className="flex-wrap items-center mb-4 hidden md:flex">
                    <span className="block text-xs mt-1 mr-1 leading-none">PRB</span>
                    <span className="block text-3xl md:text-4xl leading-none">19-034</span>
                  </div>
                  <span className="block md:hidden leading-tight text-sm uppercase mb-3">Info</span>
                  <span className="block leading-tight">Nottingham</span>
                  <span className="hidden md:block leading-tight">2000sqm</span>
                  <span className="block leading-tight">Residential</span>
                  <span className="block leading-tight">&pound;3.2m</span>
                </div>
              </motion.div>

              <div className="mt-auto w-full px-3 md:px-0">
                <div className="flex flex-wrap items-end">
                  <motion.h1 variants={item} className="text-screen-display leading-negative block order-2 lg:order-1 w-full lg:w-auto mb-0">Ivy<br/>Farm</motion.h1>
                  <motion.div variants={item} className="ml-auto order-1 lg:order-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 lg:w-32 xl:w-40 md:-mb-10 lg:-mb-8 xl:-mb-10" viewBox="0 0 157.38 157.381"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M52.676 20.352l.001 84.352 84.353.001"/><path data-name="Path 2" d="M52.676 104.704L152.43 4.95"/></g></svg>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div data-scroll-timeline="overlayOut" />
          {/* <div data-scroll-timeline="overlayIn" />
          <div className="bg-black absolute top-0 left-0 right-0 bottom-0 w-full h-screen" id="welcome"></div> */}
        </motion.section>
        <div className="z-20 bg-white relative">
          <motion.section
            initial="initial"
            animate="enter"
            exit="exit"
            className="mb-0 md:mb-20 lg:mb-32"
            variants={{
              enter: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <div className="bg-black -mx-4 md:-mx-6 pt-24 pb-6 px-6">
              <div className="w-full flex flex-wrap md:-mx-4 items-end">
                <motion.div data-scroll data-scroll-speed="1.5" variants={item} className="w-full md:w-1/2 lg:w-5/12 xl:w-4/12 md:px-4 text-white">
                  <div className="max-w-xs flex flex-wrap hidden md:flex">
                    <div className="ml-auto flex flex-wrap items-center mb-3">
                      <span className="text-2xs mt-1 mr-1">PRB</span>
                      <span className="block">19-034</span>
                    </div>
                    <div className="w-full">
                      <img src="https://placedog.net/700/700" alt="placeholder" className="w-full" />
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={item} className="w-full md:w-1/2 lg:w-7/12 xl:w-8/12 md:px-4 ml-auto text-white pb-8 md:pb-24" data-scroll data-scroll-speed="0.5">
                  <p className="md:text-lg lg:text-xl max-w-xs md:max-w-lg mb-10 md:mb-16">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Conservation Accreditations enable us to manage complex repairs, alterations and specialist grant aided works. It also means we are adept at finding new uses for old buildings.</p>

                  <ul className="border-t border-white">
                    <li className="flex flex-wrap items-center border-b border-white py-2 md:py-5">
                      <span className="block text-xs mr-3">01</span>
                      <span className="block md:text-xl">Project Planning</span>
                      <span className="block ml-auto"><svg data-name="Group 118" xmlns="http://www.w3.org/2000/svg" width="17.104" height="17.104" viewBox="0 0 17.104 17.104"><path data-name="Line 29" fill="none" stroke="currentColor" d="M8.552 0v17.104"/><path data-name="Line 30" fill="none" stroke="currentColor" d="M17.104 8.552H0"/></svg></span>
                    </li>
                    <li className="flex flex-wrap items-center border-b border-white py-2 md:py-5">
                      <span className="block text-xs mr-3">02</span>
                      <span className="block md:text-xl">Architectural Design</span>
                      <span className="block ml-auto"><svg data-name="Group 118" xmlns="http://www.w3.org/2000/svg" width="17.104" height="17.104" viewBox="0 0 17.104 17.104"><path data-name="Line 29" fill="none" stroke="currentColor" d="M8.552 0v17.104"/><path data-name="Line 30" fill="none" stroke="currentColor" d="M17.104 8.552H0"/></svg></span>
                    </li>
                    <li className="flex flex-wrap items-center border-b border-white py-2 md:py-5">
                      <span className="block text-xs mr-3">03</span>
                      <span className="block md:text-xl">Project Delivery</span>
                      <span className="block ml-auto"><svg data-name="Group 118" xmlns="http://www.w3.org/2000/svg" width="17.104" height="17.104" viewBox="0 0 17.104 17.104"><path data-name="Line 29" fill="none" stroke="currentColor" d="M8.552 0v17.104"/><path data-name="Line 30" fill="none" stroke="currentColor" d="M17.104 8.552H0"/></svg></span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial="initial"
            animate="enter"
            exit="exit"
            className="-mx-4 md:mx-0"
            variants={{
              enter: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <div className="w-full flex flex-wrap mb-12 md:mb-32 lg:mb-64">
              <div className="w-8/12 md:pr-16 lg:pr-24 xl:pr-32" data-scroll data-scroll-speed="1.25">
                <figure className="mb-16 md:mb-32 lg:mb-48">
                  <img src="https://placedog.net/1200/700" alt="placeholder" className="w-full mb-2" />
                  <figcaption className="flex md:text-xl px-3 md:px-0">
                    <span className="block">Exterior</span>
                    <span className="block ml-auto">(1-5)</span>
                  </figcaption>
                </figure>

                <div className="max-w-md ml-auto md:mr-32 lg:mr-40 p-4 md:p-0">
                  <p className="lg:text-lg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Conservation Accreditations enable us to manage complex repairs, alterations and specialist grant aided works. It also means we are adept at finding new uses for old buildings.</p>
                </div>
              </div>
              <div className="w-4/12 md:pl-16 lg:pl-24 xl:pl-32 md:pt-64" data-scroll data-scroll-speed="2.5">
              <figure className="md:pt-32">
                <img src="https://placedog.net/700/1200" alt="placeholder" className="w-full mb-2" />
                <figcaption className="flex md:text-xl px-3 md:px-0">
                  <span className="block">Interior</span>
                  <span className="block ml-auto">(2-5)</span>
                </figcaption>
              </figure>
              </div>
            </div>

            <div className="w-full flex flex-wrap">
              <div className="w-full md:w-10/12 ml-auto">
                <div className="flex flex-wrap md:-mx-8 mb-20 md:mb-24 lg:mb-32">
                  <div className="w-full md:w-1/2 md:px-8" data-scroll data-scroll-speed="1.5">
                    <figure>
                      <img src="https://placedog.net/1200/700" alt="placeholder" className="w-full mb-2" />
                      <figcaption className="flex md:text-xl px-3 md:px-0">
                        <span className="block">Location</span>
                        <span className="block ml-auto">(3-5)</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="w-full md:w-1/2 md:px-8 hidden md:block" data-scroll data-scroll-speed="2.5">
                    <figure>
                      <img src="https://placedog.net/1200/700" alt="placeholder" className="w-full mb-2" />
                      <figcaption className="flex md:text-xl px-3 md:px-0">
                        <span className="block">Exterior</span>
                        <span className="block ml-auto">(4-5)</span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                
                <div className="mb-20 md:mb-24 lg:mb-32 max-w-sm md:max-w-lg lg:max-w-2xl p-3 md:p-0" data-scroll data-scroll-speed="0.5">
                  <span className="block font-display text-4xl md:text-5xl lg:text-6xl leading-none mb-4">Looking to work with us on a similar project?</span>
                  <Link to="/" className="block font-display text-2xl underline">Get in touch</Link>
                </div>
              </div>
            </div>
          </motion.section>
          
          <motion.section
            initial="initial"
            animate="enter"
            exit="exit"
            className="-mx-4 md:-mx-6 -mb-4 md:-mb-8 bg-prbred pt-12 md:pt-24 lg:pt-32 pb-4 md:pb-8"
            variants={{
              enter: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <div className="w-full flex flex-wrap" data-scroll data-scroll-speed="1.75">
              <div className="w-full md:w-10/12 ml-auto">
              <div className="flex flex-wrap items-end md:-mx-3">
                <div className="w-full md:w-auto order-2 md:order-1 md:px-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-24 md:w-40 lg:w-64 ml-auto md:ml-0 transform rotate-45" viewBox="0 0 41.843 35.711"><g data-name="Group 111" fill="none" stroke="currentColor" strokeWidth="3"><path data-name="Path 1" d="M22.927 1.061l16.795 16.8-16.795 16.79"/><path data-name="Path 2" d="M39.722 17.856H0"/></g></svg>
                </div>
                <div className="w-full md:w-8/12 order-1 md:order-2 p-4 md:p-0 md:px-3 mb-8 md:mb-0">
                  <nav className="">
                    <span className="block leading-tight text-sm uppercase mb-3">More residential projects</span>
                    <ul>
                      {[...Array(3)].map((e, i) => {
                        return (
                          <li key={i}>
                            <Link to="/project" className="flex flex-wrap items-center border-b border-black py-3 md:py-5 hover:text-white">
                              <span className="block mr-6 md:mr-8 text-xs md:text-sm leading-none">PRB001</span>
                              <span className="block text-lg md:text-3xl font-display leading-none mt-2">Keyworth</span>
                              <span className="block ml-auto"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8" viewBox="0 0 17.938 17.937"><g data-name="Group 33" fill="none" stroke="currentColor"><path data-name="Path 1" d="M2.18 5.752h10.006v10.005"/><path data-name="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg></span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </nav>
                </div>
              </div>
              </div>
            </div>
            
            <motion.div variants={item} className="lg:border-t lg:border-black lg:border-b w-10/12 ml-auto mr-4 md:mr-6 mt-12 md:mt-24 lg:mt-32">
              <ul className="flex flex-wrap">
                <li className="text-xl xl:text-2xl py-3 px-4 hidden lg:block">&copy; 2020</li>

                <li className="ml-auto hidden lg:block">
                  <a className="text-xl xl:text-2xl py-3 px-4 block hover:text-white" href="mailto:hello@prb-a.com" target="_blank" rel="noopener noreferrer">hello@prb-a.com</a>
                </li>

                <li className="text-xl xl:text-2xl py-3 px-4 block border-l border-black pr-12 xl:pr-32 2xl:pr-64 hidden lg:block">Architectural Design</li>

                <li className="block lg:hidden ml-auto">
                  <a className="text-lg lg:text-xl xl:text-2xl lg:py-3 px-2 xl:px-4 block hover:text-white" href="mailto:hello@prb-a.com" target="_blank" rel="noopener noreferrer">Email</a>
                </li>

                <li className="lg:border-l lg:border-black">
                  <a className="text-lg lg:text-xl xl:text-2xl lg:py-3 px-2 xl:px-4 block hover:text-white" href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                </li>

                <li className="lg:border-l lg:border-black">
                  <a className="text-lg lg:text-xl xl:text-2xl lg:py-3 px-2 xl:px-4 pr-0 block hover:text-white" href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
              </ul>
            </motion.div>
          </motion.section>
        </div>
      </>
    )
  }
}

export default ProjectPage