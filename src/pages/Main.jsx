import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeadlineCards from "@/components/HeadlineCards";
import Food from "@/components/Food";
import DataForm from "@/components/DataForm";


export default function Main() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
<DataForm/>
      
    </div>
  );
}
