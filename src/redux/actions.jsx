import { ADD_TODO, CHANGE_TITLE, DELETE_TODO, ON_COMPLETED, SET_description } from "./actionTypes";

let count=0;

export function addTodo(title,description,color){
    return {
    type:ADD_TODO,
    id:++count,
    title,
    description,
    color,
    completed:false,
};
};


export const deleteTodo=(id)=>({
    type:DELETE_TODO,
    id
});

export const onCompleted=(id)=>({
    type:ON_COMPLETED,
    id
});

export const changeTitle=(id,title)=>({
    type:CHANGE_TITLE,
    id,
    title
});

export const setDescription=(id,description)=>({
    type:SET_description,
    id,
    description
});