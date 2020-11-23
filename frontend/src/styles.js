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
  background-color: #50dfc5;
  width: 500px;
`;
export const CreateButtonStyled = styled.button`
  color: white;
  background-color: gray;
  &:hover {
    color: black;
    background-color: lime;
  }
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
`;
