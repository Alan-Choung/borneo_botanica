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

export default function Navbar() {
  return (
    <NavbarContainer>
      <Logo />
      <NavSection>
        <Links />
        <Widget />
      </NavSection>
    </NavbarContainer>
  );
}
