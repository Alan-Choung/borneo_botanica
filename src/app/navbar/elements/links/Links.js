'use client';

import {
  LinksContainer,
  StyledLink,
} from "../../Navbar.styles";

export default function Links({ isColumn = false }) {
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <LinksContainer $isColumn={isColumn}>
      {navLinks.map(({ href, label }) => (
        <StyledLink key={href} href={href}>
          {label}
        </StyledLink>
      ))}
    </LinksContainer>
  );
}
