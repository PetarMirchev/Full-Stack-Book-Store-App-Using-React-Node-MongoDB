import { Link } from "react-router-dom"
import { LiaChartBarSolid } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";



const Navbar = () => {

    const currentUser = true;

  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
            {/* left side */}
            <div className="flex items-center md:gap-16 gap-4">
                <Link to='/'>
                    <LiaChartBarSolid className="size-7"/>
                </Link>

                {/* search input */}
                <div className="relative sm:w-72 w-40 space-x-2">
                    <IoSearch className="absolute inline-block left-3 inset-y-2"/>
                    <input type="text" placeholder="Search here..." 
                        className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
                    />
                </div>
            </div>

            {/* right side */}
            <div className="relative flex items-center md:space-x-3 space-x-2">
                <FaUserCircle className="size-6"/>
                <button className="hidden sm:block">
                    <FaRegHeart className="size-6"/>
                </button>

                <Link to="/card" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
                    <FaCartShopping />
                    <span className="text-sm font-semibold sm:ml-1">0</span>
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;