
import "./style.css"
const TasksList = (props) => (
    <ul className="tasksList">
        {props.tasks.map(task => (
            <li className=
                {(props.hideTasks && task.done ? "tasksList__line tasksList__line--hidden" : "tasksList__line")}
            >
                <ul>
                    <button className="tasksList__button">
                        {task.done ? "✓" : ""}
                    </button>
                </ul>
                <ul>
                    <p className=
                        {task.done ? "tasksList__paragraph  tasksList__paragraph--done" : "tasksList__paragraph"}
                    > {task.content}
                    </p>
                </ul>
                <ul>
                    <button className="tasksList__button tasksList__button--remove js-buttonRemove">🗑</button>
                </ul>

            </li>

        ))}



    </ul>
)
export default TasksList;


// ` <li class="tasksList__line${hideTasks && task.done ? " tasksList__line--hidden" : ""}" >
// <button class="tasksList__button js-button" >
//    ${task.done ? "✓" : ""}
// </button>
// <p class="tasksList__paragraph
//    ${task.done ? " tasksList__paragraph--done " : ""}">
//    ${task.content}</p>
//  <button class="tasksList__button tasksList__button--remove js-buttonRemove">🗑</button>
// </li > `