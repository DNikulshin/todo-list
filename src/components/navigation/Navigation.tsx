import moment from 'moment'
import { ChangeEventHandler, KeyboardEventHandler, useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context.tsx';
import { ITodo } from '../../types.ts';
import styles from './Navigation.module.css'
import { v4 as uuidv4 } from 'uuid'


export const Navigation = () => {
    const {onChangeHandler} = useContext(Context)
    // const [position, setPosition] = useState(window?.scrollY)
    // const [visible, setVisible] = useState(true)
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const addTodo = () => {
        const newTodo: ITodo = {
            id: uuidv4(),
            text: value,
            dateAdd: moment().format('DD.MM.YYYY HH:mm:ss'),
            completed: false
        }
        onChangeHandler(newTodo)
    }

    const handleChange:  ChangeEventHandler<HTMLInputElement> = (event ) => {
        setValue(event.target.value)
    }

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if(event.key === 'Enter' && value) {
            addTodo()
            setValue('')
        }
    }
    //
    // useEffect(()=> {
    //     const handleScroll = () => {
    //         const moving = window?.scrollY
    //
    //         setVisible(position > moving);
    //         setPosition(moving)
    //     };
    //     window.addEventListener("scroll", handleScroll)
    //     return(() => {
    //         window.removeEventListener("scroll", handleScroll)
    //     })
    // })
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <header className={styles.header}
        >
            <h1 className={styles.title}>
                Todo list
            </h1>
            <Link to='/'>Home</Link>
            <Link to='completed'>Completed</Link>
                <input
                type="text"
                value={value}
                ref={inputRef}
                className={styles.input}
                placeholder="Enter todo..."
                onKeyDown={handleKeyDown}
                onChange={handleChange}
            />
        </header>
    )
}
