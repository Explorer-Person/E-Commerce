import style from './style.module.css'
// import {ButtonsCss} from '@src/styles/components.style'

import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CardInputContainer = () => {
    return (
        <div className={`${style.cardInputBox}`}>
            <h2 className='text-center mb-5'>Card Info</h2>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="cardNumber" label="Card Number">
                        <Form.Control type="card" placeholder="1234 4567" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="cardOwner" label="Card Owner">
                        <Form.Control type="text" placeholder="John Adams" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel
                        controlId="cardName"
                        label="Card Name"
                    >
                        <Form.Select aria-label="Floating label select example">
                            <option>MasterCard</option>
                            <option value="1">Visa</option>
                            <option value="2">Access</option>
                            <option value="3">American Express</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className={`${style.expiryDate}`}>
                <Col xs="5">
                    <FloatingLabel controlId="startDate" label="start">
                        <Form.Control type="date" placeholder="12/12/2012"/>
                    </FloatingLabel>
                </Col>
                <Col xs="5">
                    <FloatingLabel controlId="expiryDate" label="finish">
                        <Form.Control type="date" placeholder="12/12/2012"/>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className={`${style.securityCode}`}>
                <Col xs="3">
                    <FloatingLabel controlId="securityCode" label="security">
                        <Form.Control type="number" placeholder="255"/>
                    </FloatingLabel>
                </Col>
            </Row>
        </div>
    )
};

export default CardInputContainer;