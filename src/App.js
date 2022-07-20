import { React, createContext, useState } from 'react'
import { Sidebar, Dashboard, Students, Mentors, AddStudent, AddMentor, EditStudent, EditMentor, Assign, AssignStudent, AssignMentor } from './components'
import { Routes, Route } from 'react-router-dom'
import studentsData from './app/data/students.data'
import mentorsData from './app/data/mentors.data'
export const Usercontext = createContext()
const App = () => {
    const [students, setStudents] = useState(studentsData)
    const [mentors, setMentors] = useState(mentorsData)
    return (
        <Usercontext.Provider value={{ students, mentors, setStudents, setMentors }}>
            <div className="flex flex-row">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="*" element={<Dashboard />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/mentors" element={<Mentors />} />
                    <Route path="/add-student" element={<AddStudent />} />
                    <Route path="/add-mentor" element={<AddMentor />} />
                    <Route path="/edit-student/:id" element={<EditStudent />} />
                    <Route path="/edit-mentor/:id" element={<EditMentor />} />
                    <Route path="/assign" element={<Assign />} />
                    <Route path="/assign-student/:id" element={<AssignStudent />} />
                    <Route path="/assign-mentor/:id" element={<AssignMentor />} />
                </Routes>
            </div>
        </Usercontext.Provider>
    )
}

export default App
