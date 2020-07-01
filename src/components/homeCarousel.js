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
      let tickerSpeed = 0.8;

      let flickity = null;
      let isPaused = false;
      const slideshowEl = document.querySelector('.js-slideshow');

      // const update = () => {
      //   if (isPaused) return;
      //   if (flickity.slides) {
      //     flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
      //     flickity.selectedIndex = flickity.dragEndRestingSelect();
      //     flickity.updateSelectedSlide();
      //     flickity.settle(flickity.x);
      //   }
      //   window.requestAnimationFrame(update);
      // };

      const updateNon = () => {
        // window.requestAnimationFrame(update);
      };

      const pause = () => {
        isPaused = true;
      };

      const play = () => {
        if (isPaused) {
          isPaused = false;
          // window.requestAnimationFrame(update);
        }
      };

      // const loop = () => {
      //   flickity.x--;
      //   flickity.integratePhysics();
      //   flickity.settle(flickity.x);
      //   window.requestAnimationFrame(loop);
      // }

      const loop = () => {
        flickity.x = (flickity.x - 1) % flickity.slideableWidth;

        flickity.selectedIndex = flickity.dragEndRestingSelect();
        flickity.updateSelectedSlide();
        flickity.settle(flickity.x);
        flickity.integratePhysics();
        window.requestAnimationFrame(loop);
      };
      
      flickity = new this.state.Flickity(slideshowEl, {
        autoPlay: false,
        prevNextButtons: false,
        pageDots: false,
        draggable: true,
        wrapAround: true,
        freeScroll: true,
        contain: false,
        freeScrollFriction: 0.05
      });
      flickity.x = 0;

      // slideshowEl.addEventListener('mouseenter', play, false);
      // slideshowEl.addEventListener('focusin', play, false);
      // slideshowEl.addEventListener('mouseleave', play, false);
      // slideshowEl.addEventListener('focusout', play, false);

      // flickity.on('dragStart', () => {
      //   isPaused = true;
      // });

      loop();
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
                      {/* <Img fluid={node.featuredImageBig.fluid} className="w-full max-w-full object-cover mb-1 h-full scroller-image" /> */}
                      <div className="overflow-hidden mb-1 pb-0">
                        <Img fluid={node.featuredImageBig.fluid} className="h-full carousel-img w-auto slide__img pb-0 -mb-2" />
                      </div>
                      <figcaption className="flex md:text-xl md:px-0 items-center">  
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
                  <Link to={`/work/${ node.slug }`} className="block h-full slide__link">
                    <figure className="h-full">
                      <div className="flex flex-wrap relative h-full">
                        <div className="flex-1 mr-6 h-full">
                          {/* <Img fluid={node.featuredImageBig.fluid} className="w-full max-w-full object-cover mb-1 h-full scroller-image" /> */}
                          <div className="overflow-hidden mb-1 pb-0">
                            <Img fluid={node.featuredImageBig.fluid} className="h-full carousel-img w-auto slide__img pb-0 -mb-2" />
                          </div>
                          <figcaption className="flex md:text-xl md:px-0 items-center">  
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
