import React from "react";
import Sidebar from "./Sidebar"
import AuthorList from "./AuthorList"
import authors from "./data";

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar/>
          </div>
        <div className="content col-10">
          <AuthorList authors={authors}/>
          </div>
        
          
      </div>
    </div>
  );
}

export default App;
