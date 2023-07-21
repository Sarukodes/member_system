import {  Link } from "react-router-dom";
import "./App.css";
import React from "react";


const Sidebar = () => {
    return (
      
      <div className="sidebar">
        <div className="logo">
        
          <h2>Sidebar</h2>
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
          <i className="fas fa-home"></i>
          <Link to="pages/Home">
          <span>Home</span>
            </Link>
        
          </li>
          <li className="sidebar-menu-item">
            <i className="fas fa-user"></i>
            <Link to="pages/Member">
              <span>Member</span>
            </Link>
            
          </li>
          
        </ul>
      </div>
      
    );
  };
  
export default Sidebar;
