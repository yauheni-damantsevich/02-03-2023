import styled from "@emotion/styled";
import Bg2 from "../../assets/bg2.png";

export const SectionWrapper = styled.section`
  background-image: url(${Bg2});
  background-repeat: no-repeat;
  background-color: #343638;
  height: 726px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 768px) {
    padding: 0 0 140px 0;
    background-size: cover;
  }
`;

export const H2 = styled.h2`
  margin: 35px 0 24px 0;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 139px;
  color: #ffffff;
  align-self: center;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 28px;
    line-height: 70px;
  }
`;

export const LargeLogo = styled.img`
  top: 83px;
  position: absolute;
  z-index: 1;
`;
