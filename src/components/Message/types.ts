import { SpaceProps } from "styled-system";
import { Placement, Padding } from "@popperjs/core";

export const variants = {
  WARNING: "warning",
  DANGER: "danger",
} as const;

export type Variant = typeof variants[keyof typeof variants];

export interface MessageProps extends SpaceProps {
  variant: Variant;
}

export interface TertiaryMessageProps extends SpaceProps {
  hoverContent: string
  hoverPlacement: Placement
}