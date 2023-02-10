import React from "react";
import Button from "react-bootstrap/Button";

function MyButton({ color, title }) {
  return <Button variant={color}>{title}</Button>;
}

export default MyButton;
