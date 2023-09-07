import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { StyledForm, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../../Input";

const Form = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [newTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim().length > 0)
      dispatch(
        addTask({
          content: newTaskContent.trim(),
          done: false,
          id: nanoid(),
        })
      );
    setNewTaskContent("");
    inputRef.current.focus();
  };
  
  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      ></Input>
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};
export default Form;
