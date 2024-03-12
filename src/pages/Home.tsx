import { MemoTodoList } from '../components/todo-list/TodoList.tsx'
import { MemoCompletedTodoList } from '../components/todo-list/completedTodoList.tsx/CompletedTodoList.tsx'
export const Home = () => {
 
    return (
        <>
        <MemoTodoList/>
        <MemoCompletedTodoList/>
        </>
    )
}
