import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function Input() {
  return (
    <div>
      <input
        placeholder="   Search for Design objects, categories or brands"
        type="text"
        style={{height:"40px", width: "600px" , borderRadius:"50px"}}
      ></input>
    </div>
  );
}

export default Input;
