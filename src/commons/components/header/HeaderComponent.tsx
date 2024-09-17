import { Menu, Search, Bell } from "lucide-react";
import Image from "next/image";

type HeaderComponentProps = {
    wideSidebar: boolean
    toggleWideSidebar: () => void
}

export function HeaderComponent({wideSidebar, toggleWideSidebar}: HeaderComponentProps) {
    return (
        <>
                    <div className="mr-5">
                        <Menu onClick={() => toggleWideSidebar()} className="text-gray-500 w-6 h-6 cursor-pointer" />
                    </div>
                    <div className="flex-grow relative">
                        <input type="text" placeholder="Search..." className="block t-1 w-full rounded-sm p-2 pl-10 text-xs bg-gray-100
                            focus:outline-none
                            sm:text-sm"/>
                        <span className="text-gray-500 absolute top-2.5 left-3"><Search className="w-4 h-4" /></span>
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
                    
        </>
    )
}