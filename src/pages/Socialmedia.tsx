import { FaYoutube } from "react-icons/fa"
import facebook from '../assets/Facebooksocial.svg';
import x from '../assets/x.svg'
function Socialmedia() {
    return (
        <div>
            <h1 className="font-semibold text-2xl">Social Media Linking</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 mt-4">
                <div className="w-full   p-6 h-[136px] bg-white flex flex-col justify-center items-center rounded-xl border border-gray-200">
                    <button className="btn items-center flex youtube-btn">
                        <FaYoutube size={28} className="text-[#FC0D1B]" />
                        Login with Youtube
                    </button>
                    <p className="mt-4 text-center text-gray-500 text-md">
                        Permissions: Read Posts, Comments, and insights for both Instagram and Facebook.
                    </p>
                </div>
                <div className="w-full   p-6 h-[136px] bg-white flex flex-col justify-center items-center rounded-xl border border-gray-200">
                    <button className="btn items-center flex twitter-btn">
                        <img src={x} alt="x" />
                        <div className="flex justify-center w-50">
                        <div>
                        Login with X
                        </div>
                        </div>
                    </button>
                    <p className="mt-4 text-center text-gray-500 text-md">
                        Permissions: Read Posts, Comments, and insights for both Instagram and Facebook.
                    </p>
                </div>
                <div className="w-full   p-6 h-[136px] bg-white flex flex-col justify-center items-center rounded-xl border border-gray-200">
                    <button className="btn items-center flex facebook-btn">
                        <img src={facebook} alt="facebook" />
                        <div className="text-[#5A7F9D]">
                            Login with Facebook
                        </div>
                    </button>
                    <p className="mt-4 text-center text-gray-500 text-md">
                        Permissions: Read Posts, Comments, and insights for both Instagram and Facebook.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Socialmedia