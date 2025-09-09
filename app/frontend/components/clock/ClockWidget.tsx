import {useEffect, useState} from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import {Card, Col, Row} from "react-bootstrap";

const ClockWidget = () => {
    const [value, setValue] = useState(() => new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <Card.Body className={"bg-transparent border-primary"}>
                        <div
                            className="d-flex justify-content-center align-items-center align-content-center overflow-auto">
                            <Clock size={"160px"} value={value}/>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default ClockWidget;