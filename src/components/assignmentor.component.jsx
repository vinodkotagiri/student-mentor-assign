import { React, useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select'
import { Usercontext } from '../App'

const AssignStudent = () => {
    const context = useContext(Usercontext)
    const navigate = useNavigate()
    const { id } = useParams()
    const { students, mentors, setStudents, setMentors } = context
    const mentor = mentors[id]

    const studentOptions = []
    students.map((student) => studentOptions.push({ value: student.id, label: student.firstName }))

    const handleChange = (e) => {
        console.log(e)
    }

    const handleAssign = () => {
    }

    return (
        <div className="w-full">
            <div className="flex flex-row justify-center h-20 bg-blue-400 text-white text-3xl font-semibold capitalize p-6">
                assign mentor
            </div>
            <div className="flex flex-row justify-center h-20 bg-gray-300 text-blue-600 text-2xl font-semibold capitalize p-6">
                {`${mentor.firstName} ${mentor.lastName}`}
            </div>
            <div>
                <div className="text-xl flex flex-row justify-center align-center py-6 font-semibold text-gray-500">Select Students To Assign</div>
                <Select options={studentOptions} isMulti className="mx-28 basic-multi-select" onChange={(e) => handleChange(e)} />
            </div>
            <div className="flex flex-row gap-6 justify-center
            align-center m-6">
                <button className="border-b hover:text-white border-green-400 hover:bg-green-400 font-semibold rounded-lg text-green-800 py-3 px-8" onClick={() => handleAssign()}>{mentor.areStudentsAssigned ? "Change" : "Assign"}</button>
                <button className="border-b border-red-400 font-semibold rounded-lg text-red-400 py-3 px-8 hover:bg-red-500 hover:text-white" onClick={() => navigate("/students")}>Cancel</button>
            </div>

        </div >
    )
}

export default AssignStudent
