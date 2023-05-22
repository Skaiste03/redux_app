import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <header>
        <a href='/'>
          <h1>Easy, Fast, Tasty Cooking</h1>
          <h2>Spread The Joy</h2>
        </a>
      </header>

      <div className='page-content'>{children}</div>

      <footer>
        <p>Copyright 2023 Just Cook It</p>
      </footer>
    </div>
  );
};

export default Layout;
