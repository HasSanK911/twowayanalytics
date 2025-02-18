import search from '../assets/search.svg'
import profile from '../assets/Profile.svg'
import logouticon from '../assets/logout.svg'
function Header() {
  return (
    <div>
      <header className="flex items-center justify-between bg-[#F8FAFC] px-4 h-[60px] md:px-6 py-2 w-full">
        <div className="flex-1 max-w-md mx-4 hidden md:flex border-1 border-[#E4E4E4] items-center bg-[#F1F5F9] rounded-[8px] px-4 py-2">
          <img src={search} alt="" />
          <input
            type="text"
            placeholder="Quick search..."
            className="ml-2 w-full bg-transparent focus:outline-none text-sm"
          />
        </div>

        <div className="flex items-center space-x-3">
          <img
            src={profile}
            alt="User Profile"
            className="h-10 w-10 rounded-full object-contain border border-gray-300"
          />
          <button className='btn'><img src={logouticon} alt="" /></button>
        </div>
      </header>
    </div>
  )
}

export default Header