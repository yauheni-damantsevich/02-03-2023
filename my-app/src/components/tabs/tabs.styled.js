import styled from "@emotion/styled";

export const TabWrapper = styled.div`
  z-index: 2;
  display: flex;
  gap: 28px;
  align-self: center;
  padding: 0 0 73px 0;
`;

export const Button = styled.button`
  background: #ffffff;
  color: #d6a43b;
  padding: 23px 83px;
  &.active {
    background: #d6a43b;
    color: #ffffff;
  }
`;
