import styles from '../login/styles.module.scss';
import logo from '../../assets/images/logo.png'

function Login() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.login_container_wrapper}>
            <img src={logo} alt="Logo" />
            <div className={styles.login_container}>
                <input className={styles.login_container_input} type='text' placeholder='Enter your username or email'/>
                <input className={styles.login_container_input} type='password' placeholder='Enter your password'/>
                <div className={styles.login_btn_wrapper}>
                    <span className={styles.sign_in_btn}>SIGN IN</span>
                    <span className={styles.forgot_password}>Forgot Password?</span>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Login;