import React, { Component } from 'react'
import { Link } from "gatsby";
import { motion } from "framer-motion";
import Img from "gatsby-image";
// import Flickity from "flickity";
import { isBrowser } from "react-device-detect"
import wheel from "wheel"
import normalizeWheel from "normalize-wheel"
import ReactPlayer from 'react-player'

const heroImage = {
	initial: { scale: 1 },
	enter: { 
    scale: 1.15,
    transition: { duration: 3.25, ease: [0.25, 1, 0.5, 1] }
  },
	exit: {
    scale: 1.095,
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

const slideIn = {
  initial: { x: "25%" },
  enter: { 
    x: "0%",
    transition: { duration: 1.8, ease: [0.33, 1, 0.68, 1] }
  },
  exit: {
    x: "-10%",
    opacity: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
  }
}

if (typeof window !== 'undefined') {
  const Flickity = require('flickity');
}

class HomeCarousel extends Component {
  state = { 
    Flickity: null,
  };

  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
      const Flickity = require('flickity');
      this.state.Flickity = Flickity;
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      // Play with this value to change the speed
      let tickerSpeed = 2;

      let flickity = null;
      const slideshowEl = document.querySelector('.js-slideshow');

      const update = () => {

        if (flickity.slides) {
          // flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
          // flickity.integratePhysics();
          // flickity.selectedIndex = flickity.dragEndRestingSelect();
          // flickity.updateSelectedSlide();
          // flickity.settle(flickity.x);
          
          // wheel.addWheelListener(flickity.element, event => {
          //   const wheelNormalized = normalizeWheel(event);
          //   const direction = wheelNormalized.spinX * 100;
          //   direction > 0 ? range.increase(direction) : range.decrease(direction);
          //   flickity.startAnimation();
          // })
        }
        window.requestAnimationFrame(update);
      };
      
      flickity = new this.state.Flickity(slideshowEl, {
        autoPlay: false,
        prevNextButtons: true,
        pageDots: false,
        lazyLoad: false,
        draggable: true,
        wrapAround: true,
        freeScroll: true,
        freeScrollFriction: 0.085,
        cellAlign: 'center'
      });
      // flickity.x = 0;

      wheel.addWheelListener(slideshowEl, event => {
        const wheelNormalized = normalizeWheel(event);
        flickity.applyForce(-wheelNormalized.pixelY / 40);
        flickity.startAnimation();
        flickity.dragEnd();
        update();
      });

      // slideshowEl.addEventListener('mouseenter', play, false);
      // slideshowEl.addEventListener('focusin', play, false);
      // slideshowEl.addEventListener('mouseleave', play, false);
      // slideshowEl.addEventListener('focusout', play, false);

      // flickity.on('dragStart', () => {
      //   isPaused = true;
      // });

      // update();
    }
  }

  
  render() {
    return (
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className="slideshow js-slideshow md:fixed md:top-0 md:left-0 md:right-0 md:bottom-0 md:h-full md:pt-16 lg:pt-20 xl:pt-32"
      >
        {this.props.slides.map(({ node }, i) => {
          return (
            <motion.div variants={slideIn} key={i} className="slide">
              <Link to={`/work/${ node.slug }`} className="block h-full slide__link group">
                <figure className="h-full">
                  <div className="flex flex-wrap relative h-full xl:pb-6">
                    <div className="flex-1 h-full">
                      {/* <Img fluid={node.featuredImageBig.fluid} className="w-full max-w-full object-cover mb-1 h-full scroller-image" /> */}
                      <div className="overflow-hidden mb-1 pb-0 h-full relative">
                        {/* { node.teaserVideo ? (
                          <div className="h-full carousel-img w-auto slide__img pb-0 -mb-2">
                            <ReactPlayer url={ node.teaserVideo.url } playing loop muted width='100%' height='100%' />
                          </div>
                        ) : ( */}
                          {/* <motion.div variants={unreveal} className="h-full w-full bg-prbred absolute top-0 left-0 right-0 bottom-0 z-10">
                          </motion.div> */}
                          <motion.div variants={heroImage} className="h-full w-full transform image-transform-center">
                            <Img fluid={node.featuredImageBig.fluid} className="h-full carousel-img w-auto slide__img pb-0 -mb-2 hidden md:block" />
                            <Img fluid={node.featuredImageMobile.fluid} className="h-full carousel-img w-auto slide__img pb-0 -mb-2 block md:hidden" />
                          </motion.div>
                        {/* )} */}
                      </div>
                      <figcaption className="text-lg md:text-xl md:px-0 overflow-hidden">
                        <div className="relative overflow-hidden">
                          <motion.div className="flex items-center" variants={reveal}>
                            <span className="block">{ node.title }</span>
                            <span className="block ml-auto text-sm">{ node.category.title }</span>
                          </motion.div>
                        </div>
                      </figcaption>
                    </div>
                    <div className="w-auto h-24 ml-px md:ml-1">
                      <span className="text-sm md:text-base leading-none text-orient-down pl-2 overflow-hidden">
                        <div className="flex flex-wrap items-center">
                        <span className="block text-2xs mr-px mb-1">PRB</span>
                        <span className="block leading-none">{ node.projectCode }</span>
                        </div>
                      </span>
                    </div>
                  </div>
                </figure>
              </Link>
          </motion.div>
          )
        })}
        {this.props.slides.map(({ node }, i) => {
          return (
            <motion.div variants={slideIn} key={i} className="slide">
              <Link to={`/work/${ node.slug }`} className="block h-full slide__link group">
                <figure className="h-full">
                  <div className="flex flex-wrap relative h-full xl:pb-6">
                    <div className="flex-1 h-full">
                      {/* <Img fluid={node.featuredImageBig.fluid} className="w-full max-w-full object-cover mb-1 h-full scroller-image" /> */}
                      <div className="overflow-hidden mb-1 pb-0 h-full relative">
                        {/* { node.teaserVideo ? (
                          <div className="h-full carousel-img w-auto slide__img pb-0 -mb-2">
                            <ReactPlayer url={ node.teaserVideo.url } playing loop muted width='100%' height='100%' />
                          </div>
                        ) : ( */}
                          {/* <motion.div variants={unreveal} className="h-full w-full bg-prbred absolute top-0 left-0 right-0 bottom-0 z-10">
                          </motion.div> */}
                          <motion.div variants={heroImage} className="h-full w-full transform image-transform-center">
                            <Img fluid={node.featuredImageBig.fluid} className="h-full carousel-img w-auto slide__img pb-0 -mb-2 hidden md:block" />
                            <Img fluid={node.featuredImageMobile.fluid} className="h-full carousel-img w-auto slide__img pb-0 -mb-2 block md:hidden" />
                          </motion.div>
                        {/* )} */}
                      </div>
                      <figcaption className="text-lg md:text-xl md:px-0 overflow-hidden">
                        <div className="relative overflow-hidden">
                          <motion.div className="flex items-center" variants={reveal}>
                            <span className="block">{ node.title }</span>
                            <span className="block ml-auto text-sm">{ node.category.title }</span>
                          </motion.div>
                        </div>
                      </figcaption>
                    </div>
                    <div className="w-auto h-24 ml-px md:ml-1">
                      <span className="text-sm md:text-base leading-none text-orient-down pl-2 overflow-hidden">
                        <div className="flex flex-wrap items-center">
                        <span className="block text-2xs mr-px mb-1">PRB</span>
                        <span className="block leading-none">{ node.projectCode }</span>
                        </div>
                      </span>
                    </div>
                  </div>
                </figure>
              </Link>
          </motion.div>
          )
        })}
      </motion.div>
    )
  }
}

export default HomeCarousel
