import { memo, useContext } from 'react'
import { Context } from '../../../context/Context.tsx'
import { MemoTodo } from '../todo/Todo.tsx'
import styles from '../TodoList.module.css'

const completedTodoList = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {completedTodos} = useContext(Context)
    return (
        <div className={styles.todoList}>
            {completedTodos &&
                completedTodos.map((todo, idx) =>
                    <MemoTodo
                        idx={idx}
                        key={todo.id}
                        todo={todo}
                        type={'completedTodos'}
                    />
                )
            }
        </div>
    )
}
export const MemoCompletedTodoList = memo(completedTodoList)