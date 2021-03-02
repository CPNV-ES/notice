import { Col, Container, Form, FormGroup, Row, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
    return (
        <div class="content">
            <Container className="px-4">
                <Row className="justify-content-center">
                    <Col md={6} className="col-md-6 contents">
                        <Row className="row justify-content-center">
                            <Col md={12} className="col-md-12">
                                <div class="form-block">
                                    <div class="mb-4">
                                        <h3>
                                            Sign In to <strong>Notice</strong>
                                        </h3>
                                        <p class="mb-4">
                                            Lorem ipsum dolor sit amet elit.
                                            Sapiente sit aut eos consectetur
                                            adipisicing.
                                        </p>
                                    </div>
                                    <Form action="#" method="post">
                                        <FormGroup className="first">
                                            <label htmlFor="username">
                                                Username
                                            </label>
                                            <FormControl
                                                type="text"
                                                id="username"
                                                required
                                            />
                                        </FormGroup>

                                        <FormGroup className="last mb-4">
                                            <label htmlFor="password">
                                                Password
                                            </label>
                                            <FormControl
                                                type="password"
                                                id="password"
                                                required
                                            />
                                        </FormGroup>

                                        <div class="d-flex mb-5 align-items-center">
                                            <label class="control control--checkbox mb-0">
                                                <span class="caption">
                                                    Remember me
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    checked="checked"
                                                />
                                                <div class="control__indicator"></div>
                                            </label>
                                            <span class="ml-auto">
                                                <Link
                                                    to="#"
                                                    className="forgot-pass"
                                                >
                                                    Forgot Password
                                                </Link>
                                            </span>
                                        </div>

                                        <Button
                                            type="submit"
                                            className="badge-pill py-3 text-white"
                                            variant="primary"
                                            block
                                        >
                                            Log In
                                        </Button>

                                        <span class="d-block text-center my-4 text-muted">
                                            {" "}
                                            or sign in with
                                        </span>

                                        <div class="social-login text-center">
                                            <Link to="#" className="facebook">
                                                <span className="icon-facebook mr-3"></span>
                                            </Link>{" "}
                                            <Link to="#" className="twitter">
                                                <span className="icon-twitter mr-3"></span>
                                            </Link>{" "}
                                            <Link to="#" className="google">
                                                <span className="icon-google mr-3"></span>
                                            </Link>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
