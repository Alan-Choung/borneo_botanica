"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * A reusable GSAP-powered drawer hook
 *
 * @param {object} options - Drawer config
 * @param {"left" | "right" | "top" | "bottom"} options.direction - Drawer slide direction
 * @param {string | number} [options.width="300px"] - Drawer width (for left/right)
 * @param {string | number} [options.height="300px"] - Drawer height (for top/bottom)
 * @param {string | number} [options.padding="1rem"] - Drawer padding
 */
export function useDrawer({
  direction = "right",
  width = "300px",
  height = "300px",
  padding = "1rem",
} = {}) {
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);
  const isOpen = useRef(false);

  // Initial hidden state
  useGSAP(() => {
    const drawer = drawerRef.current;
    const backdrop = backdropRef.current;

    if (!drawer || !backdrop) return;

    gsap.set(drawer, {
      x: direction === "right" ? "100%" : direction === "left" ? "-100%" : "0%",
      y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : "0%",
    });
    gsap.set(backdrop, { autoAlpha: 0, pointerEvents: "none" });
  }, []);

  const open = () => {
    const drawer = drawerRef.current;
    const backdrop = backdropRef.current;
    if (!drawer || !backdrop) return;

    gsap.to(drawer, { x: 0, y: 0, duration: 0.4, ease: "power3.out" });
    gsap.to(backdrop, {
      autoAlpha: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    isOpen.current = true;
  };

  const close = () => {
    const drawer = drawerRef.current;
    const backdrop = backdropRef.current;
    if (!drawer || !backdrop) return;

    gsap.to(drawer, {
      x: direction === "right" ? "100%" : direction === "left" ? "-100%" : "0%",
      y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : "0%",
      duration: 0.3,
      ease: "power3.in",
    });
    gsap.to(backdrop, {
      autoAlpha: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    isOpen.current = false;
  };

  const toggle = () => {
    isOpen.current ? close() : open();
  };

  // Backdrop click = close
  useEffect(() => {
    const backdrop = backdropRef.current;
    if (!backdrop) return;
    const handleClick = () => close();
    backdrop.addEventListener("click", handleClick);
    return () => backdrop.removeEventListener("click", handleClick);
  }, []);

  /** 
   * Optional helper: get a ready-to-use close button
   */
  const getCloseButton = (label = "✕", extraProps = {}) => (
    <button
      type="button"
      onClick={close}
      style={{
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",
        fontSize: "1.2rem",
        background: "transparent",
        border: "none",
        cursor: "pointer",
      }}
      {...extraProps}
    >
      {label}
    </button>
  );

  return {
    drawerRef,
    backdropRef,
    open,
    close,
    toggle,
    isOpen,
    getCloseButton,
    styleProps: {
      width: direction === "left" || direction === "right" ? width : "100%",
      height: direction === "top" || direction === "bottom" ? height : "100%",
      padding,
      position: "fixed",
      top: direction === "bottom" ? "auto" : 0,
      bottom: direction === "top" ? "auto" : 0,
      left: direction === "right" ? "auto" : 0,
      right: direction === "left" ? "auto" : 0,
      zIndex: 1500,
      background: "#fff",
      boxShadow: "0 0 20px rgba(0,0,0,0.2)",
      overflowY: "auto",
    },
  };
}
