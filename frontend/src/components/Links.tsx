import type { ProfileLink } from '../data/profile'

type LinksProps = {
  links: ProfileLink[]
}

function Links({ links }: LinksProps) {
  return (
    <nav className="links" aria-label="External links">
      {links.map((link) => (
        <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default Links
