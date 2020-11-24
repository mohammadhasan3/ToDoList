//Stores
import listStore from "../../store/listStore";

//Styles
import { BsFillTrashFill } from "react-icons/bs";

const DeleteButton = ({ taskId, box, setBox }) => {
  //   const gameId = useParams().gameSlug;
  console.log(box);

  return (
    <BsFillTrashFill
      onClick={() => listStore.deleteTask(taskId, box, setBox)}
    ></BsFillTrashFill>
  );
};

export default DeleteButton;
