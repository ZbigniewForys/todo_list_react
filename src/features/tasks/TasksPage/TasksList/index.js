import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  selectHideDone,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice";
import { List, Button, Task, Content } from "./styled";

const TasksList = () => {
  const dispatch = useDispatch();
  const hideDone = useSelector(selectHideDone);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("szukaj");
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
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
          <Content taskDone={task.done ? "✓" : ""}>
            <Link to={`/tasks/${task.id}`}>{task.content}</Link>
          </Content>
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
