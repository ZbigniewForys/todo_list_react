
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import "./index.css";

const tasks = [
  { id: 1, content: "Zadanie 1", done: true },
  { id: 2, content: "Zadanie 2", done: false },
];
const hideTasks = false;

function App() {
  return (
  <Container>
    <h1 className="header">Lista zadań</h1>
    <Section title="Dodaj nowe zadanie"
      body={<Form />}
    /> 
    <Section title="Lista zadań"
      buttons={<Buttons tasks={tasks} hideTasks={hideTasks} />}
      body={<TasksList tasks={tasks} hideTasks={hideTasks} />}
    />
  </Container>

);
}
  

export default App;
