import { createContext } from 'react'
import { ITodo, ToggleTodoProps, RemoveTodoProps } from '../types.ts'

interface IContext {
    todos: ITodo[]
    completedTodos: ITodo[]
    onChangeHandler: (todo : ITodo) => void
    toggleTodo: ({id}: ToggleTodoProps) =>  void
    removeTodo: ({id, typeTodos}: RemoveTodoProps) =>  void
    // toggleTodoCompleted:  ({id}: RemoveTodoProps) =>  void
    // removeTodoCompleted: ({id}: ToggleTodoProps) =>  void
}

export const Context = createContext<IContext>({} as IContext) 