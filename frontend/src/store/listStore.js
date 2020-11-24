import { makeObservable, observable, action } from "mobx";

import axios from "axios";
//import slugify from "react-slugify";

class ListStore {
  list = [];

  constructor() {
    makeObservable(this, {
      list: observable,
      createTask: action,
      deleteTask: action,
      fetchList: action,
    });
  }

  fetchList = async () => {
    const response = await axios.get("http://localhost:8000/list");
    this.list = response.data;
  };
  createTask = (newTask) => {
    newTask.id = this.list[this.list.length - 1].id + 1;

    this.list.push(newTask);
  };

  deleteTask = (taskId) => {
    this.list = this.list.filter((task) => task.id !== taskId);
  };
}

const listStore = new ListStore();
listStore.fetchList();
export default listStore;
