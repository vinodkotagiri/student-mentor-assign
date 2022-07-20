import { React, useContext } from 'react'
import { Usercontext } from '../App'
const Dashboard = () => {
    const context = useContext(Usercontext)
    const { students, mentors } = context
    const unAssignedStudents = students.filter((student) => student.isMentorAssigned === false)
    const unAssignedMentors = mentors.filter((mentor) => mentor.areStudentsAssigned === false)
    return (
        <div className="dashboard w-screen">
            <div className="flex flex-row justify-center h-20 bg-blue-400 text-white text-3xl font-semibold capitalize p-6">
                dash board
            </div>
            <div className="container">
                <div className="grid grid-cols-2 gap-x-20 p-6">
                    <div className="flex flex-row space-x-14 font-semibold capitalize text-gray-600 items-center justify-start p-3">
                        <div className="text-2xl m-3">students</div>
                        <div className="text-xl m-3">{students.length}</div>
                    </div>
                    <div className="flex flex-row space-x-14 font-semibold capitalize text-gray-600 items-center justify-start p-3">
                        <div className="text-2xl m-3">unsassigned students</div>
                        <div className="text-xl m-3">{unAssignedStudents.length}</div>
                    </div>
                    <div className="flex flex-row space-x-14 font-semibold capitalize text-gray-600 items-center justify-start p-3">
                        <div className="text-2xl m-3">mentors</div>
                        <div className="text-xl m-3">{mentors.length}</div>
                    </div>
                    <div className="flex flex-row space-x-14 font-semibold capitalize text-gray-600 items-center justify-start p-3">
                        <div className="text-2xl m-3">unassigned mentors</div>
                        <div className="text-xl m-3">{unAssignedMentors.length}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
