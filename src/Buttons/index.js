import "./style.css";

const Buttons = ({tasks},{hideTasks}) => {
      if (tasks.length > 0)
            return (
                  <div className="buttons">
                        <button className="buttons__button"
                        >  {hideTasks ? "Pokaż " : "Ukryj "}wykonane
                        </button>
                        <button className="buttons__button"
                              disabled={tasks.every(({ done }) => done)}
                        >Zaznacz wszystkie</button>
                  </div>)
      else {
            return null;
      }
};
      export default Buttons;
