import React, {useEffect, useState} from 'react'
import firebase from './../utils/firebase';
import Todo from './Todo'

const Main = (props) => {
    const todos = props.todos;
    const [todoList, setTodoList] = useState([]);
    useEffect(()=>{
        console.log("we test");
        console.log("length:" +todos.length);
    });

    useEffect(()=>{
        const todoRef = firebase.database().ref("Todo");
        todoRef.on('value', (snapshot)=>{
            const todos = snapshot.val();
            const todoL = []
            for(let id in todos){
                todoL.push({ id, ...todos[id] });
            }
            setTodoList(todoL);
            // console.log(todoList);
        })


    },[])
    
    

    return (
        <div className="mt-4">
           <p className="text-left mx-8 text-gray-500">Todos</p>

           <div className="bg-white px-8 py-4 shadow-md mt-2">
                <h1 className="text-gray-500 text-left text-sm">Today's task</h1>

                {
                    todoList.map((todo)=>{
                        return (
                            <Todo todo={todo} key={todo.id} />
                        )
                    })
                }
           </div>
        </div>
    )
}

export default Main
