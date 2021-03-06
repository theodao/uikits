import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { Text } from "../../../components/Text";
import { Colors } from "../../../theme/types";
import { MENU_ENTRY_HEIGHT } from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
  isPushed?: boolean;
  isHovered?: boolean;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean; isActive: boolean }>`
  color: ${({ isPushed, isActive, theme }) => (isPushed ? (isActive ? "#FFFFFF" : "#C3C3C3") : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "13px" : "14px")};
  line-heigh: 24px;
  background-color: ${({ isActive }) => (isActive ? "#1A1A1A" : "#282828")};
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  &::before {
    display: ${({ isActive, isHovered }) => (isActive || isHovered ? "block" : "none")};
    width: 25px;
    height: 25px;
    z-index: 9999;
    border-bottom-right-radius: 50px;
    background-color: transparent;
    box-shadow: 7px 5px 0px 1px #1a1a1a;
    top: -24px;
    right: 0px;
    position: absolute;
    content: "";
  }

  &::after {
    display: ${({ isActive, isHovered }) => (isActive || isHovered ? "block" : "none")};
    width: 25px;
    height: 25px;
    z-index: 9999;
    border-top-right-radius: 50px;
    background-color: transparent;
    box-shadow: 7px -5px 0px 1px #1a1a1a;
    bottom: -24px;
    right: 0px;
    position: absolute;
    content: "";
  }

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ isActive }) => (isActive ? "#FFFFFF" : "#C3C3C3")};
  }

  &:hover {
    background-color: #1a1a1a;
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
};

const LinkStatus = styled(Text)<{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: #c3c3c3;
  margin-left: 8px;
`;

const LinkLabelMemo = React.memo(
  LinkLabel,
  (prev, next) => prev.isPushed === next.isPushed && prev.isActive === next.isActive
);

export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };
