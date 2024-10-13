import { useState } from "react";
import axios from 'axios';

const LoginForm=()=>{
    const [username,setUsername]=useState('');
    const [password, setPassword] = useState('');
    const [error,setError]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();

        const authObject={'Project-ID':"4f8fb556-f971-4c0a-8d2c-16d369a56183" ,'User-Name':username, 'User-Secret':password};

        try{
            axios.get('https://api.chatengine.io/chats',{headers:authObject});
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);

            window.location.reload();
        }catch(error){
            setError('Oops,incorrect credentials.')

        }

    }
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">ChatsAPP</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input " placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input " placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>start chatting with ChatsApp</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>

        </div>
    )

}
export default LoginForm;