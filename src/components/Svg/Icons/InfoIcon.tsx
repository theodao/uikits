import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const SecondaryInfo: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" fill="none" viewBox="0 0 18 18" {...props}>
      <path
        fill="#8B8B8B"
        fillRule="evenodd"
        d="M0 9a9 9 0 1118 0A9 9 0 010 9zm9-4.991a.9.9 0 100 1.8.9.9 0 000-1.8zm0 9.832a.75.75 0 01-.75-.75V8.18a.75.75 0 011.5 0v4.91a.75.75 0 01-.75.75z"
        clipRule="evenodd"
      ></path>
    </Svg>
  );
};

export default SecondaryInfo;
