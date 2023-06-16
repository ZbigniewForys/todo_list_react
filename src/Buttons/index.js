import  { StyledButtons ,StyledButton } from "./styled"
 
const Buttons = ({tasks,hideDone,toggleHideDone,setAllDone}) => {
          if (tasks.length >0)
            return (
                  <StyledButtons>
                        <StyledButton onClick={toggleHideDone} 
                        >  {hideDone ? "Pokaż " : "Ukryj "}wykonane
                        </StyledButton>
                        <StyledButton 
                        onClick={setAllDone}  
                        disabled={tasks.every(({done }) => done)}
                        >Zaznacz wszystkie</StyledButton>
                  </StyledButtons>)
      else {
            return null;
      }
};
      export default Buttons;
