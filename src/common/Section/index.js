import { StyledSection, SectionTitle, SectionHeader } from "./styled";

const Section = ({ title, body, buttons }) => (
  <StyledSection>
    <SectionHeader>
      <SectionTitle>{title}</SectionTitle>
      {buttons}
    </SectionHeader>
    {body}
  </StyledSection>
);

export default Section;
