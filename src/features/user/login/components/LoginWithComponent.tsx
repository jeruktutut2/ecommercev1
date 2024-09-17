import { Facebook, Twitter} from 'lucide-react';

export function LoginWithComponent() {
    return (
        <>
            <div className="flex flex-row items-center justify-center mt-6">
                <div className="flex-grow border-t border-solid border-gray-300"></div>
                <span className="mx-1 text-gray-500 text-xs">Login with</span>
                <div className="flex-grow border-t border-solid border-gray-300"></div>
            </div>
            <div className="flex flex-row items-center justify-center mt-3 gap-2">
                <button type="button" className="bg-gray-300 text-white text-sm rounded-sm shadow-sm p-1
                    hover:text-blue-500 hover:bg-white
                    focus:outline-none focus:bg-gray-400"><Facebook /></button>
                <button type="button" className="bg-gray-300 text-white text-sm rounded-sm shadow-sm p-1
                    hover:bg-gray-400 hover:text-sky-300 hover:bg-white
                    focus:outline-none focus:bg-gray-400"><Twitter /></button>
            </div>
        </>
    )
}