import "../App.css";
import React from "react";
import { FaMoon } from "react-icons/fa";

  const Header = () => {
    return (
        <div className="header-note-app">
        <div className="header-note">
          <h1>Note App</h1>
        </div>
        <div className="add-new-note">
          <div className="table-content-add">
            <p>title</p>
            <textarea
              className="box-add-new"
             
            ></textarea>
            <button className="icon-add-new">
            
                
              
            </button>
          </div>
        </div>
      </div>
  
    );
  };
  
  export default Header;