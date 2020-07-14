import React from "react";
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="header">
      <div className="topnav">
        <Link to='/'>HOME</Link>
        <Link to='/'>HOSTS</Link>
        <Link to='/'>CONTACT</Link>
        <Link to='/'>ABOUT</Link>
      </div>
    </div>
  )
};

export { Header };