import React, { useState } from "react";
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';

const ListCom = (props) => {
 const [line, setLine] = useState(false);
    const cutIt = () => {
     setLine(true);
 }   
  return (
  <div className="todo_style">
    <span onClick={cutIt}> <DeleteSharpIcon className="deleteIcon"/>  </span>
      <li style = {{textDecoration: line ? "line-through": "none"}}> {props.text}</li>
    
  </div>
  )
};

export default ListCom;
