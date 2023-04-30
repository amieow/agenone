'use client';
import dynamic from "next/dynamic";
import Achievement from "@/component/achievement";
import ServerComponent from "@/component/serverComponent";
import Hero from "@/component/hero";
import Services from "@/component/services";
import Project from "@/component/Project";

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      
      <ServerComponent>
        <Hero/>
      <Services/>
        <Achievement/>
        <Project/>
      </ServerComponent>
      
    </div> 
  );
};

export default dynamic(() => Promise.resolve(Page))
