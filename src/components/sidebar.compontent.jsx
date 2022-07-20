import React from 'react'
import { MdAdminPanelSettings, MdAssignmentTurnedIn } from 'react-icons/md'
import { IoMdPersonAdd } from 'react-icons/io'
import { VscPersonAdd } from 'react-icons/vsc'
import { FaUserEdit } from 'react-icons/fa'
const Sidebar = () => {
    return (
        <div className="grid grid-cols-1">
            <div className="w-1/5 h-screen bg-blue-400 text-white flex flex-col">
                {/* Brand  */}
                <div className="flex flex-row justify-start items-center m-2 p-3 hover:cursor-pointer">
                    <MdAdminPanelSettings size={40} />
                    <div className="text-3xl font-bold">Admin</div>
                </div>
                <hr className="w-full h-0.5 mb-6" />
                {/* Add user */}
                <div className="flex flex-row justify-start items-center ml-6 p-1 hover:cursor-pointer">
                    <IoMdPersonAdd size={28} />
                    <div className="m-2 text-2xl font-thin capitalize">add user</div>
                </div>
                {/* Add Mentor */}
                <div className="flex flex-row justify-start items-center ml-6 p-1 hover:cursor-pointer">
                    <VscPersonAdd size={28} />
                    <div className="m-2 text-2xl font-thin capitalize">add mentor</div>
                </div>
                {/* Edit user */}
                <div className="flex flex-row justify-start items-center ml-6 p-1 hover:cursor-pointer">
                    <FaUserEdit size={28} />
                    <div className="m-2 text-2xl font-thin capitalize">edit user</div>
                </div>
                {/* Edit Mentor */}
                <div className="flex flex-row justify-start items-center ml-6 p-1 hover:cursor-pointer">
                    <FaUserEdit size={28} />
                    <div className="m-2 text-2xl font-thin capitalize">edit mentor</div>
                </div>
                {/* Assign */}
                <div className="flex flex-row justify-start items-center ml-6 p-1 hover:cursor-pointer">
                    <MdAssignmentTurnedIn size={28} />
                    <div className="m-2 text-2xl font-thin capitalize">assign</div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar
