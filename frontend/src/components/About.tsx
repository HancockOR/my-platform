type AboutProps = {
  paragraphs: string[]
  skills: string[]
}

function About({ paragraphs, skills }: AboutProps) {
  return (
    <section className="about">
      <h2>About me</h2>
      {paragraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}

      <h3>Skills</h3>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default About
