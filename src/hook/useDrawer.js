"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function useDrawer({
  direction = "right",
  width = "300px",
  height = "300px",
  padding = "1rem",
} = {}) {
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);
  const isOpen = useRef(false);

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
    if (!drawerRef.current || !backdropRef.current) return;
    gsap.to(drawerRef.current, { x: 0, y: 0, duration: 0.4, ease: "power3.out" });
    gsap.to(backdropRef.current, {
      autoAlpha: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
    isOpen.current = true;
  };

  const close = () => {
    if (!drawerRef.current || !backdropRef.current) return;
    gsap.to(drawerRef.current, {
      x: direction === "right" ? "100%" : direction === "left" ? "-100%" : "0%",
      y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : "0%",
      duration: 0.3,
      ease: "power3.in",
    });
    gsap.to(backdropRef.current, {
      autoAlpha: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
    isOpen.current = false;
  };

  const toggle = () => (isOpen.current ? close() : open());

  useEffect(() => {
    const backdrop = backdropRef.current;
    if (!backdrop) return;
    const handleClick = () => close();
    backdrop.addEventListener("click", handleClick);
    return () => backdrop.removeEventListener("click", handleClick);
  }, []);

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

  const drawerProps = {
    drawerRef,
    backdropRef,
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

  return {
    open,
    close,
    toggle,
    isOpen,
    getCloseButton,
    drawerProps,
  };
}
