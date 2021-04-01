import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./LoginForm.css";
import Input from "./form/Input";
import Checkbox from "./form/Checkbox";
import { useState } from "react";

import { withNamespaces } from 'react-i18next';

function LoginForm({t}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="form-block">
            <div className="mb-4">
                <h3>
                    {t('loginForm.title')} <strong>Notice</strong>
                </h3>
                <p className="mb-4">
                    {t('loginForm.label')}
                </p>
            </div>
            <Form action="#" method="post">
                <Input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input name="password" className="mb-4" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className="d-flex mb-5 align-items-center">
                    <Checkbox text="Remember me" checked />
                    <span className="ml-auto">
                        <Link to="#" className="forgot-pass">
                            {t('loginForm.link')}
                        </Link>
                    </span>
                </div>

                <Button
                    type="submit"
                    className="badge-pill py-3 text-white"
                    variant="primary"
                    block
                    disabled={email =="" || password =="" }
                >
                   {t('loginForm.button')}
                </Button>

                <span className="d-block text-center my-4 text-muted">
                    {" "}
                    {t('loginForm.span')}
                </span>

                <div className="social-login text-center">
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

export default withNamespaces()(LoginForm);
