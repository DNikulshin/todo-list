import {useEffect } from 'react'
import { Context } from './context/Context.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { useData } from './hooks/useData.ts';
import { useLocalStorage } from './hooks/useLocalStorage.ts'
import mainStyles from './MainStyles.module.css'
import { useRoutes } from './router/Routes.tsx'

function App() {
    const {setLocalStorage} = useLocalStorage()
    const {toggleTodo, removeTodo, onChangeHandler, todos, completedTodos} = useData()
    const routes = useRoutes()
    console.log(completedTodos, 'completedTodos')
    useEffect(() => {
        setLocalStorage({typeTodos: 'todos', todos})
        setLocalStorage({typeTodos: 'completedTodos', todos: completedTodos})
    }, [completedTodos, setLocalStorage, todos])

    return (
        <Context.Provider value={{
            removeTodo,
            toggleTodo,
            onChangeHandler,
            todos,
            completedTodos
        }}>
            <Router>
                <div className={mainStyles.app}>
                    {routes}
                </div>
            </Router>
        </Context.Provider>
    )
}
export default App
