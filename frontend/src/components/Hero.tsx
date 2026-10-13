type HeroProps = {
  name: string
  tagline: string
}

function Hero({ name, tagline }: HeroProps) {
  return (
    <header className="hero">
      <h1>{name}</h1>
      <p className="tagline">{tagline}</p>
    </header>
  )
}

export default Hero
