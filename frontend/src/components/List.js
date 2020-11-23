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
    <ListWrapper>
      {listStore.list.map((item) => (
        <>
          <Item
            name={item.name}
            priority={item.proirity}
            status={item.status}
          />
          {console.log(item)}
        </>
      ))}
      <AddButton />
    </ListWrapper>
  );
};

export default observer(List);
