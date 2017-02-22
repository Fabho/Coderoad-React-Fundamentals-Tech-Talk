import React from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Pepito',
  lastName: 'Perez'
};

const jsxElement = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
export default jsxElement;