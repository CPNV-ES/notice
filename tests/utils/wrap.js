import {BrowserRouter as Router} from 'react-router-dom'; 

export const RouterWrap = (children) => {
    return (
        <Router>
            {children}   
        </Router>
    );
}