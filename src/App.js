import React from "react";
import ReactToPrint from "react-to-print";

import  ComponentToPrint  from "./components/ComponentToPrint";
import './App.css';

class App extends React.PureComponent {
   styleOverrides = {
    boxShadow: "0px 0px 0px 0px #000000"
  };

  render() {
    return (
      <div className="container">
        {/* 1st library => uncommment below code the reacttoprint library , ComponentToPrint */}

        <ReactToPrint
          className="pull-right"
          pageStyle={this.styleOverrides}
          trigger={() => (
            <button className="btn btn-primary">Print this out!</button>
          )}
          content={() => this.componentRef}
        />
         <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default App;