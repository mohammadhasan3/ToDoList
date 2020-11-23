//style
import { ItemWrapper } from "../styles";
const Item = ({ name, priority, status }) => {
  return (
    <ItemWrapper>
      <p> {name}, </p>
      <p> priority: {priority}</p>
      <p>, current status: {status}</p>
    </ItemWrapper>
  );
};

export default Item;
