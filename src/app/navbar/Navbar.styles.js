'use client';

import styled, { css } from "styled-components";

// ------------------------------general styles------------------------------
export const NavbarContainer = styled.nav`
    padding: 16px 32px;
    display: flex;
    flex direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    z-index: 999;

    @media (max-width: 425px) {
        padding: 16px 8px;
    }
`;

export const NavSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

// ------------------------------logo styles------------------------------
export const LogoMenuWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoBtn = styled.a`
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LogoImg = styled.img`
    height: 40px;
    width: auto;
    cursor: pointer;
`;

export const LogoText = styled.div`
    font-family: 'Playfair Display', serif;
    font-size: x-large;
    font-weight: 700;
    margin-left: 12px;
    color: #4f5a5d;
    margin: 0;

    @media (max-width: 768px) {
        font-size: large;
    }
;`;

// ------------------------------links styles------------------------------
const rowStyle = css`
    flex-direction: row;
    gap: 2rem;
    margin-right: 32px;
`;

const columnStyle = css`
    flex-direction: column;
    gap: 1rem;
    padding-top: 40px;

    a {
        width: 100%;
        text-align: center;
        padding: 24px 0 8px;
        border-bottom: 1px solid #ddd;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    ${({ $isColumn }) => ($isColumn ? columnStyle : rowStyle)};
`;

export const StyledLink = styled.a`
    display: inline-block;
    position: relative;
    overflow: hidden;
    margin: 0 16px;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #708D81;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: translateX(0);
    }
`;

// ------------------------------widget styles------------------------------
export const WidgetContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const WidgetIconWrapper = styled.a`
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin: 0 16px;

    &::after {
        content: attr(data-tooltip);
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%) translateY(0);
        opacity: 0;
        color: #2A2A2A;
        font-size: 12px;
        white-space: nowrap;
        pointer-events: none;
        transition: 0.2s ease;
    }

    &:hover::after {
        transform: translateX(-50%) translateY(-14px);
        opacity: 1;
    }

    @media (max-width: 425px) {
        margin: 0 8px;
    }
`;

export const WidgetIcon = styled.img`
    height: 24px;
    width: auto;
    display: block;
`;
