'use client';
import dynamic from "next/dynamic";
import Service from "@/component/services";
import ServerComponent from "@/component/serverComponent";
import Hero from "@/component/hero";



const Page = () => {
  return (
    <>
      <ServerComponent>
        <Hero />
      </ServerComponent>
      
      <Service/>
    </>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false })
