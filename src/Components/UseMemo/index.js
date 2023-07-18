import React, {useState} from "react";
import MemoValueComponents from './MemoValue';
import MemoValueWIthOutComponents from './WithOutMemoComponents';
const UseMemoExample = ()=>{
    const [count, setCount] = useState(0);
    const [countI, setCountI] = useState(0);
    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };
    
    const handleIncrementWithOutMemo = ()=>{
      setCountI((prevCount) => prevCount + 1);
    }
    return (
        <div>
          <h2 className="text-lg font-semibold text-center p-3 bg-yellow-950 text-white my-3">Use Memo Example </h2>
          <button className='bg-green-400 p-2 rounded-xl text-base font-semibold' onClick={handleIncrement}>Increment</button>
          <button className='bg-green-400 p-2 rounded-xl text-base font-semibold ml-2' onClick={handleIncrementWithOutMemo}>Increment with out memo</button>
          <MemoValueComponents value={count} />
          <MemoValueWIthOutComponents value={countI} />
        </div>
      );
}
export default UseMemoExample;