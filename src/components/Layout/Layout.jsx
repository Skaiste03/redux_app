import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <header>
        <Link to='/'>
          <h1>Easy, Quick, and Delicious Cooking</h1>
          <h2>Spread The Joy</h2>
        </Link>
      </header>

      <div className='page-content'>{children}</div>

      <footer>
        <p>Copyright 2023 Just Cook It</p>
      </footer>
    </div>
  );
};

export default Layout;
