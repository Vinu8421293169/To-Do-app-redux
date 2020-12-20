import { ADD_TODO, CHANGE_TITLE, DELETE_TODO, ON_COMPLETED, SET_description } from "./actionTypes";

const initialState=JSON.parse(localStorage.getItem("state")) || [];

let count = 0;

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        id: ++count,
        title: action.title,
        description: action.description,
        color: action.color,
        completed: action.completed
      }];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case SET_description:
      return state.map(itm=>itm.id===action.id?{...itm,description:action.description}:itm);
    case ON_COMPLETED:
      return state.map(itm=>itm.id===action.id?{...itm,completed:!action.completed}:itm);
    case CHANGE_TITLE:
      return state.map(itm=>itm.id===action.id?{...itm,title:action.title}:itm);
    default:
      return state;
  }
}

export default reducer;
