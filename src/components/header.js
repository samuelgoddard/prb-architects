import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <nav className="pb-4 md:pb-6 mb-4 md:mb-6 border-b border-black">
      <ul className="flex flex-wrap">
        <li>
          <Link className="text-lg md:text-xl pr-px opacity-25" activeClassName="opacity-100 line-through" to="/">Gallery</Link>
        </li>
        <li className="text-xl px-1 opacity-25">/</li>
        <li>
          <Link className="text-lg md:text-xl px-px opacity-25" activeClassName="opacity-100 line-through" to="/gallery-index">Index</Link>
        </li>

        <li className="ml-auto">
          <Link className="text-lg md:text-xl px-px text-black" to="/">Menu</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
