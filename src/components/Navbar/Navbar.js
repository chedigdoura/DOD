import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Input from "../../atoms/Input";
import { LinkStyle } from "./../../styles/GlobalStyles";

function CustomNavbar() {
  return (
    <Navbar
      style={{
        display: "flex",
        backgroundColor: "#20262E",
        alignItems: "center",
        height: "80px",
      }}
      fixed="top"
    >
      <div style={{ display: "flex", gap: "18px", marginLeft: "60px" }}>
        <Button style={{ backgroundColor: "#698269" }}>
          <Link to="/" style={LinkStyle}>
            Home
          </Link>
        </Button>
        <Button style={{ backgroundColor: "#698269" }}>
          <Link to="/suppliers" style={LinkStyle}>
            Suppliers
          </Link>
        </Button>
        <Button style={{ backgroundColor: "#698269" }}>
          <Link to="/products" style={LinkStyle}>
            Products
          </Link>
        </Button>
      </div>
      <div style={{ position: "fixed", right: "60px" }}>
        <Input />
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
