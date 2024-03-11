import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout.tsx';
import { Completed } from '../pages/Completed.tsx'
import { Home } from '../pages/Home.tsx'

export const useRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<MainLayout/>}>
            <Route index
                   element={<Home/>}
            >
            </Route>
            <Route path="completed"
                   element={<Completed/>}
            >
            </Route>

            <Route path="*"
                   element={<Navigate to="/" replace/>}
            >
            </Route>
            </Route>
        </Routes>
    )
}