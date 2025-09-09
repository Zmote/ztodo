import {Button, Col, Form, InputGroup, ListGroup, Row, Spinner} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Task} from "types/tasks";
import {TaskService} from 'services/tasks'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEye} from '@fortawesome/free-solid-svg-icons'
import ClockWidget from "components/clock/ClockWidget";
import CalendarWidget from "components/calendar/CalendarWidget";
import TaskSidebar from "./TaskSidebar";

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
            <Row className={"g-3"}>
                <Col sm={3}>
                    <ClockWidget></ClockWidget>
                    <hr/>
                    <CalendarWidget/>
                </Col>
                <Col sm={6}>
                    <Row>
                        <Col sm={12}>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Search Tasks"
                                    aria-label="Search Tasks"
                                    aria-describedby="search-addon"
                                />
                                <Button variant="outline-success" id="search-addon">
                                    Search
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
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
                                                    <Button size={'sm'} variant={'danger'} className="ms-1 float-end"
                                                            href={task.url}>
                                                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                                    </Button>
                                                    <Button size={'sm'} variant={'outline-primary'}
                                                            className="float-end"
                                                            href={task.url}>
                                                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                                    </Button>
                                                </section>
                                                <p className={'mb-0'}>{task.description}</p>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                        </Col>
                    </Row>
                    <Row className={"mt-2 float-end"}>
                        <Col sm={12}>
                            <Button onClick={loadTasks}>
                                Load Tasks
                            </Button>
                            <Button onClick={clearTasks} variant={'outline-secondary'} className={'ms-1'}>
                                Clear Tasks
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col sm={3}>
                    <TaskSidebar></TaskSidebar>
                </Col>
            </Row>
        </>
    )
}

export default TasksIndex;