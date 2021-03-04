import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

import "./Login.css";

function Login() {
    return (
        <div class="content">
            <Container className="px-4">
                <Row className="justify-content-center">
                    <Col md={6} className="col-md-6 contents">
                        <Row className="row justify-content-center">
                            <Col md={12} className="col-md-12">
                                <LoginForm />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
