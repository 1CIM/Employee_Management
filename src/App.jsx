import EmployeeList from './component/EmployeeList.jsx'
import React, { Component} from "react"
import  {Container,Header} from 'semantic-ui-react';

class  App extends Component {
render() {
  return(
    <Container>
    <Header size="huge" data-cy="header">Employee List </Header>
    <EmployeeList />
    </Container>
  )
}
}

export default App;