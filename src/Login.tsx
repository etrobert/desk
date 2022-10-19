import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

import Button from './components/Button';
import TextInput from './components/TextInput';
import { auth } from './firebase';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<FirebaseError | null>(null);

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      if (!(error instanceof FirebaseError)) throw error;
      setError(error);
    }
  };

  return (
    <>
      <h1>Login</h1>
      {error?.message}
      <form
        className="Login__form"
        onSubmit={(event) => {
          event.preventDefault();
          signIn();
        }}
      >
        <TextInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="Email"
        />
        <TextInput
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          placeholder="Password"
        />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
};

export default Login;
