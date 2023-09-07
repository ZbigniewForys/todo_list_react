import styled from "styled-components";
export default styled.input`
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