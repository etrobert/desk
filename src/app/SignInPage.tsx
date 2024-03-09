'use client';

import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TypographyH1 } from '@/components/ui/typography';
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
      <TypographyH1>Sign In</TypographyH1>
      {error?.message}
      <form
        className="grid gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          signIn();
        }}
      >
        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="Email"
        />
        <Input
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
