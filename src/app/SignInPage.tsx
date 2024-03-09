'use client';

import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import TextInput from '../components/TextInput';
import { auth } from '../firebase';

const SignInPage = () => {
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
      <h1>Sign In</h1>
      {error?.message}
      <form
        className="grid gap-2"
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
        <Button type="submit">Sign In</Button>
      </form>
    </>
  );
};

export default SignInPage;
