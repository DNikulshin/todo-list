import { createContext } from 'react'
import { ITodo, RemoveTodoProps, ToggleTodoProps } from '../types.ts'

interface IContext {
    todos: ITodo[]
    completedTodos: ITodo[]
    onChangeHandler: (todo : ITodo) => void
    removeTodo: ({id, typeTodos}: RemoveTodoProps) =>  void
    toggleTodo: ({id, typeTodos}: ToggleTodoProps) =>  void
}

export const Context = createContext<IContext>({} as IContext)