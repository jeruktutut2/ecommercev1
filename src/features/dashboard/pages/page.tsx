"use client"

import { Menu, Search, Bell } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { HeaderComponent } from "../../../commons/components/header/HeaderComponent";
import { SidebarComponent } from "../../../commons/components/sidebar/SidebarComponent";
import { PageTitleComponent } from "../components/PageTitleComponent";

export function DashboardPage() {
    const [wideSidebar, setWideSidebar] = useState(true)
    const toggleWideSidebar = () => {
        setWideSidebar(!wideSidebar)
    }
    return (
        <div className="flex flex-row h-screen bg-blue-100">
            <div className={(wideSidebar ? "w-[250px]": "w-[70px]") + " flex-none fixed top-0 left-0 h-full overflow-auto bg-white rounded-sm shadow-sm"}>
                <SidebarComponent />
            </div>
            <div className={(wideSidebar ? "ml-[253px]" : "ml-[73px]") + " flex-1 flex flex-col"}>
                {/* why put w-[calc(100%-303px)] below, becouse when i put that on div above, it will become so small, and also becouse of the fixed css, last element on header will disapear, i dont know why */}
                <div className={"fixed top-0 h-[70px] " + (wideSidebar ? " w-[calc(100%-253px)] " : " w-[calc(100%-73px)] ") + " bg-white rounded-sm shadow-sm flex flex-row items-center justify-between p-5"}>
                    <HeaderComponent wideSidebar={wideSidebar} toggleWideSidebar={toggleWideSidebar} />
                </div>
                 <div className={"mt-[73px] h-[70px] w-full bg-white rounded-sm shadow-sm p-3 flex flex-rows items-center justify-start"}>
                    <PageTitleComponent />
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