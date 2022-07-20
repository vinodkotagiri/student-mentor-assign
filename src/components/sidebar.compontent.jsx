import React from 'react'
import { MdAdminPanelSettings, MdAssignmentTurnedIn } from 'react-icons/md'
import { IoMdPersonAdd } from 'react-icons/io'
import { VscPersonAdd } from 'react-icons/vsc'
// import { FaUserEdit } from 'react-icons/fa'
import { MdOutlineVisibility } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className=" h-screen bg-blue-400 text-white w-1/4">

            {/* Brand  */}
            <Link to="/">
                <div className="flex w-1/4flex-row justify-start items-center m-2 p-3 hover:cursor-pointer">
                    <MdAdminPanelSettings size={40} />
                    <div className="text-3xl font-bold">Admin</div>
                </div >
            </Link>
            <hr className="w-full h-0.5 mb-6" />

            {/* view students */}
            <Link to="/students">
                <div className="flex flex-row justify-start items-center ml-6 p-1 hover:cursor-pointer">
                    <MdOutlineVisibility size={28} />
                    <div className="m-2 text-2xl font-thin capitalize">view students</div>
                </div>
            </Link>

            {/* view mentors */}
            <Link to="/mentors">
                <div className="flex flex-row justify-start items-center ml-6 p-1 hover:cursor-pointer">
                    <MdOutlineVisibility size={28} />
                    <div className="m-2 text-2xl font-thin capitalize">view mentors</div>
                </div>
            </Link>

            {/* Add student */}
            <Link to="/add-student">
                <div className="flex flex-row justify-start items-center ml-6 p-1 hover:cursor-pointer">
                    <IoMdPersonAdd size={28} />
                    <div className="m-2 text-2xl font-thin capitalize">add student</div>
                </div>
            </Link>

            {/* Add Mentor */}
            <Link to="/add-mentor">
                <div className="flex flex-row justify-start items-center ml-6 p-1 hover:cursor-pointer">
                    <VscPersonAdd size={28} />
                    <div className="m-2 text-2xl font-thin capitalize">add mentor</div>
                </div>
            </Link>

            {/* Edit student
            <Link to="edit-student/:id">
                <div className="flex flex-row justify-start items-center ml-6 p-1 hover:cursor-pointer">
                    <FaUserEdit size={28} />
                    <div className="m-2 text-2xl font-thin capitalize">edit student</div>
                </div>
            </Link>

            {/* Edit Mentor */}
            {/* <Link to="/edit-mentor/:id">
                <div className="flex flex-row justify-start items-center ml-6 p-1 hover:cursor-pointer">
                    <FaUserEdit size={28} />
                    <div className="m-2 text-2xl font-thin capitalize">edit mentor</div>
                </div>
            </Link>  */}

            {/* Assign */}
            <Link to="/assign">
                <div className="flex flex-row justify-start items-center ml-6 p-1 hover:cursor-pointer">
                    <MdAssignmentTurnedIn size={28} />
                    <div className="m-2 text-2xl font-thin capitalize">assign</div>
                </div>
            </Link>
        </div >

    )
}
export default Sidebar
