import React from 'react';

const clear_content = () => {
  let content = document.getElementById('content');
  content.remove();
}

const Header = props => {
  
  return (
    <nav className="justify-content-center navbar navbar-expand-lg navbar-dark bg-dark">
    </nav>
  );
};

export default Header;
