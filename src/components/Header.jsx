import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div>
      <h1>Help Queue</h1>
      <div>
        <Link to='/'>Home</Link> | <Link to='/newticket'>Create Ticket</Link>
      </div>
    </div>
  );
}

export default Header;