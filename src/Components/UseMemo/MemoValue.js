import React, {useMemo} from "react";


const MemoValueComponents = ({value})=>{
    const MemoFunctionValue = useMemo(()=>{
        console.log('with Render 1');
        let result = 0;
        for (let i = 1; i <= value; i++) {
            result += i;
        }
        return result;
    }, [value])
    return (
        <div>
          MemoFunctionValue :- {MemoFunctionValue}
        </div>
      );
}
export default MemoValueComponents;