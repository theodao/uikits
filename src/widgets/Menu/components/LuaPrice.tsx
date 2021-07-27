import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  luaPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  background-color: #353535;
  border-radius: 50px;
  width: 50%;
  padding: 14px;
  margin-right: 4px;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ luaPriceUsd }) => {
  return luaPriceUsd ? (
    <PriceLink href="https://info.luaswap.org/token/0xb1f66997a5760428d3a87d68b90bfe0ae64121cc" target="_blank">
      <PancakeRoundIcon />
      <Text color="#FFFFFF" bold>{`$${luaPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
