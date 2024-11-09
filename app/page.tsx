import React from "react";
import next from "next";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return(
<div className="h-screen">
          <Header />
   <div className="flex h-[82.5%]"> 
        <div className="w-1/2 flex flex-col justify-center items-center">
          <br />
          <br />
          <br />
          <br />
            <h1 className="w-[496px] h-[189px] font-[libreBodoni] font-bold text-[40px] leading-[65.8px] ">IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h1>
           <br />
             <p className="h-[147px] font-[libreBodoni] font-medium text-2xl text-[#787054] pl-16">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
  
                <button className="bg-[#A29875] border rounded-[10px] w-[288px] h-[58px] p-[10px] gap-[10px] text-[#FFFFFF] font-[libreBodoni] font-medium text-3xl -translate-x-28">
                 Explore Now</button>
         </div> 
          <div 
             className="h-[647px] w-[462px] flex justify-center items-center">
              <Image 
              src={"/images/newpic.png"} 
              alt="image" 
              width={390} 
              height={530} />
          </div>
   </div>
</div>       
);
}