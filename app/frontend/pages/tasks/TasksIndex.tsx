import {Button, Col, ListGroup, Row, Spinner} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Task} from "types/tasks";
import {TaskService} from 'services/tasks'

const TasksIndex = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(false);

    const clearTasks = () => {
        setTasks([]);
    }

    const loadTasks = () => {
        setLoading(true);
        TaskService.getTasks().then(tasks => {
            setTasks(tasks);
        }).catch((error: unknown) => {
            console.log(error);
        }).finally(() => {
            setLoading(false)
        });
    }

    useEffect(() => {
        loadTasks();
        return () => {
            clearTasks();
        }
    }, [])

    return (
        <>
            <Row className={"mt-2"}>
                <Col sm={12}>
                    <Button onClick={loadTasks}>
                        Load Tasks
                    </Button>
                    <Button onClick={clearTasks} variant={'outline-secondary'} className={'ms-1'}>
                        Clear Tasks
                    </Button>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col sm={12}>
                    {loading ?
                        (<Spinner className={"ms-1"} animation={"border"} size={'sm'}></Spinner>)
                        :
                        (
                            <ListGroup>
                                {tasks.map((task) => (
                                    <ListGroup.Item key={task.id}>
                                        <section>
                                            <h5 className={"d-inline text-primary"}>{task.title}</h5>
                                            <Button size={'sm'} variant={'outline-primary'} className="ms-2 float-end"
                                                    href={task.url}>
                                                Show
                                            </Button>
                                        </section>
                                        <p className={'mb-0'}>{task.description}</p>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}
                </Col>
            </Row>
        </>
    )
}

export default TasksIndex;