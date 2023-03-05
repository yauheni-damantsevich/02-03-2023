import styled from "@emotion/styled";
import Bg6 from "../../assets/bg6.png";

export const LogoIcon = styled.img`
  align-self: center;
  margin: 99px 0 0 0;
`;

export const SectionWrapper = styled.section`
  background-image: url(${Bg6});
  background-repeat: no-repeat;
  background-color: #343638;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 1006px;
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

export const ContentWrapper = styled.div`
  display: flex;
  gap: 160px;
  justify-content: center;
  margin: 0 0 34px 0;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #d6a43b;
`;

export const StayConnectedButton = styled.button`
  display: flex;
  gap: 16px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const StayConnectedIcon = styled.img`
  padding: 31px 0;
`;

export const StayConnectedText = styled.p`
  align-self: center;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 44px;
  color: #ffffff;
`;

export const AddressBlock = styled.div`
  display: flex;
  gap: 16px;
  padding: 22px 0;
`;

export const AddressIconImage = styled.img`
  max-width: 46px;
  max-height: 46px;
`;

export const Description = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #ffffff;
  white-space: pre-wrap;
`;

export const Copyright = styled.p`
  align-self: center;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 55px;
  color: #ffffff;
`;

export const LargeLogo = styled.img`
  top: 366px;
  right: 0;
  position: absolute;
  z-index: 2;
`;
