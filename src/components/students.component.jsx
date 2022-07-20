import { React, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Usercontext } from '../App'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import { MdDoNotDisturbOnTotalSilence, MdOutlineModeEditOutline, MdAssignmentTurnedIn, MdDelete } from 'react-icons/md'

const Students = () => {
    const context = useContext(Usercontext)
    const { students, setStudents } = context


    const deleteHandler = (id) => {
        const filteredStudents = students.filter((student) => student.id !== id)
        setStudents(filteredStudents)
    }
    return (
        <div className="w-full">
            <div className="flex flex-row justify-center h-20 bg-blue-400 text-white text-3xl font-semibold capitalize p-6">
                students
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center">
                                <thead className="border-b bg-gray-400">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            First
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Last
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Email
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Phone
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Location
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Assigned
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Mentor
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Actions
                                        </th>
                                    </tr>
                                </thead >
                                <tbody>
                                    {
                                        students.map((student, index) => (
                                            <tr className="bg-white border-b" key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {student.firstName}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {student.lastName}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {student.email}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {student.phone}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {student.location}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {
                                                        student.isMentorAssigned ? <IoCheckmarkDoneCircleSharp className="text-green-500 ml-6" size={18} />
                                                            : <MdDoNotDisturbOnTotalSilence className="text-red-500 ml-6" size={18} />
                                                    }
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {
                                                        student.isMentorAssigned ? `${student.assignedMentor}` : "Not Assigned"
                                                    }
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Link to={`/edit-student/${student.id}`}><button className="bg-blue-400 rounded-md p-2 mx-2"><MdOutlineModeEditOutline size={18} /></button></Link>
                                                    <Link to={`/assign-student/${student.id}`}><button className="bg-green-400 rounded-md p-2 mx-2"><MdAssignmentTurnedIn size={18} /></button></Link>
                                                    <button className="bg-red-400 rounded-md p-2 mx-2"><MdDelete size={18} onClick={() => deleteHandler(student.id)} /></button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Students
