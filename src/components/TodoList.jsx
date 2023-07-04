import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodo, removeTodo } from '../redux/store/ToDosReducer.js';

export const TodoList = () => {
    const [newTodo, setNewTodo] = useState('');
    const todo = useSelector((state) => state.todo.items);
    const dispatch = useDispatch();

    const onClick = () => {
        if (newTodo.trim() !== '') {
            dispatch(
                addTodo({
                    id: new Date(),
                    text: newTodo,
                })
            );
            setNewTodo('');
        }
    };

    const handleRemove = (id) => {
        dispatch(removeTodo(id));
    };

    return (
        <div>
            <br />
            <h4>TodoList</h4>

            <input
                type="text"
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodo} />
            <br />
            <button onClick={onClick}>Save</button>
            <br />
            <ul>
                {todo.map((t) => (
                    <li key={t.id}>
                        {t.text}
                        <button
                            onClick={() => handleRemove(t.id)} >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};