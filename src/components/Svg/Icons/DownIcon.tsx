import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="10" height="6" fill="none" viewBox="0 0 10 6" {...props}>
      <path
        fill="#D8D8D8"
        d="M9.583 0H.416a.498.498 0 00-.215.048.379.379 0 00-.153.13.28.28 0 00.025.344l4.583 5.334c.039.044.09.08.15.106a.502.502 0 00.388 0 .401.401 0 00.15-.106L9.926.522a.28.28 0 00.025-.344.379.379 0 00-.154-.13A.498.498 0 009.583 0z"
      ></path>
    </Svg>
  );
};

export default Icon;
