import React from "react";
import Flex from '../Box/Flex'
import { SecondaryInfoIcon } from "../Svg";

const SecondaryMessage: React.FC = ({ children, ...props }) => {
  return (
    <Flex {...props} alignItems="center">
      <SecondaryInfoIcon mr="10px" />
      {children}
    </Flex>
  );
};

export default SecondaryMessage;
