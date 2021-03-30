import React from 'react';


const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 10000 }
        ]);
        setInputText('');
    };

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form>
            <div className="form-input">
                <div className="form-input-group">
                    <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                    <button onClick={submitTodoHandler} className="todo-button" type="submit">
                        <span className="material-icons">
                            add_circle_outline
                        </span>
                    </button>
                </div>
            </div>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">Todas</option>
                    <option value="completed">Completadas</option>
                    <option value="uncompleted">Pendientes</option>
                </select>
            </div>
        </form>
    )
}

export default Form;