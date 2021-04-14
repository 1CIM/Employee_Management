import React, { Component } from "react";
import axios from "axios";
import EmployeeModal from "./EmployeeModal.jsx";
import { Item, ItemContent } from "semantic-ui-react";

class EmployeeList extends Component {
  state = {
    employees: [],
    page: 1
  };
  componentDidMount() {
    this.getEmployees();
  }
  getEmployees = async () => {
    let employeeData = await axios.get("https://reqres.in/api/users?");
    this.setState({ employees: employeeData.data.data });
  };
 
  // getPage = async () => {
  //   let pageData = await axios.get(`https://reqres.in/api/users?${pageNumber}`);
  //   this.setState({ page: pageData.data.page });
  // };
  // and have a pagination thing that has the num so it changes depending on what button you press

  // *********** or something like this ***********

  // getPage1 = async () => {
  //   let pageData = await axios.get(`https://reqres.in/api/users?page=1`);
  //   this.setState({ page: pageData.data.page });
  // };

  // getPage2 = async () => {
  //   let pageData = await axios.get(`https://reqres.in/api/users?page=2`);
  //   this.setState({ page: pageData.data.page });
  // };

  // and it has 2 buttons one for getPage1 and one for getPage2


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
      <Item.Group data-cy="employee-list">{employeeList}</Item.Group>
    ) 
  }
}
export default EmployeeList;
