import { Navigate, Route, Routes } from 'react-router';
import AppLayout from "./layouts/AppLayout";
import HomeIndex from "./pages/home/HomeIndex"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<HomeIndex />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Routes>
    );
};

export default AppRouter;