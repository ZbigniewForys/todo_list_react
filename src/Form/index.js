 import {  useState, useRef } from 'react';
import {
    StyledForm,
    StyledFormInput,
    StyledFormButtonAddTask
} from "./styled";

const Form = ({ addNewTask }) => {
    const inputRef = useRef(null);

    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim().length > 0)
            addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledFormInput
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            ></StyledFormInput>
            <StyledFormButtonAddTask
                >Dodaj zadanie
            </StyledFormButtonAddTask>
        </StyledForm>
    );
};

export default Form;