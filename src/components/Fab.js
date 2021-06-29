import React from 'react'
import './../state/main';

const Fab = (props) => {
    return (
        <div onClick={()=>{
            props.onChangeGlobalNewTodo();
            console.log("clicked fab");
        }} className="text-4xl bg-orange-500 hover:bg-orange-400 absolute bottom-4 right-4 rounded-full h-16 w-16 cursor-pointer flex justify-center items-center">
            +
        </div>
    )
}

export default Fab
