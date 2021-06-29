import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Fab from './components/Fab'
import NewTodo from './components/NewTodo'
import 'alpinejs'
// import Setup from './tut/multiple-return'
import {useEffect, useState} from 'react'
import './state/main';

function App() {
  const [menu, setMenu] = useState()
  const [globalNewTodo, setGlobalNewTodo] = useState(false)
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    // setNewTodo(newTodoState);
  }, [0]);

  return (
    <div className="App max-w-2xl mx-auto">
      <Header/>
      <Main todos={todos} />
      <Fab newTodo={globalNewTodo} onChangeGlobalNewTodo={()=>{setGlobalNewTodo(!globalNewTodo)}}/>
      <NewTodo todos={todos} onChangeTodos={(todos)=>{
        console.log("t");
        setTodos(todos)}
        } newTodo={globalNewTodo} onChangeGlobalNewTodo={()=>{setGlobalNewTodo(!globalNewTodo)}}/>
      {/* <Setup /> */}
    </div>
  );
}

export default App;
