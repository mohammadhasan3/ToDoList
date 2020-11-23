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
    });
  }
  createTask = (newTask) => {
    newTask.id = this.list[this.list.length - 1].id + 1;

    this.list.push(newTask);
  };
}

const listStore = new ListStore();

export default listStore;
