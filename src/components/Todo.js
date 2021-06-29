import React from 'react'
import firebase from './../utils/firebase'

const Todo = ({todo}) => {
    const todoDelete = () =>{
        const todoRef = firebase.database().ref("Todo").child(todo.id)
        console.log(todo.id);
        todoRef.remove();
    }

    const todoComplete = () =>{
        const todoRef = firebase.database().ref("Todo").child(todo.id)
        todoRef.update({
            complete: !todo.complete,
        });
        console.log("attempting complete");  
    }

        
    return (
        <div className={"taskborder-b px-8 py-4 border-gray-300 border-b border-solid "+(todo.complete?'bg-green-200':'')} key={todo.id}>
            <div className="w-1/6 float-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
            </div>
            <div className="w-4/6 float-left text-left">
                <p>{todo.activity}</p>
                <p className="text-sm italic">{todo.date} || {todo.time}</p>
                <button onClick={todoDelete}>delete</button> 
                {/* <button>complete</button> */}
            </div>
            <div className="w-1/6 float-left">
                <div className="rounded-full w-8 h-8  text-gray-500" onClick={todoComplete}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default Todo
