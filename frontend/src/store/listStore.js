//import axios from "axios";
import { makeObservable, observable, action } from "mobx";
//import slugify from "react-slugify";

import list from "../listdata";

class ListStore {
  list = list;

  constructor() {
    makeObservable(this, {
      list: observable,
      createTask: action,
      deleteTask: action,
    });
  }
  createTask = (newTask) => {
    newTask.id = this.list[this.list.length - 1].id + 1;

    this.list.push(newTask);
  };

  deleteTask = (taskId) => {
    this.list = this.list.filter((task) => task.id !== taskId);
  };
}

const listStore = new ListStore();

export default listStore;
