import axios from "axios";
import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";

class ListStore {
  list = [
    { name: "Running", status: "in progress", proirity: "High" },
    { name: "Eating", status: "Done", proirity: "High" },
  ];

  constructor() {
    makeObservable(this, {
      list: observable,
    });
  }
}

const listStore = new ListStore();

export default listStore;
