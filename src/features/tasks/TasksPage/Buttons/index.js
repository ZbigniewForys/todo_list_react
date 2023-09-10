import { Button, WrapButtons } from "../../../../common/Button/styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectIsEveryTaskDone,
} from "../../tasksSlice";
const Buttons = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  if (tasks.length > 0)
    return (
      <WrapButtons>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż " : "Ukryj "}wykonane
        </Button>
        <Button
          onClick={() => dispatch(setAllDone())}
          disabled={isEveryTaskDone}
        >
          Zaznacz wszystkie
        </Button>
      </WrapButtons>
    );
};
export default Buttons;
