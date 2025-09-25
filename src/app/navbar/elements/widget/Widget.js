'use client';

import {
    WidgetContainer,
    WidgetIconWrapper,
    WidgetIcon,
} from "../../Navbar.styles";

export default function Links() {
    return (
        <WidgetContainer>
            <WidgetIconWrapper data-tooltip="Search">
                <WidgetIcon src="/icons/navbar/search.svg" alt="Search" />
            </WidgetIconWrapper>
            <WidgetIconWrapper data-tooltip="Cart">
                <WidgetIcon src="/icons/navbar/shopping_bag.svg" alt="Shopping Bag" />
            </WidgetIconWrapper>
            <WidgetIconWrapper data-tooltip="Profile" href="/profile">
                <WidgetIcon src="/icons/navbar/profile.svg" alt="Profile" />
            </WidgetIconWrapper>
        </WidgetContainer>
    );
}
