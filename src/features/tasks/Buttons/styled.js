import styled, { css } from "styled-components";

export const StyledButtons = styled.div`
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

  &:hover {
    filter: brightness(50%);
  }

  &:disabled {
    color: silver;
  }

  ${({ hideDone }) =>
    hideDone &&
    css`
      display: none;
      border: none;
    `}
`;
