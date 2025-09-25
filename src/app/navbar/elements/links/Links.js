'use client';

import {
    LinksContainer,
    StyledLink,
} from "../../Navbar.styles";

export default function Links() {
  return (
    <LinksContainer>
      <StyledLink href="/about">About</StyledLink>
      <StyledLink href="/products">Products</StyledLink>
      <StyledLink href="/contact">Contact</StyledLink>
    </LinksContainer>
  );
}
