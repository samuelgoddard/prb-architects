import React, { Component } from 'react'
import { Link } from "gatsby";
import { motion } from "framer-motion";
import Img from "gatsby-image";
import wheel from "wheel"
import normalizeWheel from "normalize-wheel"

const reveal = {
	initial: { y: "100%" },
	enter: { 
    y: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  },
}

const slideIn = {
  initial: { x: "20%" },
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

const slideInInner = {
  initial: { x: "6%" },
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

      let flickity = null;
      const slideshowEl = document.querySelector('.js-slideshow');
      
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
        flickity.applyForce(-wheelNormalized.pixelY / 20);
        flickity.startAnimation();
        flickity.dragEnd();
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

    const members = document.querySelectorAll('.slide');
    if(Object.keys(members).length > 0) {
      function memberHover(member) {
        members.forEach(member => {
          member.classList.remove('opacity-100');
          member.classList.add('opacity-50');
          member.classList.add('slide--deactive');
        });
        member.target.classList.remove('slide--deactive');
        member.target.classList.add('opacity-100');
      };
      function memberReset(member) {
        members.forEach(member => {
          member.classList.remove('opacity-50');
          member.classList.remove('slide--deactive');
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
  }

  shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  
  render() {
    const shuffledPosts = this.shuffleArray(this.props.slides);
    return (
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className="slideshow js-slideshow md:fixed md:top-0 md:left-0 md:right-0 md:bottom-0 md:h-full md:pt-16 lg:pt-20 xl:pt-32"
      >
        {shuffledPosts.map(({ node }, i) => {
          return (
            <motion.div variants={slideIn} className="slide" key={i}>
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
                          <div className="h-full w-full transform image-transform-center">
                            <div className="relative overflow-hidden h-full">
                              <motion.div variants={slideInInner} className="h-full">
                                <Img fluid={node.featuredImageBig.fluid} className="h-full carousel-img w-auto slide__img pb-0 -mb-2 hidden md:block" />
                                <Img fluid={node.featuredImageMobile.fluid} className="h-full carousel-img w-auto slide__img pb-0 -mb-2 block md:hidden" />
                              </motion.div>
                            </div>
                          </div>
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
