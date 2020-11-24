//components
import Item from "./Item";
import AddButton from "./buttons/AddButton";

//Libraries
import { observer } from "mobx-react";
//styles
import { ListWrapper } from "../styles";

//store
import listStore from "../store/listStore";

const List = () => {
  return (
    <>
      <ListWrapper>
        <h3>To Do List</h3>
        <AddButton className="addbutton" />
        {listStore.list
          .filter((item) => item.completed === false)
          .map((item) => (
            <Item item={item} key={item.id} />
          ))}
      </ListWrapper>

      <ListWrapper>
        <h3>Completed Tasks</h3>
        {/* {listStore.moveTask} */}
        {listStore.list
          .filter((item) => item.completed === true)
          .map((item) => (
            <Item item={item} key={item.id} />
          ))}
      </ListWrapper>
    </>
  );
};

export default observer(List);
