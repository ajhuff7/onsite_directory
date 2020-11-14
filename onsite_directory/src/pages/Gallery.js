import React, { useEffect, useState } from "react";
import API from "../utils/API";
import UserContext from "../utils/userContext";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";
import LanguageContext from "../utils/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";


class Gallery extends Component {

  state = {
    Employees: Employees
  }

  const [employeeState, setEmployeeState] = useState [Employees]
  const [inputState, setInputState] = setState

  func handleChange(event) {
    const {value} = event.target
    
    const filtered = employeeState.filter((employee) =>
    employee.name.includes(value))
    
    setEmployeeState(filtered)
    
    
    handleChange={handleChange}
    

  };

    return (
      <UserContext.Provider value={{user, users, capitalizeFirstLetter, handleUserBtnClick }}>
        <LanguageContext.Provider value={{language, languages, handleLanguageBtnClick}}>
          <div>
            <h1 className="text-center">Welcome to LinkedUp</h1>
            <h3 className="text-center">Click on the arrows to browse users</h3>
            <LanguageSelector />
            <Row>
              <CardContainer />
            </Row>
          </div>
        </LanguageContext.Provider>
      </UserContext.Provider>
    );
  }


export default Gallery;
