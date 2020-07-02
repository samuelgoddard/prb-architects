import React from "react"
import { Link } from "gatsby"

class Header extends React.Component {
  render() {
    return (
      <header className="p-0 pb-0 md:p-0 md:pb-0 fixed top-0 left-0 right-0 h-16 md:h-20 z-20 flex flex-wrap">
        <nav className="relative z-10 w-full">
          <ul className="flex flex-wrap">
            <li>
              <Link className="text-lg md:text-xl pr-px opacity-25" activeClassName="opacity-100 line-through" to="/">Gallery</Link>
            </li>
            <li className="text-xl px-1 opacity-25">/</li>
            <li>
              <Link className="text-lg md:text-xl px-px opacity-25" activeClassName="opacity-100 line-through" to="/gallery-index">Index</Link>
            </li>

            <li className="ml-auto">
              <Link to="/wayfinder" activeClassName="line-through" className="text-lg md:text-xl px-px text-black">Menu</Link>
            </li>
          </ul>
        </nav>
        <div className="mt-auto h-px w-full border-b border-black"></div>
      </header>
    )
  }
}

export default Header
