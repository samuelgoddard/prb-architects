import React, { Component } from 'react'
import { Link } from "gatsby";
import Img from "gatsby-image";
import Flickity from "flickity";

class HomeCarousel extends Component {
  componentDidMount() {
    // Play with this value to change the speed
    let tickerSpeed = 3;

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

    flickity = new Flickity(slideshowEl, {
      autoPlay: false,
      prevNextButtons: false,
      pageDots: false,
      draggable: true,
      wrapAround: true,
      freeScroll: true,
      friction: 0.25
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
  
  render() {
    return (
      <div className="slideshow js-slideshow">
        {this.props.slides.map(({ node }, i) => {
          return (
            <div className="slide" key={i}>
              <Link to="/work/ivy-farm" className="block">
                <figure className="">
                  <div className="flex flex-wrap">
                    <div className="flex-1">
                      <Img fluid={node.featuredImage.fluid} className="w-full max-w-full object-cover mb-1" />
                      <figcaption className="flex md:text-xl px-3 md:px-0 items-center">
                      
                      <span className="block">{ node.title }</span>
                      <span className="block ml-auto text-sm">{ node.category.title }</span>
                    </figcaption>
                    </div>
                    <div className="w-auto">
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
                  <Link to="/work/ivy-farm" className="block">
                    <figure className="">
                      <div className="flex flex-wrap">
                        <div className="flex-1">
                          <Img fluid={node.featuredImage.fluid} className="w-full max-w-full object-cover mb-1" />
                          <figcaption className="flex md:text-xl px-3 md:px-0 items-center">
                          
                          <span className="block">{ node.title }</span>
                          <span className="block ml-auto text-sm">{ node.category.title }</span>
                        </figcaption>
                        </div>
                        <div className="w-auto">
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
