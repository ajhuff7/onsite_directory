import React, { Component } from "react";
import Title from "./components/Title";
import Header from "./components/Header";
import Container from "./components/Container";
import employee from "./employee.json";
import SearchBar from "./components/Search";
import CardBody from "./components/CardBody";


class App extends Component {

  state = {
    employee: employee,
  
  }

  handleInputChange = event => {
    const searchEmployees = this.state.employee;
    const searchValue = event.target.value.toUpperCase()
    const selectedEmployees = searchEmployees.filter(function(item){
      const uppercase = item.name.toUpperCase()
      return uppercase.includes(searchValue)
    })
    this.setState({
      employee:selectedEmployees
    })
  }



  handleName = event => {
    const employee = this.state.employee;

    const order = employee.sort(function (a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    this.setState({ employee: order })
  }


  handleEmail = event => {
    const employee = this.state.employee;

    const order = employee.sort(function (a, b) {
      var emailA = a.email.toUpperCase();
      var emailB = b.email.toUpperCase();
      if (emailA < emailB) {
        return -1;
      }
      if (emailA > emailB) {
        return 1;
      }
      return 0;
    })
    this.setState({ employee: order })
  }

  handleLanguage = event => {
    const employee = this.state.employee;

    const order = employee.sort(function (a, b) {
      var languageA = a.language.toUpperCase();
      var languageB = b.language.toUpperCase();
      if (languageA < languageB) {
        return -1;
      }
      if (languageA > languageB) {
        return 1;
      }
      return 0;
    })
    this.setState({ employee: order })
  }






  render() {

    return (
      <Container>
        <Title />
        <SearchBar
          handleInputChange={this.handleInputChange}
        />
        <Header
          handleName={this.handleName}
          handleEmail={this.handleEmail}
          handleLanguage={this.handleLanguage}

        />
        {this.state.employee.map(employee => (
          <CardBody
            id={employee.id}
            image={employee.image}
            name={employee.name}
            email={employee.email}
            phone={employee.phone}
            language={employee.language}
            dob={employee.dob}
          />

        ))}
      </Container>

    )
  }

};

export default App;