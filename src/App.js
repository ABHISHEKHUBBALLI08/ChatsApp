import { ChatEngine } from "react-chat-engine";
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <div className="app-container">
            <div className="header">
                <h1>ChatsApp</h1>
            </div>
            <ChatEngine
                height="90vh"
                projectID="4f8fb556-f971-4c0a-8d2c-16d369a56183"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}   
            />
        </div>
    );
}

export default App;
