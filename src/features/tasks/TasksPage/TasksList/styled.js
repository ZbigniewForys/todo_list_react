import styled, { css } from "styled-components";

export const List = styled.object`
  padding: 0 3px 20px;
  margin: 0;
`;
export const Header = styled.header`
  margin: 0 12px 20px;
  padding-left: 5px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const Task = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  border-bottom: 1px;
  border-color: ${({ theme }) => theme.color.lightgray};
  border-bottom-style: solid;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;
export const Button = styled.button`
  margin:10px;
  height: 25px;
  width: 15px;
  border-style: none;
  background-color: ${({ theme }) => theme.color.green};
  color: white;
  font-weight: 700;
  transition: transform 0.2s, color 0.7s;
  &:hover {
    filter: brightness(130%);
  }
  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.red};
      transition: transform 0.2s, color 0.7s;

      &:hover {
        filter: brightness(130%);
      }
    `};
`;
export const Content = styled.span`
  margin: 5px;
  padding: 5px;
  width: 100%;
  overflow: auto;
  display: inline - block;
  ${({ taskDone }) =>
    taskDone &&
    css`
      color: ${({ theme }) => theme.color.gray};
      text-decoration: line-through;

      @media (max-width: 767px) {
        padding: 0;
        width: 80%;
      }
    `}
`;
