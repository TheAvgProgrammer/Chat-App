import { useRef } from 'react'
import './styles/login-and-signup.css'
import { Link } from 'react-router-dom'
import axios, { AxiosError } from 'axios'
export default function Login(){
    const usernameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const messageRef = useRef<HTMLInputElement | null>(null)

    async function onLoginClick(){
        try {
            const res = await axios.post("http://localhost:5000/user/login", {
                username: usernameRef.current?.value.toString(),
                password: passwordRef.current?.value.toString()
            })

            if (res.status == 200){
                if (messageRef.current) messageRef.current.textContent = 'Login Successful!!'
            }

        } catch (error) {
            const err = error as AxiosError<{message: string}>
            if (err.response && err.response.data) {
                if (messageRef.current) messageRef.current.textContent = 'Login Failed!! ' + err.response.data.message
            }
        }

        if (usernameRef.current) usernameRef.current.value = ''
        if (passwordRef.current) passwordRef.current.value = ''
    }

    return (
        <>
        <div className="login-div">
            <input ref={usernameRef} type="text" className="login-username login-input" placeholder="Enter Your Username.."></input>
            <input ref={passwordRef} type="password" className="login-password login-input"  placeholder="Enter Your Password.."></input>
            <button onClick={onLoginClick} className="login-button">Login</button>

            <div className='signup-bottom-div'>
                <p>Don't Have An Account? &nbsp; </p>
                <Link className='signup-link' to = "/signup" >SignUp</Link>
            </div>

            <p ref = {messageRef} className='displayMessage'></p>
        </div>
        </>
    )
}