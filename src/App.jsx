import NavBar from './Components/navBar/NavBar'
import './App.css'
import Banner from './Components/banner/Banner'
import Projects from './Components/project/Projects'
import Contact from './contact/Contact'
import Skills from './Components/allSkill/AllSkills'

function App() {
  

  return (

    <div className='w-full h-auto bg-bodyColors text-lightText'>
      <div className=' max-w-screen-xl mx-auto'>
        <NavBar />
        <Banner />
        <Skills />
        {/* <Features /> */}
        <Projects />
        <Contact />
      </div> 
    </div>
   
  )
}

export default App
