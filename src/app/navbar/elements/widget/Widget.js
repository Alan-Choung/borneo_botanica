'use client';

import React from "react";
import {
    WidgetContainer,
    WidgetIconWrapper,
    WidgetIcon,
    // CartDrawer,
    // SearchDrawer,    // ← make sure this is imported
    // Backdrop,
} from "../../Navbar.styles";
import { Drawer } from "@/components";
import { useResponsive, useDrawer } from "@/hook";

export default function Links() {
    const { isTablet } = useResponsive();

    // create drawers
    const cartDrawer = useDrawer({ direction: "right" });
    const searchDrawer = useDrawer({ direction: "top" });

    // widget config
    const widgets = [
        { id: "search", tooltip: "Search", icon: "/icons/navbar/search.svg", drawer: searchDrawer },
        { id: "cart", tooltip: "Cart", icon: "/icons/navbar/shopping_bag.svg", drawer: cartDrawer },
        { id: "profile", tooltip: "Profile", icon: "/icons/navbar/profile.svg", href: "/profile" },
        ...(isTablet ? [{ id: "menu", tooltip: "Menu", icon: "/icons/navbar/menu.svg" }] : []),
    ];

    return (
        <WidgetContainer>
            {widgets.map(({ id, tooltip, icon, href, drawer }) => (
                <WidgetIconWrapper
                    key={id}
                    data-tooltip={tooltip}
                    href={href ?? null}
                    onClick={drawer ? drawer.toggle : undefined}
                >
                    <WidgetIcon src={icon} alt={tooltip} />
                </WidgetIconWrapper>
            ))}

            {/* Cart Drawers */}
            <Drawer drawerRef={cartDrawer.drawerRef} backdropRef={cartDrawer.backdropRef} direction="right" width="320px">
                {cartDrawer.getCloseButton("✕")}
                <h2>Your Cart</h2>
            </Drawer>

            {/* Search Drawer */}
            <Drawer drawerRef={searchDrawer.drawerRef} backdropRef={searchDrawer.backdropRef} direction="top" height="100px">
                <h2>Search</h2>
            </Drawer>
        </WidgetContainer>
    );
}
