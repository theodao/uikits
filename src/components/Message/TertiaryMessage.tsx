import React from "react";
import styled from 'styled-components'
import { useTooltip } from '../../hooks/useTooltip'
import { Box } from '../Box'
import Flex from '../Box/Flex'
import { SecondaryInfoIcon } from "../Svg";
import { TertiaryMessageProps } from './types'

const StyledIcon = styled(SecondaryInfoIcon)`
  cursor: pointer;
`
const StyledSpan = styled.span``

const TertiaryMessage: React.FC<TertiaryMessageProps> = ({ children, hoverContent, hoverPlacement, ...props }) => {
  const {
    tooltipVisible: tooltipVisibleHover,
    targetRef: targetRefHover,
    tooltip: tooltipHover,
  } = useTooltip('Hovering: \n -Dumpster', { placement: hoverPlacement, trigger: "hover" });

  return (
    <Flex {...props} alignItems="center">
      {children}
      <StyledSpan ref={targetRefHover}>
        <StyledIcon ml="10px" />
      </StyledSpan>
      {tooltipVisibleHover && tooltipHover}
    </Flex>
  );
};

TertiaryMessage.defaultProps = {
  hoverPlacement: 'right'
}

export default TertiaryMessage;
