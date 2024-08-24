// import React from 'react';
import SignupHook from './hook';
import style from './style.module.css';

const SignupPage = () => {
    const {functions: {getSignupData, postSignupData}} = SignupHook();
    return (
        <div className={style.container}>
            <div className={style.formContainer}>
                <h2 className={style.heading}>Sign Up</h2>
                <div className={style.form}>
                    <div className={style.formGroup}>
                        <label htmlFor="username" className={style.label}>Username</label>
                        <input onChange={getSignupData} type="text" id="username" name='username' className={style.input} placeholder="Enter your username" />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="email" className={style.label}>Email</label>
                        <input onChange={getSignupData} type="email" id="email" name='email' className={style.input} placeholder="Enter your email" />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="phone" className={style.label}>Phone</label>
                        <input onChange={getSignupData} type="phone" id="phone" name='phone' className={style.input} placeholder="Enter your phone" />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="password" className={style.label}>Password</label>
                        <input onChange={getSignupData} type="password" id="password" name='password' className={style.input} placeholder="Enter your password" />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="confirmPassword" className={style.label}>Confirm Password</label>
                        <input onChange={getSignupData} type="password" id="confirmPassword" name='confirmPassword' className={style.input} placeholder="Confirm your password" />
                    </div>
                    <button onClick={postSignupData} className={style.button}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
