import React from 'react';
import Item from './Item';  
const Menu = ({ userInfo }) => {

  const list = [
    { link: 'https://example.com/home', content: 'Home' },
    { link: 'https://example.com/about', content: 'About' },
    { link: 'https://example.com/services', content: 'Services' },
    { link: 'https://example.com/contact', content: 'Contact' }
  ];

  return (
    <div>
      <div>
        <h3>User Information</h3>
        <p>Name: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
      </div>

      <ul>
        {list.map((item, index) => (
          <Item key={index} link={item.link} content={item.content} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;

