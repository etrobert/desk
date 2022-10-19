import { useState } from 'react';

import Button from './components/Button';
import TextInput from './components/TextInput';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>Login</h1>
      <form className="Login__form">
        <TextInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <TextInput
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
};

export default Login;
