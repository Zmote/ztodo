import {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Card, Col, Row} from "react-bootstrap";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarWidget = () => {
    const [value, onChange] = useState<Value>(()=> new Date());


    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <Card.Body className={"bg-transparent border-primary"}>
                        <div
                            className="d-flex justify-content-center align-items-center align-content-center overflow-auto">
                            <Calendar onChange={onChange} value={value} />
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default CalendarWidget;