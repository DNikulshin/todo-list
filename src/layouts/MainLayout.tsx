import { Outlet } from 'react-router-dom'
import { Navigation } from '../components/navigation/Navigation.tsx'

export const MainLayout = () => {

    return <>
        <Navigation/>
        <Outlet/>
    </>
}