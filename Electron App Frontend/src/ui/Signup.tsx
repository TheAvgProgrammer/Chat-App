import axios, { AxiosError } from "axios"
import { useRef } from "react"

export default function SignUp() {
    const usernameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const mailRef = useRef<HTMLInputElement | null>(null)
    const messageRef = useRef<HTMLInputElement | null>(null)

    async function onSignUpClick(){
        try {
            console.log(usernameRef.current?.value)
            const res = await axios.post("http://localhost:5000/user/signup", {
                username: usernameRef.current?.value.toString(),
                password: passwordRef.current?.value.toString(),
                mail: mailRef.current?.value.toString()
            })

            if (res.status == 200){
                if (messageRef.current) messageRef.current.textContent = 'Signup Successful!!'
            }

        } catch (error) {
            const err = error as AxiosError<{message: string}>
            if (err.response && err.response.data) {
                console.log(err.response.data)
                if (messageRef.current) messageRef.current.textContent = 'Signup Failed!! ' + err.response.data.message
            }
        }

        if (usernameRef.current) usernameRef.current.value = ''
        if (passwordRef.current) passwordRef.current.value = ''
        if (mailRef.current) mailRef.current.value = ''
    }


    return (
        <>
        <div className="login-div">
        <input ref={mailRef} type="mail" className="signup-mail login-input"  placeholder="Enter Your Mail.."></input>        
            <input ref={usernameRef} type="text" className="signup-username login-input" placeholder="Enter Your Username.."></input>            
            <input ref={passwordRef} type="password" className="signup-password login-input" placeholder="Enter Your Password.."></input>
            <button onClick={onSignUpClick}  className="signup-button">Sign Up</button>
            <p ref = {messageRef} className='displayMessage'></p>
        </div>
        </>
    )
}