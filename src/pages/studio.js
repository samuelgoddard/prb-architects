import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Img from "gatsby-image"
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll"
import { scroll } from "../theme"

const windowGlobal = typeof window !== 'undefined' && window

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

const reveal = {
	initial: { y: "150%" },
	enter: { 
    y: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  },
}

const revealDelayed = {
	initial: { y: "150%" },
	enter: { 
    y: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
  },
}

const arrowReveal = {
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

class StudioPage extends React.Component {
  constructor(props) {
    super(props);
    this.timelines = {};
  }

  componentDidMount() {
    const members = document.querySelectorAll('.team-member');
    if(Object.keys(members).length > 0) {
      function memberHover(member) {
        members.forEach(member => {
          member.classList.remove('opacity-100');
          member.classList.add('opacity-25');
          member.classList.add('team-member--deactive');
        });
        member.target.classList.remove('team-member--deactive');
        member.target.classList.add('team-member--active');
        member.target.classList.add('opacity-100');
      };
      function memberReset(member) {
        members.forEach(member => {
          member.classList.remove('opacity-25');
          member.classList.remove('team-member--active');
          member.classList.remove('team-member--deactive');
          member.classList.add('opacity-100');
        });
      }
      members.forEach(member => {
        member.addEventListener('mouseenter', memberHover);
      });
      members.forEach(member => {
        member.addEventListener('mouseleave', memberReset);
      });
    }
    
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

  render() {
    return (
      <>
        <SEO
          titleOverride={this.props.data.studio.metaTags && this.props.data.studio.metaTags.title ? this.props.data.studio.metaTags.title : null }
          descriptionOverride={this.props.data.studio.metaTags && this.props.data.studio.metaTags.description ? this.props.data.studio.metaTags.description : null }
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.studio.metaTags && this.props.data.studio.metaTags.image ? this.props.data.studio.metaTags.image.url : null }
        />
        
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { staggerChildren: 0.05 } }
          }}
        >
          <header className="p-4 pb-0 md:p-6 md:pb-0 absolute top-0 left-0 right-0 h-14 md:h-22 z-50 flex flex-wrap text-white" data-scroll-sticky data-scroll data-scroll-target="#___gatsby">
            <nav className="relative z-10 w-full overflow-hidden">
              <ul className="flex flex-wrap pb-0 mb-0 relative overflow-hidden">
                <li className="pb-0 mb-0">
                  <motion.span className="block" variants={revealInOut}>
                    <button onClick={() => windowGlobal.scroll.scrollTo(document.querySelector('#studio'))} className="text-lg md:text-2xl pr-px opacity-100 transition ease-in-out duration-500 hover:border-transparent outline-none hover:line-through focus:line-through">Studio</button>
                  </motion.span>
                </li>
                <li className="text-xl md:text-2xl px-2 opacity-25 hidden lg:block pb-0 mb-0 relative overflow-hidden"><motion.span className="block" variants={revealInOut}>/</motion.span></li>
                <li className="hidden lg:block pb-0 mb-0 relative overflow-hidden">
                  <motion.span className="block" variants={revealInOut}>
                    <button onClick={() => windowGlobal.scroll.scrollTo(document.querySelector('#ethos'), -75)} className="text-lg md:text-2xl pr-px opacity-25 transition ease-in-out duration-500 hover:border-transparent outline-none hover:line-through focus:line-through">Ethos</button>
                  </motion.span>
                </li>
                <li className="text-xl md:text-2xl px-2 opacity-25 hidden lg:block pb-0 mb-0 relative overflow-hidden"><motion.span className="block" variants={revealInOut}>/</motion.span></li>
                <li className="hidden lg:block pb-0 mb-0 relative overflow-hidden">
                  <motion.span className="block" variants={revealInOut}>
                    <button onClick={() => windowGlobal.scroll.scrollTo(document.querySelector('#team'), -75)} className="text-lg md:text-2xl pr-px opacity-25 transition ease-in-out duration-500 hover:border-transparent outline-none hover:line-through focus:line-through">Team</button>
                  </motion.span>
                </li>
                <li className="text-xl md:text-2xl px-2 opacity-25 hidden lg:block pb-0 mb-0 relative overflow-hidden"><motion.span className="block" variants={revealInOut}>/</motion.span></li>
                <li className="hidden lg:block pb-0 mb-0 relative overflow-hidden">
                  <motion.span className="block" variants={revealInOut}>
                    <button onClick={() => windowGlobal.scroll.scrollTo(document.querySelector('#sectors'), -75)} className="text-lg md:text-2xl pr-px opacity-25 transition ease-in-out duration-500 hover:border-transparent outline-none hover:line-through focus:line-through">Sectors</button>
                  </motion.span>
                </li>
                <li className="text-xl md:text-2xl px-2 opacity-25 hidden lg:block pb-0 mb-0 relative overflow-hidden"><motion.span className="block" variants={revealInOut}>/</motion.span></li>
                <li className="hidden lg:block pb-0 mb-0 relative overflow-hidden">
                  <motion.span className="block" variants={revealInOut}>
                    <button onClick={() => windowGlobal.scroll.scrollTo(document.querySelector('#services'), -75)} className="text-lg md:text-2xl pr-px opacity-25 transition ease-in-out duration-500 hover:border-transparent outline-none hover:line-through focus:line-through">Services</button>
                  </motion.span>
                </li>
                <li className="text-xl md:text-2xl px-2 opacity-25 hidden lg:block pb-0 mb-0 relative overflow-hidden"><motion.span className="block" variants={revealInOut}>/</motion.span></li>
                <li className="hidden lg:block pb-0 mb-0 relative overflow-hidden">
                  <motion.span className="block" variants={revealInOut}>
                    <button onClick={() => windowGlobal.scroll.scrollTo(document.querySelector('#contact'), -75)} className="text-lg md:text-2xl pr-px opacity-25 transition ease-in-out duration-500 hover:border-transparent outline-none hover:line-through focus:line-through">Contact</button>
                  </motion.span>
                </li>
                <li className="ml-auto">
                  <Link to="/wayfinder" activeClassName="line-through" className="text-lg md:text-2xl px-px text-white transition ease-in-out duration-500 hover:line-through focus:line-through">Menu</Link>
                </li>
              </ul>
            </nav>
            <div className="mt-auto -mb-px h-px w-full border-b border-white transition ease-in-out duration-500"></div>
          </header>
        </motion.div>

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={fade}
        >
          <div className="h-14 md:h-22 z-30 fixed top-0 left-0 bg-offblack w-full" data-scroll-sticky data-scroll data-scroll-target="#___gatsby"></div>

          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="bg-offblack p-4 md:p-6 pb-0 md:pb-0 pt-14 md:pt-22 text-white min-h-screen"
            id="studio"
          >
            <div className="max-w-screen-3xl mx-auto">
            <div className="flex flex-wrap -mx-4 md:-mx-3 md:mt-8 md:h-screen-inner" id="something">
              <div className="w-full md:w-1/2 flex flex-wrap md:px-3">
                <div className="w-full px-3 md:px-0 mt-12">
                  <div className="flex flex-wrap h-full">
                    <div className="w-full mb-auto overflow-hidden -mt-8 md:-mt-12" data-scroll-sticky data-scroll data-scroll-target="#___gatsby">
                      <div className="-mt-12 md:-mt-16">
                        <motion.h1
                          initial="initial"
                          animate="enter"
                          exit="exit"
                          variants={{
                            enter: { transition: { staggerChildren: 0.15 } }
                          }}
                          className="text-screen-display--large block order-2 lg:order-1 w-full lg:w-auto pt-6 md:pt-16 relative overflow-hidden font-display -mt-10 pb-0 mb-0">
                          <span className="relative overflow-hidden block">
                            <span className="block mt-0 relative z-20 bg-offblack">
                              <motion.span variants={reveal} className="pt-12 md:pt-10 lg:pt-12 xl:pt-16 2xl:pt-24 pb-0 block">Our</motion.span>
                            </span>
                          </span>
                          <span className="-md:-mt-6 xl:-mt-4 block">
                            <motion.span variants={reveal} className="pt-4 md:pt-12 xl:pt-20 2xl:pt-24 block">Studio</motion.span>
                          </span>
                        </motion.h1>
                      </div>
                    </div>
                    <div className="mt-auto" data-scroll-sticky data-scroll data-scroll-target="#___gatsby">
                      <div className="order-1 lg:order-2 mb-2 md:mb-0 overflow-hidden">
                        <div className="overflow-hidden relative">
                          <motion.div variants={arrowReveal} className="studio-arrow-container mt-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="md:mt-0 studio-arrow" viewBox="0 0 157.381 157.38"><g data-name="Group 66" fill="none" stroke="#FFF" strokeWidth="14"><path data-name="Path 1" d="M20.352 104.704l84.352-.001.001-84.353"/><path data-name="Path 2" d="M104.704 104.704L4.95 4.95"/></g></svg>
                          </motion.div>
                        </div>
                      </div>
                      <div className="w-full lg:w-2/3 mb-10 mt-auto overflow-hidden">
                        <motion.div variants={reveal} className="text-lg leading-snug w-full block" dangerouslySetInnerHTML={{ __html: this.props.data.studio.heroText }}></motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:px-3 overflow-hidden">
                <div className="flex flex-wrap h-full">
                  <div className="mt-auto w-full" data-scroll-sticky data-scroll data-scroll-target="#___gatsby">
                    <div className="overflow-hidden">
                      <motion.div variants={revealDelayed} className="hidden md:block md:ml-auto md:text-right w-64 mb-6 leading-snug">
                        <div dangerouslySetInnerHTML={{ __html: this.props.data.studio.heroSupportingText }}></div>
                      </motion.div>
                    </div>
                    <div className="w-full relative overflow-hidden">
                    <motion.div variants={heroImage} className="h-full w-full transform image-transform-center">
                      <div className="h-full hero-image-transform">
                        <Img fluid={ this.props.data.studio.heroImage.fluid } className="w-full object-cover studio-image" />
                      </div>
                    </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </motion.div>

          
          <div className="bg-white p-4 md:p-6 relative z-20">
            <div className="max-w-screen-3xl mx-auto">
              <div data-scroll-timeline="fast-spin" />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 lg:w-32 xl:w-40 absolute bottom-0 right-0 mr-4 md:mr-6" viewBox="0 0 157.38 157.381"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M52.676 20.352l.001 84.352 84.353.001"/><path data-name="Path 2" d="M52.676 104.704L152.43 4.95"/></g></svg>

              <div className="w-full flex flex-wrap md:-mx-4 pt-6 md:pt-10 xl:pt-16">
                <div className="w-full md:w-1/2 lg:w-5/12 xl:w-4/12 md:px-4 hidden md:block">
                  <div className="w-full">
                    <div className="overflow-hidden mb-1 pb-0 w-full relative" data-scroll data-scroll-speed="0">
                      <div className="w-full relative overflow-hidden" data-scroll>
                        <div data-scroll data-scroll-speed="0.85" className="overflow-hidden -m-12">
                          <div className="image-reveal-scroll">
                            <Img fluid={ this.props.data.studio.introImage.fluid } className="w-full max-w-full object-cover"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 lg:w-7/12 xl:w-8/12 md:px-4 ml-auto text-black pb-32 md:pb-24 overflow-hidden relative">
                  <span className="inline-block leading-slightnegative w-10/12 md:w-8/12 lg:w-7/12 xl:w-7/12 font-display text-screen-studio-blurb pt-3 content-indented" dangerouslySetInnerHTML={{ __html: this.props.data.studio.introText }}></span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:mx-auto md:w-full pb-20 pt-12 md:pt-16 xl:pt-20 bg-white relative z-20 px-4" id="ethos">
            <div className="max-w-screen-3xl mx-auto">
              <div className="overflow-hidden w-full md:w-9/12 mx-auto">
                <div className="w-full flex flex-wrap">
                  {
                    this.props.data.studio.expertise.map((block, i) => (
                      <div key={block.id} className="w-full mb-10 md:mb-16">
                        {
                          block.model.apiKey === 'service' &&
                            <div>
                              <div className="border-b border-black mb-6">
                                <span className="text-2xl md:text-3xl block w-full mb-0 pb-0 font-display leading-none">{ block.heading }</span>
                                <span className="text-xs uppercase block mb-2">{ block.headingMeta }</span>
                              </div>
                              <div className="w-10/12 md:w-8/12 xl:w-1/2">
                                <div className="leading-tight" dangerouslySetInnerHTML={{ __html: block.content }}></div>
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
          
          <div className="bg-offblack relative z-20 text-white -mx-4 md:-mx-8" id="team">
            <div className="max-w-screen-3xl mx-auto relative">
              <div className="mt-auto md:absolute bottom-0 left-0 w-8/12 md:w-5/12 pl-4 md:pl-10 pt-8 md:pt-0 md:pb-6">
                <span className="inline-block leading-slightnegative font-display text-3xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-6xl pt-3 content-indented block p-4 xl:pr-24">We care passionately about the health and happiness of our team, ensuring they have the freedom to focus on designing beautiful places for our clients.</span>
              </div>

              <div className="w-full flex flex-wrap px-4 md:px-8">
                <div className="w-full md:w-1/3 lg:w-3/12 h-auto">
                  <div className="p-4 md:p-6 mb-8 md:mb-0 h-full">
                    <div className="flex flex-wrap h-full">
                      <div className="w-full">
                        <motion.div className="studio-arrow-container mt-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="md:mt-0 studio-arrow" viewBox="0 0 157.381 157.38"><g data-name="Group 66" fill="none" stroke="#FFF" strokeWidth="14"><path data-name="Path 1" d="M20.352 104.704l84.352-.001.001-84.353"/><path data-name="Path 2" d="M104.704 104.704L4.95 4.95"/></g></svg>
                        </motion.div>

                        <div className="w-full mb xl:w-5/12-auto pr-8">
                          <p className="text-lg leading-tight">Our collaborative studio culture is centred around flexibility and wellbeing: putting people at the heart of everything that we do.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/3 lg:w-8/12 ml-auto h-full">
                  <div className="flex flex-wrap justify-end">
                    {this.props.data.team.edges.map(({ node }, i) => {
                      return (
                        <Link to={`/studio/${node.slug}`} className="block w-1/2 md:w-1/3 cursor-pointer relative" key={i}>
                          <div className="relative">
                            <div className="overflow-hidden pb-0 w-full relative team-member transition duration-500 ease-in-out group" data-scroll data-scroll-speed="0">
                              <div className="w-full relative overflow-hidden team-member__inner" data-scroll>
                                <div data-scroll data-scroll-speed="0.3" className="overflow-hidden -m-6">
                                  <div className="image-reveal-scroll relative">
                                    <Img fluid={ node.image.fluid } className="w-full object-cover mb-1 relative z-20 team-member__image"/>
                                    <div className="team-member__image-bg absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute top-0 left-0 right-0 bottom-0 w-full z-30 p-3 text-white opacity-0 group-hover:opacity-100 transition ease-in-out duration-500 flex flex-wrap items-center justify-center text-lg">
                                <span className="-mt-6">Read Bio</span>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 w-full z-30 p-3">
                                <div className="border-b border-white pb-2">
                                  <span className="text-lg md:text-xl xl:text-2xl block mb-0 pb-0 leading-none text-white">{ node.name }</span>
                                  <span className="text-xs uppercase text-white">{ node.jobTitle }</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 md:p-6 relative z-20 pt-12 md:pt-32 xl:pt-40 md:-mb-2" id="sectors">
            <div className="w-full flex flex-wrap mb-18 md:mb-32 lg:mb-32 xl:mb-48 max-w-screen-3xl mx-auto ">
              <div className="w-9/12 md:w-8/12 lg:w-1/2 xl:w-5/12 md:mx-auto">
                <p className="text-lg lg:text-xl leading-tight">We’re passionate about architecture that is appropriate and accessible, using simplicity and minimalism to create inspirational designs, woven comfortably into their setting, respecting local character and celebrating community. Our ideas respond to the fluid, dynamic nature of societal evolution, aimed around the concepts of places to live, history to share, spaces to work, sights to see, and centres to learn.</p>
              </div>
            </div>
            
            <div className="max-w-screen-3xl mx-auto">
              <div className="w-full flex flex-wrap md:-mx-8 items-end">
                <div className="w-full md:w-5/12 md:px-8 mb-10 md:mb-0">
                  <div className="overflow-hidden mb-1 pb-0 w-full relative" data-scroll data-scroll-speed="0">
                    <div className="w-full relative overflow-hidden" data-scroll>
                      <div data-scroll data-scroll-speed="0.6" className="overflow-hidden -m-12">
                        <div className="image-reveal-scroll">
                          <Img fluid={ this.props.data.studio.servicesSupportingImage.fluid } className="w-full max-w-full object-cover"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-7/12 md:pr-12 xl:pr-24 md:pl-8 mb-8 md:mb-0">
                  {
                    this.props.data.studio.expertise.map((block, i) => (
                      <div key={block.id} className={this.props.data.studio.expertise.length === (i + 1) ? `w-full mb-4` : `w-full mb-10 md:mb-16`}>
                        {
                          block.model.apiKey === 'service' &&
                            <div>
                              <div className="border-b border-black mb-6">
                                <span className="text-2xl md:text-3xl block w-full mb-0 pb-0 font-display leading-none">{ block.heading }</span>
                                <span className="text-xs uppercase block mb-2">{ block.headingMeta }</span>
                              </div>
                              <div className="w-10/12 md:w-10/12 lg:w-8/12 xl:w-7/12">
                                <div className="leading-tight" dangerouslySetInnerHTML={{ __html: block.content }}></div>
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

          <div className="bg-white p-4 md:p-6 relative z-20 pt-12 md:pt-32 xl:pt-40 max-w-screen-3xl mx-auto" id="services">
            <div className="w-full flex flex-wrap items-end">
              <div className="w-full lg:w-8/12 mx-auto md:px-4 pb-12 md:pb-32 xl:pb-40">
                <div className="overflow-hidden">
                  <span className="block uppercase mb-8 md:mb-12 md:px-8">Our Services</span>
                  <div className="w-full flex flex-wrap">
                    {
                      this.props.data.studio.services.map((block, i) => (
                        <div key={block.id} className="text-lg md:text-xl w-full md:w-1/2 md:px-8">
                          {
                            block.model.apiKey === 'service_heading' &&
                              <div className="flex flex-wrap items-center border-b border-black py-4">
                                <span className="block text-xs mr-2">0{i + 1}</span>
                                <span className="block">{ block.text }</span>
                              </div>
                          }
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-prbred pt-12 md:pt-24 lg:pt-32 pb-4 md:pb-6 relative z-20" id="contact">
            <div className="w-full flex flex-wrap items-end">
              <div className="w-full md:w-2/12">
                <Link 
                  className={`pr-8 z-30 w-32 md:w-40 ml-6 pr-12 -mb-3 hidden md:block`}
                  to="/"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 113 92"><g data-name="Group 79"><text data-name="Player Roberts Bell" transform="translate(0 23)" fontSize="35" fontFamily="Founders Grotesk"><tspan x="0" y="0">Player</tspan><tspan x="0" y="28">Roberts</tspan><tspan x="0" y="56">Bell</tspan></text><g data-name="Group 40" fill="none" stroke="#000"><path data-name="Path 1" d="M74.366 66.11v11.747H62.619"/><path data-name="Path 2" d="M74.366 77.857l-13.891-13.89"/></g></g></svg>
                </Link>
              </div>
              
              <div className="w-full md:w-10/12 ml-auto">
                <div className="flex flex-wrap items-end relative pb-16 md:pb-24 lg:pb-32">
                  <div className="w-full">
                    <span className="text-3xl md:text-5xl xl:text-6xl block font-display px-4 leading-extratight md:px-6 mb-6 invert-select">Looking for an architectual<br/>team for your project?</span>
                    <a href={`mailto:${ this.props.data.studio.studioEmailAddress }`} rel="noopener noreferrer" target="_blank" className="text-xl md:text-2xl block font-display px-4 leading-extratight md:px-6 underline hover:text-white focus:text-white invert-select">Get in touch</a>
                  </div>
                  <div className="w-full order-2 md:order-1 md:px-3 overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 lg:w-32 xl:w-64 ml-auto transform rotate-90 absolute bottom-0 right-0 m-4 md:m-6" viewBox="0 0 157.38 157.381"><g data-name="Group 66" fill="none" stroke="#000" strokeWidth="14"><path data-name="Path 1" d="M52.676 20.352l.001 84.352 84.353.001"/><path data-name="Path 2" d="M52.676 104.704L152.43 4.95"/></g></svg>
                  </div>
                </div>

                <div className="md:hidden">
                  <Link 
                    className={`block pr-8 pb-4 z-30 w-32 md:w-40 ml-4 md:ml-0`}
                    to="/"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 113 92"><g data-name="Group 79"><text data-name="Player Roberts Bell" transform="translate(0 23)" fontSize="35" fontFamily="Founders Grotesk"><tspan x="0" y="0">Player</tspan><tspan x="0" y="28">Roberts</tspan><tspan x="0" y="56">Bell</tspan></text><g data-name="Group 40" fill="none" stroke="#000"><path data-name="Path 1" d="M74.366 66.11v11.747H62.619"/><path data-name="Path 2" d="M74.366 77.857l-13.891-13.89"/></g></g></svg>
                  </Link>
                </div>

                <ul className="flex flex-wrap border-t border-black border-b mx-4 md:mx-6">
                  <li className="lg:text-lg xl:text-2xl pl-0 py-2 md:py-3 px-2 block invert-select">&copy; 2020</li>

                  <li className="ml-auto block border-l border-black">
                    <a className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 invert-select block hover:text-white focus:text-white hover:line-through focus:line-through" href={`mailto:${ this.props.data.studio.studioEmailAddress }`} target="_blank" rel="noopener noreferrer">{ this.props.data.studio.studioEmailAddress }</a>
                  </li>

                  <li className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 border-l border-black pr-4 lg:pr-12 xl:pr-32 2xl:pr-64 hidden md:block invert-select">Architecture + Conservation</li>

                  <li className="border-l border-black">
                    <a className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 block hover:text-white focus:text-white hover:line-through focus:line-through invert-select" href={ this.props.data.studio.studioTwitterUrl } target="_blank" rel="noopener noreferrer">Twi<span className="hidden md:inline invert-select">tter</span></a>
                  </li>

                  <li className="border-l border-black">
                    <a className="lg:text-lg xl:text-2xl py-2 md:py-3 px-2 lg:px-4 xl:px-5 pr-0 lg:pr-0 xl:pr-0 block hover:text-white focus:text-white hover:line-through focus:line-through invert-select" href={ this.props.data.studio.studioInstagramUrl } target="_blank" rel="noopener noreferrer">Insta<span className="hidden md:inline invert-select">gram</span></a>
                  </li>
                </ul>
                <ul className="flex flex-wrap border-b border-black md:hidden mx-4 md:mx-0">
                  <li className="md:text-lg py-2 pr-12 block invert-select">Architecture + Conservation</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    )
  }
}

export default StudioPage

export const query = graphql`
  query StudioPageQuery {
    team: allDatoCmsTeam {
      edges {
        node {
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
    }

    studio: datoCmsStudio {
      title
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      heroText
      studioTwitterUrl
      studioInstagramUrl
      studioLinkedinUrl
      studioEmailAddress
      heroSupportingText
      heroImage {
        fluid(
          imgixParams: {h: "1200", w: "1200", fit: "crop", dpi: 1, q: 100, auto: "format"}) {
          ...GatsbyDatoCmsFluid
        }
      }
      introText
      introImage {
        fluid(
          imgixParams: {h: "1200", w: "1200", fit: "crop", dpi: 1, q: 100, auto: "format"}) {
          ...GatsbyDatoCmsFluid
        }
      }
      expertise {
        ... on DatoCmsService {
          id
          model { apiKey }
          heading
          headingMeta
          content
        }
      }
      services {
        ... on DatoCmsServiceHeading {
          id
          model { apiKey }
          text
        }
      }
      servicesSupportingImage {
        fluid(
          imgixParams: {h: "1200", w: "900", fit: "crop", dpi: 1, q: 100, auto: "format"}) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`