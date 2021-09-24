import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1100 1100" {...props}>
      <path d="M950.857 0H73.143C32.183 0 0 32.183 0 73.143v877.714C0 991.817 32.183 1024 73.143 1024h877.714c40.96 0 73.143-32.183 73.143-73.143V73.143C1024 32.183 991.817 0 950.857 0zM731.43 804.571c0 7.315-7.315 14.629-14.629 14.629s-14.629-7.314-14.629-14.629V277.943H629.03V307.2c0 7.314-7.315 14.629-14.629 14.629s-14.629-7.315-14.629-14.629v-29.257H424.23V307.2c0 7.314-7.315 14.629-14.629 14.629s-14.629-7.315-14.629-14.629v-29.257H321.83v512H630.49a13.111 13.111 0 0113.166 13.166v1.462a13.111 13.111 0 01-13.166 13.166H305.737a13.111 13.111 0 01-13.166-13.166V263.314c0-7.314 7.315-14.628 14.629-14.628h87.771v-29.257c0-7.315 7.315-14.629 14.629-14.629s14.629 7.314 14.629 14.629v29.257H599.77v-29.257c0-7.315 7.315-14.629 14.629-14.629s14.629 7.314 14.629 14.629v29.257H716.8c7.314 0 14.629 7.314 14.629 14.628v541.257zM614.4 570.514H409.6c-7.314 0-14.629-7.314-14.629-14.628s7.315-14.629 14.629-14.629h204.8c7.314 0 14.629 7.314 14.629 14.629s-7.315 14.628-14.629 14.628zm14.629 102.4c0 7.315-7.315 14.629-14.629 14.629H409.6c-7.314 0-14.629-7.314-14.629-14.629s7.315-14.628 14.629-14.628h204.8c7.314 0 14.629 7.314 14.629 14.628zM614.4 453.486H409.6c-7.314 0-14.629-7.315-14.629-14.629s7.315-14.628 14.629-14.628h204.8c7.314 0 14.629 7.314 14.629 14.628s-7.315 14.629-14.629 14.629z" />
    </Svg>
  );
};

export default Icon;