import "./style.css";

const Buttons = ({tasks,hideDone,toggleHideDone}) => {
    
      if (tasks.length > 0)
            return (
                  <div className="buttons">
                        <button onClick={toggleHideDone} className="buttons__button"
                        >  {hideDone ? "Pokaż " : "Ukryj "}wykonane
                        </button>
                        <button className="buttons__button"
                              disabled={tasks.every(({done }) => done)}
                        >Zaznacz wszystkie</button>
                  </div>)
      else {
            return null;
      }
};
      export default Buttons;
