import styled, { css } from "styled-components";

export const StyledTasksList = styled.object`
    padding: 0 3px 20px;
    margin: 0;
`;
export const StyledTasksListHeader = styled.header`
    margin: 0 12px 20px;
    padding-left: 5px;
    background-color: white;
`;
export const StyledTaskListUl = styled.ul`
    padding-left: 0 ;
`;

export const StyledTasksListLine = styled.tr`
    padding: 5px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    border-bottom: 1px;
    border-color: lightgray;
    border-bottom-style: solid;
 
${({ hidden }) => hidden && css`
    display: none;
`}
`;
export const StyledTasksListButton = styled.button`
    margin: 10px;
    height: 30px;
    width: 30px;
    border-style: none;
    background-color: green;
    color: white;
    font-weight: 700;
    transition: transform 0.2s, color 0.7s;
&:hover {
    background-color: rgba(0, 128, 0, 0.6);
}
${({ remove }) => remove && css`
    background-color: red;
    transition: transform 0.2s, color 0.7s;

&:hover {
    background-color: rgba(251, 1, 1, 0.6);
}
`};
`;

export const StyledTasksListParagraph = styled.p` 
    margin: 5px;
    padding: 5px ;
    width: 100% ;
    display: inline - block;
    ${({ taskDone }) => taskDone && css`  
        color:gray ;
        text-decoration:line-through;
  
        @media (max-width:767px) {
        padding: 0;
        width: 80%;
    }`
    }`