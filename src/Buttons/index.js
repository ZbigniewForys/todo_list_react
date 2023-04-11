import "./style.css";

const Buttons = ({tasks,hideDone,toggleHideDone,setAllDone}) => {
    
      if (tasks.length > 0)
            return (
                  <div className="buttons">
                        <button onClick={toggleHideDone} className="buttons__button"
                        >  {hideDone ? "Pokaż " : "Ukryj "}wykonane
                        </button>
                        <button onClick={setAllDone}  className="buttons__button"
                              disabled={tasks.every(({done }) => done)}
                        >Zaznacz wszystkie</button>
                  </div>)
      else {
            return null;
      }
};
      export default Buttons;
