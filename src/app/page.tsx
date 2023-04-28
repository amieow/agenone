'use client';
import dynamic from "next/dynamic";
import Service from "@/component/services";
import ClientComponent from "@/component/clientComponent";
import Hero from "@/component/hero";

const Page = () => {
  return (
    <>
      <ClientComponent>
        <Hero/>
      </ClientComponent>
      <Service/>
    </>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false })
