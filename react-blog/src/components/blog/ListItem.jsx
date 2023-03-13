import React from "react";

const ListItem = (props) => {
  return (
    <li>
      <h5>{props.titleProp}</h5>
      <p>{props.descriptionProp}</p>
    </li>
  );
};

export default ListItem;
