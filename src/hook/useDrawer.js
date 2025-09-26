// src/hooks/useDrawer.js
"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function useDrawer({ direction = "right", duration = 0.5, ease = "power3.inOut" } = {}) {
    const drawerRef = useRef(null);
    const timeline = useRef(null);

    // Register GSAP context (scoped animations)
    useGSAP(() => {
        if (!drawerRef.current) return;

        // Initial hidden state
        gsap.set(drawerRef.current, {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : "0%",
            y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : "0%",
        });

        timeline.current = gsap.timeline({ paused: true });
        timeline.current.to(drawerRef.current, {
            x: 0,
            y: 0,
            duration,
            ease,
        });
    }, { scope: drawerRef });

    // API
    const open = () => timeline.current?.play();
    const close = () => timeline.current?.reverse();
    const toggle = () => {
        if (!timeline.current) return;
        timeline.current.reversed() ? timeline.current.play() : timeline.current.reverse();
    };

    return { drawerRef, open, close, toggle };
}
