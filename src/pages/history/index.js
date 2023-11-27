import React {useEffect} from 'react';
import History from '@/components/History';
import Navbar2 from '@/components/Navbar2';
import { getCookie, setCookie } from "@/utils/cookies";
import { useRouter } from 'next/router';

const HistoryPage = () => {
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
      <Navbar2/>
      <History/>
    </div>
  );
};

export default HistoryPage;
