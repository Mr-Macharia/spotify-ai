"use client";
import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { LiaPlusCircleSolid } from "react-icons/lia"
import { LuPlus } from "react-icons/lu"
import { MdOutlineLibraryMusic } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";


export default function Sidebar() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 500) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
        <aside className={`fixed left-2 top-15 bg-background w-75 rounded-lg h-[90vh]
        p-2 over-y-auto transition-transform duration-600 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="flex justify-between text-primary-text items-center p-2 mb-4">
                <h2 className="font-bold">Your Library</h2>
                <Link href="/upload-song">
                <LuPlus size={20}/>
                </Link>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/images/cover-1.jpeg"
                    alt='cover-image'
                    width={300}
                    height={300}
                    className='w-10 h-10 object-cover rounded-lg'/>
                  
                  <div>
                    <p className="text-primary-text font-semibold">Midnight Echoes</p>
                    <p className="text-secondary-text text-sm">Neon Skyline</p>
                  </div>
                </div>
                
                <button className="text-secondary-text cursor-pointer">
                  <FaTrashAlt/>
                </button>

              </div>
               <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
                <Image
                  src="/images/cover-2.jpeg"
                  alt='cover-image'
                  width={300}
                  height={300}
                  className='w-10 h-10 object-cover rounded-lg'/>
                
                <div>
                  <p className="text-primary-text font-semibold">Jamaican Jersey</p>
                  <p className="text-secondary-text text-sm"> By The band</p>
                </div>
                

              </div>

               <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
                <Image
                  src="/images/cover-3.jpeg"
                  alt='cover-image'
                  width={300}
                  height={300}
                  className='w-10 h-10 object-cover rounded-lg'/>
                
                <div>
                  <p className="text-primary-text font-semibold">Lost Feelings</p>
                  <p className="text-secondary-text text-sm">By Spooky System</p>
                </div>
                

              </div>

               <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
                <Image
                  src="/images/cover-4.jpeg"
                  alt='cover-image'
                  width={300}
                  height={300}
                  className='w-10 h-10 object-cover rounded-lg'/>
                
                <div>
                  <p className="text-primary-text font-semibold">Little Castle</p>
                  <p className="text-secondary-text text-sm">By Chess Endevour</p>
                </div>
                

              </div>

               <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
                <Image
                  src="/images/cover-5.jpeg"
                  alt='cover-image'
                  width={300}
                  height={300}
                  className='w-10 h-10 object-cover rounded-lg'/>
                
                <div>
                  <p className="text-primary-text font-semibold">Midnight Echoes</p>
                  <p className="text-secondary-text text-sm">By Jump Street</p>
                </div>
                

              </div>

            </div>

        </aside>

        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="fixed md:hidden bottom-5 left-5 bg-background h-12 w-12 grid place-items-center
        text-white rounded-full z-50 cursor-pointer">

          <MdOutlineLibraryMusic/>

        </button>
    </div>
  )
}