import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import MyNavbar from './components/MyNavbar';
import LandingPage from './pages/app/LandingPage';
import SignupPage from './pages/auth/SignupPage';
import LoginPage from './pages/auth/LoginPage';
import EditProfilePage from './pages/auth/EditProfilePage';
import DashboardPage from './pages/app/DashboardPage';
import KanbanPage from './pages/app/KanbanPage';
import NotesPage from './pages/app/NotesPage';
import NoteCreatePage from './pages/app/NoteCreatePage';
import NoteDetailsPage from './pages/app/NoteDetailsPage';
import NoteEditPage from './pages/app/NoteEditPage';
import SharedNotesPage from './pages/app/SharedNotesPage';
import PricingPage from './pages/app/PricingPage';
import LogoutPage from './pages/auth/LogoutPage';
import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
    <>
      <MyNavbar />

      {/* <h1>Project</h1> */}

      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/kanban" element={<KanbanPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/notes/create" element={<NoteCreatePage />} />
        <Route path="/notes/:noteId" element={<NoteDetailsPage />} />
        <Route path="/notes/:noteId/edit" element={<NoteEditPage />} />
        <Route path="/shared-notes" element={<SharedNotesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/logout" element={<LogoutPage />} />

        <Route path="/error" element={<ErrorPage />} />
        <Route path="/*" element={<NotFoundPage />} />

      </Routes>
    </>
  )
}

export default App
