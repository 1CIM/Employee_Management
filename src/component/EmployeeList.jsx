import React, { Component } from "react";
import axios from "axios";
import EmployeeModal from "./EmployeeModal.jsx";
import { Item, ItemContent } from "semantic-ui-react";

class EmployeeList extends Component {
  state = {
    employees: [],
    page: 1,
    itemsPerPage: 12
  };
  
  componentDidMount() {
    if (this.state.employees.length === 0) {
      this.getEmployees();
    }
  }

  componentDidUpdate(newProps, oldState) {
    if (oldState.itemsPerPage !== this.state.itemsPerPage) {
      this.getEmployees();
    }
  }

  getEmployees = async () => {
    let employeeData = await axios.get(`https://reqres.in/api/users?per_page=${this.state.itemsPerPage}`);
    this.setState({ employees: employeeData.data.data });
  };
  changeItemCount(event) {
    const number = Number(event.target.options[event.target.selectedIndex].value)
    this.setState({ itemsPerPage: number })
  }

  render() {
    let employeeList = this.state.employees.map(employee => {
      return (
        <Item key={employee.id} data-cy="employee-item">
          <Item.Image
            data-cy="avatar"
            circular
            size="tiny"
            alt={employee.first_name}
            src={employee.avatar}
          />

          <ItemContent verticalAlign="middle">
            <Item.Header data-cy="full-name">
              {employee.first_name} {employee.last_name}
            </Item.Header>
            <Item.Extra>
              <EmployeeModal id={employee.id} />
            </Item.Extra>
          </ItemContent>
        </Item>
      );
    });

    return (
      <>
        <select
          onChange={(event) => this.changeItemCount(event)}
          data-cy="item-count-selector"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <Item.Group data-cy="employee-list">{employeeList}</Item.Group>
      </>
    )
  }
}
export default EmployeeList;
