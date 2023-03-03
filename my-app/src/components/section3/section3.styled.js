import styled from "@emotion/styled";
import { css } from "@emotion/react/macro";

export const MainWrapper = styled.section`
  position: relative;
  padding: 77px 0 102px 0;
  background: #343638;
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 94px;
  max-width: 419px;
`;

export const LargeDescription = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 40px;
  color: #ffffff;
  text-align: right;
`;

export const Icon = styled.img`
  align-self: flex-start;
  padding: 24px 0 0 0;
`;

export const SmallDescription = styled.p`
  max-width: 502px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  color: #ffffff;
`;

export const Span = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #d6a43b;
`;

export const LargeLogo = styled.img`
  top: -122px;
  right: 0;
  position: absolute;
  z-index: 2;
`;
