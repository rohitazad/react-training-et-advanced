import React from "react";


const MemoValueWIthOutComponents = ({value})=>{
    console.log("with out Render 2");
    return (
        <div>
          MemoFunctionValue :- {value}
        </div>
      );
}
export default MemoValueWIthOutComponents;