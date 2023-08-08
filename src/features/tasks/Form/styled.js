import styled from "styled-components";
export const StyledForm = styled.form`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;
export const Input = styled.input`
  margin: 20px 0px 20px 20px;
  height: 30px;
  padding: 10px;
  flex-grow: 1;

  &:focus {
    border-color: ${({ theme }) => theme.color.alto};
  }
  @media (max-width: 767px) {
    padding-left: 0;
    width: 100%;
    margin: 0;
  }
`;
export const Button = styled.button`
  flex-basis: 130px;
  padding: 0 10px;
  margin: 0 20px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.teal};
  height: 30px;
  border-style: none;
  transition: transform 0.2s, color 0.7s;

  &:hover {
    filter: brightness(120%);
    transform: scale(1.05);
  }

  @media (max-width: 767px) {
    flex-grow: 1;
    margin: 5px 0;
  }
`;
