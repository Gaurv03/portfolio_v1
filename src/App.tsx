import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/layout'
import { About } from './pages/about'
import Project from './pages/project'
import Contact from './pages/contact'
import Career from './pages/career'

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <About />
          </Layout>
        } />
      <Route
        path="/career"
        element={
          <Layout>
            <Career />
          </Layout>
        } />
      <Route
        path="/projects"
        element={
          <Layout>
            <Project />
          </Layout>
        } />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        } />

    </Routes>
  )
}

export default App
