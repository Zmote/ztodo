import { Navigate, Route, Routes } from 'react-router';
import AppLayout from "./layouts/AppLayout";
import HomeIndex from "./pages/home/HomeIndex"
import TasksIndex from "./pages/tasks/TasksIndex";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<AppLayout />}>
                <Route index element={<HomeIndex />} />
            </Route>
            <Route path="/tasks" element={<AppLayout />}>
                <Route index element={<TasksIndex />} />
            </Route>
            <Route path="*" element={<Navigate to="/home" replace />}></Route>
        </Routes>
    );
};

export default AppRouter;