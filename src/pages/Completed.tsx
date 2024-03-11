import { useContext } from 'react'
import { MemoCompletedTodoList } from '../components/todo-list/completed/CompletedTodoList.tsx'
import { Context } from '../context/Context.tsx'
export const Completed = () => {
    const {completedTodos} = useContext(Context)
    return (
        <MemoCompletedTodoList
            todos={completedTodos}
        />
    )
}
