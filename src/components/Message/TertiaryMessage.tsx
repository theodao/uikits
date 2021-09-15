import React from "react";
import styled from "styled-components";
import { useTooltip } from "../../hooks/useTooltip";
import { Text } from "../Text";
import { SecondaryInfoIcon } from "../Svg";
import { TertiaryMessageProps } from "./types";

const StyledIcon = styled(SecondaryInfoIcon)`
  cursor: pointer;
`;
const StyledSpan = styled.span`
vertical-align: middle;
`;

const TertiaryMessage: React.FC<TertiaryMessageProps> = ({ children, hoverContent, hoverPlacement, ...props }) => {
  const {
    tooltipVisible: tooltipVisibleHover,
    targetRef: targetRefHover,
    tooltip: tooltipHover,
  } = useTooltip(hoverContent, { placement: hoverPlacement, trigger: "hover" });

  return (
    <>
      <Text {...props}>
        {children}
        <StyledSpan ref={targetRefHover}>
          <StyledIcon ml="10px" />
        </StyledSpan>
      </Text>
      {tooltipVisibleHover && tooltipHover}
    </>
  );
};

TertiaryMessage.defaultProps = {
  hoverPlacement: "right",
};

export default TertiaryMessage;
