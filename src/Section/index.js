import {StyledSection,StyledSectionTitle,StyledSectionHeader} from "./styled";

const Section = ({ title, body, buttons }) => (
     <StyledSection>
          <StyledSectionHeader>
               <StyledSectionTitle>{title}</StyledSectionTitle>
               {buttons}
          </StyledSectionHeader>
          {body}
     </StyledSection>
);

export default Section;
