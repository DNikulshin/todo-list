import { memo, useContext } from 'react'
import { Context } from '../../context/Context.tsx'
import { MemoTodo } from './todo/Todo.tsx'
import styles from './TodoList.module.css'

const TodoList = () => {
    const {todos} = useContext(Context)
    return (
        <div className={styles.todoList}>
            {todos &&
                todos.map((todo, idx) =>
                    <MemoTodo
                        idx={idx}
                        key={todo.id}
                        todo={todo}
                        type={'todos'}
                    />
                )
            }
        </div>
    )
}
export const MemoTodoList = memo(TodoList)