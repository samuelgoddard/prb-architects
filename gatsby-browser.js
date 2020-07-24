import React from "react";
import Layout from "./src/components/layout";

const transitionDelay = 0;

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout( 
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    )
  }
  return false
}

exports.onClientEntry = () => {
  require("core-js-pure/features/array/find");
  require("core-js-pure/features/object/assign");
  require("core-js-pure/features/promise");
  require("core-js-pure/features/string/ends-with");
  require("core-js-pure/features/symbol/for");
  require("core-js-pure/features/weak-set");
}