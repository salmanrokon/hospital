import { useState } from "react";
import { FaCalendarAlt, FaHome, FaList } from "react-icons/fa";
import { FaMoneyBillWheat, FaUserDoctor } from "react-icons/fa6";
import { HiOutlineDocumentReport, HiUserGroup } from "react-icons/hi";
import { Link, NavLink, Outlet } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const Dashboard = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const [menuOpen, setMenuOpen] = useState(false);
    const [patientMenuOpen, setPatientMenuOpen] = useState(false);
    const [sidemenuOpen, setSidemenuOpen] = useState(true);

    const toggleMenuDoctor = () => {
        setMenuOpen(!menuOpen);
        if (patientMenuOpen) {
            setPatientMenuOpen(false);
        }
    };

    const toggleMenuPatient = () => {
        setPatientMenuOpen(!patientMenuOpen);
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    const toggleSideMenu = () => {
        setSidemenuOpen(!sidemenuOpen);
    };

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const isAdmin = true;

    // Ensure user and user.email are defined before attempting to find the logged-in user
    const loggedInUser = user && user.email ? users.find(u => u.email === user.email) : null;

    return (
        <div className="flex">
            {sidemenuOpen && (
                <div className="fixed w-64 h-screen bg-blue-400 py-2 space-y-4 px-2 text-black">
                    <ul className="space-y-6 text-xl">
                        {isAdmin ? (
                            <>
                                <li className="flex items-center gap-2">
                                    <FaHome />
                                    <NavLink to="/dashboard">Dashboard</NavLink>
                                </li>
                                <li>
                                    <button onClick={toggleMenuDoctor} className="flex items-center gap-2">
                                        <FaUserDoctor /> Doctors &gt;
                                    </button>
                                    {menuOpen && (
                                        <ul className="ml-8 mt-2">
                                            <li className="flex items-center gap-2 text-base hover:bg-blue-500 py-2">
                                                <NavLink to="/dashboard/doctors">Doctors</NavLink>
                                            </li>
                                            <li className="flex items-center gap-2 text-base hover:bg-blue-500 py-2">
                                                <NavLink to="/dashboard/doctor">Add Doctors</NavLink>
                                            </li>
                                            <li className="flex items-center gap-2 text-base hover:bg-blue-500 py-2">
                                                <NavLink to="/dashboard/edit-doctors/:id">Edit Doctors</NavLink>
                                            </li>
                                            <li className="flex items-center gap-2 text-base hover:bg-blue-500 py-2">
                                                <NavLink to="/dashboard/doctors-profile">Doctors Profile</NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <button onClick={toggleMenuPatient} className="flex items-center gap-2">
                                        <FaUserDoctor /> Patients &gt;
                                    </button>
                                    {patientMenuOpen && (
                                        <ul className="ml-8 mt-2">
                                            <li className="flex items-center gap-2 text-base hover:bg-blue-500 py-2">
                                                <NavLink to="/dashboard/patients">Patient</NavLink>
                                            </li>
                                            <li className="flex items-center gap-2 text-base hover:bg-blue-500 py-2">
                                                <NavLink to="/dashboard/add-patient">Add Patient</NavLink>
                                            </li>
                                            <li className="flex items-center gap-2 text-base hover:bg-blue-500 py-2">
                                                <NavLink to="/dashboard/edit-patient">Edit Patient</NavLink>
                                            </li>
                                            <li className="flex items-center gap-2 text-base hover:bg-blue-500 py-2">
                                                <NavLink to="/dashboard/doctors-patient">Doctors Patient</NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCalendarAlt />
                                    <NavLink to="/dashboard/appointments">Appointments</NavLink>
                                </li>
                                <li className="flex items-center gap-2">
                                    <HiOutlineDocumentReport />
                                    <NavLink to="/dashboard/reports">Reports</NavLink>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaMoneyBillWheat />
                                    <NavLink to="/dashboard/billing">Billing</NavLink>
                                </li>
                                <li className="flex items-center gap-2">
                                    <HiUserGroup />
                                    <NavLink to="/dashboard/staffs">Staffs</NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <div className="divider divider-neutral"></div>
                                <li className="flex items-center gap-2">
                                    <FaHome />
                                    <NavLink to="/">HOME</NavLink>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaHome />
                                    <NavLink to="/">MY ORDERS</NavLink>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaHome />
                                    <NavLink to="/">MY OFFER</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
            <div className={`flex-1 ${sidemenuOpen ? 'ml-64' : ''}`}>
                <div className="navbar bg-base-100 shadow-2xl fixed z-10 w-full">
                    <button onClick={toggleSideMenu}>
                        <p><FaList /></p>
                    </button>
                    {loggedInUser && (
                        <div className="avatar">
                            <div className="w-12 ml-4 rounded">
                                <Link to="/"><img
                                    src={loggedInUser.image}
                                    alt="Tailwind-CSS-Avatar-component" /></Link>
                            </div>
                        </div>
                    )}
                </div>
                <div className="pt-16">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
