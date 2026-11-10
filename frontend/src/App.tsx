import './App.css'
import About from './components/About'
import ExperienceList from './components/ExperienceList'
import Hero from './components/Hero'
import Links from './components/Links'
import Projects from './components/Projects'
import { profile } from './data/profile'

type ReportKind = 'bug' | 'feature';

type Report = {
  id: string
  text: string
  kind: ReportKind
};

function App() {

  const sampleReport: Report = {
  id: '1',
  text: 'Navigation link is broken',
  kind: 'bug',
  }

  return (

    <main>
      <Hero name={profile.name} tagline={profile.tagline} />
      <About paragraphs={profile.bio} skills={profile.skills} />
      <Projects projects={profile.projects} />
      <ExperienceList items={profile.experience} />
      <Links links={profile.links} />
      <section className="report-board">
        <h2>Bugs & Feature Requests</h2>
        <p>{sampleReport.text} ({sampleReport.kind})</p>
    </section>
    </main>
  )
}

export default App
