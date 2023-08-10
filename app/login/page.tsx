import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import AuthButtonClient from "../auth-button-client";
import React from "react";

export default async function Login() {
    const supabase = await createServerComponentClient<Database>({ cookies });
    console.log({supabase});

    const {
        data: { session }
    } = await supabase.auth.getSession();
                                    
    console.log({session});

    if (session) {
        redirect('/');
    }

    return <AuthButtonClient session = { session } />
}