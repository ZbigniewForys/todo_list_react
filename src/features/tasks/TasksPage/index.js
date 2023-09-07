import Container from "../../../common/Container/styled";
import Form from "./Form";
import TasksList from "./TasksList";
import ButtonAddDefault from "./ButtonAddExample";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań"></Header>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        buttons={<ButtonAddDefault />}
      />
      <Section title="Wyszukiwarka" body={<Search />} />
      <Section title="Lista zadań" buttons={<Buttons />} body={<TasksList />} />
    </Container>
  );
}
export default TasksPage;
