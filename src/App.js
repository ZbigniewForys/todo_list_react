import { useState } from 'react';
import Container from "./Container";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "./Section";

import "./index.css";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([])

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  }
  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true, }))
    );
  }
  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [...tasks,{content: newTaskContent.trim(),
       id:  tasks.length===0 ? 1 : tasks[tasks.length-1].id+1,  done:false, },]);
  };

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
}

export default App;
