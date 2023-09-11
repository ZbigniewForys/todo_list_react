import styled, { css } from "styled-components";
export const WrapButtons = styled.div`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  align-items: center;
  border: none;
`;
export const Button = styled.button`
  color: ${({ theme }) => theme.color.teal};
  border: none;
  background-color: transparent;
  transition: color 1s;

  &:disabled {
    color: black;
  }

  &:hover {
    filter: brightness(50%);
  }

  ${({ hideDone }) =>
    hideDone &&
    css`
      display: none;
      border: none;
    `}
`;
