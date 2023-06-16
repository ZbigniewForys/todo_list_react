
import {
    StyledTasksList,
    StyledTasksListButton,
    StyledTasksListLine,
    StyledTasksListParagraph
} from "./styled";

const TasksList = ({
    tasks,
    hideDone,
    removeTask,
    toggleTaskDone }) => (
    <StyledTasksList>
        {tasks.map(task =>
            <StyledTasksListLine
                key={task.id}
                hidden={task.done && hideDone}
            >
                <StyledTasksListButton onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✓" : ""}
                </StyledTasksListButton>
                <StyledTasksListParagraph
                    taskDone={task.done ? "✓" : ""}
                >
                    {task.content}
                </StyledTasksListParagraph>
                <StyledTasksListButton
                    onClick={() => removeTask(task.id)}
                    remove>🗑
                </StyledTasksListButton>
            </StyledTasksListLine>
        )}
    </StyledTasksList>
);

export default TasksList;
