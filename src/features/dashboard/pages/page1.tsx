"use client"

import { Menu, Search, Bell } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function DashboardPage() {
    const [wideSidebar, setWideSidebar] = useState(true)
    const toggleWideSidebar = () => {
        setWideSidebar(!wideSidebar)
    }
    return (
        <div className="flex flex-row h-screen bg-blue-100">
            <div className={(wideSidebar ? "w-[250px]": "w-[70px]") + " flex-none fixed top-0 left-0 h-full overflow-auto bg-white rounded-sm shadow-sm"}>
                <div className="w-full h-full p-1">
                    <div className="border-2">side bar nav</div>
                </div>
            </div>
            <div className={(wideSidebar ? "ml-[253px]" : "ml-[73px]") + " flex-1 flex flex-col"}>
                {/* why put w-[calc(100%-303px)] below, becouse when i put that on div above, it will become so small, and also becouse of the fixed css, last element on header will disapear, i dont know why */}
                <div className={"fixed top-0 h-[80px] " + (wideSidebar ? " w-[calc(100%-253px)] " : " w-[calc(100%-73px)] ") + " bg-white rounded-sm shadow-sm flex flex-row items-center justify-between p-7"}>
                    <div className="mr-7">
                        <Menu onClick={() => toggleWideSidebar()} className="text-gray-500 w-6 h-6 cursor-pointer" />
                    </div>
                    <div className="flex-grow relative">
                        <input type="text" placeholder="Search..." className="block mt-1 w-full rounded-sm p-3 pl-12 text-xs bg-gray-100
                            focus:outline-none
                            sm:text-sm"/>
                        <span className="text-gray-500 absolute top-4 left-5"><Search className="w-4 h-4" /></span>
                    </div>
                    <div className="ml-3 flex items-center">
                        <div className="relative">
                            <Bell className="w-6 h-6 m-2"/>
                            <div className="absolute top-0 right-0 bg-red-500 h-[15px] w-[15px] text-xs font-thin text-white rounded-md text-center">3</div>
                        </div>
                        <div className="flex items-center">
                            <Image src="/images/blank-profile-picture.png" alt="user" width={35} height={30} className="rounded-full m-2"/>
                            <div>
                                <p className="text-xs font-black">username</p>
                                <p className="text-xs text-gray-500">role</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={"mt-[83px] h-[80px] w-full bg-white rounded-sm shadow-sm p-3 flex flex-rows items-center justify-start"}>
                    <div className="">
                        Dashboard
                    </div>
                </div>
                <div className="flex-grow flex flox-row">
                    <div className="flex-grow mt-1
                        flex flex-col">
                        <div className="flex">
                            <div className="bg-white flex-grow mr-1 mb-1 p-3">content 1</div>
                            <div className="bg-white flex-grow mb-1 p-3">content 2</div>
                        </div>
                        <div className="flex">
                            <div className="bg-white flex-grow mr-1 p-3">content 3</div>
                            <div className="bg-white flex-grow p-3">content 4</div>
                        </div>
                    </div>
                    <div className="flex-grow ml-1 mt-1">
                        right bar nav
                    </div>
                </div>
                <footer className="h-[50px] mt-auto border-2">
                    footer
                </footer>
            </div>
        </div>
    )
}