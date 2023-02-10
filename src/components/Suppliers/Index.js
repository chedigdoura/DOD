import React from "react";
import CardOfSuppliers from "./CardOfSuppliers";
import { fakeData } from "./../../Data";
import { CardListStyle } from "../../styles/GlobalStyles";

function IndexOfSuppliers({ fakeData }) {
  return (
    <div style={CardListStyle}>
      {fakeData.map((elt) => (
        <CardOfSuppliers key={elt.id} elt={elt} />
      ))}
    </div>
  );
}

export default IndexOfSuppliers;
