import React from "react";
import CustomCard from "./Card";
function IndexOfCard({ data, elt }) {
  return (
    <div>
      <CustomCard data={data} elt={elt} />
    </div>
  );
}

export default IndexOfCard;
