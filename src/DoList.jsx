import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListCom from "./ListCom";
const DoList = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);
  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  const listOfItems = () => {
      setNewItem((preValue) => {
          return [...preValue,item]

      });
      setItem(" ");

  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> To DO List </h1>
          <br />
          <input type="text" value ={item} placeholder="Add an Item" onChange={itemEvent} />
          <Button className="newBtn" onClick ={listOfItems}>
            <AddIcon />
          </Button>
          <ol>
            {newItem.map((val, index) => {
              return <ListCom key ={index} text={val} />;})
            }
          </ol>
        </div>
      </div>
    </>
  );
};

export default DoList;
