'use server'

import { Navbar } from "@/components";
import React from "react";

async function GeneralLayout({ children }: { children: React.ReactNode }) 
{

    return (
        <>
            <Navbar/>
            <main className="flex flex-col items-center p-24">
                <span className="text-lg">
                    <h1>HELLO WORD FROM LAYOUT</h1>
                    {children}
                </span>
            </main>
        </>
    )

}

export default GeneralLayout