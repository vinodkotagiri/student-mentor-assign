import { React, useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Usercontext } from '../App'

const EditMentor = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const context = useContext(Usercontext)
    const { mentors, setMentors } = context

    const [firstName, setFirstName] = useState(mentors[id].firstName)
    const [lastName, setLastName] = useState(mentors[id].lastName)
    const [email, setEmail] = useState(mentors[id].email)
    const [phone, setPhone] = useState(mentors[id].phone)
    const [location, setLocation] = useState(mentors[id].location)
    const [areStudentsAssigned] = useState(mentors[id].areStudentsAssigned)
    const [assignedStudents] = useState(mentors[id].assignedStudents)

    const handleSave = () => {
        const data = { id, firstName, lastName, email, phone, location, areStudentsAssigned, assignedStudents }

        const mentor = [...mentors]
        mentor.splice(id, 1, data)
        setMentors(mentor)
        navigate("/mentors")
    }
    return (
        <div className="w-full">
            <div className="flex flex-row justify-center h-20 bg-blue-400 text-white text-3xl font-semibold capitalize p-6">
                edit mentor
            </div>
            <form className="w-full max-w-lg ml-20 mt-20">
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input value={firstName} className="appearance-none bg-transparent border-r border-teal-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="First Name" aria-label="First Name" onChange={(e) => setFirstName(e.target.value)} />
                    <input value={lastName} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Last Name" aria-label="Last Name" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input value={email} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email" aria-label="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input value={phone} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Phone" aria-label="Phone" onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input value={location} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Location" aria-label="Location" onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div className="flex items-center justify-center mt-6 py-2">
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={() => handleSave()}>
                        Update
                    </button>
                    <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onClick={() => navigate("/")}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditMentor
