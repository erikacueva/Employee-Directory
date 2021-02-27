import React, { Component } from "react";
import API from "../../utils/API";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      filtered: [],
      order: "Ascending"
    };
    //bind mehtodas event listeners
    ///bind click handler and change handler
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.loadEmployee();
  }

  loadEmployee = () => {
    API.search()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filtered: res.data.results
        })
      )
      .catch((err) => console.log(err));
  };
  renderTableHeader() {
    //let header = Object.keys(this.state.employees[0]);
    //return header.map((key, index) => {
    return (
      <tr>
        <th>image</th>
        <th>name</th>
        <th>phone</th>
        <th>email</th>
        <th>dob</th>
      </tr>
    );
    //});
  }

  renderTableData() {
    return this.state.employees.map(
      ({ login, picture, name, phone, email, dob }) => {
        return (
          <tr key={login.uuid}>
            <td><img src={picture.medium}/></td>
            <td>
              {name.first} {name.last}
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{dob.date}</td>
          </tr>
        );
      }
    );
  }
  handleChange() {
      const mappArr = this.state.employees.filter((employee) => employee.name.first.toLowerCase().indexOf(document.querySelector(".search").value.toLowerCase()) > -1);
      this.setState({filtered: mappArr});
  }

  render() {
    return (
      <div>
        {console.log("line58", this.state)}
        <h1 id="title">Employee Directory</h1>
        <input className="search" onChange={this.handleChange}/>
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
