import './App.css'
import About from './components/About'
import ExperienceList from './components/ExperienceList'
import Hero from './components/Hero'
import Links from './components/Links'
import Projects from './components/Projects'
import { profile } from './data/profile'

function App() {
  return (
    <main>
      <Hero name={profile.name} tagline={profile.tagline} />
      <About paragraphs={profile.bio} skills={profile.skills} />
      <Projects projects={profile.projects} />
      <ExperienceList items={profile.experience} />
      <Links links={profile.links} />
    </main>
  )
}

export default App
