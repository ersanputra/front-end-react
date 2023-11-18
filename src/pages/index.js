
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import SignIn from '@/components/Form';
import Signup from '@/components/Signup';
import Cart from '@/components/Cart';
import { useRouter } from 'next/router';

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
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

  const handleToggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const updateCartItemCount = (count) => {
    setCartItemCount(count);
  };

  return (
    <div>
      <Navbar onToggleCart={handleToggleCart} cartItemCount={cartItemCount} />
      <Header />
      {showCart && <Cart updateCartItemCount={updateCartItemCount} />}
      {showSignIn ? (
        <SignIn onToggleForm={handleToggleForm} setUserIsLoggedIn={setUserIsLoggedIn} />
      ) : (
        <Signup onToggleForm={handleToggleForm} setUserIsLoggedIn={setUserIsLoggedIn} />
      )}
    </div>
  );
}
