import Image from "next/image";
import { Menu, Search } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-row h-screen bg-blue-100">
            <div className="w-[300px] flex-none fixed top-0 left-0 h-full overflow-auto bg-white rounded-sm shadow-sm">
                <div className="w-full h-full p-1">
                    <div className="border-2">side bar nav</div>
                </div>
            </div>
            <div className="flex-1 ml-[303px] flex flex-col">
                <div className="fixed top-0 h-[60px] w-[calc(100%-303px)] bg-white rounded-sm shadow-sm flex flex-row items-center justify-between p-3">
                    <div className="mr-3">
                        <Menu className="text-gray-500" />
                    </div>
                    <div className="flex-grow relative">
                        {/* <span>end element</span> */}
                        <input type="text" className="block mt-1 w-full border border-gray-300 rounded-sm p-2 pl-10
                            focus:outline-none
                            sm:text-sm"/>
                        <span className="text-gray-300 absolute top-3 left-2.5 text-xs"><Search className="w-5 h-5" /></span>
                    </div>
                    <div className="ml-3">
                        <span>second element1</span>
                    </div>
                    
                </div>
                <div className="mt-[63px] h-[60px] w-[calc(100%-303px)] bg-white rounded-sm shadow-sm w-full p-3 flex flex-rows items-center justify-start">
                    {/* <p>mantap</p> */}
                    <div className="">
                        Dashboard
                    </div>
                </div>
                <div className="flex-grow flex flox-row border-2">
                    <div className="flex-grow">
                        <div>content 1</div>
                    </div>
                    <div className="flex-grow max-w-[300px]">
                        right bar nav
                    </div>
                </div>
                <footer className="h-[50px] mt-auto border-2">
                    footer
                </footer>
            </div>
        </div>
    );
}
