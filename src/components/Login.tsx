import { useState } from "react"
import { connect } from "react-redux";
import { login, logout } from "../store/login/actions";
import { AppDispatch, RootState } from "../store/store";
import { ActionInterface } from "../store/login/loginReducer";

interface PropsInterface {
    loggedInUsers: RootState;
    login: (username: string) => ActionInterface;
    logout: (username: string) => ActionInterface; 
}

const Login = ({ loggedInUsers, login, logout } : PropsInterface) => {
    const [username, setUsername] = useState<string>('');

    const handleLogin = () : void => {
        if (username && !loggedInUsers.includes(username)) {
            login(username);
            setUsername('');
        }
    };

    const handleLogout = () : void => {
        if (loggedInUsers.includes(username)) {
            logout(username);
            setUsername('');
        }
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {' '}
            <button onClick={handleLogin}>Login</button>
            {' '}
            <button onClick={handleLogout}>Logout</button>
            <div>
                <h3>Logged In Users:</h3>
                <ul>
                    {loggedInUsers.map((user : string, index: number) => (
                        <li key={index}>{user}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state: { loggedInUsers: string }) => ({
    loggedInUsers: state.loggedInUsers,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    login: (username: string) => dispatch(login(username)),
    logout: (username: string) => dispatch(logout(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);