import { makeObservable, observable, action } from "mobx";

import axios from "axios";
//import slugify from "react-slugify";

class ListStore {
  list = [];
  finishedTasks = [];

  constructor() {
    makeObservable(this, {
      list: observable,
      finishedTasks: observable,
      createTask: action,
      deleteTask: action,
      fetchList: action,
      updateTask: action,
      moveTask: action,
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

  deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8000/list/${taskId}`);
      this.list = this.list.filter((task) => task.id !== taskId);
    } catch (error) {
      console.error("ListStore -> deleteTask -> error");
    }
  };

  updateTask = async (updatedTask) => {
    try {
      const task = this.list.find((task) => task.id === updatedTask.id);
      task.completed = true;
      await axios.put(
        `http://localhost:8000/list/${updatedTask.id}`,
        updatedTask
      );
    } catch (error) {
      console.error("listtore -> updateTask -> error", error);
    }
  };

  moveTask = (item) => {
    this.finishedTasks.push(item);

    console.log(item.id);
  };
}

const listStore = new ListStore();
listStore.fetchList();
export default listStore;
