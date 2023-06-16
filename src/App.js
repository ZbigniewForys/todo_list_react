 import {  useState } from 'react';
import Container from "./Container";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "./Section";
//  import "./index.css";
import { useTasks } from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);
      const toggleHideDone = () => {
      setHideDone(hideDone => !hideDone);
    };

    const { tasks,
      removeTask,
      toggleTaskDone,
      setAllDone,
      addNewTask
    } = useTasks();
    return (
      <Container>
        <h1 className="header">Lista zadań</h1>
        <Section title="Dodaj nowe zadanie"
          body={<Form
            addNewTask={addNewTask}
          />}
        />
        <Section title="Lista zadań"
          buttons={
            <Buttons tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />}
          body={
            <TasksList
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />}
        />
      </Container>
    );
  };

  export default App;
