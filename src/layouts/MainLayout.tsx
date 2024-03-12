import { Outlet } from 'react-router-dom'
import { Navigation } from '../components/navigation/Navigation.tsx'
import styles from '../MainStyles.module.css'

export const MainLayout = () => {

    return <>
        <Navigation/>
        <div className={styles.container}>
        <Outlet/>
        </div>
    </>
}