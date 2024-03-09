import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/app/LandingPage';
import SignupPage from './pages/auth/SignupPage';
import LoginPage from './pages/auth/LoginPage';
import DashboardPageLayout from './pages/app/DashboardPage';
// import EditProfilePage from './pages/auth/EditProfilePage';
// import DashboardPage from './pages/app/DashboardPage';
// import KanbanPage from './pages/app/KanbanPage';
// import NotesPage from './pages/app/NotesPage';
// import NoteCreatePage from './pages/app/NoteCreatePage';
// import NoteDetailsPage from './pages/app/NoteDetailsPage';
// import NoteEditPage from './pages/app/NoteEditPage';

import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<DashboardPageLayout/>} />

        <Route path="/error" element={<ErrorPage />} />
        <Route path="/*" element={<NotFoundPage />} />

      </Routes>

      
    </>
  )
}

export default App
