import { useCallback, useState } from 'react'
import { ITodo, RemoveTodoProps, ToggleTodoProps } from '../types.ts'
import { useLocalStorage } from './useLocalStorage.ts'

export const useData = () => {
    const { getLocalStorage } = useLocalStorage()
    const [todos, setTodos] = useState<ITodo[]>(getLocalStorage({ typeTodos: 'todos' }))
    const [completedTodos, setCompletedTodos] = useState<ITodo[]>(getLocalStorage({ typeTodos: 'completedTodos' }))

    const onChangeHandler = useCallback((todo: ITodo) => {
        setTodos(prevState => [todo, ...prevState])
    }, [])

    const removeTodo = useCallback(({ id, typeTodos }: RemoveTodoProps) => {
        typeTodos === 'todos'
       ? setTodos(todos.filter(todo => todo.id !== id))
       : setCompletedTodos(completedTodos.filter(todo => todo.id !== id))
       

    }, [todos])

    // console.log(completedTodos, 'completedTodos');

    //     const removeTodoCompleted = useCallback(({id}: RemoveTodoProps ) => {
    //         setCompletedTodos(completedTodos.filter(item => item.id !== id))
    //       //   setCompletedTodos(completedTodos.filter(item => item.id !== id))
    //   }, [todos])

    const toggleTodo = ({ id }: ToggleTodoProps) => {

        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            }).filter(todo => !todo.completed))

            setCompletedTodos(prev => [...prev ,...todos.filter(todo => todo.completed)])

        // setCompletedTodos([...todos.filter(todo => todo.completed)])

        //   completedTodos.map(todo => {
        //         if (todo.id === id) {
        //             todo.completed = !todo.completed
        //         }
        //         return todo
        //     })
        // setCompletedTodos(prevState =>
        //     [...prevState, ...todos.filter(todo => todo.completed)])
    }



    // const toggleTodoCompleted = ({id}: ToggleTodoProps ) => {

    //     setCompletedTodos(
    //         completedTodos.map(todo => {
    //             if (todo.id === id) {
    //                 todo.completed = false
    //             }
    //             return todo
    //         }))

    //         setTodos([...completedTodos.filter(todo => !todo.completed)])
    //     }

    return {
        onChangeHandler,
        removeTodo,
        toggleTodo,
        todos,
        completedTodos,
        // toggleTodoCompleted,
        // removeTodoCompleted
    }
}