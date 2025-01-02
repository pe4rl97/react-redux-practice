import './App.css'
import Bank from './components/Bank'
import Chat from './components/Chat'
import Login from './components/Login'
import UserList from './components/UserLIst'

function App() {
    
    return (
        <>
            <div className='container-md'>
                <h1 className='my-3'>React-Redux Practice</h1>
                <Bank/>
                <hr/>
                <Login/>
                <hr/>
                <Chat/>
                <hr/>
                <UserList/>
                <br/>
            </div>
            
        </>
    )
}

export default App
