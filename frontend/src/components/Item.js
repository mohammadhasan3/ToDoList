//style
import { ItemWrapper, ItemWrapperChecked } from "../styles";

//Libraries
import { observer } from "mobx-react";

//store
import listStore from "../store/listStore";

//components
import DeleteButton from "./buttons/DeleteButton";

const Item = ({ item }) => {
  const { id, priority, name } = item;

  //handle checkbox change
  const handleChange = () => {
      listStore.updateTask(item);
      if (item.completed) listStore.moveTask(item);
  };
  
  //if checkbox on
  if (item.completed) {
    return (
      <>
        <label for={id}>
          <ItemWrapperChecked>
            <p> {name}, </p>
            <p> priority: {priority}</p>
          </ItemWrapperChecked>
        </label>
        <DeleteButton taskId={id}></DeleteButton>
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
          </ItemWrapper>
        </label>
        <DeleteButton taskId={id}></DeleteButton>
        <br></br>
      </>
    );
  }
};

export default observer(Item);
