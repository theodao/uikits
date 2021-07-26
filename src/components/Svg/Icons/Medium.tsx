import React from "react";
import uniqueId from "lodash/uniqueId";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const id = uniqueId("svg");

  return (
    <Svg width="20" height="16" fill="none" viewBox="0 0 20 16" {...props}>
      <path
        fill="#8B8B8B"
        d="M18.404 1.944L20 .418V.083h-5.528l-3.94 9.807L6.049.083H.253v.335l1.864 2.244a.782.782 0 01.252.652v8.82c.058.317-.046.643-.269.874L0 15.553v.33h5.954v-.334l-2.1-2.54a1.037 1.037 0 01-.289-.876V4.505l5.227 11.382h.607l4.494-11.382v9.067c0 .24 0 .289-.156.446l-1.617 1.564v.335h7.843v-.335l-1.558-1.525a.463.463 0 01-.178-.445V2.389a.461.461 0 01.177-.445z"
      ></path>
    </Svg>
  );
};

export default Icon;
