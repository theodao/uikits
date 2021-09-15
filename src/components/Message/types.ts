import { SpaceProps } from "styled-system";
import { Placement } from "@popperjs/core";
import { TextProps } from "../Text";

export const variants = {
  WARNING: "warning",
  DANGER: "danger",
} as const;

export type Variant = typeof variants[keyof typeof variants];

export interface MessageProps extends SpaceProps {
  variant: Variant;
}
export interface TertiaryMessageProps extends TextProps {
  hoverContent: string
  hoverPlacement: Placement
}