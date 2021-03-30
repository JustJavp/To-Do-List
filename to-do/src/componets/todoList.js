import React from 'react';
/* Components */
import Todo from './todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return (
        <div class="todo-container">
            <ul class="todo-list">
                {filteredTodos.map(todo => (
                        <Todo 
                            text={todo.text}
                            key={todo.id}
                            setTodos={setTodos}
                            todos={todos}
                            todo={todo}
                        />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;