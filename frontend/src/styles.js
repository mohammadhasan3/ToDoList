import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  margin: 10px;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  border-radius: 5px;
  background-color: #50dfc5;
  width: 500px;
`;

export const ItemWrapperChecked = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  text-decoration: line-through;
  margin: 10px;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  border-radius: 5px;
  background-color: #f0b179;
  width: 500px;
`;
export const CreateButtonStyled = styled.button`
  font-size: 15px;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  border-radius: 5px;
  width: 70px;
  height: 40px;
  color: black;
  background-color: #50dfc5;
  &:hover {
    color: white;
    background-color: #79f0ed;
  }
`;

export const TextBox = styled.select`
  display: block;

  height: 37px;
  width: 200px;
`;

export const AddButtonStyled = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-left: 500px;
`;

export const CheckedButtonStyled = styled.button`
  color: white;
  background-color: white;
  border-style: solid;
  border-radius: 20px;
  border-color: black;
  &:active {
    background-color: blue;
  }
`;

export const ListWrapper = styled.div`
  display: block;
  margin-left: 20px;
`;
