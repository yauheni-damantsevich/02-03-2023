import styled from "@emotion/styled";
// import Bg1 from "../../assets/bg1.png";

export const Container = styled.div`
  max-width: 1450px;
  margin: 0 auto;
`;

export const Section1 = styled.section`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-color: #343638;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0 16px;
  @media (min-width: 992px) and (max-width: 1100px) {
    background-size: cover;
  }
  @media (max-width: 768px) {
    background-size: cover;
    background-position: center;
  }
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
  margin: 0 0 30px 0;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 40px;
    line-height: 70px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-self: center;
  }
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
  @media (max-width: 992px) {
    margin: 0 0 120px 0;
  }
  @media (max-width: 768px) {
    margin: 0 0 30px 0;
  }
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
  font-family: "Lato";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 55px;
  color: #ffffff;
  cursor: pointer;
`;

export const SmallWrapper = styled.div`
  display: flex;
  gap: 11px;
  @media (max-width: 768px) {
    margin: 0 0 44px 0;
  }
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

export const SpanCallDescription = styled.a`
  font-family: "Lato";
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 40px;
  color: #ffffff;
  text-decoration: none;
`;

export const CallLogoIcon = styled.img``;

export const ArrowDown = styled.button`
  position: absolute;
  background: none;
  border: none;
  top: 633px;
  right: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  @media (max-width: 992px) {
    top: 864px;
  }
  @media (max-width: 768px) {
    top: 900px;
  }
`;

export const ArrowDownButtonIcon = styled.img``;
