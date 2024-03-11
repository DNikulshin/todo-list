import { memo, useContext } from 'react'
import { ITodo} from '../../../types.ts'
import styles from './Todo.module.css'
import  {Context} from '../../../context/Context.tsx'

interface TodoProps {
    todo: ITodo
    idx: number
    type: string
}

const Todo = ({todo, idx, type}: TodoProps) => {
    const {toggleTodo, removeTodo} = useContext(Context)
    return (
        <div key={todo.id} className={ todo.completed ? `${styles.todo} ${styles.done}` : styles.todo}>
            <span className={styles.idx}>#{idx + 1}</span>
            <p className={styles.text}>{todo.text}</p>

            <div className={styles.actions}>
                <small className={todo.completed ? `${styles.dateAdd} ${styles.white}` : styles.dateAdd}>{todo.dateAdd}</small>
                <label className={styles.tabel}>
                    {
                        todo.completed ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-check2-circle" viewBox="0 0 16 16">
                                <path
                                    d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                                <path
                                    d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-check2" viewBox="0 0 16 16">
                                <path
                                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                            </svg>
                    }
                    <input
                        type="checkbox"
                        className={styles.checkbox}
                        onChange={() => toggleTodo({id: todo.id, type})}
                    />
                </label>
                <span
                    onClick={() => removeTodo({id: todo.id, type})}
                    className={styles.delete}
                >x
                </span>
            </div>

        </div>
    )
}

export const MemoTodo = memo(Todo)