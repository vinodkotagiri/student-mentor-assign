import { React, useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select'
import { Usercontext } from '../App'

const AssignStudent = () => {
    const context = useContext(Usercontext)
    const navigate = useNavigate()
    const { id } = useParams()
    const { students, mentors, setStudents, setMentors } = context
    const student = students[id]

    const [firstName] = useState(student.firstName)
    const [lastName] = useState(student.lastName)
    const [email] = useState(student.email)
    const [phone] = useState(student.phone)
    const [location] = useState(student.location)
    const [isMentorAssigned, setisMentorAssigned] = useState(student.isMentorAssigned)
    const [assignedMentor, setAssignedMentor] = useState(student.assignedMentor)


    const [selectedMentor, setSelectedMentor] = useState({})


    const mentorOptions = []
    mentors.map((mentor) => mentorOptions.push({ value: mentor.id, label: mentor.firstName }))

    const handleChange = (e) => {
        const mentorSelected = mentors[e.value]
        //update student
        setisMentorAssigned(true)
        setAssignedMentor(mentorSelected.firstName)

        setSelectedMentor(mentorSelected)
    }

    const handleAssign = () => {
        //update student
        const data = { id, firstName, lastName, email, phone, location, isMentorAssigned, assignedMentor }
        const updatedStudents = [...students]
        updatedStudents.splice(id, 1, data)
        setStudents(updatedStudents)

        const previousStudents = selectedMentor.assignedStudents

        const mentorData = {
            id: selectedMentor.id,
            firstName: selectedMentor.firstName,
            lastName: selectedMentor.lastName,
            email: selectedMentor.email,
            phone: selectedMentor.phone,
            location: selectedMentor.location,
            areStudentsAssigned: true,
            assignedStudents: [...previousStudents, data.firstName]
        }
        const mentor = [...mentors]
        mentor.splice(mentorData.id, 1, mentorData)
        setMentors(mentor)

        navigate("/students")
    }

    return (
        <div className="w-full">
            <div className="flex flex-row justify-center h-20 bg-blue-400 text-white text-3xl font-semibold capitalize p-6">
                assign student
            </div>
            <div className="flex flex-row justify-center h-20 bg-gray-300 text-blue-600 text-2xl font-semibold capitalize p-6">
                {`${student.firstName} ${student.lastName}`}
            </div>
            <div>
                <div className="text-xl flex flex-row justify-center align-center py-6 font-semibold text-gray-500">Select Mentor to Assign</div>
                <Select options={mentorOptions} className="mx-28" onChange={(e) => handleChange(e)} />
            </div>
            <div className="flex flex-row gap-6 justify-center
            align-center m-6">
                <button className="border-b hover:text-white border-green-400 hover:bg-green-400 font-semibold rounded-lg text-green-800 py-3 px-8" onClick={() => handleAssign()}>{student.isMentorAssigned ? "Change" : "Assign"}</button>
                <button className="border-b border-red-400 font-semibold rounded-lg text-red-400 py-3 px-8 hover:bg-red-500 hover:text-white" onClick={() => navigate("/students")}>Cancel</button>
            </div>

        </div >
    )
}

export default AssignStudent
