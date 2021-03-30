import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    /* Events  */
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
                return item;
        }))
    };



    return (
        <div className="todo">
        <button onClick={completeHandler} className="complete-btn">
            <span className="material-icons">
                task_alt
            </span>
        </button>
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {text}
        </li>
        <button onClick={deleteHandler} className="trash-btn">
            <span className="material-icons">
                delete_outline
            </span>
        </button>
    </div>
    );
}
export default Todo;