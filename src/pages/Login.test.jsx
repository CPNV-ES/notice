import { act, fireEvent, render } from "@testing-library/react";
import Login from "./Login";

import { RouterWrap } from "../../tests/utils/wrap";

describe("Login Page rendering", () => {
    test("renders login inputs", () => {
        const { getByLabelText } = render(RouterWrap(<Login />));

        const emailInput = getByLabelText(/Email/i);
        const passwordInput = getByLabelText(/Password/i);

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });


    test("renders a login button", () => {
        const { getByText } = render(RouterWrap(<Login />));

        const loginButton = getByText("Log In");

        expect(loginButton).toBeInTheDocument();
        expect(loginButton).toBeDisabled();
    }); 
});


describe("Login Page behavior", () => {
    test("email input is required", () => {
        const { getByLabelText } = render(RouterWrap(<Login />));

        const emailInput = getByLabelText(/email/i);

        expect(emailInput.required).toBeTruthy();
    });

    test("password input is required", () => {
        const { getByLabelText } = render(RouterWrap(<Login />));

        const emailInput = getByLabelText(/password/i);

        expect(emailInput.required).toBeTruthy();
    });


    test("email input is of type email", () => {
        const { getByLabelText } = render(RouterWrap(<Login />));

        const emailInput = getByLabelText(/email/i);

        expect(emailInput).toBeInTheDocument();
        expect(emailInput.type).toBe('email');
    });

    test("password input is of type password", () => {
        const { getByLabelText } = render(RouterWrap(<Login />));

        const passwordInput = getByLabelText(/Password/i);

        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput.type).toBe('password');
    });

    test("login button should be enabled when inputs are filled", async () => {
        const { getByText, getByLabelText } = render(RouterWrap(<Login />));

        const emailInput = getByLabelText(/email/i);
        const passwordInput = getByLabelText(/password/i);
        const loginButton = getByText("Log In");

        await act(async () => {
            fireEvent.change(emailInput, {
                target: {value: 'johndoe12'},
            });
        
            fireEvent.change(passwordInput, {
                target: {value: 'oatmeal12'},
            })
        });

        expect(loginButton).toBeInTheDocument();
        expect(loginButton).toBeEnabled();
    });
});