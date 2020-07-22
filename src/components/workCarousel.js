import React, { Component } from 'react'
import Img from "gatsby-image";

if (typeof window !== 'undefined') {
  const Flickity = require('flickity');
}

class WorkCarousel extends Component {
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
      let flickity = null;
      const slideshowEl = document.querySelector('.js-slideshow');
      
      flickity = new this.state.Flickity(slideshowEl, {
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
      <div className="slideshow js-slideshow">
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
                        <span className="block ml-auto text-sm">({i}—{ length })</span>
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

export default WorkCarousel
