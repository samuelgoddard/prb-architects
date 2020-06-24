import React, { Component } from 'react'
import EmblaCarouselReact from 'embla-carousel-react'
import { motion } from "framer-motion"

const transition = { duration: 20, ease: [0.43, 0.13, 0.23, 0.96] }

const scroll = {
	initial: { y: 0 },
	enter: { y: -2000, transition },
	exit: {
		y: 0,
		transition: { duration: 0.5, ...transition }
	}
}

class EmblaCarouselComponent extends Component {
  componentDidMount() {
    // this.embla.on('select', () => {
    //   console.log(
    //     `Current index is ${this.embla.selectedScrollSnap()}`,
    //   )
    // })
  }

  render() {
    return (
      <>
        <EmblaCarouselReact
          emblaRef={c => (this.embla = c)}
          options={{ loop: false }}
        >
          <div className="flex home-banner">
            <div style={{ flex: '0 0 100%' }} className="h-64 bg-red-700">Slide 1</div>
            <div style={{ flex: '0 0 100%' }} className="h-64 bg-red-700">Slide 2</div>
            <div style={{ flex: '0 0 100%' }} className="h-64 bg-red-700">Slide 3</div>
            <div style={{ flex: '0 0 100%' }} className="h-64 bg-red-700">Slide 4</div>
            <div style={{ flex: '0 0 100%' }} className="h-64 bg-red-700">Slide 6</div>
            <div style={{ flex: '0 0 100%' }} className="h-64 bg-red-700">Slide 7</div>
          </div>
        </EmblaCarouselReact>
        <button onClick={() => this.embla.scrollPrev()}>Prev</button>
        <button onClick={() => this.embla.scrollNext()}>Next</button>
      </>
    )
  }
}

export default EmblaCarouselComponent
