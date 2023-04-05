import "./style.css";

const Buttons = (props) => (<div className="buttons">
      <button className={`buttons__button  ${props.tasks.length === 0
            ? " buttons__button--hide" : ""} `}
      >  {props.hideTasks ? "Pokaż " : "Ukryj "}wykonane</button>

      <button className={`buttons__button  ${props.tasks.length === 0
            ? " buttons__button--hide" : ""} `}
            disabled={props.tasks.every(({ done }) => done)}
      >Zaznacz wszystkie</button>
</div>);

export default Buttons;


