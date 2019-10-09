import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Homepage = (props) => {
  return (
    <div className="Homepage">
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
    </div>
  );
};

export default Homepage;