import { useCallback, useState } from 'react'
import { ITodo, RemoveTodoProps, ToggleTodoProps } from '../types.ts'
import { useLocalStorage } from './useLocalStorage.ts'

export const useData = () => {
    const {getLocalStorage} = useLocalStorage()
    const [todos, setTodos] = useState<ITodo[]>(getLocalStorage({typeTodos: 'todos'}))
    const [completedTodos, setCompletedTodos] = useState<ITodo[]>(getLocalStorage({typeTodos: 'completedTodos'}))

    const onChangeHandler = useCallback((todo: ITodo) => {
        setTodos(prevState => [todo, ...prevState])
    }, [])

    const removeTodo = useCallback(({id, typeTodos}: RemoveTodoProps ) => {
        typeTodos === 'todos' ?
        setTodos(todos.filter(item => item.id !== id))
            : setCompletedTodos(todos.filter(item => item.id !== id))
    }, [todos])


    const toggleTodo = ({id}: ToggleTodoProps ) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            }).filter(todo => !todo.completed))
        setCompletedTodos(prevState =>
            [...prevState, ...todos.filter(todo => todo.completed)])
    }

    return {
        onChangeHandler,
        removeTodo,
        toggleTodo,
        todos,
        completedTodos,
        setTodos,
        setCompletedTodos
    }
}