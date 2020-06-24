import React, { Component } from 'react'
import { Link } from "gatsby";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class HomeCarousel extends Component {

  render() {
    return (
      <Carousel
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={1}
        centerMode={false}
        ssr={true}
        containerClass="container-with-dots"
        customTransition="all 20s linear"
        // draggable
        focusOnSelect={true}
        infinite
        itemClass=""
        // keyBoardControl
        // minimumTouchDrag={80}
        // renderButtonGroupOutside={false}
        // renderDotsOutside={false}
        transitionDuration={20000}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        itemClass="carousel-item"
      >
        <div className="mr-8">
          <Link to="/work/ivy-farm" className="block">
            <figure className="">
              <div className="flex flex-wrap">
                <div className="flex-1">
                  <img src="https://placedog.net/1200/720?id=5" className="w-full max-w-full object-cover mb-1"/>
                  <figcaption className="flex md:text-xl px-3 md:px-0 items-center">
                  
                  <span className="block">Ivy Farm</span>
                  <span className="block ml-auto text-sm">Residential</span>
                </figcaption>
                </div>
                <div className="w-auto">
                  <span className="flex flex-wrap text-xs md:text-sm leading-none items-center text-orient-down pl-2">
                    <span className="block text-2xs mr-px mb-1">PRB</span>
                    <span className="block leading-none">19—034</span>
                  </span>
                </div>
              </div>
            </figure>
          </Link>
        </div>
        <div className="mr-8">
          <Link to="/work/keyworth" className="block">
            <figure className="">
              <div className="flex flex-wrap">
                <div className="flex-1">
                  <img src="https://placedog.net/1200/720?id=2" className="w-full max-w-full object-cover mb-1"/>
                  <figcaption className="flex md:text-xl px-3 md:px-0 items-center">
                  
                  <span className="block">Keyworth</span>
                  <span className="block ml-auto text-sm">Residential</span>
                </figcaption>
                </div>
                <div className="w-auto">
                  <span className="flex flex-wrap text-xs md:text-sm leading-none items-center text-orient-down pl-2">
                    <span className="block text-2xs mr-px mb-1">PRB</span>
                    <span className="block leading-none">19—034</span>
                  </span>
                </div>
              </div>
            </figure>
          </Link>
        </div>
        <div className="mr-8">
          <Link to="/work/the-canch" className="block">
            <figure className="">
              <div className="flex flex-wrap">
                <div className="flex-1">
                  <img src="https://placedog.net/1200/720?id=4" className="w-full max-w-full object-cover mb-1"/>
                  <figcaption className="flex md:text-xl px-3 md:px-0 items-center">
                  
                  <span className="block">The Canch</span>
                  <span className="block ml-auto text-sm">Residential</span>
                </figcaption>
                </div>
                <div className="w-auto">
                  <span className="flex flex-wrap text-xs md:text-sm leading-none items-center text-orient-down pl-2">
                    <span className="block text-2xs mr-px mb-1">PRB</span>
                    <span className="block leading-none">19—034</span>
                  </span>
                </div>
              </div>
            </figure>
          </Link>
        </div>
        <div className="mr-8">
          <Link to="/work/pelham-crescent" className="block">
            <figure className="">
              <div className="flex flex-wrap">
                <div className="flex-1">
                  <img src="https://placedog.net/1200/720?id=8" className="w-full max-w-full object-cover mb-1"/>
                  <figcaption className="flex md:text-xl px-3 md:px-0 items-center">
                  
                  <span className="block">Pelham Crescent</span>
                  <span className="block ml-auto text-sm">Residential</span>
                </figcaption>
                </div>
                <div className="w-auto">
                  <span className="flex flex-wrap text-xs md:text-sm leading-none items-center text-orient-down pl-2">
                    <span className="block text-2xs mr-px mb-1">PRB</span>
                    <span className="block leading-none">19—034</span>
                  </span>
                </div>
              </div>
            </figure>
          </Link>
        </div>
      </Carousel>
    )
  }
}

export default HomeCarousel
