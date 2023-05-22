import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";


const Navbar = () =>
{
    
    const {user,  logOut}=useContext(AuthContext);
    console.log(user);
 

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/addatoy'>Add a Toy</Link></li>
        <li><Link to='/mytoys'>My Toys</Link></li>
        <li><Link to='/alltoy'>All Toy</Link></li>

        <li><Link to='/blog'>Blog</Link></li>
     

    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                       
                     </ul>
                     </div>
                     <img className="w-[140px] h-[140px] " src={logo} alt="" />
                <h1 className="font-bold border-lime-500 text-orange-500 mr-10">Wonder World Toy</h1>
            </div>
          
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
              {navItems}
                </ul>
            </div>
            <div className="navbar-end">
            { user ?
      <> 
        <img className='w-10 h-10 rounded-full' src={ user?.photoURL} alt="" />


       <button onClick={logOut} className="btn btn-outline btn-warning 
      "> LOG OUT</button> </> : 
         <button className="btn btn-outline btn-warning 
        "> <Link to='/login '>LOG IN</Link> </button>
        }
      
            
            
            </div>
        </div>
    );
};

export default Navbar;