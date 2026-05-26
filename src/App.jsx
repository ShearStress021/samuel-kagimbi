import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
