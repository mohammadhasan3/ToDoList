//style
import { ItemWrapper, ItemWrapperChecked } from "../styles";

//Libraries
import { observer } from "mobx-react";

//state
import { useState } from "react";
import listStore from "../store/listStore";

//components
import DeleteButton from "./buttons/DeleteButton";

const Item = ({ name, priority, status, id }) => {
  const handleChange = () => {
    if (box === "on") {
      setBox("");
      // console.log(`inside if ${box}`);
    } else {
      setBox("on");
      // console.log(`outside if ${box}`);
    }
  };

  const [box, setBox] = useState("");
  if (box === "on") {
    return (
      <>
        <input type="checkbox" id={id} onChange={handleChange} />
        <label for={id}>
          <ItemWrapperChecked>
            <p> {name}, </p>
            <p> priority: {priority}</p>
            <p>, current status: {status}</p>
          </ItemWrapperChecked>
        </label>
        <DeleteButton taskId={id} setBox={setBox} box={box}></DeleteButton>
        <br></br>
      </>
    );
  } else {
    return (
      <>
        <input type="checkbox" id={id} onChange={handleChange} />
        <label for={id}>
          <ItemWrapper>
            <p> {name}, </p>
            <p> priority: {priority}</p>
            <p>, current status: {status}</p>
          </ItemWrapper>
        </label>
        <DeleteButton taskId={id} setBox={setBox} box={box}></DeleteButton>
        <br></br>
      </>
    );
  }
};

export default observer(Item);
