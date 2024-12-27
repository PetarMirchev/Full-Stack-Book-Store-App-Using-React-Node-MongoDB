import { Link } from "react-router-dom"
import { LiaChartBarSolid } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";



const navigation = [
    { id: 1, name: "Dashboard", href: "/dashboard" },
    { id: 2, name: "Orders", href: "/orders" },
    { id: 3, name: "Cart Page", href: "/cart" },
    { id: 4, name: "Check Out", href: "/checkout" },
];



const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    //call redux hook -- to show 
    const cartItems = useSelector(state => state.cart.cartItems);
    // console.log(cartItems); // --> Navbar.jsx:27
    

    // const currentUser = false;
    const { currentUser, logout } = useAuth();

    const handleLogOut = () => {
        logout();
    }

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
                <div>
                    {
                        // currentUser ? <>user</> : <Link to="/login">login</Link>
                        currentUser ? <>
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <img src={avatarImg} alt="user-avatar-default" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                        </button>
                        {/* show dropdowns options */}
                        {
                            isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                    <ul className="py-2">
                                        {
                                            navigation.map((item) => (
                                                <li key={item.id} onClick={() => setIsDropdownOpen(false)}>
                                                    <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                            <li>
                                                <button onClick={handleLogOut} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                                                    Logout
                                                </button>
                                            </li>
                                    </ul>
                                </div>
                            )
                        }
                        </> : <Link to="/login"><FaUserCircle className="size-6"/></Link>
                    }
                </div>              
                <button className="hidden sm:block">
                    <FaRegHeart className="size-6"/>
                </button>

                <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
                    <FaCartShopping className=""/>
                    { //show number of books in  X > 0 or 0
                      cartItems.length > 0  ?  <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span>  :  <span className="text-sm font-semibold sm:ml-1">0</span>
                    }                    
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;

