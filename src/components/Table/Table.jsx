import React, { Component } from "react";
import "./style.css";

class Table extends Component {
  state = Object.assign({}, this.props);
  transferToRight = () => {
    const { list, block2 } = this.state;
    if (list.length > 0) {
      const firstItem = list[0];
      this.setState({
        list: list.slice(1),
        block2: [firstItem, ...block2],
      });
    }
  };

  transferToLeft = () => {
    const { list, block2 } = this.state;
    if (block2.length > 0) {
      const firstItem = block2[0];
      this.setState({
        block2: block2.slice(1),
        list: [firstItem, ...list],
      });
    }
  };

  transferToRight2 = () => {
    const { block2, block3 } = this.state;
    if (block2.length > 0) {
      const firstItem = block2[0];
      this.setState({
        block2: block2.slice(1),
        block3: [firstItem, ...block3],
      });
    }
  };

  removeLastItem = () => {
    const { block3 } = this.state;
    if (block3.length > 0) {
      this.setState({
        block3: block3.slice(0, -1),
      });
    }
  };

  render() {
    const { list, block2, block3 } = this.state;

    return (
      <div className="container">
        <div className="container__list">
          <ul>
            {list.map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
          <button className="container__btn" onClick={this.transferToRight}>
            Transfer first to right
          </button>
        </div>
        <div className="container__list">
          <ul>
            {block2.map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
          {block2.length ? (
            <button className="container__btn" onClick={this.transferToLeft}>
              Transfer first to left
            </button>
          ) : null}
          {block2.length ? (
            <button className="container__btn" onClick={this.transferToRight2}>
              Transfer first to right
            </button>
          ) : null}
        </div>
        <div className="container__list">
          <ul>
            {block3.map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
          {block3.length ? (
            <button className="container__btn" onClick={this.removeLastItem}>
              Remove last item
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Table;
