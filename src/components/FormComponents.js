import './FormComponents.css'
import {useState} from "react"

const FormComponet = ()=>{
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirm] = useState('')

    const [errorUsername,setErrorUsername] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorConfirmPass,setErrorConfirmPass] = useState('')

    const [userNameColor,setUserNameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [confirmPasswordColor,setConfirmColor] = useState('')

    const validateForm = (e)=>{
        e.preventDefault()
        if(userName.length>8){
            setErrorUsername('')
            setUserNameColor('green')
        }else{
            setErrorUsername('กรุณาป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร')
            setUserNameColor('red')
        }

        if(email.includes("@")){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('รูปแบบ email ไม่ถูกต้อง')
            setEmailColor('red')
        }

        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('กรุณาป้อนรหัสผ่านมากกว่า 8 ตัวอักษร')
            setPasswordColor('red')
        }

        if(confirmPassword !== "" && confirmPassword === password){
            setErrorConfirmPass('')
            setConfirmColor('green')
        }else{
            setErrorConfirmPass('รหัสผ่านไม่ตรงกัน')
            setConfirmColor('red')
        }
    }

    return(
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h1>Register</h1>
                <div className="form_control">
                    <label>Username</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}></input>
                    <small style={{color:userNameColor}}>{errorUsername}</small>
                </div>
                <div className="form_control">
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}></input>
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form_control">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}></input>
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form_control">
                    <label>Confirm Password</label>
                    <input type="password" value={confirmPassword} onChange={(e)=>setConfirm(e.target.value)} style={{borderColor:confirmPasswordColor}}></input>
                    <small style={{color:confirmPasswordColor}}>{errorConfirmPass}</small>
                </div>
                <div className="button_container">
                    <button type="submit"><b>REGISTER</b></button>
                </div>
                
            </form>
        </div>
    )
    
}
export default FormComponet