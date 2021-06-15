import React from "react";
import uniqueId from "lodash/uniqueId";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const id = uniqueId("svg");

  return (
    <Svg viewBox="0 -3 30 30" {...props}>
      <path
        fillRule="evenodd"
        d="M4.372 7.24a.774.774 0 00-.253-.654l-1.866-2.25V4H8.05l4.482 9.83L16.473 4H22v.336l-1.597 1.53a.468.468 0 00-.177.449v11.248c-.028.17.04.343.177.448l1.56 1.53v.337h-7.844v-.336l1.616-1.569c.158-.158.158-.205.158-.447V8.434l-4.49 11.407h-.607L5.566 8.434v7.645c-.043.321.064.645.29.877l2.1 2.548v.337H2v-.337l2.1-2.548c.226-.233.326-.558.272-.877V7.24z"
      ></path>
    </Svg>
  );
};

export default Icon;
