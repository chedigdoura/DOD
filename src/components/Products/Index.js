import React from "react";
import CardOfProducts from "./CardOfProducts";
import { fakeData } from "./../../Data";
import { CardListStyle } from "../../styles/GlobalStyles";

function IndexOfProducts({ fakeData }) {
  const allCategories = fakeData.flatMap((elt) => elt.categories);
  const allProducts = allCategories.flatMap((elt) => elt.products);
  return (
    <div style={CardListStyle}>
      {allProducts.map((elt) => (
        <CardOfProducts key={elt.key} elt={elt}/>
      ))}
    </div>
  );
}

export default IndexOfProducts;
