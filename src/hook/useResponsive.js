import { useState, useEffect } from "react";

const defaultBreakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
};

export function useResponsive(breakpoints = defaultBreakpoints) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // initialize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= breakpoints.mobile;

  const isTablet = windowWidth <= breakpoints.tablet;

  const isDesktop = windowWidth > breakpoints.tablet;

  const currentBreakpoint = isDesktop
    ? "desktop"
    : isTablet
      ? "tablet"
      : "mobile";

  return {
    windowWidth,
    isMobile,
    isTablet,
    isDesktop,
    currentBreakpoint,
  };
}
