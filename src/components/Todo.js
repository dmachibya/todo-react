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
        <div className={"task mt-4 border-b border-gray-300 border-solid py-2 "+(todo.complete?'bg-green-200':'')} key={todo.id}>
            <div className="w-1/6 float-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
            </div>
            <div className="w-4/6 float-left text-left">
                <p>{todo.activity}</p>
                <p className="text-sm italic">{todo.date} || {todo.time}</p>
                <button onClick={todoDelete}>delete</button> 
                <button onClick={todoComplete}>complete</button>
            </div>
            <div className="w-1/6 float-left">
                <div className="rounded-full w-8 h-8 border-2 border-solid border-gray-500"></div>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default Todo
