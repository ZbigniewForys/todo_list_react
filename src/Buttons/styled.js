import styled,{css}  from "styled-components";

export const StyledButtons= styled.div `
   padding: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
    align-items: center;
    border: none;
`
export const StyledButton =styled.button `
    color: teal;
    border: none;
    background-color: transparent;
    transition: color 1s;
   
&:hover {
    color: rgb(66, 30, 101);
}

&:disabled {
    color: silver;
}

${({hideDone})=>hideDone && css`
   display: none;
    border: none;
`}
`;

