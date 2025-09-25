'use client';

import {
  LogoBtn,
  LogoImg,
  LogoText
} from "../../Navbar.styles";

export default function Logo() {
  return (
    <LogoBtn href="/">
      <LogoImg src="/logo_rmbg.webp" alt="Borneo Botanica Logo" />
      <LogoText>Borneo Botanica</LogoText>
    </LogoBtn>
  );
}
