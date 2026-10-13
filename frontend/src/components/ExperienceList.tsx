import type { Experience } from '../data/profile'

type ExperienceListProps = {
  items: Experience[]
}

function ExperienceList({ items }: ExperienceListProps) {
  return (
    <section className="experience">
      <h2>Experience</h2>
      {items.map((item) => (
        <article key={item.role + item.organization} className="card">
          <div className="card-heading">
            <h3>
              {item.role} · {item.organization}
            </h3>
            <span className="period">{item.period}</span>
          </div>
          <p>{item.summary}</p>
        </article>
      ))}
    </section>
  )
}

export default ExperienceList
