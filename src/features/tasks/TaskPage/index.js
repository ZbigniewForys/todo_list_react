import { useSelector } from "react-redux";
import Container from "../../../common/Container/styled";
import { Paragraph } from "../../../common/Section/styled";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom";
import { getTasksById } from "../tasksSlice";

function TaskPage() {
  const params = useParams();
  const task = useSelector((state) => getTasksById(state, params.id));
  return (
    <Container>
      <Header title="Szczegóły zadania"></Header>

      <Section
        title={task ? task.content : "Nie znaleziono zadania"}
        body={
          !!task && (
            <Paragraph>
              <strong>Ukończono:</strong>
              {task.done ? " Tak" : " Nie"}
            </Paragraph>
          )
        }
      />
    </Container>
  );
}

export default TaskPage;
