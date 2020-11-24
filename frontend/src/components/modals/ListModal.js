import Modal from "react-modal";
import { useState } from "react";
import { CreateButtonStyled } from "../../styles";
import { BsXSquare } from "react-icons/bs";

//Stores
import listStore from "../../store/listStore";

const ListModal = ({ isOpen, closeModal }) => {
  const [task, setTask] = useState({
    name: "",
    priority: "",
  });

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // listStore.createGame(task);
    listStore.createTask(task);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="List Modal"
    >
      <h3>New Task</h3>
      <BsXSquare
        className="float-right"
        size="2em"
        onClick={closeModal}
      ></BsXSquare>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              type="text"
              className="form-control"
              name="name"
              value={task.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Priority</label>
            <select name="priority" id="priority" onChange={handleChange}>
              <option value="default">choose you priority</option>
              <option value="high">high</option>
              <option value="miduim">miduim</option>
              <option value="low">low</option>
            </select>
          </div>
        </div>

        <CreateButtonStyled>Add</CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default ListModal;
