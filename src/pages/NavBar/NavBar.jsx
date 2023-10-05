import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const navItems = <>
        <li><NavLink to='/news'>News</NavLink></li>
        <li><NavLink to='/destination'>Destination</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>

    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
        
    }


    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="bg-black">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link><img src="/public/images/icons/icon.png" alt="" /></Link>
            </div>
            <div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="">
            {
                    user ? <button onClick={handleSignOut} className="btn">Sign Out</button> : <Link to='/login' className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;