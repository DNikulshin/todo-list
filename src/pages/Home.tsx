import { useContext } from 'react'
import { MemoTodoList } from '../components/todo-list/TodoList.tsx'
import { Context } from '../context/Context.tsx'
export const Home = () => {
    const {todos} = useContext(Context)
    return (
        <MemoTodoList
            todos={todos}
        />
    )
}
