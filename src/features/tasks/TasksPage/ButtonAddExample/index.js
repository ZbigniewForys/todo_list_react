import { Button, WrapButtons } from "../../../../common/Button/styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
const ButtonAddDefault = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  return (
    <WrapButtons>
      <Button onClick={() => dispatch(fetchExampleTasks())} 
      disabled={loading}
       >
        {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </Button>
    </WrapButtons>
  );
};
export default ButtonAddDefault;
