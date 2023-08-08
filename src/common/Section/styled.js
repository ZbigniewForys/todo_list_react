import styled from "styled-components";
export const StyledSection = styled.section`
  background-color:${({theme})=>theme.color.white};
  border-color: ${({theme})=>theme.color.gallery};
  border-style: solid;
`;
export const SectionTitle = styled.h3`
  padding: 20px;
  margin: 0;
`;
export const SectionHeader = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  border: 0;
  border-bottom: 3px;
  border-color: ${({theme})=>theme.color.gallery};
  border-style: solid;
`;
