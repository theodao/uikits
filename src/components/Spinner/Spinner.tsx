import React from "react";
import styled from "styled-components";
import PancakeRound from "../Svg/Icons/PancakeRound";
import { SpinnerProps } from "./types";

const Container = styled.div`
  position: relative;
`;

const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <Container>
      <PancakeRound />
    </Container>
  );
};

export default Spinner;
