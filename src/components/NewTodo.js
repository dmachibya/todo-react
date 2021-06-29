import React, {useState} from 'react'
import firebase from './../utils/firebase';

const NewTodo = (props) => {
    // const {newTodo} = props; 
    
    const [activity, setActivity] = useState('');
    const [id, setId] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [todos, setTodos] = useState(props.todos);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(date && time && activity){
            // setId(todos.length+1);
            const todo = {
                activity, date, time, complete:false}; 
            setTodos((todos)=>{
                return [...todos, todo]
            })
            setActivity('');
            setDate('');
            setTime('');
            setId('');

            const todoRef = firebase.database().ref('Todo');
            // const todo_ = {
            //     activity,
            //     date,
            //     time,
            //     complete: false,
            // }
            todoRef.push(todo);
            props.onChangeTodos(todos);
        }
        console.log(todos);
    }

    return (
         props.newTodo && (
        <div className="h-screen w-full fixed top-0 left-0">
            <div className="new-form absolute top-8 z-30 left-12 w-3/4" onClick={
                ()=>{
                    console.log("testing");
                }
            }>
                <div className="bg-white h-screen shadow-md p-12 overflow-y-scroll text-left relative">
                    <div className="close text-4xl text-gray-400 absolute right-4 top-2" onClick={()=>{
                props.onChangeGlobalNewTodo()
                }} >&times;</div>
                   <h1 className="font-bold text-4xl text-yellow-500" >New Todo</h1>
                   <div className="mt-4"></div>
                   <form action="/" method="post" onSubmit={handleSubmit}>
                        <div className="w-full">
                                <label htmlFor="activity">Activity</label>
                                <input type="text" name="activity" id="activity"
                                value={activity}
                                onChange={(e)=>setActivity(e.target.value)}
                                className="w-full border border-gray-300 border-solid px-4 py-2 rounded-sm mt-2 focus:border-orange-500 focus:outline-none" placeholder="eg. Washing clothes" />
                        </div>
                        <div className="mt-4">
                            <div className="w-1/2 float-left pr-2">
                                    <label htmlFor="activity">Date</label>
                                    <input type="Date"
                                    value={date}
                                    onChange={(e)=>setDate(e.target.value)}
                                     name="date" id="date" className="w-full border border-gray-300 border-solid px-4 py-2 rounded-sm mt-2 focus:border-orange-500 focus:outline-none" placeholder="eg. Washing clothes" />
                            </div>
                            <div className="w-1/2 float-right">
                                    <label htmlFor="activity">Time</label>
                                    <input
                                    value={time}
                                    onChange={(e)=>setTime(e.target.value)}
                                     type="time" name="time" id="time" className="w-full border border-gray-300 border-solid px-4 py-2 rounded-sm mt-2 focus:border-orange-500 focus:outline-none" placeholder="eg. Washing clothes" />
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="more my-4 text-sm text-gray-500">
                                More Fields
                            </div>
                        <button type="submit" className="mt-4 font-bold float-right bg-cyan-500 text-black px-8 py-2 rounded-sm">Add task</button>
                   </form>
                </div>
                
            </div>
            <div onClick={()=>{
                props.onChangeGlobalNewTodo()
                }} className="h-full w-full bt-300 z-20"></div>
        </div>
        )
        
    )
}

export default NewTodo
