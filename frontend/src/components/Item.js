//style
import { ItemWrapper, ItemWrapperChecked } from "../styles";

//Libraries
import { observer } from "mobx-react";

//state
import { useState } from "react";

const Item = ({ name, priority, status }) => {
  const handleChange = (event) => {
    if (box === "on") setBox("");
    else setBox("on");
  };
  const [box, setBox] = useState("");
  if (box === "on") {
    return (
      <>
        <input type="checkbox" id="checked" onChange={handleChange} />
        <label for="checked">
          <ItemWrapperChecked>
            <p> {name}, </p>
            <p> priority: {priority}</p>
            <p>, current status: {status}</p>
          </ItemWrapperChecked>
        </label>
        <br></br>
      </>
    );
  } else {
    return (
      <>
        <input type="checkbox" id="unchecked" onChange={handleChange} />
        <label for="unchecked">
          <ItemWrapper>
            <p> {name}, </p>
            <p> priority: {priority}</p>
            <p>, current status: {status}</p>
          </ItemWrapper>
        </label>
        <br></br>
      </>
    );
  }
};

export default observer(Item);
