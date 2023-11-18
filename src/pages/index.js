import React, { useState } from 'react';
import Header from '@/components/Header';
import SignIn from '@/components/Form';
import Signup from '@/components/Signup';
import { useRouter } from 'next/router';

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(true);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false); // Add this line
  const router = useRouter();

  const handleToggleForm = async () => {
    setShowSignIn((prev) => !prev);

    // Assuming you are using some state to determine the login status
    if (!showSignIn && userIsLoggedIn) {
      // Redirect to the Dashboard page
      router.push('/main');
    }
  };

  return (
    <div>
      <Header />
      {showSignIn ? (
        <SignIn onToggleForm={handleToggleForm} setUserIsLoggedIn={setUserIsLoggedIn} />
      ) : (
        <Signup onToggleForm={handleToggleForm} setUserIsLoggedIn={setUserIsLoggedIn} />
      )}
    </div>
  );
}
