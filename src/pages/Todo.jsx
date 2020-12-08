import React, {useState} from 'react';
import '../Todo.css';
import {Link} from 'react-router-dom';

//import Components
import Todo from '../Components/ListTodo';
import TodoForm from '../Components/TodoForm';


function Master() {
    const [todos, setTodos] = useState([
        {
            text: "Learn ReactJs",
            isCompleted : false
        },
        {
            text: "Task Week 1",
            isCompleted : true
        },
        {
            text: "Build WaysHub APP",
            isCompleted : false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos)
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos)
    };  

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos)
    }

    return(
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    />
                ))}

                <TodoForm addTodo={addTodo} />


                <Link to="/inc"><button>Increment Program</button></Link>
            </div>
        </div>
    )
}

export default Master