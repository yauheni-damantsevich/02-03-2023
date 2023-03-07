import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const CardWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img``;

export const ContentWrapper = styled(Link)`
  position: absolute;
  z-index: 2;
  top: 54px;
  right: -88px;
  max-width: 135px;
  min-height: 187px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 26px;
  background: #d6a43b;
  padding: 0 26px;
  cursor: pointer;
  text-decoration: none;
`;

export const H3 = styled.h3`
  font-family: "Lato";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;

export const Description = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #343638;
`;

export const Arrow = styled.img`
  max-width: 28px;
  max-height: 32px;
  padding: 45px 55px;
`;
