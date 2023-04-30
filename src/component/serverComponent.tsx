'use client';

import dynamic from "next/dynamic";


function ServerComponent({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
        
    )
}

export default dynamic(() => Promise.resolve(ServerComponent), { ssr: false })
