import React from "react";
import { ColorProps, StylesProps } from "styled-system";

export interface TabMenuProps {
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  children: React.ReactElement[];
  wrapperStyle?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
}
export interface TabProps extends ColorProps {
  isActive?: boolean;
  onClick?: () => void;
  scale?: "md" | "lg";
}
