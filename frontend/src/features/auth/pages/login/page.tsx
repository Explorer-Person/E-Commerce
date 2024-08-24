import LoginHook from "./hook";
import style from "./style.module.css"



const LoginPage = () =>{
    const {functions: {postLoginData, getLoginData}} = LoginHook();
    return (
        <div className={style.container}>
            <div className={style.formContainer}>
                <h2 className={style.heading}>Login</h2>
                <div className={style.form}>
                    <div className={style.formGroup}>
                        <label htmlFor="username" className={style.label}>Username</label>
                        <input onChange={getLoginData} type="text" name="username" id="username" className={style.input} placeholder="Enter your username" />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="password" className={style.label}>Password</label>
                        <input onChange={getLoginData} type="password" name="password" id="password" className={style.input} placeholder="Enter your password" />
                    </div>
                    <button onClick={postLoginData} className={style.button}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;