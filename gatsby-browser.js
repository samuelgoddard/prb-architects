import React from "react";
import Layout from "./src/components/layout";

const transitionDelay = 100;

export const onClientEntry = () => {
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
    document.getElementById('scroll-container').scrollIntoView();
  } else {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
    document.getElementById('scroll-container').scrollIntoView();
  }
  return false
}
