import React from "react";
import "./styles.css";
import ToDo from "./ToDo";
import ColorPicker from "./ColorPicker.jsx";
import colors from "./colors.js";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";


function List(props) {
  const [selectedColor, setSelectedColor] = React.useState(
    colors[parseInt(Math.random() * colors.length, 10)]
  );


  const handleChange = (color, event) => {
    setSelectedColor(color.hex);
  };

  return (
    <div>
      <div className="selection_box">
        <ColorPicker className="color_picker" handleChange={handleChange} />
        <div className="addToDo" onClick={() => props.dispatch(addTodo("","",selectedColor))}>
          + ADD TO-DO
        </div>
      </div>
      <div className="list">
        {props.state.length !== 0
          ? props.state.map((todo) => (
              <ToDo todo={todo} />
            ))
          : "No Tasks Left"}
      </div>
    </div>
  );
}



function mapPropsToSTate(state) {
  return{
    state
  }  
}


export default connect(mapPropsToSTate)(List);