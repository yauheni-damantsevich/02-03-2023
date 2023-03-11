import styled from "@emotion/styled";

export const Wrapper = styled.div`
  z-index: 3;
  display: flex;
  @media (max-width: 768px) {
    align-self: center;
  }
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

export const SpanCallDescription = styled.a`
  font-family: "Lato";
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 40px;
  color: #d6a43b;
  text-decoration: none;
`;
