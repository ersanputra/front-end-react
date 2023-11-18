// pages/index.js

import React, { useState } from 'react';
import Header from '@/components/Header';
import SignIn from '@/components/Form';
import Signup from '@/components/Signup';
import { useRouter } from 'next/router';

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(true);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleToggleForm = async () => {
    if (userIsLoggedIn && showSignIn) {
      router.push('/');
    } else {
      setShowSignIn((prev) => !prev);
    }
  };

  return (
    <div className={`home-background `}>
      <Header />
      {showSignIn ? (
        <SignIn onToggleForm={handleToggleForm} setUserIsLoggedIn={setUserIsLoggedIn} />
      ) : (
        <Signup onToggleForm={handleToggleForm} setUserIsLoggedIn={setUserIsLoggedIn} />
      )}
    </div>
  );
}
