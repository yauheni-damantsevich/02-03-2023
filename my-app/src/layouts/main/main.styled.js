import styled from "@emotion/styled";
import Bg1 from "../../assets/bg1.png";

export const Container = styled.div`
  max-width: 1450px;
  padding: 0 16px;
  margin: 0 auto;
`;

export const Section1 = styled.section`
  background-image: url(${Bg1});
  background-repeat: no-repeat;
  background-color: #343638;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const MainContent = styled.div`
  padding: 191px 0 44px 0;
`;

export const H1 = styled.h1`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 139px;
  color: #ffffff;
  /* fix with font */
  margin: 0 0 30px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  max-width: 479px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  color: #ffffff;
`;

export const SmallDescription = styled.p`
  max-width: 410px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  color: #ffffff;
`;

export const TabWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 44px;
  margin: 0 0 38px 0;
  &::after {
    content: "";
    position: absolute;
    top: calc(100% + 7px);
    left: 0;
    width: 100%;
    height: 1px;
    background: #d6a43b;
  }
`;

export const Tab = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Lato";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 55px;
  color: #ffffff;
`;

export const SmallWrapper = styled.div`
  display: flex;
  gap: 11px;
`;

export const SpanWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpanDescription = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  color: #ffffff;
`;

export const SpanCallDescription = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 40px;
  color: #ffffff;
`;

export const CallLogoIcon = styled.img`
  /* fix with font */
`;

export const ArrowDown = styled.button`
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  top: 633px;
  right: 50%;
  transform: translateX(-50%);
`;

export const ArrowDownButtonIcon = styled.img``;
