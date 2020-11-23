//import axios from "axios";
import { makeObservable, observable, action } from "mobx";
//import slugify from "react-slugify";

import list from "../listdata";

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
