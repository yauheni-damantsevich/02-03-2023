import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img``;

export const ContentWrapper = styled.button`
  position: absolute;
  z-index: 2;
  top: 54px;
  right: -88px;
  max-width: 187px;
  min-height: 187px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 26px;
  background: #d6a43b;
  padding: 0 26px;
  cursor: pointer;
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
