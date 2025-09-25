'use client';

import {
    WidgetContainer,
    WidgetIconWrapper,
    WidgetIcon,
} from "../../Navbar.styles";
import { useResponsive } from "@/hook/useResponsive";

export default function Links() {
    // breakpoints
    const { isTablet } = useResponsive();

    return (
        <WidgetContainer>
            <WidgetIconWrapper data-tooltip="Search" href={null}>
                <WidgetIcon src="/icons/navbar/search.svg" alt="Search" />
            </WidgetIconWrapper>
            <WidgetIconWrapper data-tooltip="Cart" href={null}>
                <WidgetIcon src="/icons/navbar/shopping_bag.svg" alt="Shopping Bag" />
            </WidgetIconWrapper>
            <WidgetIconWrapper data-tooltip="Profile" href="/profile">
                <WidgetIcon src="/icons/navbar/profile.svg" alt="Profile" />
            </WidgetIconWrapper>
            {/* Only render menu icon on tablet screens */}
            {isTablet && (
                <WidgetIconWrapper data-tooltip="Menu" href={null}>
                    <WidgetIcon src="/icons/navbar/menu.svg" alt="Links Menu" />
                </WidgetIconWrapper>
            )}
        </WidgetContainer>
    );
}
