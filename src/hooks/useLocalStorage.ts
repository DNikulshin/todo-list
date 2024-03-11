import { useCallback } from 'react';
import { ITodo} from '../types.ts'

interface StorageProps {
    todos?:  ITodo[]
    typeTodos: 'completedTodos' | 'todos'
}
export const useLocalStorage = () => {
    const getLocalStorage = useCallback(({typeTodos}: StorageProps) => {
       return JSON.parse(localStorage.getItem(typeTodos) || '[]')
    }, [])
    const setLocalStorage = useCallback(({typeTodos, todos}: StorageProps) => {
            localStorage.setItem(typeTodos, JSON.stringify(todos))
    }, [])

    return {
        getLocalStorage,
        setLocalStorage
    }
}