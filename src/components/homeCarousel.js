import React, { Component } from 'react'
import { Link } from "gatsby";
import { motion } from "framer-motion";
import Img from "gatsby-image";
// import Flickity from "flickity";
import { isBrowser } from "react-device-detect"

if (typeof window !== 'undefined') {
  const Flickity = require('flickity');
}

class HomeCarousel extends Component {
  state = { Flickity: null };

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
      let tickerSpeed = 0.25;

      let flickity = null;
      let isPaused = false;
      const slideshowEl = document.querySelector('.js-slideshow');

      const update = () => {
        if (isPaused) return;
        if (flickity.slides) {
          flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
          flickity.selectedIndex = flickity.dragEndRestingSelect();
          flickity.updateSelectedSlide();
          flickity.settle(flickity.x);
        }
        window.requestAnimationFrame(update);
      };

      const pause = () => {
        isPaused = true;
      };

      const play = () => {
        if (isPaused) {
          isPaused = false;
          window.requestAnimationFrame(update);
        }
      };

      flickity = new this.state.Flickity(slideshowEl, {
        autoPlay: false,
        prevNextButtons: false,
        pageDots: false,
        draggable: true,
        wrapAround: true,
        freeScroll: true,
        contain: true,
        freeScrollFriction: 0.075
      });
      flickity.x = 0;

      slideshowEl.addEventListener('mouseenter', pause, false);
      slideshowEl.addEventListener('focusin', pause, false);
      slideshowEl.addEventListener('mouseleave', play, false);
      slideshowEl.addEventListener('focusout', play, false);

      flickity.on('dragStart', () => {
        isPaused = true;
      });

      update();
    }
  }
  
  render() {
    return (
      <div className="slideshow js-slideshow">
        {this.props.slides.map(({ node }, i) => {
          return (
            <div className="slide" key={i}>
              <Link to={`/work/${ node.slug }`} className="block h-full slide__link">
                <figure className="h-full">
                  <div className="flex flex-wrap relative h-full">
                    <div className="flex-1 mr-6 h-full">
                      {/* <Img fixed={node.featuredImage.fixed} className="w-full max-w-full object-cover mb-1 h-full scroller-image" /> */}
                      <img src={node.featuredImage.url} className="h-full w-auto block carousel-img" />
                      <figcaption className="flex md:text-xl px-3 md:px-0 items-center">  
                        <span className="block">{ node.title }</span>
                        <span className="block ml-auto text-sm">{ node.category.title }</span>
                      </figcaption>
                    </div>
                    <div className="absolute top-0 right-0">
                      <span className="flex flex-wrap text-sm md:text-base leading-none items-center text-orient-down pl-2">
                        <span className="block text-2xs mr-px mb-1">PRB</span>
                        <span className="block leading-none">{ node.projectCode }</span>
                      </span>
                    </div>
                  </div>
                </figure>
              </Link>
            </div>
          )
        })}
        {this.props.slides.length < 4 && (
          <>
            {this.props.slides.map(({ node }, i) => {
              return (
                <div className="slide" key={i}>
                  <Link to={`/work/${ node.slug }`} className="block">
                    <figure className="">
                      <div className="flex flex-wrap relative">
                        <div className="w-10/12">
                          {/* <Img fixed={node.featuredImage.fixed} className="w-full max-w-full object-cover mb-1 h-full" /> */}

                          <img src={node.featuredImage.url} className="h-full w-auto block carousel-img" />
                          <figcaption className="flex w-2/12 md:text-xl px-3 md:px-0 items-center">  
                            <span className="block">{ node.title }</span>
                            <span className="block ml-auto text-sm">{ node.category.title }</span>
                          </figcaption>
                        </div>
                        <div className="absolute top-0 right-0">
                          <span className="flex flex-wrap text-sm md:text-base leading-none items-center text-orient-down pl-2">
                            <span className="block text-2xs mr-px mb-1">PRB</span>
                            <span className="block leading-none">{ node.projectCode }</span>
                          </span>
                        </div>
                      </div>
                    </figure>
                  </Link>
                </div>
              )
            })}
          </>
        )}
      </div>
    )
  }
}

export default HomeCarousel
