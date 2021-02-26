import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      employess: [
        {
          id: 1,
          image: "image",
          name: "gustav",
          phone: 21,
          email: "email@email.com",
          dob: "dob",
        },
      ],
    };
  }

  renderTableHeader() {
    let header = Object.keys(this.state.employees[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.state.employees.map((employee, index) => {
      const { id, image, name, phone, email, dob } = employee; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{image}</td>
          <td>{name}</td>
          <td>{phone}</td>
          <td>{email}</td>
          <td>{dob}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Employee Directory</h1>
        <table id="employees">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table; 
