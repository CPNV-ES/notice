import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./LoginForm.css";
import Input from "./form/Input";
import Checkbox from "./form/Checkbox";

function LoginForm() {
    return (
        <div class="form-block">
            <div class="mb-4">
                <h3>
                    Sign In to <strong>Notice</strong>
                </h3>
                <p class="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                </p>
            </div>
            <Form action="#" method="post">
                <Input name="email" type="email" />
                <Input name="password" className="mb-4" type="password" />
                <div class="d-flex mb-5 align-items-center">
                    <Checkbox text="Remember me" checked />
                    <span class="ml-auto">
                        <Link to="#" className="forgot-pass">
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
    );
}

export default LoginForm;
