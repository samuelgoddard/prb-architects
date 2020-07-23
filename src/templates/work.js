import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Img from "gatsby-image"
import gsap from "gsap";
import WorkCarousel from "../components/workCarousel"
import WorkCarouselDesktop from "../components/workCarouselDesktop"
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

    return (
      <>
        <SEO
          titleOverride={this.props.data.datoCmsWork.metaTags && this.props.data.datoCmsWork.metaTags.title ? this.props.data.datoCmsWork.metaTags.title : this.props.data.datoCmsWork.title }
          descriptionOverride={this.props.data.datoCmsWork.metaTags && this.props.data.datoCmsWork.metaTags.description ? this.props.data.datoCmsWork.metaTags.description : null }
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.datoCmsWork.metaTags && this.props.data.datoCmsWork.metaTags.image ? this.props.data.datoCmsWork.metaTags.image.url : null }
        />

        <header className="p-4 pb-0 md:p-6 md:pb-0 fixed top-0 left-0 right-0 h-14 md:h-22 z-50 flex flex-wrap bg-white" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">
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
          <div className="mt-auto h-px w-full bg-black"></div>
        </header>

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={fade}
        >
          <div className="bg-white min-h-screen-image md:pt-22 p-screen-inner overflow-hidden">
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

                  <div className="w-full h-screen-image overflow-hidden md:mb-0 block md:hidden absolute top-0 left-0">
                    <motion.div variants={heroImage} className="h-full w-full transform image-transform-center">
                      <div className="h-full hero-image-transform">
                        <Img fluid={ this.props.data.datoCmsWork.featuredImage.fluid } className="w-full h-full object-cover" />
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
                      <div className="w-10/12 lg:w-9/12 mx-auto mt-12 md:-mt-12 mb-24 md:mb-0">
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
                          <span className="block md:hidden order-2 lg:order-1 lg:w-auto text-center font-display text-screen-display text-screen-display--animated relative overflow-hidden mt-8">
                            {
                              splitTitle.map((text, i) => (
                                <div variants={reveal} key={i} className="relative overflow-hidden">
                                  <span className={i === 0 ? `block mt-0 relative z-20` : `md:-mt-6 xl:-mt-4 relative z-0 block`} key={i}>
                                  <motion.div variants={reveal} className="pt-0" key={i}>{ text }</motion.div></span>
                                </div>
                              ))
                            }
                          </span>
                        </div>

                        <div className="hidden md:block md:ml-3 mt-3 overflow-hidden" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">
                          <motion.div variants={reveal}>
                            <div className="flex flex-wrap items-center justify-center ">
                              <span className="block text-xs mt-1 mr-1 leading-none">PRB</span>
                              <span className="block text-2xl md:text-4xl leading-none">{ this.props.data.datoCmsWork.projectCode }</span>
                            </div>
                          </motion.div>
                        </div>
                        <div className="flex-wrap items-center justify-center flex ml-3 mt-3 md:hidden">
                          <span className="block text-xs mt-1 mr-1 leading-none">PRB</span>
                          <span className="block text-2xl md:text-4xl leading-none">{ this.props.data.datoCmsWork.projectCode }</span>
                        </div>
                      </div>
                    </motion.div>

                    <div className="w-auto mb-8 md:mb-0 absolute top-0 md:top-0 left-0 mr-0 hidden md:block ml-1 overflow-hidden" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">
                      <div className="relative overflow-hidden">
                        <motion.div variants={revealArrow}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-24 lg:w-32 xl:w-40 -mb-5 xl:-mb-8 mr-5 xl:-mr-8 transform rotate -rotate-90" viewBox="0 0 157.38 157.381"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M52.676 20.352l.001 84.352 84.353.001"/><path data-name="Path 2" d="M52.676 104.704L152.43 4.95"/></g></svg>
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
                      <div className="flex flex-wrap w-full px-3 pt-1 pb-2 md:py-0 border-t border-b border-black md:relative">
                        { this.props.data.datoCmsWork.metaLocation && (
                          <span className="block leading-tight text-sm md:text-base lg:text-lg flex-1 text-left">{ this.props.data.datoCmsWork.metaLocation }</span>
                        )}
                        { this.props.data.datoCmsWork.metaSize && (
                          <span className="block leading-tight text-sm md:text-base lg:text-lg flex-1 text-center">{ this.props.data.datoCmsWork.metaSize }</span>
                        )}
                        <span className="block leading-tight text-sm md:text-base lg:text-lg flex-1 text-center">{ this.props.data.datoCmsWork.category.title }</span>
                        { this.props.data.datoCmsWork.metaCost && (
                          <span className="block leading-tight text-sm md:text-base lg:text-lg flex-1 text-right">{ this.props.data.datoCmsWork.metaCost }</span>
                        )}
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
                        { this.props.data.datoCmsWork.metaLocation && (
                          <span className="block leading-tight text-sm md:text-base lg:text-lg w-auto mr-auto text-left relative overflow-hidden"><motion.div variants={reveal}>{ this.props.data.datoCmsWork.metaLocation }</motion.div>
                          </span>
                        )}
                        { this.props.data.datoCmsWork.metaSize && (
                          <span className="block leading-tight text-sm md:text-base lg:text-lg w-auto mx-auto text-center relative overflow-hidden"><motion.div variants={reveal}>{ this.props.data.datoCmsWork.metaSize }</motion.div></span>
                        )}
                        <span className="block leading-tight text-sm md:text-base lg:text-lg w-auto mx-auto text-center relative overflow-hidden"><motion.div variants={reveal}>{ this.props.data.datoCmsWork.category.title }</motion.div></span>
                        { this.props.data.datoCmsWork.metaCost && (
                          <span className="block leading-tight text-sm md:text-base lg:text-lg w-auto ml-auto text-right relative overflow-hidden"><motion.div variants={reveal}>{ this.props.data.datoCmsWork.metaCost }</motion.div></span>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div className="z-20 bg-white relative">
              <section className="mb-0 md:mb-20 lg:mb-32 px-4 md:px-6">
                <div className="bg-offblack -mx-4 md:-mx-6 pt-24">
                  <div className="w-full flex flex-wrap items-end pr-4 pl-4 md:p-6">
                    <div className="w-full md:w-1/2 lg:w-5/12 xl:w-4/12 text-white">
                      <div className="max-w-xs flex-wrap hidden md:flex">
                        <div className="ml-auto flex flex-wrap items-center mb-3">
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

                    <div className="w-full md:w-1/2 lg:w-7/12 xl:w-8/12 ml-auto text-white pb-8 md:pb-24">
                      <div className="md:text-lg lg:text-xl max-w-xs md:max-w-lg mb-10 md:mb-16 leading-snug content-indented" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsWork.introText }}></div>

                      <div className="border-t border-white">
                        {
                          this.props.data.datoCmsWork.introServices.map((block, i) => (
                            <div key={block.id}>
                              {
                                block.model.apiKey === 'service' &&
                                <div className="w-full">
                                  <div className="flex flex-wrap items-start border-b border-current w-full py-3 md:py-6 xl:py-8">
                                    <span className="block text-xs mr-3 w-full md:w-auto text-left mb-2 md:mb-0">0{ i + 1 }</span>
                                    <span className={`block text-xl md:text-2xl text-left font-display leading-extratight mb-0 pb-0 md:-mb-3 strike__inner strike__inner--small w-9/12 md:w-auto`}>{ block.heading }</span>
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
              
              <section className="-mx-4 md:mx-0 bg-white block md:hidden">
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
              </section>

              {/* Content Section Start */}
              <section>
                {
                  this.props.data.datoCmsWork.contentBlocks.map((block, i) => (
                    <div key={block.id}>
                      {
                        block.model.apiKey === 'content_left_align' && 
                          <div className="w-full flex flex-wrap mb-12 md:mb-32 lg:mb-40 bg-white 3xl:w-9/12 3xl:mx-auto px-4 md:px-6">
                            <div className="w-8/12 md:pr-16 lg:pr-24 xl:pr-32 -mx-4 md:mx-0">
                              <figure className="mb-16 md:mb-32 lg:mb-48 hidden md:block">
                                <div className="overflow-hidden block">
                                  <div data-scroll data-scroll-speed="-0.6" className="overflow-hidden -m-10">
                                    <div className="image-reveal-scroll">
                                      <Img fluid={ block.image1.fluid } className="w-full max-w-full object-cover p-10"/>
                                    </div>
                                  </div>
                                </div>
                                <figcaption className="flex md:text-xl px-3 md:px-0 pt-1">
                                  <span className="block">Exterior</span>
                                  <span className="block ml-auto">(1—5)</span>
                                </figcaption>
                              </figure>

                              <div className="max-w-md ml-auto md:mr-32 lg:mr-40 p-4 md:p-0">
                                <div className="lg:text-lg leading-snug content-indented" dangerouslySetInnerHTML={{ __html: block.text }}></div>
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
                                <figcaption className="flex md:text-xl px-3 md:px-0 pt-1">
                                  <span className="block">Interior</span>
                                  <span className="block ml-auto">(2—5)</span>
                                </figcaption>
                              </figure>
                            </div>

                            <div className="w-full block md:hidden">
                              <figure className="pt-12">
                                <div className="overflow-hidden block">
                                  <div className="overflow-hidden">
                                    <Img fluid={ block.image1.fluid } className="w-full max-w-full object-cover"/>
                                  </div>
                                </div>
                                <figcaption className="flex md:text-xl px-3 md:px-0 pt-1">
                                  <span className="block">Interior</span>
                                  <span className="block ml-auto">(2—5)</span>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        }
                        {
                        block.model.apiKey === 'content_right_align' && 
                          <div className="w-full flex flex-wrap mb-12 md:mb-32 lg:mb-40 bg-white 3xl:w-9/12 3xl:mx-auto px-4 md:px-6">
                            <div className="w-4/12 md:pr-16 lg:pr-24 xl:pr-32 hidden md:block -mx-4 md:mx-0">
                              <figure className="mb-16 md:mb-32 lg:mb-48">
                                <div className="overflow-hidden block">
                                  <div data-scroll data-scroll-speed="0.75" className="overflow-hidden -m-12">
                                    <div className="image-reveal-scroll">
                                      <Img fluid={ block.image1.fluid } className="w-full max-w-full object-cover p-12"/>
                                    </div>
                                  </div>
                                </div>
                                <figcaption className="flex md:text-xl px-3 md:px-0 pt-1">
                                  <span className="block">Interior</span>
                                  <span className="block ml-auto">(2—5)</span>
                                </figcaption>
                              </figure>
                            </div>
                            <div className="w-8/12 md:pl-16 lg:pl-24 xl:pl-32 md:pt-16">
                              <div className="max-w-md ml-auto md:ml-32 lg:ml-40 p-4 md:p-0">
                                <div className="lg:text-lg leading-snug content-indented" dangerouslySetInnerHTML={{ __html: block.text }}></div>
                              </div>

                              <figure className="md:pt-32 hidden md:block">
                                <div className="overflow-hidden block">
                                  <div data-scroll data-scroll-speed="-0.6" className="overflow-hidden -m-10">
                                    <div className="image-reveal-scroll">
                                      <Img fluid={ block.image2.fluid } className="w-full max-w-full object-cover p-10"/>
                                    </div>
                                  </div>
                                </div>
                                <figcaption className="flex md:text-xl px-3 md:px-0 pt-1">
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
                                      <Img fluid={ block.image2.fluid } className="w-full max-w-full object-cover p-10"/>
                                    </div>
                                  </div>
                                </div>
                                <figcaption className="flex md:text-xl px-3 md:px-0 pt-1">
                                  <span className="block">Interior</span>
                                  <span className="block ml-auto">(2—5)</span>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        }
                        {
                        block.model.apiKey === 'full_text' &&
                          <div className="w-full flex flex-wrap mb-24 md:mb-24 lg:mb-40 bg-white 3xl:w-9/12 3xl:mx-auto px-4 md:px-6">
                            <div className="w-10/12 md:w-8/12 md:pl-8 lg:pl-10 xl:pl-24 -mx-4 md:mx-0">
                              <div className="md:max-w-md ml-auto md:ml-32 lg:ml-40 p-4 md:p-0">
                                <div className="lg:text-lg leading-snug content-indented" dangerouslySetInnerHTML={{ __html: block.text }}></div>
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
                          <div className="w-full flex flex-wrap mb-24 md:mb-24 lg:mb-40 bg-white 3xl:w-9/12 3xl:mx-auto px-4 md:px-6">
                            <div className="w-full md:w-9/12 mx-auto">
                              <figure className="pt-8">
                                <div className="overflow-hidden block">
                                  <div data-scroll data-scroll-speed="0.65" className="overflow-hidden -m-10">
                                    <div className="image-reveal-scroll">
                                      <Img fluid={ block.image.fluid } className="w-full max-w-full object-cover p-10"/>
                                    </div>
                                  </div>
                                </div>
                                <figcaption className="flex md:text-xl px-3 md:px-0 pt-1">
                                  <span className="block">Interior</span>
                                  <span className="block ml-auto">(2—5)</span>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        }
                        {
                        block.model.apiKey === 'image50' &&
                          <div className="w-full flex flex-wrap mb-24 md:mb-24 lg:mb-40 bg-white 3xl:w-9/12 3xl:mx-auto">
                            <div className="w-8/12 md:w-5/12 mx-auto px-4 md:px-6">
                              <figure className="pt-8">
                                <div className="overflow-hidden block">
                                  <div data-scroll data-scroll-speed="-0.7" className="overflow-hidden -m-10">
                                    <div className="image-reveal-scroll">
                                      <Img fluid={ block.image.fluid } className="w-full max-w-full object-cover p-10"/>
                                    </div>
                                  </div>
                                </div>
                                <figcaption className="flex md:text-xl px-3 md:px-0 pt-1">
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
              <section>
                <div className="w-full md:w-10/12 ml-auto px-4 md:px-6">
                  <div className="mb-20 md:mb-24 lg:mb-32 max-w-sm md:max-w-lg lg:max-w-2xl p-3 md:p-0 -mx-4 md:mx-0">
                    <span className="block font-display text-4xl md:text-6xl leading-none mb-4">Looking to work with us on a similar project?</span>
                    <a href={`mailto:${ this.props.data.studio.studioEmailAddress }`} rel="noopener noreferrer" target="_blank" className="block font-display text-2xl underline hover:text-prbred focus:text-prbred">Get in touch</a>
                  </div>
                </div>
              </section>
            
              {/* Footer */}
              <section className="px-4 md:px-6 bg-prbred pt-12 md:pt-24 lg:pt-32 pb-6 md:pb-10">
                <div className="-mx-4 md:-mx-6">
                  <div className="w-full flex flex-wrap">
                    <div className="w-full md:w-10/12 ml-auto">
                    <div className="flex flex-wrap items-end md:-mx-3">
                      <div className="w-full md:w-auto order-2 md:order-1 md:px-3 overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-24 md:w-40 lg:w-64 ml-auto md:ml-0 transform rotate-45" viewBox="0 0 41.843 35.711"><g data-name="Group 111" fill="none" stroke="currentColor" strokeWidth="3"><path data-name="Path 1" d="M22.927 1.061l16.795 16.8-16.795 16.79"/><path data-name="Path 2" d="M39.722 17.856H0"/></g></svg>
                      </div>
                      <div className="w-full md:w-8/12 order-1 md:order-2 p-4 md:p-0 md:px-3 mb-8 md:mb-0">
                        <span className="block leading-tight text-sm uppercase mb-3 invert-select">More { this.props.data.datoCmsWork.category.title } projects</span>

                        {this.props.data.relatedWork.edges.map(({ node }, i) => {
                          return (
                            <div key={i}>
                              { node.slug !== this.props.data.datoCmsWork.slug &&(
                                <Link to={`/work/${node.slug}`} className="flex flex-wrap items-center border-b border-black py-3 md:py-5 hover:text-white group">
                                  <span className="flex flex-wrap w-20 md:w-24 text-xs md:text-sm leading-none items-center">
                                    <span className="block text-2xs pt-px mr-1 invert-select">PRB</span>
                                    <span className="block leading-none invert-select">{ node.projectCode }</span>
                                  </span>
                                  <span className="block text-lg md:text-3xl font-display leading-none mt-2 group-hover:line-through invert-select">{ node.title }</span>
                                  <span className="block ml-auto"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8" viewBox="0 0 17.938 17.937"><g data-name="Group 33" fill="none" stroke="currentColor"><path data-name="Path 1" d="M2.18 5.752h10.006v10.005"/><path data-name="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg></span>
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

                <motion.div variants={fade} className="w-full md:w-10/12 ml-auto mt-0 md:mt-24 lg:mt-32 md:pl-12 lg:pl-4">
                  <div className="md:hidden">
                    <Link 
                      className={`block pr-8 pb-4 z-30 w-32 md:w-40`}
                      to="/"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 113 92"><g data-name="Group 79"><text data-name="Player Roberts Bell" transform="translate(0 23)" fontSize="35" fontFamily="Founders Grotesk"><tspan x="0" y="0">Player</tspan><tspan x="0" y="28">Roberts</tspan><tspan x="0" y="56">Bell</tspan></text><g data-name="Group 40" fill="none" stroke="#000"><path data-name="Path 1" d="M74.366 66.11v11.747H62.619"/><path data-name="Path 2" d="M74.366 77.857l-13.891-13.89"/></g></g></svg>
                    </Link>
                  </div>

                  <ul className="flex flex-wrap border-t border-black border-b">
                    <li className="lg:text-lg xl:text-2xl pl-0 py-2 md:py-3 px-2 block invert-select">&copy; 2020</li>

                    <li className="ml-auto block border-l border-black">
                      <a className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 invert-select block hover:text-white focus:text-white hover:line-through focus:line-through" href={`mailto:${ this.props.data.studio.studioEmailAddress }`} target="_blank" rel="noopener noreferrer">{ this.props.data.studio.studioEmailAddress }</a>
                    </li>

                    <li className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 border-l border-black pr-4 lg:pr-12 xl:pr-32 2xl:pr-64 hidden md:block invert-select">Architecture + Conservation</li>

                    <li className="border-l border-black invert-select">
                      <a className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 block hover:text-white focus:text-white hover:line-through focus:line-through invert-select" href={ this.props.data.studio.studioTwitterUrl } target="_blank" rel="noopener noreferrer">Twi<span className="hidden md:inline invert-select">tter</span></a>
                    </li>

                    <li className="border-l border-black invert-select">
                      <a className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 pr-0 lg:pr-0 xl:pr-0 block hover:text-white focus:text-white hover:line-through focus:line-through invert-select" href={ this.props.data.studio.studioInstagramUrl } target="_blank" rel="noopener noreferrer">Insta<span className="hidden md:inline invert-select">gram</span></a>
                    </li>
                  </ul>
                  <ul className="flex flex-wrap border-b border-black md:hidden">
                    <li className="md:text-lg py-2 block pr-12 invert-select">Architecture + Conservation</li>
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
          imgixParams: {auto: "format", sharp: 15, h: "1000", w: "800", fit: "fillmax", crop: "center" }) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      supportingImage {
        fluid(
          imgixParams: {auto: "format", sharp: 15, h: "800", w: "800", fit: "crop", crop: "center"}) {
          ...GatsbyDatoCmsFluid_tracedSVG
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
              imgixParams: {auto: "format", sharp: 15, h: "650", w: "900", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          image2 {
            fluid(
              imgixParams: {auto: "format", sharp: 15, h: "900", w: "650", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          text
        }
        ... on DatoCmsContentRightAlign {
          id
          model { apiKey }
          image1 {
            fluid(
              imgixParams: {auto: "format", sharp: 15, h: "900", w: "650", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          image2 {
            fluid(
              imgixParams: {auto: "format", sharp: 15, h: "650", w: "900", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid_tracedSVG
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
              imgixParams: {auto: "format", sharp: 15, w: "650", h: "900", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid_tracedSVG
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
              imgixParams: {auto: "format", sharp: 15, h: "750", w: "1200", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
        ... on DatoCmsImage50 {
          id
          model { apiKey }
          image {
            fluid(
              imgixParams: {auto: "format", sharp: 15, h: "1000", w: "750", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid_tracedSVG
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
      heroSupportingText
    }
    relatedWork: allDatoCmsWork(filter: {category: {slug: {eq: $cat}}}) {
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