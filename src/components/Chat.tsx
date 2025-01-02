import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as chatActionCreators from '../store/chat/actionCreators'
import { Button, Col, Form, Row } from "react-bootstrap";

const Chat = () => {
    const [sender, setSender] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const loggedInUsers = useSelector((state: RootState) => state.loggedInUsers);
    const chatMessages = useSelector((state: RootState) => state.chatMessages);
    const dispatch = useDispatch();
    const { sendMessage } = bindActionCreators(chatActionCreators, dispatch);

    const handleSendMessage = () => {
        if (loggedInUsers.includes(sender)) {
            sendMessage(sender, message);
            setMessage('');
        } else {
            setErrorMessage("User doesn't exists...");
        }
    }
    return (
        <>
            <h2 className="my-3">Chat</h2>
            <div>
                {chatMessages.map((msg, index) => (
                    <p key={index}>
                        <strong>{msg.sender}: </strong> {msg.message}
                    </p>
                ))}
            </div>
            <Row className="g-1">
                <Col md='5'>
                    <Form.Control
                        type="text"
                        placeholder="Type sender name here"
                        value={sender}
                        onChange={(e) => setSender(e.target.value)}
                    />
                </Col>
                <Col md='5'>
                    <Form.Control
                        type="text"
                        placeholder="Type your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Col>
            </Row>
            <Button variant="secondary" className="my-2" onClick={handleSendMessage} disabled={!sender || !message}>Send Message</Button>
            <p className="text-danger">{errorMessage}</p>
        </>
    )
}

export default Chat