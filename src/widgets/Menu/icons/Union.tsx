import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="20" height="20" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#8B8B8B"
        fillRule="evenodd"
        d="M9.64 0c3.177 0 6.096 1.607 7.855 4.04l.29-1.14a.75.75 0 011.453.368l-.74 2.925a.75.75 0 01-.924.541l-2.87-.642a.75.75 0 11.328-1.463l1.238.276C14.784 2.86 12.316 1.5 9.64 1.5a8.113 8.113 0 00-8.13 8.13.75.75 0 11-1.5 0A9.613 9.613 0 019.64 0zM2.97 15.131l2.158.522a.75.75 0 10.352-1.458l-3.86-.934a.75.75 0 00-.913.59l-.694 3.666a.75.75 0 001.474.279l.324-1.71C3.579 18.448 6.452 20 9.574 20a9.613 9.613 0 009.63-9.63.75.75 0 10-1.5 0 8.113 8.113 0 01-8.13 8.13c-2.66 0-5.115-1.344-6.603-3.37z"
        clipRule="evenodd"
      ></path>
    </Svg>
  );
};

export default Icon;
