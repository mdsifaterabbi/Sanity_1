import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCheckSquare, faCoffee, faHamburger, faHome, faPizzaSlice, faTv } from '@fortawesome/free-solid-svg-icons'
import { MyMovie } from "../context/database"
import { useContext } from "react"

const Navbar = () => {

    const myStyle = {
        backgroundColor: '#333333',
    }

    const { addToCart } = useContext(MyMovie);

    //console.log(addToCard.length);

    return (
        <>
            <div className="navbar" style={myStyle}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn lg:hidden">
                            <FontAwesomeIcon icon={faBars} />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/home" className="mx-3 text-xl text-black px-2 py-1 hover:bg-slate-800 hover:text-white transition-all linear  duration-300">
                                <FontAwesomeIcon icon={faHome} />
                            </NavLink>
                            <NavLink to="/movies" className="mx-3 text-xl text-black px-2 py-1 hover:bg-slate-800 hover:text-white transition-all linear  duration-300">
                                <FontAwesomeIcon icon={faTv} />
                            </NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-yellow-500 lg:hidden">
                        <FontAwesomeIcon />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/home" className="mx-3 text-3xl text-white px-2 py-1 hover:text-yellow-500 transition-all linear  duration-300">
                            <FontAwesomeIcon icon={faHome} />
                        </NavLink>
                        <NavLink to="/movies" className="mx-3 text-3xl text-white px-2 py-1 hover:text-yellow-500 transition-all linear  duration-300">
                            <FontAwesomeIcon icon={faTv} />
                        </NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end mx-10">
                        <Link to={"/cart"}>
                            <label tabIndex={0} className="btn alert-danger  btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">{addToCart.length}</span>
                                </div>
                            </label>
                        </Link>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="btn">Sign In</a>
                </div>
            </div>
        </>
    )
}
export default Navbar