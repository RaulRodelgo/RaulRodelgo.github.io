import { Routes, Route } from 'react-router-dom'
import Navbar from './components/feature/Navbar'
import Footer from './components/feature/Footer'
import HomePage from './pages/home/page'
import ProjectsPage from './pages/projects/page'
import ContactPage from './pages/contact/page'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App