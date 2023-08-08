
import { StyledButtons, Button } from "./styled";
import {useSelector,useDispatch} from "react-redux";
import { selectTasks,toggleHideDone,setAllDone } from "../tasksSlice";
const Buttons = () => {
  const {tasks,hideDone} = useSelector(selectTasks);
  const dispatch = useDispatch();
   if (tasks.length > 0)
    return (
      <StyledButtons>
        <Button onClick={()=>dispatch(toggleHideDone())}>
              
          {hideDone ? "Pokaż " : "Ukryj "}wykonane
        </Button>
        <Button
          onClick={()=>dispatch(setAllDone())}
          disabled={tasks.every(({ done }) => done)}
        >
          Zaznacz wszystkie
        </Button>
      </StyledButtons>
    );
  else {
    return null;
  }
};
export default Buttons;
