import React, { useCallback, useState } from 'react';
import UseCallbackChildComponent from './UseCallbackChild';

const UseCallbackParentComponent = () => {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
      }, []);
    return (
      <div>
        <p>Count: {count}</p>
        <UseCallbackChildComponent handleClick={handleClick} />
      </div>
    );
  };

  export default UseCallbackParentComponent;