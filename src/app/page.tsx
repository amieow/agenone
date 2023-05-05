'use client';
import dynamic from "next/dynamic";
import Achievement from "@/component/achievement";
import ServerComponent from "@/component/serverComponent";
import Hero from "@/component/hero";
import Services from "@/component/services";
import Project from "@/component/Project";
import TrustedCompany from "@/component/trustedCompany";
import Testimoni from "@/component/testimoni";


const Page = () => {
  return (
    <main className="overflow-x-hidden">
      
      <ServerComponent>
        <Hero/>
        <Services/>
        <Achievement/>
        <Project/>
        <TrustedCompany/>
        <Testimoni/>
      </ServerComponent>
    </main> 
  );
};

export default dynamic(() => Promise.resolve(Page))
