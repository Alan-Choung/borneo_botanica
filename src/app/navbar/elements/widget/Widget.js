"use client";

import React from "react";
import {
    WidgetContainer,
    WidgetIconWrapper,
    WidgetIcon,
} from "../../Navbar.styles";
import { Drawer } from "@/components";
import Links from "../links/Links";
import { useResponsive, useDrawer } from "@/hook";

export default function Widget() {
    const { isTablet } = useResponsive();

    // create drawers
    const cartDrawer = useDrawer({ direction: "right", width: "320px" });
    const searchDrawer = useDrawer({ direction: "top", height: "100px" });
    const menuDrawer = useDrawer({ direction: "right", width: "320px" });

    // widget config
    const widgets = [
        { id: "search", tooltip: "Search", icon: "/icons/navbar/search.svg", drawer: searchDrawer },
        { id: "cart", tooltip: "Cart", icon: "/icons/navbar/shopping_bag.svg", drawer: cartDrawer },
        { id: "profile", tooltip: "Profile", icon: "/icons/navbar/profile.svg", href: "/profile" },
        ...(isTablet ? [{ id: "menu", tooltip: "Menu", icon: "/icons/navbar/menu.svg", drawer: menuDrawer }] : []),
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

            {/* Cart Drawer */}
            <Drawer {...cartDrawer.drawerProps}>
                {cartDrawer.getCloseButton("✕")}
                <h2>Your Cart</h2>
            </Drawer>

            {/* Search Drawer */}
            <Drawer {...searchDrawer.drawerProps}>
                <h2>Search</h2>
            </Drawer>

            {/* Menu Drawer */}
            <Drawer {...menuDrawer.drawerProps}>
                {menuDrawer.getCloseButton("✕")}
                <Links isColumn />
            </Drawer>
        </WidgetContainer>
    );
}
