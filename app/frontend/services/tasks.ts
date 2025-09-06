import {Task} from "types/tasks";

export const TaskService ={
    getTasks: (): Promise<Task[]> => fetch("/api/v1/tasks")
        .then((response: Response): Promise<Task[]> => response.json()),
    getTask: (id: Number): Promise<Task> => fetch(`/api/v1/tasks/${id}`)
        .then((response: Response): Promise<Task> => response.json())
}

export default TaskService;