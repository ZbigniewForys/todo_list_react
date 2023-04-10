
import "./style.css"
const TasksList = ({tasks,hideDone,removeTask}) => {
    return (
        <ul className="tasksList">
            {tasks.map(task => (
                <li key={task.id}
                    className={(hideDone && task.done ?
                        "tasksList__line tasksList__line--hidden"
                        : "tasksList__line")}
                >
                    <button className="tasksList__button">
                        {task.done ? "✓" : ""}
                    </button>

                    <span className=
                        {task.done ?
                            "tasksList__paragraph  tasksList__paragraph--done"
                            : "tasksList__paragraph"}
                    > {task.content}
                    </span>

                    <button onClick={()=>removeTask(task.id)} className="tasksList__button tasksList__button--remove">🗑
                    </button>

                </li>

            ))}
        </ul>
    );
};
export default TasksList;

