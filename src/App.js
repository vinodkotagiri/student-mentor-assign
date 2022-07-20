import React from 'react'
import { Sidebar, Dashboard, Students, Mentors, AddStudent, AddMentor, EditStudent, EditMentor, Assign } from './components'
import { Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/students" element={<Students />} />
                <Route path="/mentors" element={<Mentors />} />
                <Route path="/add-student" element={<AddStudent />} />
                <Route path="/add-mentor" element={<AddMentor />} />
                <Route path="/edit-student/:id" element={<EditStudent />} />
                <Route path="/edit-mentor/:id" element={<EditMentor />} />
                <Route path="/assign" element={<Assign />} />
            </Routes>
        </div>
    )
}

export default App
