import { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import PkCodeHeader from "./PkCodeHeader";
import { BrowserRouter } from "react-router-dom";
import PkCodeFooter from "./PkCodeFooter";
import PkCodeBody from "./PkCodeBody";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="card">
          <PkCodeHeader />
          <PkCodeBody/>
          <PkCodeFooter/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
