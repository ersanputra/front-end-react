// pages/index.js

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import SignIn from '@/components/Form';
import Signup from '@/components/Signup';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(true);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleToggleForm = async () => {
    if (userIsLoggedIn && showSignIn) {
      router.push('main');
    } else {
      setShowSignIn((prev) => !prev);
    }
  };

  return (
    <div style={{ backgroundColor: '#ffd700' }}>
      <ToastContainer />
      <Header />
      {showSignIn ? (
        <SignIn onToggleForm={handleToggleForm} setUserIsLoggedIn={setUserIsLoggedIn} />
      ) : (
        <Signup onToggleForm={handleToggleForm} setUserIsLoggedIn={setUserIsLoggedIn} />
      )}
    </div>
  );
}
