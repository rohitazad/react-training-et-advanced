import React from 'react';

const UseCallbackChildComponent = ({ handleClick }) => {
  console.log('Rendering ChildComponent');
  return <button className='bg-gray-700 p-2 text-white' onClick={handleClick}>Click Me</button>;
};

export default UseCallbackChildComponent;