import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ToDoList = () => {
  const [num, setNum] = useState(0);
  const incNum =() => {
      setNum(num+1);
  }
  const decNum =() => {
      if(num>0){
      setNum(num -1);
      } else {
          alert('Zero Limit Reached');
          setNum(0);
      }
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1 className="h1"> {num} </h1>
          <div className="btn_div">
            <button className="button" onClick={incNum}> <AddIcon /> </button>
            <button className="button" onClick={decNum}> <RemoveIcon /> </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
