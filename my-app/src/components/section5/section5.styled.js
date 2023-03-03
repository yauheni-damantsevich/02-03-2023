import styled from "@emotion/styled";
import Bg4 from "../../assets/bg4.png";

export const SectionWrapper = styled.section`
  background-image: url(${Bg4});
  background-repeat: no-repeat;
  background-color: #343638;
  height: 726px;
  display: flex;
  flex-direction: column;
  position: relative;
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
`;

export const WrapperColor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 35px 62px;
  background: #d6a43b;
  max-height: 150px;
`;

export const Image = styled.img`
  max-width: 67px;
  max-height: 65px;
  align-self: center;
`;

export const MainWrapper = styled.div`
  display: flex;
  gap: 173px;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 452px;
`;

export const Description = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  color: #ffffff;
  margin: 0 0 57px 0;
`;

export const SmallWrapper = styled.div`
  display: flex;
`;

export const CallIcon = styled.img`
  max-width: 57px;
  max-height: 57px;
  padding: 10px 10px 10px 0;
`;

export const SpanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 54px 0;
`;

export const SmallDescription = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 40px;
  color: #ffffff;
`;

export const SpanCallDescription = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 40px;
  color: #d6a43b;
`;

export const LargeLogo = styled.img`
  top: 72px;
  left: 0;
  position: absolute;
  z-index: 2;
`;
