import Button from './components/Button';
import TextInput from './components/TextInput';

import './Login.css';

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form className="Login__form">
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
};

export default Login;
