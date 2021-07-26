import React from "react";
import styled from "styled-components";
import SecondaryButton from "../Button/SecondaryButton";
import { BaseButtonProps, PolymorphicComponent, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(SecondaryButton)<InactiveButtonProps>`
  background-color: transparent;
  border: none;
  color: #8B8B8B;
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const SecondaryMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant="tertiary" {...props} />;
  }

  return <SecondaryButton as={as} variant={variant} {...props} />;
};

export default SecondaryMenuItem;
