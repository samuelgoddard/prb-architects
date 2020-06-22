import React from "react";
import { TweenLite, Power2 } from "gsap";
import ResizeObserver from "resize-observer-polyfill";
const windowGlobal = typeof window !== 'undefined' && window


export default class SmoothScroll extends React.Component {
  state = {
    height: windowGlobal.innerHeight
  };

  ro = new ResizeObserver(elements => {
    for (let elem of elements) {
      const crx = elem.contentRect;
      console.log(crx);
      this.setState({
        height: crx.height
      });
    }
  });

  componentDidMount() {
    windowGlobal.addEventListener("scroll", this.onScroll);
    this.ro.observe(this.viewport);
  }

  onScroll = () => {
    TweenLite.to(this.viewport, 1, {
      y: -windowGlobal.pageYOffset,
      ease: Power2.easeOut
    });
  };

  render() {
    return (
      <>
        <div className="viewport p-4 md:p-6" ref={ref => (this.viewport = ref)}>
          {this.props.children}
        </div>
        <div
          ref={ref => (this.fake = ref)}
          style={{
            height: this.state.height
          }}
        />
      </>
    );
  }
}




// import React from "react";
// import { TweenLite, Power2 } from "gsap";
// import ResizeObserver from "resize-observer-polyfill";
// const windowGlobal = typeof window !== 'undefined' && window

// export default class SmoothScroll extends React.Component {
//   state = {
//     height: windowGlobal.innerHeight
//   };

//   ro = new ResizeObserver(elements => {
//     for (let elem of elements) {
//       const crx = elem.contentRect;
//       console.log(crx);
//       this.setState({
//         height: crx.height
//       });
//     }
//   });

//   componentDidMount() {
//     windowGlobal.addEventListener("scroll", this.onScroll);
//     this.ro.observe(this.viewport);
//   }

//   onScroll = () => {
//     TweenLite.to(this.viewport, 1, {
//       y: -windowGlobal.pageYOffset,
//       ease: Power2.easeOut
//     });
//   };

//   render() {
//     return (
//       <div className={this.props.bgRed ? `bg-prbred min-h-screen transition duration-500 ease-in-out` : `bg-white min-h-screen transition duration-500 ease-in-out`}>
//         <div
//             className="viewport p-4 md:p-6"
//             ref={ref => (this.viewport = ref)}
//         >
//           {this.props.children}
//         </div>
//         <div
//           ref={ref => (this.fake = ref)}
//           style={{
//             height: this.state.height
//           }}
//         />
//       </div>
//     );
//   }
// }
