import styled from "@emotion/styled";

export const BlockWrapper = styled.div`
  top: 198px;
  right: 0;
  display: flex;
  gap: 85px;
  background: #343638;
  max-width: 1191px;
  align-self: flex-end;
  @media (max-width: 992px) {
    gap: 16px;
  }
  @media (max-width: 768px) {
    max-width: calc(100% - 32px);
    flex-direction: column;
    z-index: 3;
    align-self: center;
    padding: 0 0 16px 0;
  }
`;

export const Image = styled.img``;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 12.396vw 0 0;
  @media (max-width: 992px) {
    padding: 0 16px 0 0;
  }
  @media (max-width: 768px) {
    padding: 0;
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
    padding: 16px;
    max-width: 100%;
  }
`;
