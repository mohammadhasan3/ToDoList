import React from "react";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

//modal
import ListModal from "../modals/ListModal";

//style
import { AddButtonStyled } from "../../styles";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <AddButtonStyled>
        <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      </AddButtonStyled>
      <ListModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
