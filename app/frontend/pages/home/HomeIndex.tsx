import {Button, Col, ListGroup, Row, Spinner} from "react-bootstrap";
import {useState} from "react";
import {Task} from "types/tasks";

const HomeIndex = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(false);

    const clearTasks = () => {
        setTasks([]);
    }

    const loadTasks = () => {
        setLoading(true);
        fetch("/api/v1/tasks")
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    }

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
                                {tasks.map((task, index) => (
                                    <ListGroup.Item key={index}>
                                        {task.title}, {task.description || 'N/A'}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}
                </Col>
            </Row>
        </>
    )
}

export default HomeIndex;