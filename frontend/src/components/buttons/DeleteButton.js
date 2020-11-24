//Stores
import listStore from "../../store/listStore";

//Styles
import { BsFillTrashFill } from "react-icons/bs";

const DeleteButton = ({ taskId }) => {
  return (
    <BsFillTrashFill
      onClick={() => listStore.deleteTask(taskId)}
    ></BsFillTrashFill>
  );
};

export default DeleteButton;
