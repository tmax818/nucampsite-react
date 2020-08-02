import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
// Below is the import statement that tells the App component about the Directory component
import Directory from "./components/Directory";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        {/* Below is where the Directory component gets rendered */}
        <Directory />
      </div>
    );
  }
}

export default App;
