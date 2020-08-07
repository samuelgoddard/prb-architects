import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Img from "gatsby-image"
import gsap from "gsap";
// import WorkCarousel from "../components/workCarousel"
// import WorkCarouselDesktop from "../components/workCarouselDesktop"
import LocomotiveScroll from "locomotive-scroll"
import { scroll } from "../theme"

const heroImage = {
	initial: { scale: 1 },
	enter: { 
    scale: 1.1,
    transition: { duration: 3.25, ease: [0.25, 1, 0.5, 1] }
  },
	exit: {
    scale: 1.065,
		transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
	}
}

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

const revealArrow = {
	initial: { y: "-100%", x: "-100%" },
	enter: { 
    y: "0%",
    x: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  }
}

const revealArrowRight = {
	initial: { y: "-100%", x: "100%" },
	enter: { 
    y: "0%",
    x: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  }
}

const reveal = {
	initial: { y: "100%" },
	enter: { 
    y: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  },
}

class WorkTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.timelines = {};
  }

  componentDidMount() {
    let locomotiveScroll
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scroll.container),
      ...scroll.options,
    })
    locomotiveScroll.update();

    window.scroll = locomotiveScroll

    locomotiveScroll.on("scroll", func => {
      document.documentElement.setAttribute("data-direction", func.direction)
    })

    this.timelines["fast-spin"] = gsap.to(".hero-image-transform", {
      startAt: {
        scale: 1,
      },
      scale: 0.95,
      paused: true
    });

    locomotiveScroll.on("scroll", () => {
      const timelineEls = document.querySelectorAll("[data-scroll-timeline]");
      for (let i = 0; i < timelineEls.length; i++) {
        const progress = this.getProgress(timelineEls[i]);
        const timelineKey = timelineEls[i].dataset.scrollTimeline;
        const timeline = this.timelines[timelineKey];
        const duration = timeline.duration();
        if (progress > 0 && progress <= 1) {
          timeline.seek(progress * duration);
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

  componentWillUnmount() {
    window.scroll.update();
    window.scroll.destroy();
  }

  render () {
    const splitTitle = this.props.data.datoCmsWork.title.match(/\b(\w+)/g);

    const metaArray = [];
    if (this.props.data.datoCmsWork.metaLocation) { metaArray.push(this.props.data.datoCmsWork.metaLocation) }
    if (this.props.data.datoCmsWork.metaSize) { metaArray.push(this.props.data.datoCmsWork.metaSize) }
    if (this.props.data.datoCmsWork.category[0].title) { metaArray.push(this.props.data.datoCmsWork.category[0].title) }
    if (this.props.data.datoCmsWork.metaCost) { metaArray.push(this.props.data.datoCmsWork.metaCost) }

    return (
      <>
        <SEO
          titleOverride={this.props.data.datoCmsWork.metaTags && this.props.data.datoCmsWork.metaTags.title ? this.props.data.datoCmsWork.metaTags.title : this.props.data.datoCmsWork.title }
          descriptionOverride={this.props.data.datoCmsWork.metaTags && this.props.data.datoCmsWork.metaTags.description ? this.props.data.datoCmsWork.metaTags.description : null }
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.datoCmsWork.metaTags && this.props.data.datoCmsWork.metaTags.image ? this.props.data.datoCmsWork.metaTags.image.url : null }
        />

        <header className="p-4 pb-0 md:p-6 md:pb-0 h-14 md:h-22 z-50 flex flex-wrap bg-white absolute top-0 left-0 right-0" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">
          <motion.nav
            initial="initial"
            animate="enter"
            exit="exit"
            className="relative z-10 w-full"
          >
            <ul className="flex flex-wrap">
              <li className="block relative overflow-hidden">
                <Link className="text-lg md:text-2xl pr-px hover:line-through focus:line-through block relative overflow-hidden" to="/">
                  <motion.div variants={revealInOut}>
                    <div className="flex flex-wrap items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 27.197 23.217"><g data-name="Group 116" fill="none" stroke="currentColor" strokeWidth="2"><path data-name="Path 1" d="M12.314 22.51l-10.9-10.9 10.9-10.9"/><path data-name="Path 2" d="M1.414 11.609h25.783"/></g></svg>
                      <span className="block ml-3">All Projects</span>
                    </div>
                  </motion.div>
                </Link>
              </li>
              <li className="ml-auto">
                <Link to="/wayfinder" activeClassName="line-through" className="text-lg md:text-2xl px-px text-black hover:line-through focus:line-through">Menu</Link>
              </li>
            </ul>
          </motion.nav>
          <div className="mt-auto -mb-px h-px w-full border-b border-black transition ease-in-out duration-500"></div>
        </header>

        <header className="p-4 pb-0 md:p-6 md:pb-0 h-14 md:h-22 z-50 flex flex-wrap bg-white absolute fixed-when-scroll top-0 left-0 right-0 h-0 md:hidden">
          <motion.nav
            initial="initial"
            animate="enter"
            exit="exit"
            className="relative z-10 w-full md:hidden"
          >
            <ul className="flex flex-wrap md:hidden">
              <li className="block relative overflow-hidden">
                <Link className="text-lg md:text-2xl pr-px hover:line-through focus:line-through block relative overflow-hidden" to="/">
                  <motion.div variants={revealInOut}>
                    <div className="flex flex-wrap items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 27.197 23.217"><g data-name="Group 116" fill="none" stroke="currentColor" strokeWidth="2"><path data-name="Path 1" d="M12.314 22.51l-10.9-10.9 10.9-10.9"/><path data-name="Path 2" d="M1.414 11.609h25.783"/></g></svg>
                      <span className="block ml-3">All Projects</span>
                    </div>
                  </motion.div>
                </Link>
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
          <div className="bg-white min-h-screen-image md:pt-22 p-screen-inner relative overflow-hidden">
            <div className="px-4 md:px-6">
              <div className="flex flex-wrap -mx-4 md:-mx-3 -mt-32 md:mt-8">
                <div className="w-full md:w-1/2 lg:w-5/12 xl:w-4/12 md:px-3">

                <div className="w-full relative overflow-hidden h-screen-inner hidden md:block" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">
                  <motion.div variants={heroImage} className="h-full w-full transform image-transform-center">
                    <div className="h-full hero-image-transform">
                      <Img fluid={ this.props.data.datoCmsWork.featuredImage.fluid } className="w-full h-full object-cover mb-0 pb-0" />
                    </div>
                  </motion.div>
                </div>

                  <div className="w-full h-full overflow-hidden md:mb-0 block md:hidden absolute top-0 left-0">
                    <motion.div variants={heroImage} className="h-full w-full transform relative image-transform-center">
                      <div className="h-full hero-image-transform">
                        <Img fluid={ this.props.data.datoCmsWork.featuredImage.fluid } className="w-full h-screen object-cover" />
                      </div>
                    </motion.div>
                  </div>

                  <div data-scroll-timeline="fast-spin" />
                </div>

                <div className="w-full md:w-1/2 lg:w-7/12 xl:w-8/12 flex flex-wrap mx-0 relative bg-white z-10">
              
                  <div className="w-full px-3 md:px-0">
                    <motion.div
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      className="flex flex-wrap md:h-full items-center"
                      variants={{
                        enter: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
                      }}
                    >
                      <div className="w-10/12 lg:w-9/12 mx-auto mt-24 md:-mt-12 mb-32 md:mb-0">
                        <div className="pt-5" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">
                          <h1 className="hidden md:block order-2 lg:order-1 lg:w-auto text-center font-display text-screen-display text-screen-display--animated relative overflow-hidden -mt-10 mb-0 pb-0">
                            {
                              splitTitle.map((text, i) => (
                                <div variants={reveal} key={i} className="relative overflow-hidden">
                                  <span className={i === 0 ? `block mt-0 relative z-20 bg-white` : `md:-mt-6 xl:-mt-4 relative z-0 block bg-white`} key={i}>
                                  <motion.div variants={reveal} className="pt-12" key={i}>{ text }</motion.div></span>
                                </div>
                              ))
                            }
                          </h1>
                        </div>

                        <div className="pt-3">
                          <h1 className="block md:hidden order-2 lg:order-1 lg:w-auto text-center font-display text-screen-display text-screen-display--animated relative overflow-hidden mt-8">
                            {
                              splitTitle.map((text, i) => (
                                <div variants={reveal} key={i} className="relative overflow-hidden">
                                  <span className={i === 0 ? `pt-1 block mt-0 relative z-20` : `md:-mt-6 xl:-mt-4 relative z-0 block pt-1`} key={i}>
                                  <motion.div variants={reveal} className="pt-0" key={i}>{ text }</motion.div></span>
                                </div>
                              ))
                            }
                          </h1>
                        </div>

                        <div className="hidden md:block md:ml-3 mt-3 overflow-hidden" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">
                          <motion.div variants={reveal}>
                            <div className="flex flex-wrap items-center justify-center ">
                              <span className="block text-xs mt-1 mr-1 leading-none">PRB</span>
                              <span className="block text-xl md:text-3xl lg:text-4xl leading-none">{ this.props.data.datoCmsWork.projectCode }</span>
                            </div>
                          </motion.div>
                        </div>
                        <div className="flex-wrap items-center justify-center flex ml-3 mt-3 md:hidden">
                          <span className="block text-xs mt-1 mr-1 leading-none">PRB</span>
                          <span className="block text-xl md:text-3xl lg:text-4xl leading-none">{ this.props.data.datoCmsWork.projectCode }</span>
                        </div>
                      </div>
                    </motion.div>

                    <div className="w-auto mb-8 md:mb-0 absolute top-0 md:top-0 left-0 mr-0 hidden md:block ml-1 overflow-hidden" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">
                      <div className="relative overflow-hidden">
                        <motion.div variants={revealArrow}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-24 lg:w-32 xl:w-40 -ml-3 xl:-ml-5 transform rotate rotate-45 -mt-1" viewBox="0 0 41.843 35.711"><g data-name="Group 111" fill="none" stroke="currentColor" strokeWidth="3"><path data-name="Path 1" d="M22.927 1.061l16.795 16.8-16.795 16.79"/><path data-name="Path 2" d="M39.722 17.856H0"/></g></svg>
                        </motion.div>
                      </div>
                    </div>
                    <div className="w-auto mb-8 md:mb-0 absolute top-0 md:top-auto md:bottom-0 right-0 mt-3 mr-3 md:mr-3 block md:hidden overflow-hidden">
                      <motion.div variants={revealArrowRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-24 lg:w-32 xl:w-40 -mb-5" viewBox="0 0 157.38 157.381"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M52.676 20.352l.001 84.352 84.353.001"/><path data-name="Path 2" d="M52.676 104.704L152.43 4.95"/></g></svg>
                      </motion.div>
                    </div>
                    

                    <motion.div variants={fade} className="flex flex-wrap w-full md:mx-0 mt-auto md:absolute bottom-0 left-0 right-0 md:mb-6">
                    <div className="w-full md:text-right mb-4 md:mb-0 block md:hidden">
                      <div className="flex flex-wrap w-full px-0 pt-2 pb-2 md:py-0 border-t border-b border-black md:relative">

                        { metaArray.map((block, i) => {
                          let dynamicClassName = null;
                          if (i === 0 && metaArray.length === 2) {
                            dynamicClassName = "block leading-tight text-sm md:text-base lg:text-lg w-auto mr-auto text-left relative overflow-hidden"
                          } else if (i === 1 && metaArray.length === 2) {
                            dynamicClassName = "block leading-tight text-sm md:text-base lg:text-lg flex-1 ml-auto text-right relative overflow-hidden"
                          } else if (i === 0 && metaArray.length === 1) {
                            dynamicClassName = "block leading-tight text-sm md:text-base lg:text-lg flex-1 mx-auto text-center relative overflow-hidden"
                          } else if (i === 0 && metaArray.length === 4 || i === 0 && metaArray.length === 3) {
                            dynamicClassName = "block leading-tight text-sm md:text-base lg:text-lg w-auto mr-auto text-left relative overflow-hidden" }
                          else if (i === 3 && metaArray.length === 4 || i === 2 && metaArray.length === 3) {
                            dynamicClassName = "block leading-tight text-sm md:text-base lg:text-lg w-auto ml-auto text-right relative overflow-hidden" }
                          else {
                            dynamicClassName = "block leading-tight text-sm md:text-base lg:text-lg w-auto mx-auto text-center relative overflow-hidden"
                          }
                          return (
                            <span className={ dynamicClassName } key={i}>
                              <motion.div variants={reveal}>
                                { block }
                              </motion.div>
                            </span>
                          )
                        })}
                      </div>
                    </div>
                    
                    <div className="w-full md:text-right mb-8 md:mb-0 hidden md:block mr-3" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">
                      <motion.div
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        className="flex flex-wrap w-full border-t border-b border-black py-2 absolute bottom-0 left-0 right-0 md:relative overflow-hidden"
                        variants={{
                          enter: { transition: { staggerChildren: 0.15 } }
                        }}
                      >
                        { metaArray.map((block, i) => {
                          let dynamicClassName = null;
                          if (i === 0 && metaArray.length === 2) {
                            dynamicClassName = "block leading-tight text-sm md:text-base lg:text-lg w-auto mr-auto text-left relative overflow-hidden"
                          } else if (i === 1 && metaArray.length === 2) {
                            dynamicClassName = "block leading-tight text-sm md:text-base lg:text-lg flex-1 ml-auto text-right relative overflow-hidden"
                          } else if (i === 0 && metaArray.length === 1) {
                            dynamicClassName = "block leading-tight text-sm md:text-base lg:text-lg flex-1 mx-auto text-center relative overflow-hidden"
                          } else if (i === 0 && metaArray.length === 4 || i === 0 && metaArray.length === 3) {
                            dynamicClassName = "block leading-tight text-sm md:text-base lg:text-lg w-auto mr-auto text-left relative overflow-hidden" }
                          else if (i === 3 && metaArray.length === 4 || i === 2 && metaArray.length === 3) {
                            dynamicClassName = "block leading-tight text-sm md:text-base lg:text-lg w-auto ml-auto text-right relative overflow-hidden" }
                          else {
                            dynamicClassName = "block leading-tight text-sm md:text-base lg:text-lg w-auto mx-auto text-center relative overflow-hidden"
                          }
                          return (
                            <span className={ dynamicClassName } key={i}>
                              <motion.div variants={reveal} className="mb-px pb-px">
                                { block }
                              </motion.div>
                            </span>
                          )
                        })}

                        {/* { this.props.data.datoCmsWork.metaLocation && (
                          <span className="block leading-tight text-sm md:text-base lg:text-lg w-auto mx-auto text-center relative overflow-hidden"><motion.div variants={reveal}>{ this.props.data.datoCmsWork.metaLocation }</motion.div>
                          </span>
                        )}
                        { this.props.data.datoCmsWork.metaSize && (
                          <span className="block leading-tight text-sm md:text-base lg:text-lg w-auto mx-auto text-center relative overflow-hidden"><motion.div variants={reveal}>{ this.props.data.datoCmsWork.metaSize }</motion.div></span>
                        )}
                        <span className="block leading-tight text-sm md:text-base lg:text-lg w-auto mx-auto text-center relative overflow-hidden"><motion.div variants={reveal}>{ this.props.data.datoCmsWork.category[0].title }</motion.div></span>
                        { this.props.data.datoCmsWork.metaCost && (
                          <span className="block leading-tight text-sm md:text-base lg:text-lg w-auto mx-auto text-center relative overflow-hidden"><motion.div variants={reveal}>{ this.props.data.datoCmsWork.metaCost }</motion.div></span>
                        )} */}
                      </motion.div>
                    </div>
                  </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div className="z-20 bg-white relative">
              <section className="mb-8 md:mb-20 lg:mb-32 px-4 md:px-6">
                <div className="bg-offblack -mx-4 md:-mx-6 pt-24">
                  <div className="w-full flex flex-wrap items-end pr-4 pl-4 md:p-6">
                    <div className="w-full md:w-1/2 lg:w-5/12 xl:w-4/12 text-white">
                      <div className="max-w-xs flex-wrap hidden md:flex">
                        <div className="ml-auto flex flex-wrap items-center mb-1">
                          <span className="text-2xs mt-1 mr-1">PRB</span>
                          <span className="block">{ this.props.data.datoCmsWork.projectCode }</span>
                        </div>
                        <div className="w-full relative" data-scroll data-scroll-speed="0">
                          <div className="w-full relative overflow-hidden" data-scroll>
                            <div data-scroll data-scroll-speed="0.75" className="overflow-hidden -m-10">
                              <div className="image-reveal-scroll">
                                <Img fluid={ this.props.data.datoCmsWork.supportingImage.fluid } className="w-full max-w-full p-10"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-7/12 xl:w-8/12 ml-auto text-white pb-8 md:pb-24 3xl:pb-40">
                      <div className="md:text-lg lg:text-xl max-w-2xs md:max-w-md xl:max-w-lg mb-10 md:mb-16 leading-tight content-indented" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsWork.introText }}></div>

                      <div className="border-t border-white">
                        {
                          this.props.data.datoCmsWork.introServices.map((block, i) => (
                            <div key={block.id}>
                              {
                                block.model.apiKey === 'service' &&
                                <div className="w-full">
                                  <div className="flex flex-wrap items-center border-b border-current w-full pt-4 py-3 md:pt-5 md:py-6 xl:py-8">
                                    <span className="block text-xs mr-3 w-auto text-left mb-2 md:mb-0">0{ i + 1 }</span>
                                    <span className={`block text-xl md:text-2xl text-left font-display leading-tight mb-0 pb-0 md:-mb-3 strike__inner strike__inner--small w-9/12 md:w-auto`}>{ block.heading }</span>
                                  </div>
                                </div>
                              }
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* <section className="-mx-4 md:mx-0 bg-white block md:hidden">
                {
                  this.props.data.datoCmsWork.contentBlocks.map((block, i) => (
                    <div key={block.id}>
                      {
                        block.model.apiKey === 'carousel' &&
                          <div className="w-full">
                            <div className="block mb-8">
                              <WorkCarousel slides={ block.images } realLength={ block.images.length } />
                            </div>
                          </div>
                      }
                    </div>
                  )
                )}
              </section> */}

              {/* Content Section Start */}
              <section>
                {
                  this.props.data.datoCmsWork.contentBlocks.map((block, i) => (
                    <div key={block.id}>
                      {
                        block.model.apiKey === 'content_left_align' && 
                          <div className="w-full flex flex-wrap mb-12 md:mb-32 2xl:mb-48 bg-white 3xl:w-9/12 3xl:mx-auto px-4 md:px-6">
                            <div className="w-8/12 md:pr-16 lg:pr-24 xl:pr-32 -mx-4 md:mx-0">
                              <figure className="mb-16 md:mb-32 lg:mb-48 hidden md:block">
                                <div className="overflow-hidden block">
                                  <div data-scroll data-scroll-speed="-0.6" className="overflow-hidden -m-10">
                                    <div className="image-reveal-scroll">
                                      <Img fluid={ block.image1.fluid } className="w-full max-w-full object-cover p-12"/>
                                    </div>
                                  </div>
                                </div>
                                <figcaption className="flex md:text-xl px-0 md:px-0 pt-1">
                                  <span className="block">Exterior</span>
                                  <span className="block ml-auto">(1—5)</span>
                                </figcaption>
                              </figure>

                              <div className="max-w-md ml-auto md:mr-32 lg:mr-40 p-4 md:p-0">
                                <div className="lg:text-lg leading-tight content-indented" dangerouslySetInnerHTML={{ __html: block.text }}></div>
                              </div>
                            </div>
                            <div className="w-4/12 md:pl-16 lg:pl-24 xl:pl-32 md:pt-48 lg:pt-64 hidden md:block">
                              <figure className="md:pt-32">
                                <div className="overflow-hidden block">
                                  <div data-scroll data-scroll-speed="0.75" className="overflow-hidden -m-12">
                                    <div className="image-reveal-scroll">
                                      <Img fluid={ block.image2.fluid } className="w-full max-w-full object-cover p-12"/>
                                    </div>
                                  </div>
                                </div>
                                <figcaption className="flex md:text-xl px-0 md:px-0 pt-1">
                                  <span className="block">Interior</span>
                                  <span className="block ml-auto">(2—5)</span>
                                </figcaption>
                              </figure>
                            </div>

                            <div className="w-full block md:hidden">
                              <figure className="pt-12">
                                <div className="overflow-hidden block">
                                  <div className="overflow-hidden">
                                    <Img fluid={ block.image1.fluid } className="w-full max-w-full object-cover p-0 md:p-12"/>
                                  </div>
                                </div>
                                <figcaption className="flex md:text-xl px-0 md:px-0 pt-1">
                                  <span className="block">Interior</span>
                                  <span className="block ml-auto">(2—5)</span>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        }
                        {
                        block.model.apiKey === 'content_right_align' && 
                          <div className="w-full flex flex-wrap mb-12 md:mb-32 lg:mb-40 2xl:mb-48 bg-white 3xl:w-9/12 3xl:mx-auto px-4 md:px-6">
                            <div className="w-4/12 md:pr-16 lg:pr-24 xl:pr-32 hidden md:block -mx-4 md:mx-0">
                              <figure className="mb-16 md:mb-32 lg:mb-48">
                                <div className="overflow-hidden block">
                                  <div data-scroll data-scroll-speed="0.75" className="overflow-hidden -m-12">
                                    <div className="image-reveal-scroll">
                                      <Img fluid={ block.image1.fluid } className="w-full max-w-full object-cover p-12"/>
                                    </div>
                                  </div>
                                </div>
                                <figcaption className="flex md:text-xl px-0 md:px-0 pt-1">
                                  <span className="block">Interior</span>
                                  <span className="block ml-auto">(2—5)</span>
                                </figcaption>
                              </figure>
                            </div>
                            <div className="w-8/12 md:pl-16 lg:pl-24 xl:pl-32 md:pt-16">
                              <div className="max-w-md ml-auto md:ml-32 lg:ml-40 p-4 pl-0 md:p-0">
                                <div className="lg:text-lg leading-tight content-indented" dangerouslySetInnerHTML={{ __html: block.text }}></div>
                              </div>

                              <figure className="md:pt-32 hidden md:block">
                                <div className="overflow-hidden block">
                                  <div data-scroll data-scroll-speed="-0.6" className="overflow-hidden -m-10">
                                    <div className="image-reveal-scroll">
                                      <Img fluid={ block.image2.fluid } className="w-full max-w-full object-cover p-12"/>
                                    </div>
                                  </div>
                                </div>
                                <figcaption className="flex md:text-xl px-0 md:px-0 pt-1">
                                  <span className="block">Exterior</span>
                                  <span className="block ml-auto">(1—5)</span>
                                </figcaption>
                              </figure>
                            </div>

                            <div className="w-full block md:hidden">
                              <figure className="pt-8">
                                <div className="overflow-hidden block">
                                  <div data-scroll data-scroll-speed="-0.6" className="overflow-hidden -m-10">
                                    <div className="image-reveal-scroll">
                                      <Img fluid={ block.image2.fluid } className="w-full max-w-full object-cover py-8 md:p-12"/>
                                    </div>
                                  </div>
                                </div>
                                <figcaption className="flex md:text-xl px-0 md:px-0 pt-1">
                                  <span className="block">Interior</span>
                                  <span className="block ml-auto">(2—5)</span>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        }
                        {
                        block.model.apiKey === 'full_text' &&
                          <div className="w-full flex flex-wrap mb-24 md:mb-24 lg:mb-40 2xl:mb-48 bg-white 3xl:w-9/12 3xl:mx-auto px-4 md:px-6">
                            <div className="w-10/12 md:w-8/12 md:pl-8 lg:pl-10 xl:pl-24 -mx-4 md:mx-0">
                              <div className="md:max-w-md ml-auto md:ml-32 lg:ml-40 p-4 md:p-0">
                                <div className="lg:text-lg leading-tight content-indented" dangerouslySetInnerHTML={{ __html: block.text }}></div>
                              </div>
                            </div>
                          </div>
                        }
                        {/* {
                        block.model.apiKey === 'carousel' &&
                          <div className="w-full flex flex-wrap mb-24 md:mb-24 lg:mb-40 hidden md:block">
                            <div className="w-full md:w-10/12 ml-auto">
                              <WorkCarouselDesktop slides={ block.images } realLength={ block.images.length } />
                            </div>
                          </div>
                        } */}
                        {
                        block.model.apiKey === 'image100' &&
                          <div className="w-full flex flex-wrap mb-24 md:mb-24 lg:mb-40 2xl:mb-48 bg-white 3xl:w-9/12 3xl:mx-auto px-4 md:px-6">
                            <div className="w-full md:w-9/12 mx-auto">
                              <figure className="pt-8">
                                <div className="overflow-hidden block">
                                  <div data-scroll data-scroll-speed="0.65" className="overflow-hidden -m-10">
                                    <div className="image-reveal-scroll">
                                      <Img fluid={ block.image.fluid } className="w-full max-w-full object-cover py-10 md:py-5"/>
                                    </div>
                                  </div>
                                </div>
                                <figcaption className="flex md:text-xl px-0 md:px-0 pt-1">
                                  <span className="block">Interior</span>
                                  <span className="block ml-auto">(2—5)</span>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        }
                        {
                        block.model.apiKey === 'image50' &&
                          <div className="w-full flex flex-wrap mb-24 md:mb-24 lg:mb-40 2xl:mb-48 bg-white 3xl:w-9/12 3xl:mx-auto">
                            <div className="w-10/12 md:w-5/12 mx-auto px-4 md:px-6">
                              <figure className="pt-8">
                                <div className="overflow-hidden block">
                                  <div data-scroll data-scroll-speed="-0.7" className="overflow-hidden -m-10">
                                    <div className="image-reveal-scroll">
                                      <Img fluid={ block.image.fluid } className="w-full max-w-full object-cover p-12"/>
                                    </div>
                                  </div>
                                </div>
                                <figcaption className="flex md:text-xl px-0 md:px-0 pt-1">
                                  <span className="block">Interior</span>
                                  <span className="block ml-auto">(2—5)</span>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                      }
                    </div>
                  ))
                }
              </section>
              

              {/* Looking for work? */}
              <section className="pb-4 pt-12 md:pb-14 md:pt-20 xl:pb-20 xl:pt-24">
                <div className="w-full md:w-9/12 mx-auto px-4 md:px-5 mb-0 md:mb-24 lg:mb-32 3xl:mb-40">
                  <div className="max-w-sm pr-12 md:pr-0 md:max-w-lg lg:max-w-2xl p-3 md:p-0 -mx-4 md:mx-0 mb-2 md:mb-8">
                    <span className="block font-display text-4xl md:text-6xl leading-none pr-1">Need help with a<span className="block">{ this.props.data.datoCmsWork.category[0].title.toLowerCase() } project?</span>Get in touch.</span>
                  </div>

                  <div className="flex flex-wrap border-t border-b border-black w-auto pr-12 md:pr-0 md:w-full">
                    <a href={`mailto:${ this.props.data.studio.studioEmailAddress }`} rel="noopener noreferrer" target="_blank" className="text-sm sm:text-lg md:text-xl block py-2 lg:py-3 pr-3 lg:pr-4 leading-tight hover:line-through focus:line-through lg:mb-0 border-r border-black">Email</a>

                    <a href={`tel:${ this.props.data.studio.studioTelephone }`} rel="noopener noreferrer" target="_blank" className="text-sm sm:text-lg md:text-xl block pl-2 lg:pl-3 px-3 lg:px-4 py-2 lg:py-3 leading-tight hover:line-through focus:line-through lg:mb-0 border-r border-black">
                      <span className="hidden md:block">{ this.props.data.studio.studioTelephone }</span>
                      <span className="block md:hidden">Tel</span>
                    </a>

                    <a href="https://www.google.com/maps/place/Player+Roberts+Bell+Architects/@52.9888236,-0.9303382,17z/data=!3m1!4b1!4m5!3m4!1s0x4879c94b2ea00ee3:0xf9402e81b6228e50!8m2!3d52.9888236!4d-0.9281442" rel="noopener noreferrer" target="_blank" className="text-sm sm:text-lg md:text-xl block leading-tight hover:line-through focus:line-through py-2 lg:py-3 pl-3 lg:pl-4 lg:pr-16 pr-8"><span className="block pb-px">Find us</span></a>

                    <Link to={`/journal`} className="text-sm sm:text-lg md:text-xl block leading-tight hover:line-through focus:line-through pl-3 lg:pl-4 py-2 lg:py-3 border-l border-black ml-auto">Read journal</Link>
                  </div>
                </div>
              </section>
            
              {/* Footer */}
              <section className="md:px-6 bg-prbred pt-6 md:pt-24 lg:pt-32 pb-6 md:pb-6">
                <div className="">
                  <div className="w-full flex flex-wrap">
                    <div className="w-full md:w-10/12 ml-auto">
                    <div className="flex flex-wrap items-end md:-mx-3 md:pl-6">
                      <div className="w-full md:w-auto order-1 md:order-1 md:px-3 overflow-hidden mb-16 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-24 md:w-40 lg:w-64 md:ml-auto md:ml-0 transform rotate-45 md:-mb-3" viewBox="0 0 41.843 35.711"><g data-name="Group 111" fill="none" stroke="currentColor" strokeWidth="3"><path data-name="Path 1" d="M22.927 1.061l16.795 16.8-16.795 16.79"/><path data-name="Path 2" d="M39.722 17.856H0"/></g></svg>
                      </div>
                      <div className="w-full md:w-8/12 order-2 md:order-2 p-4 md:p-0 md:px-3 mb-18 md:mb-0">
                        <span className="block leading-tight text-xs md:text-sm uppercase mb-1 md:mb-3 invert-select">More { this.props.data.datoCmsWork.category[0].title } projects</span>

                        {this.props.data.relatedWork.edges.map(({ node }, i) => {
                          return (
                            <div key={i}>
                              { node.slug !== this.props.data.datoCmsWork.slug &&(
                                <Link to={`/work/${node.slug}`} className="flex flex-wrap items-center border-b border-black py-3 md:py-4 xl:py-5 hover:text-white group">
                                  <span className="flex flex-wrap w-20 md:w-24 text-xs md:text-sm leading-none items-center">
                                    <span className="block text-2xs pt-px mr-1 invert-select">PRB</span>
                                    <span className="block leading-none invert-select">{ node.projectCode }</span>
                                  </span>
                                  <span className="block text-xl md:text-2xl xl:text-3xl font-display leading-none mt-2 group-hover:line-through invert-select">{ node.title }</span>
                                  <span className="block ml-auto"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 -mr-2" viewBox="0 0 17.938 17.937"><g data-name="Group 33" fill="none" stroke="currentColor"><path data-name="Path 1" d="M2.18 5.752h10.006v10.005"/><path data-name="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg></span>
                                </Link>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    </div>
                  </div>
                </div>

                <motion.div variants={fade} className="w-full md:w-10/12 ml-auto mt-0 md:mt-24 lg:mt-32 md:pl-12 lg:pl-4 px-4 md:px-0">
                  <div className="md:hidden">
                    <Link 
                      className={`block pr-8 pb-4 z-30 w-28 md:w-40`}
                      to="/"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-full md:mb-3 md:pr-2" viewBox="0 0 906.3 620"><g data-name="Group 177"><path data-name="Path 58" d="M906 620z" fill="#fff"/><path data-name="Path 77" d="M25.1 183.5H.1V0h66.6c45.4 0 71.4 21.5 71.4 57.4 0 36.1-25.9 57.7-71.4 57.7H25.1zm41.1-89.1c32 0 47.5-13.1 47.5-37 0-23.6-15.4-36.7-47.5-36.7H25.1v73.7z" fill="#1d1d1b"/><path data-name="Path 78" d="M185 0v183.5h-24.2V0z" fill="#1d1d1b"/><path data-name="Path 79" d="M320.4 158.5c0 6.7 3.8 9.9 9.9 9.9a25.1 25.1 0 0011.1-2.9v13.1c-4.4 4.4-9.6 7.6-19.5 7.6-13.1 0-22.4-9.9-23.9-25.1-7 14.9-25 25.9-45.7 25.9-24.8 0-40.8-13.4-40.8-35.2 0-24.2 20.7-34.1 51.3-40.2l34.4-7v-4.9c0-17.5-10.2-28.2-28-28.2-18.4 0-28.2 10.8-32 25.6l-21.6-2.9c4.9-23.9 23.9-41.4 53.9-41.4 32 0 51 16.3 51 48.6zm-23.3-37.9l-28.5 6.1c-20.1 4.4-32.9 8.2-32.9 23.6 0 10.8 7.3 18.9 21.8 18.9 22.4 0 39.6-16.9 39.6-42.5z" fill="#1d1d1b"/><path data-name="Path 80" d="M373.7 232.5l20.7-49.2-53.6-127h25.3l40.5 97.9h1.2l39-97.9h23.9l-73.4 176.2z" fill="#1d1d1b"/><path data-name="Path 81" d="M602.9 140.7c-6.4 28.8-27.7 46.3-59.4 46.3-37.9 0-65.5-25.6-65.5-65.2 0-40.2 27.7-69 64.4-69 40.5 0 61.2 28.8 61.2 63.5v9.6H502.2c1.2 24.8 18.9 42.2 41.6 42.2 21.3 0 33.8-10.2 39-29.7zm-24.1-30.6c-.9-20.4-12.2-39-36.4-39-23 0-36.7 18.1-39.6 39z" fill="#1d1d1b"/><path data-name="Path 82" d="M704.6 80.4c-7-3.8-11.9-5.2-19.8-5.2-18.3 0-32 16.6-32 41.1v67.3h-24.2V56.2h24.1v25.9c4.7-14.6 17.8-29.4 36.1-29.4 7.9 0 13.7 2 18.1 5.8z" fill="#1d1d1b"/><path data-name="Path 83" d="M120 400c-3.5-5-6.1-18.4-7.6-39.9-1.1-20.4-10.7-34.1-35.8-34.1H24.8v74H0V216.5h74.6c46.6 0 69 21.6 69 54.2 0 28.2-19.2 43.1-41.7 45.7 22.4 4.4 33.2 18.1 35 39.6 2.3 26.8 3.2 37.3 9.3 44zm-46.9-94.1c31.2 0 45.1-11.6 45.1-34.4 0-21-14-34.4-45.1-34.4H24.8v68.7h48.3z" fill="#1d1d1b"/><path data-name="Path 84" d="M229.6 403.4c-37.3 0-64.7-27.4-64.7-67s27.4-67.3 64.7-67.3c37.6 0 65.2 27.7 65.2 67.3s-27.7 67-65.2 67zm0-18.6c25.9 0 40.5-20.1 40.5-48.4 0-28.5-14.6-48.3-40.5-48.3-25.6 0-39.9 19.8-39.9 48.3 0 28.3 14.2 48.4 39.9 48.4z" fill="#1d1d1b"/><path data-name="Path 85" d="M338.2 400h-18.3V216.5h24.2v83c5.5-15.7 21.8-30.3 45.7-30.3 37.6 0 58.2 29.7 58.2 67.3s-20.7 67-58.5 67c-23.6 0-40.2-14-46-30zm5.2-60c0 28 17.8 44.3 40.8 44.3 25 0 38.7-18.6 38.7-47.8s-13.7-47.8-38.7-47.8c-23 0-40.8 16.3-40.8 44z" fill="#1d1d1b"/><path data-name="Path 86" d="M590.7 357.1c-6.4 28.8-27.7 46.3-59.4 46.3-37.9 0-65.5-25.6-65.5-65.2 0-40.2 27.7-69 64.4-69 40.5 0 61.2 28.8 61.2 63.5v9.6H489.9c1.2 24.8 18.9 42.2 41.6 42.2 21.3 0 33.8-10.2 39-29.7zm-24.2-30.5c-.9-20.4-12.2-39-36.4-39-23 0-36.7 18.1-39.6 39z" fill="#1d1d1b"/><path data-name="Path 87" d="M692.4 296.8c-7-3.8-11.9-5.2-19.8-5.2-18.3 0-32 16.6-32 41.1V400h-24.2V272.7h24.2v25.9c4.7-14.6 17.8-29.4 36.1-29.4 7.9 0 13.7 2 18.1 5.8z" fill="#1d1d1b"/><path data-name="Path 88" d="M720.6 290.1h-19.2V277l8.2-1.5c11.9-2.3 14.6-8.1 17.5-20.4l3.8-17.8h13.7v35.2h35.8V290h-35.8v77.2c0 11.4 4.7 16.6 15.7 16.6 8.2 0 16.6-3.5 23.9-7.6v16.3c-9.3 7-18.6 10.8-32.6 10.8-18.1 0-30.9-8.4-30.9-33.2v-80z" fill="#1d1d1b"/><path data-name="Path 89" d="M816.4 355.7c2.3 19.5 16 30 37.9 30 16.9 0 29.4-6.1 29.4-18.9 0-12-8.5-16-24.2-18.9l-21.6-3.8c-23.9-3.8-38.2-14-38.2-35.8 0-23.3 19.5-39 48.9-39 33.8 0 53.6 15.7 55.9 45.1l-19.5 1.2c-2.9-19.5-14.9-28.5-36.4-28.5-16 0-26.5 7.3-26.5 18.9 0 10.2 6.4 15.4 19.5 17.8l23.9 3.8c25.6 4.4 40.8 14 40.8 37 0 25.3-22.4 39-52.1 39-31.7 0-55.9-14.9-58.2-46.3z" fill="#1d1d1b"/><path data-name="Path 90" d="M78.1 616.4H0V432.9h74.9c45.4 0 64.1 19.8 64.1 48.9 0 21.3-15.1 35.8-34.7 39.3 22.4 3.8 39.9 18.7 39.9 44.9 0 31.7-23.3 50.4-66.1 50.4zM24.5 512.1h51.3c26.5 0 37.9-11.4 37.9-29.1 0-17.5-11.4-29.4-37.9-29.4H24.5zm0 19.5v64.1h53c27.4 0 41.7-11.9 41.7-31.8 0-20.1-14.3-32.3-41.7-32.3z" fill="#1d1d1b"/><path data-name="Path 91" d="M289.2 573.5c-6.4 28.8-27.7 46.3-59.4 46.3-37.9 0-65.5-25.6-65.5-65.2 0-40.2 27.7-69 64.4-69 40.5 0 61.2 28.8 61.2 63.5v9.6H188.5c1.2 24.8 18.9 42.2 41.6 42.2 21.3 0 33.8-10.2 39-29.7zM265.1 543c-.9-20.4-12.2-39-36.4-39-23 0-36.7 18.1-39.6 39z" fill="#1d1d1b"/><path data-name="Path 92" d="M344.3 432.9v183.5h-24.2V432.9z" fill="#1d1d1b"/><path data-name="Path 93" d="M406.6 432.9v183.5h-24.2V432.9z" fill="#1d1d1b"/><path data-name="Path 94" d="M617.7 474.5v119.3L499 475.1l-9.4 9.3 118.8 118.8H489v13.2h141.9V474.5z"/></g></svg>
                    </Link>
                  </div>

                  <ul className="flex flex-wrap border-t border-black border-b">
                    <li className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 pr-2 md:pr-3 lg:pr-4 xl:pr-5 block xl:border-r border-black hidden md:block invert-select">Architecture + Conservation</li>
                      
                    <li className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 pr-2 lg:px-3 lg:px-4 xl:px-5 xl:pr-6 hidden xl:block invert-select">&copy; 2020</li>
                    
                    <li className="block md:border-l border-black invert-select">
                      <Link className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 md:px-2 lg:px-4 xl:px-5 invert-select block hover:text-white focus:text-white hover:line-through focus:line-through" to={`/privacy`} target="_blank" rel="noopener noreferrer">Privacy</Link>
                    </li>

                    <li className="ml-auto block border-l border-black invert-select">
                      <a className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 invert-select block hover:text-white focus:text-white hover:line-through focus:line-through" href={`tel:${ this.props.data.studio.studioTelephone }`} target="_blank" rel="noopener noreferrer"><span className="block invert-select md:hidden">Tel</span><span className="hidden invert-select md:block">{this.props.data.studio.studioTelephone }</span></a>
                    </li>

                    <li className="invert-select block border-l border-black">
                      <a className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 invert-select block hover:text-white focus:text-white hover:line-through focus:line-through" href={`mailto:${ this.props.data.studio.studioEmailAddress }`} target="_blank" rel="noopener noreferrer">Email</a>
                    </li>

                    <li className="border-l border-black invert-select">
                      <a className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 block hover:text-white focus:text-white hover:line-through focus:line-through invert-select" href={ this.props.data.studio.studioTwitterUrl } target="_blank" rel="noopener noreferrer">Twi<span className="hidden md:inline invert-select">tter</span></a>
                    </li>

                    <li className="border-l border-black invert-select">
                      <a className="text-sm lg:text-lg xl:text-xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 pr-0 lg:pr-0 xl:pr-0 block hover:text-white focus:text-white hover:line-through focus:line-through invert-select" href={ this.props.data.studio.studioInstagramUrl } target="_blank" rel="noopener noreferrer">Insta<span className="hidden md:inline invert-select">gram</span></a>
                    </li>
                  </ul>
                  <ul className="flex flex-wrap border-b border-black md:hidden">
                    <li className="text-sm md:text-lg py-2 block pr-12 block invert-select">Architecture + Conservation</li>
                  </ul>
                </motion.div>
                
              </section>
            </div>
          </div>
        </motion.div>
      </>    
    )
  }
}

export default WorkTemplate

export const query = graphql`
  query WorkQuery($slug: String!, $cat: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      title
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      projectCode
      metaLocation
      metaSize
      metaCost
      introText
      category {
        slug
        title
      }
      featuredImage {
        fluid(
          imgixParams: {auto: "format", sharp:0, h: "1000", w: "800", fit: "fillmax", crop: "center" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      supportingImage {
        fluid(
          imgixParams: {auto: "format", sharp:0, h: "800", w: "800", fit: "crop", crop: "center"}) {
          ...GatsbyDatoCmsFluid
        }
      }
      introServices {
        ... on DatoCmsService {
          id
          model { apiKey }
          heading
          content
        }
      }
      contentBlocks {
        ... on DatoCmsContentLeftAlign {
          id
          model { apiKey }
          image1 {
            fluid(
              imgixParams: {auto: "format", sharp:0, h: "850", w: "1300", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid
            }
          }
          image2 {
            fluid(
              imgixParams: {auto: "format", sharp:0, h: "1300", w: "850", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid
            }
          }
          text
        }
        ... on DatoCmsContentRightAlign {
          id
          model { apiKey }
          image1 {
            fluid(
              imgixParams: {auto: "format", sharp:0, h: "1300", w: "850", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid
            }
          }
          image2 {
            fluid(
              imgixParams: {auto: "format", sharp:0, h: "850", w: "1300", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid
            }
          }
          text
        }
        ... on DatoCmsCarousel {
          id
          model { apiKey }
          images {
            title
            fluid(
              imgixParams: {auto: "format", sharp:0, w: "850", h: "1300", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        ... on DatoCmsFullText {
          id
          model { apiKey }
          text
        }
        ... on DatoCmsImage100 {
          id
          model { apiKey }
          image {
            fluid(
              imgixParams: {auto: "format", sharp:0, h: "800", w: "1300", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        ... on DatoCmsImage50 {
          id
          model { apiKey }
          image {
            fluid(
              imgixParams: {auto: "format", sharp:0, h: "1000", w: "750", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
      slug
    }
    studio: datoCmsStudio {
      studioTwitterUrl
      studioInstagramUrl
      studioLinkedinUrl
      studioEmailAddress
      studioTelephone
      heroSupportingText
    }
    relatedWork: allDatoCmsWork(filter: {category: {elemMatch: {slug: {eq: $cat}}}}) {
      edges {
        node {
          id
          title
          slug
          projectCode
        }
      }
    }
  }
`