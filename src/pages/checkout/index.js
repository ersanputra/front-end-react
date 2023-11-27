import React,{useEffect} from 'react';
import DataForm from '@/components/DataForm'
import Navbar from '@/components/Navbar';
import { getCookie, setCookie } from "@/utils/cookies";
import { useRouter } from 'next/router';

const CheckoutPage = () => {
  const router = useRouter();
  useEffect(() => {
    const userData = getCookie("userData");
    if (userData) {
      setIsAuthenticated(true); // Set to true if user data exists
    } else {
      router.push("/"); // Redirect if not authenticated
    }
  }, [router]);
  return (
    <div>
      <Navbar/>
      <DataForm/>
    </div>
  );
};

export default CheckoutPage;