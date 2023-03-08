import styled from "@emotion/styled";

export const Button = styled.button`
  background: none;
  border: 1px solid #ffffff;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  padding: 16px 32px;
  align-self: flex-start;
  max-width: 270px;
  cursor: pointer;
  @media (max-width: 768px) {
    align-self: center;
  }
`;
