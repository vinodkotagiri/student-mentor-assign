import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Usercontext } from '../App'

const AddStudent = () => {
    const navigate = useNavigate()
    const context = useContext(Usercontext)
    const { students, setStudents } = context

    const [id, setId] = useState(students[students.length - 1].id + 1)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    const [isMentorAssigned] = useState(false)
    const [assignedMentor] = useState('')

    const handleSave = () => {
        const data = { id, firstName, lastName, email, phone, location, isMentorAssigned, assignedMentor }
        setId(prev => prev + 1)
        const student = [...students, data]
        setStudents(student)
        navigate("/students")
    }
    return (
        <div className="w-full">
            <div className="flex flex-row justify-center h-20 bg-blue-400 text-white text-3xl font-semibold capitalize p-6">
                add student
            </div>
            <form className="w-full max-w-lg ml-20 mt-20">
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input className="appearance-none bg-transparent border-r border-teal-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="First Name" aria-label="First Name" onChange={(e) => setFirstName(e.target.value)} />
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Last Name" aria-label="Last Name" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email" aria-label="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Phone" aria-label="Phone" onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Location" aria-label="Location" onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div className="flex items-center justify-center mt-6 py-2">
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={() => handleSave()}>
                        Add
                    </button>
                    <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onClick={() => navigate("/")}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddStudent
