import './App.css'
import Bank from './components/Bank'
import Chat from './components/Chat'
import Login from './components/Login'

function App() {
    
    return (
        <>
            <div className='container-md'>
                <h1 className='my-3'>React-Redux Practice</h1>
                <Bank/>
                <Login/>
                <Chat/>
                <br/>
            </div>
            
        </>
    )
}

export default App
