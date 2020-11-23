//components
import Item from "./Item";

//styles
import { ListWrapper } from "../styles";

//store
import listStore from "../store/listStore";

const List = () => {
  return (
    <ListWrapper>
      {listStore.list.map((item) => (
        <Item name={item.name} priority={item.proirity} status={item.status} />
      ))}
    </ListWrapper>
  );
};

export default List;
