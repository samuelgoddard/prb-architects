import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
const GalleryIndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <section>
        <div className="w-full md:w-10/12 ml-auto">
          <nav className="pb-12 pt-12">
            <span className="block uppercase pb-4">Residential</span>
            <ul>
              {[...Array(6)].map((e, i) => {
                return (
                  <li key={i}>
                    <Link to="/project" className="flex flex-wrap items-center border-b border-black py-3 md:py-5 hover:text-white">
                      <span className="block mr-6 md:mr-8 text-xs md:text-sm leading-none">PRB001</span>
                      <span className="block text-lg md:text-3xl font-display leading-none mt-2">Keyworth</span>
                      <span className="block ml-auto"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8" viewBox="0 0 17.938 17.937"><g data-name="Group 33" fill="none" stroke="currentColor"><path data-name="Path 1" d="M2.18 5.752h10.006v10.005"/><path data-name="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg></span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <nav className="pb-12">
            <span className="block uppercase pb-4">Commercial</span>
            <ul>
              {[...Array(2)].map((e, i) => {
                return (
                  <li key={i}>
                    <Link to="/project" className="flex flex-wrap items-center border-b border-black py-3 md:py-5 hover:text-white">
                      <span className="block mr-6 md:mr-8 text-xs md:text-sm leading-none">PRB001</span>
                      <span className="block text-lg md:text-3xl font-display leading-none mt-2">Keyworth</span>
                      <span className="block ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="17.938" height="17.937" viewBox="0 0 17.938 17.937"><g data-name="Group 33" fill="none" stroke="currentColor"><path data-name="Path 1" d="M2.18 5.752h10.006v10.005"/><path data-name="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg></span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <nav className="pb-32">
            <span className="block uppercase pb-4">Restorations</span>
            <ul>
              {[...Array(3)].map((e, i) => {
                return (
                  <li key={i}>
                    <Link to="/project" className="flex flex-wrap items-center border-b border-black py-3 md:py-5 hover:text-white">
                      <span className="block mr-6 md:mr-8 text-xs md:text-sm leading-none">PRB001</span>
                      <span className="block text-lg md:text-3xl font-display leading-none mt-2">Keyworth</span>
                      <span className="block ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="17.938" height="17.937" viewBox="0 0 17.938 17.937"><g data-name="Group 33" fill="none" stroke="currentColor"><path data-name="Path 1" d="M2.18 5.752h10.006v10.005"/><path data-name="Path 2" d="M12.185 5.752L.354 17.583"/></g></svg></span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}

export default GalleryIndexPage