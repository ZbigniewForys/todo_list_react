
import "./style.css"
const TasksList = ({ tasks, hideTasks }) => {
    return (
        <ul className="tasksList">
            {tasks.map(task => (
                <li key={task.id}
                    className=
                    {(hideTasks && task.done ?
                        "tasksList__line tasksList__line--hidden"
                        : "tasksList__line")}
                >
                    <ul className="taskList__ul">
                        <button className="tasksList__button">
                            {task.done ? "✓" : ""}
                        </button>
                    </ul>
                    <ul className="taskList__ul">
                        <p className=
                            {task.done ?
                                "tasksList__paragraph  tasksList__paragraph--done"
                                : "tasksList__paragraph"}
                        > {task.content}
                        </p>
                    </ul>
                    <ul className="taskList__ul">
                        <button className="tasksList__button tasksList__button--remove">🗑
                        </button>
                    </ul>
                </li>

            ))}
        </ul>
    );
};
export default TasksList;

