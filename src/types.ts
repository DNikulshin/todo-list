export interface ITodo {
    id: string
    text: string
    dateAdd: string
    completed: boolean
    type?: {
        todos: 'todos'
        completedTodos: 'completedTodos'
    }
}

export type TypeTodo = {
    type: 'todos' | 'completedTodos'
}
// export interface ITodoProps {
//     todos?: ITodo[]
//     typeTodos: TypeTodo
//     idx?: number
//     todo?: ITodo
// }

export interface RemoveTodoProps {
    id: string
   // typeTodos: 'todos' | 'completedTodos'
}

export interface ToggleTodoProps {
    id: string
   //typeTodos: 'todos' | 'completedTodos'
}
