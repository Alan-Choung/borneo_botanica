"use client";

import React from "react";

export function Drawer({
    drawerRef,
    backdropRef,
    direction = "right",
    width = "300px",
    height = "100%",
    padding = "1rem",
    children,
}) {
    // Base styles for all drawers
    const baseStyles = {
        position: "fixed",
        background: "#fff",
        zIndex: 1000,
        padding,
        overflowY: "auto",
    };

    // Direction-specific styles
    const directionStyles = {
        left: { top: 0, bottom: 0, left: 0, width, height: "100%" },
        right: { top: 0, bottom: 0, right: 0, width, height: "100%" },
        top: { top: 0, left: 0, right: 0, width: "100%", height },
        bottom: { bottom: 0, left: 0, right: 0, width: "100%", height },
    };

    return (
        <>
            <div ref={drawerRef} style={{ ...baseStyles, ...directionStyles[direction] }}>
                {children}
            </div>
            <div
                ref={backdropRef}
                style={{
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.5)",
                    zIndex: 999,
                }}
            />
        </>
    );
}
