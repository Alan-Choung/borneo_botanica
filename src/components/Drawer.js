"use client";

import React from "react";

/**
 * Drawer component
 * - purely presentational
 * - controlled entirely by useDrawer hook
 */
export function Drawer({ drawerRef, backdropRef, children, styleProps }) {
    return (
        <>
            {/* Backdrop */}
            <div
                ref={backdropRef}
                style={{
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.5)",
                    zIndex: 1400,
                }}
            />

            {/* Drawer panel */}
            <div ref={drawerRef} style={styleProps}>
                {children}
            </div>
        </>
    );
}
