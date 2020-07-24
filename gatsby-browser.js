import "core-js-pure/features/array/find";
import "core-js-pure/features/object/assign";
import "core-js-pure/features/promise";
import "core-js-pure/features/string/ends-with";
import "core-js-pure/features/symbol/for";
import "core-js-pure/features/weak-set";

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