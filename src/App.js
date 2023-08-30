import React, { Component } from "react";
import Table from "./components/Table/Table";

class App extends Component {
  state = {
    list: [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" },
      { id: 3, title: "Task 3" },
      { id: 4, title: "Task 4" },
    ],
    block2: [],
    block3: [],
  };
  render() {
    let { list, block2, block3 } = this.state;
    return (
      <>
        <Table list={list} block2={block2} block3={block3} />
      </>
    );
  }
}

export default App;
