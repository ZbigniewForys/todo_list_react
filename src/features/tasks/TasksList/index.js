import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { useEffect } from "react";
import { List, Button, Task, Paragraph } from "./styled";

const TasksList = () => {
  const dispatch = useDispatch();
  const { tasks, hideDone } = useSelector(selectTasks);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <List>
      {tasks.map((task) => (
        <Task key={task.id} hidden={task.done && hideDone}>
          <Button
            onClick={() => {
              dispatch(toggleTaskDone(task.id));
            }}
          >
            {task.done ? "✓" : ""}
          </Button>
          <Paragraph taskDone={task.done ? "✓" : ""}>{task.content}</Paragraph>
          <Button
            onClick={() => {
              dispatch(removeTask(task.id));
            }}
            remove
          >
            🗑
          </Button>
        </Task>
      ))}
    </List>
  );
};

export default TasksList;
