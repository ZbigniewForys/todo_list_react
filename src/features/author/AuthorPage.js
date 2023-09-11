import Container from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Paragraph } from "../../common/Section/styled";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Zbigniew Forys"
      body={
        <>
          <Paragraph>
            <strong>Programowanie jest moją pasją.</strong>
          </Paragraph>
          <Paragraph>
            Na co dzień zajmuję się produkcją i sprzedażą{" "}
            <a href="https:/www.boleslawieckaceramika.pl">
              ceramiki bolesławieckiej
            </a>{" "}
            w sklepie internetowym.
          </Paragraph>
        </>
      }
    ></Section>
  </Container>
);
export default AuthorPage;
