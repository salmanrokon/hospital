import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaClinicMedical, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaBars } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdOutlineWatchLater } from "react-icons/md";
import { SiSimplelogin } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";

const NavBarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleServiceDropdown = () => {
        setServiceDropdownOpen(!serviceDropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowPopup(true);
            } else {
                setShowPopup(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-red-700 relative z-50">
            <div className="hidden lg:flex mx-auto justify-between py-4 max-w-7xl">
                <div className="flex items-center gap-4 text-white">
                    <CiLocationOn />
                    <div>
                        <p>Address: 568 Elizabeth Str, London, UK </p>
                    </div>
                </div>
                <div className="flex gap-6 text-white">
                    <FaFacebook />
                    <FaTwitter />
                    <FaYoutube />
                    <FaInstagram />
                   <Link to="/login"> <SiSimplelogin className="text-lg font-extrabold" /></Link>
                </div>
            </div>
            <hr className="hidden lg:block bg-red-500 max-h-0.5" />
            <div className="hidden lg:flex max-w-7xl mx-auto py-2">
                <div className="flex justify-between text-xl w-full">
                    <div className="flex gap-4">
                        <FaClinicMedical className="text-4xl text-white" />
                        <div>
                            <h1 className="text-4xl font-extrabold text-white">HOPE</h1>
                            <p>Medical</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex gap-2 text-white">
                            <MdOutlineWatchLater className="text-2xl" />
                            <div>
                                <p>Working Hours</p>
                                <p className="text-xl font-bold">MON-FRI: 9.00-21.00</p>
                            </div>
                        </div>
                        <div className="flex gap-3 text-white items-center">
                            <IoCall className="text-xl" />
                            <div>
                                <p>HOTLINE</p>
                                <p className="text-xl font-bold">+0962-58-58-258</p>
                            </div>
                        </div>
                        <div className="flex gap-2 text-white items-center">
                            <MdEmail className="text-xl" />
                            <div>
                                <p>EMAIL US</p>
                                <p className="text-xl font-bold">SUPPORT@CLENORA.COM.UK</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex lg:hidden items-center">
                    <NavLink to="/">
                        <FaClinicMedical className="text-3xl text-white" />
                    </NavLink>
                    <button onClick={toggleMenu} className="text-white ml-4">
                        <FaBars className="text-3xl" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:items-center w-full lg:max-w-7xl justify-between">
                    <ul className="menu menu-horizontal px-1 w-full lg:w-auto relative">
                        <li><NavLink to="/" className="text-base text-white">HOME</NavLink></li>
                        <li className="relative">
                            <button onClick={toggleServiceDropdown} className="text-base text-white">SERVICE</button>
                            {serviceDropdownOpen && (
                                <ul className="absolute left-0 top-full bg-white text-black z-50 shadow-lg">
                                    <li><NavLink to="/services" className="block py-2 px-4 text-base">Services</NavLink></li>
                                    <li><NavLink to="/serviceDetails/:id" className="block py-2 px-4 text-base">Service Details</NavLink></li>
                                </ul>
                            )}
                        </li>
                        <li><NavLink to="/blogs" className="text-base text-white">BLOG</NavLink></li>
                        <li><NavLink to="/about" className="text-base text-white">ABOUT</NavLink></li>
                        <li><NavLink to="/contact" className="text-base text-white">CONTACT</NavLink></li>
                    </ul>
                    <div className="navbar-end hidden lg:flex">
                        <Link to="/appoinment"><a className="btn rounded-none">BOOK AN APPOINTMENT</a></Link>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
                    <div className="bg-white h-full shadow-xl p-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-7xl transform transition-transform duration-300 translate-x-0 relative z-50">
                        <button className="text-black mb-4" onClick={toggleMenu}>Close</button>
                        <div className="flex flex-col lg:hidden">
                            <div className="flex items-center gap-4 text-black mb-4">
                                <CiLocationOn />
                                <div>
                                    <p>Address: 568 Elizabeth Str, London, UK</p>
                                </div>
                            </div>
                            <div className="flex gap-6 text-black mb-4">
                                <FaFacebook />
                                <FaTwitter />
                                <FaYoutube />
                                <FaInstagram />
                            </div>
                        </div>
                        <ul className="flex flex-col lg:hidden">
                            <li><NavLink to="/" className="block py-2 text-base text-black">HOME</NavLink></li>
                            <li className="relative">
                                <button onClick={toggleServiceDropdown} className="block py-2 text-base text-black">SERVICE</button>
                                {serviceDropdownOpen && (
                                    <ul className="ml-4 bg-white text-black z-50">
                                        <li><NavLink to="/services" className="block py-2 text-base text-black">Services</NavLink></li>
                                        <li><NavLink to="/serviceDetails/:id" className="block py-2 text-base text-black">Service Details</NavLink></li>
                                    </ul>
                                )}
                            </li>
                            <li><NavLink to="/blogs" className="block py-2 text-base text-black">BLOG</NavLink></li>
                            <li><NavLink to="/about" className="block py-2 text-base text-black">ABOUT</NavLink></li>
                            <li><NavLink to="/contact" className="block py-2 text-base text-black">CONTACT</NavLink></li>
                        </ul>
                        <div className="mt-4">
                            <div className="flex gap-2 text-black">
                                <MdOutlineWatchLater className="text-2xl" />
                                <div>
                                    <p>Working Hours</p>
                                    <p className="text-xl font-bold">MON-FRI: 9.00-21.00</p>
                                </div>
                            </div>
                            <div className="flex gap-3 text-black items-center mt-4">
                                <IoCall className="text-xl" />
                                <div>
                                    <p>HOTLINE</p>
                                    <p className="text-xl font-bold">+0962-58-58-258</p>
                                </div>
                            </div>
                            <div className="flex gap-2 text-black items-center mt-4">
                                <MdEmail className="text-xl" />
                                <div>
                                    <p>EMAIL US</p>
                                    <p className="text-xl font-bold">SUPPORT@CLENORA.COM.UK</p>
                                </div>
                            </div>
                            <Link to="/appoinment"><a className="btn mt-4 w-full rounded-none text-center">BOOK AN APPOINTMENT</a></Link>
                        </div>
                    </div>
                </div>
            )}
            {showPopup && (
                <div className="fixed top-0 left-0 right-0 bg-red-700 z-50 p-4 flex justify-between items-center shadow-lg">
                    <ul className="menu menu-horizontal px-1 w-full lg:w-auto relative">
                        <li><NavLink to="/" className="text-base text-white">HOME</NavLink></li>
                        <li className="relative">
                            <button onClick={toggleServiceDropdown} className="text-base text-white">SERVICE</button>
                            {serviceDropdownOpen && (
                                <ul className="absolute left-0 top-full bg-white text-black z-50 shadow-lg">
                                    <li><NavLink to="/services" className="block py-2 px-4 text-base">Services</NavLink></li>
                                    <li><NavLink to="/serviceDetails/:id" className="block py-2 px-4 text-base">Service Details</NavLink></li>
                                </ul>
                            )}
                        </li>
                        <li><NavLink to="/blogs" className="text-base text-white">BLOG</NavLink></li>
                        <li><NavLink to="/about" className="text-base text-white">ABOUT</NavLink></li>
                        <li><NavLink to="/contact" className="text-base text-white">CONTACT</NavLink></li>
                    </ul>
                    <div className="navbar-end">
                       <Link to="/appoinment"> <a className="btn rounded-none">BOOK AN APPOINTMENT</a></Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBarMain;
