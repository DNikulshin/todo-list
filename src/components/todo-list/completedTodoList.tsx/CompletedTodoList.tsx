import { memo, useContext } from 'react'
import { Context } from '../../../context/Context.tsx'
import { MemoTodo } from '../todo/Todo.tsx'
import styles from '../TodoList.module.css'

const completedTodoList = () => {
    const { completedTodos, toggleTodo, removeTodo } = useContext(Context)
    return (
        <div className={styles.todoList}>
            {completedTodos &&
                completedTodos.map((todo, idx) =>
                    <MemoTodo
                        idx={idx}
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        typeTodos={'completedTodos'}
                    />
                )
            }
        </div>
    )
}
export const MemoCompletedTodoList = memo(completedTodoList)