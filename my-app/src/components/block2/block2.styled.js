import styled from "@emotion/styled";

export const BlockWrapper = styled.div`
  top: 198px;
  right: 0;
  display: flex;
  gap: 85px;
  background: #d6a43b;
  max-width: 1191px;
  align-self: flex-start;
  @media (max-width: 992px) {
    gap: 16px;
  }
  @media (max-width: 768px) {
    max-width: calc(100% - 32px);
    flex-direction: column;
    z-index: 3;
    align-self: center;
  }
`;

export const Image = styled.img`
  @media (max-width: 768px) {
    order: 1;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 0 0 238px;
  @media (max-width: 992px) {
    padding: 0 0 0 16px;
  }
  @media (max-width: 768px) {
    order: 2;
  }
`;

export const Description = styled.p`
  max-width: 402px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  color: #ffffff;
  @media (max-width: 768px) {
    margin: 16px 0 0 0;
    max-width: 100%;
  }
`;

export const Span = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 30px;
  color: #ffffff;
`;
