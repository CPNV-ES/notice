import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

import "./Login.css";

import { withNamespaces } from 'react-i18next';
import i18n from '../i18n';

function Login({t}) {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }

    return (
        <div className="content">
            <Container className="px-4">
                <Row className="justify-content-center">
                    <Col md={6} className="col-md-6 contents">
                        <Row className="row justify-content-center">
                            <Col md={12} className="col-md-12">
                                <button onClick={() => changeLanguage('de')}>DE</button>
                                <button onClick={() => changeLanguage('en')}>EN</button>
                                <button onClick={() => changeLanguage('fr')}>FR</button>
                                <LoginForm />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default withNamespaces()(Login);
