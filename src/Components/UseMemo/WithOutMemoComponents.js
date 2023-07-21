import React from "react";


const MemoValueWIthOutComponents = ({value})=>{
    console.log("with out Render 2");
    return (
        <div>
          MemoFunctionValue 22:- {value}
        </div>
      );
}
export default MemoValueWIthOutComponents;