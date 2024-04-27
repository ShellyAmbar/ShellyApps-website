import React from "react";
import "./item-library.css";

const ItemLlibrary = (props) => {
  return (
    <div className="slide">
      <img src={props.item?.videoUrl} />
      <h1>{props.item?.id}</h1>
    </div>
  );
};

export default ItemLlibrary;
