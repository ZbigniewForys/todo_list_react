// import { useSelector } from "react-redux/es/hooks/useSelector";

import Container from "../../common/Container/styled";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
function Tasks() {

  return (
    <Container>
      <h1 className="header">Lista zadań</h1>
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section title="Lista zadań" 
      buttons={<Buttons />} 
      body={<TasksList />} 
      />
    </Container>
  );
}

export default Tasks;
