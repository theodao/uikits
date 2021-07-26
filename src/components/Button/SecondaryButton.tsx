import React, { cloneElement, ElementType, isValidElement } from "react";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import SecondaryStyledButton from "./SecondaryStyledButton";
import { ButtonProps, scales, variants } from "./types";

const SecondaryButton = <E extends ElementType = "button">(props: ButtonProps<E>): JSX.Element => {
  const { startIcon, endIcon, external, className, isLoading, disabled, children, ...rest } = props;
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;
  const classNames = className ? [className] : [];

  if (isLoading) {
    classNames.push("pancake-button--loading");
  }

  if (isDisabled && !isLoading) {
    classNames.push("pancake-button--disabled");
  }

  return (
    <SecondaryStyledButton
      $isLoading={isLoading}
      className={classNames.join(" ")}
      disabled={isDisabled}
      {...internalProps}
      {...rest}
    >
      {children}
    </SecondaryStyledButton>
  );
};

SecondaryButton.defaultProps = {
  isLoading: false,
  external: false,
  variant: variants.PRIMARY,
  scale: scales.MD,
  disabled: false,
};

export default SecondaryButton;
