import Container from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Paragraph } from "../../common/Section/styled";

const AuthorPage = () =>
   (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Zbigniew Forys"
        body= { <>{"   "}
          <Paragraph><strong>Jestem szefem wszyskich szefów.</strong></Paragraph>
          <Paragraph>Nikt mi nie podskoczy</Paragraph>
             </>
        }
      ></Section>
    </Container>
  );
  export default AuthorPage;
      
