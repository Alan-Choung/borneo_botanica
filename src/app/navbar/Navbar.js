'use client';

import { 
  NavbarContainer,
  NavSection,
} from "./Navbar.styles";
import {
  Logo,
  Links,
  Widget
} from './elements';
import { useResponsive } from "@/hook";

export default function Navbar() {
  // breakpoints
  const { isTablet } = useResponsive();

  return (
    <NavbarContainer>
      <Logo />
      <NavSection>
        {!isTablet && <Links />}
        <Widget />
      </NavSection>
    </NavbarContainer>
  );
}
