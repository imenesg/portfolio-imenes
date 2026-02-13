import Hero from '../src/components/hero.tsx'
import ExperienceList from "./components/ExperienceCards";
import ProjectCards from "./components/ProjectsCards";
import Footer from "./components/footer";

function App() {

    return (
        <>
            <Hero></Hero>
            <ExperienceList></ExperienceList>
            <ProjectCards></ProjectCards>
            <Footer></Footer>
        </>
    )
}

export default App
