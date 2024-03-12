import { Outlet } from 'react-router-dom'
import styles from '../MainStyles.module.css'

export const SecondaryLayout = () => {
  return (
    <div className={styles.container}>
    <Outlet/>
    </div>
  )
}
