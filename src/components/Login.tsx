import { useState } from "react";
import { connect } from "react-redux";
import { login, logout } from "../store/login/actionCreators";
import { AppDispatch, RootState } from "../store/store";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";

interface PropsInterface {
    loggedInUsers: string[];
    login: (username: string) => void;
    logout: (username: string) => void; 
}

const Login = ({ loggedInUsers, login, logout } : PropsInterface) => {
    const [username, setUsername] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleLogin = () : void => {
        if (username && !loggedInUsers.includes(username)) {
            setErrorMessage('');
            login(username);
            setUsername('');
        }
    };

    const handleLogout = () : void => {
        if (loggedInUsers.includes(username)) {
            setErrorMessage('');
            logout(username);
            setUsername('');
        } else {
            setErrorMessage('User doesn\'t exists')
        }
    }
    return (
        <div>
            <h2 className="my-3">Login</h2>
            <Row>
                <Col md='5'>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Col>
            </Row>
            {' '}
            <Button variant="secondary" onClick={handleLogin}>Login</Button>
            {' '} 
            <Button variant="secondary" className="my-3 mx-3" onClick={handleLogout}>Logout</Button>
            {errorMessage && <span className="text-danger">{errorMessage}</span>}
            <div>
                <h4>Logged In Users:</h4>
                <ListGroup as={'ul'}>
                    <Row>
                        <Col md='5'>
                            {loggedInUsers.map((user : string, index: number) => (
                                <ListGroup.Item key={index}>{user}</ListGroup.Item>
                            ))}
                        </Col>
                    </Row>
                </ListGroup>
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    loggedInUsers: state.loggedInUsers,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    login: (username: string) => dispatch(login(username)),
    logout: (username: string) => dispatch(logout(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);