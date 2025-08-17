import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";


export default function LoginPage() {
  return (
    <div className="h-screen flex justify-center items-center w-full bg-hover ">
        
        <div className="bg-background flex flex-col items-center px-6 lg:px-12 py-6 rounded-md
        max-w-[400px] w-[90%]">

            <Image src="/images/logo.png" alt="logo" width={500} height={500} 
            className="h-11 w-11" />

            <h2 className="text-2xl font-bold text-white my-2 mb-8 text-center"> Log in to Spotify </h2>

            <form className="w-full">

                    <input type="text" placeholder="Your Email" className="outline-none 
                    border-1 border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
                    <input type="text" placeholder="Password" className="outline-none 
                    border-1 border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
                
                <button type="submit" className="w-full p-2 font-bold cursor-pointer rounded-full bg-green-700 text-white">Login</button>

                <div className="text-secondary-text text-center my-6">
                    <span>
                        Don&apos;t have an account? 
                    </span>
                    <Link href="https://www.spotify.com/us/signup" className="ml-2 text-white underline hover:text-primary">
                        Sign up now
                    </Link>
                </div>
            
            </form> 

        </div>

    </div>
  );
}
