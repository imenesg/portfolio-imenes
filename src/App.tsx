import {useState} from 'react'
import Hero from '../src/components/hero.tsx'
import ExperienceList from "./components/ExperienceCards";
import ProjectCards from "./components/ProjectsCards";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Hero></Hero>
            <ExperienceList></ExperienceList>
            <ProjectCards></ProjectCards>
        </>
    )
}

export default App
