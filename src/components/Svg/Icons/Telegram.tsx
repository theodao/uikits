import React from "react";
import uniqueId from "lodash/uniqueId";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const id = uniqueId("svg");

  return (
    <Svg width="17" height="17" fill="none" viewBox="0 0 17 17" {...props}>
      <path
        fill="#8B8B8B"
        d="M1.62 7.608c-1.263-.56-1.16-2.385.157-2.8L14.25.867c1.158-.365 2.247.725 1.882 1.883l-3.94 12.472c-.415 1.317-2.24 1.42-2.8.158l-1.28-2.88a2 2 0 01.03-1.69L10 7 6.154 8.852a2 2 0 01-1.68.025L1.62 7.608z"
      ></path>
    </Svg>
  );
};

export default Icon;
