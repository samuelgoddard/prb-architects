import React, { Component } from 'react'
import { Link } from "gatsby";
import { motion } from "framer-motion";
import Img from "gatsby-image";
import { isBrowser } from "react-device-detect"

if (typeof window !== 'undefined') {
  const Flickity = require('flickity');
}

class HomeCarousel extends Component {
  state = { FlickityDesktop: null };

  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
      const FlickityDesktop = require('flickity');
      this.state.FlickityDesktop = FlickityDesktop;
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      let flickity = null;
      const slideshowEl = document.querySelector('.js-slideshow-desktop');

      const update = () => {
        if (flickity.slides) {
          flickity.updateSelectedSlide();
          flickity.settle(flickity.x);
        }
        window.requestAnimationFrame(update);
      };
      
      flickity = new this.state.FlickityDesktop(slideshowEl, {
        autoPlay: false,
        prevNextButtons: true,
        pageDots: false,
        draggable: true,
        wrapAround: true,
        freeScroll: true,
        freeScrollFriction: 0.085,
        cellAlign: 'left'
      });
      flickity.x = 0;
    }
  }

  render() {
    return (
      <div className="js-slideshow-desktop">
        {this.props.slides.map(({ fluid, title }, i) => {
          const length = this.props.slides.length;
          return (
            <div className="slide slide--work" key={i}>
              <div className="block h-full">
                <figure className="h-full">
                  <div className="flex flex-wrap relative h-full">
                    <div className="w-full h-full">
                      <div className="overflow-hidden mb-1 pb-0">
                        <Img fluid={fluid} className="h-full carousel-img w-auto slide__img pb-0 -mb-2" />
                      </div>
                      <figcaption className="flex md:text-xl md:px-0 items-center p-3">
                        { title && (
                          <span className="block">{ title }</span>
                        )}
                        <span className="block ml-auto">({i + 1}—{ length })</span>
                      </figcaption>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default HomeCarousel
