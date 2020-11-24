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
    try {
      const response = await axios.get("http://localhost:8000/list");
      this.list = response.data;
    } catch (error) {
      console.error("ListStore -> fetchlist -> error", error);
    }
  };
  createTask = async (newTask) => {
    try {
      const response = await axios.post("http://localhost:8000/list", newTask);
      this.list.push(response.data);
    } catch (error) {
      console.error("ListStore -> createTask -> error");
    }
  };

  deleteTask = (taskId) => {
    this.list = this.list.filter((task) => task.id !== taskId);
  };
}

const listStore = new ListStore();
listStore.fetchList();
export default listStore;
