export type ProfileLink = {
  label: string
  url: string
}

export type Project = {
  title: string
  period: string
  tech: string[]
  summary: string
}

export type Experience = {
  role: string
  organization: string
  period: string
  summary: string
}

export type Profile = {
  name: string
  tagline: string
  bio: string[]
  skills: string[]
  projects: Project[]
  experience: Experience[]
  links: ProfileLink[]
}

export const profile: Profile = {
  name: 'Owen Hancock',
  tagline: 'CS student building a production web system',
  bio: [
    'I am a computer science student at Grove City College (B.S., expected May 2027) with minors in AI & Machine Learning, Cybersecurity, and Data Science.',
    'I build software end to end, from React frontends and Java/Javalin REST APIs to data pipelines and machine learning models. This site is my senior capstone production platform, where I document the projects and engineering decisions behind a deployed web system.',
    'Outside of class, I am a Java teaching assistant, captain of the Grove City men’s swim team (3x NCAA All-American), head coach of the Forest Hills Swim Team, and the 2026 Ohio Criterium State Champion in cycling.',
  ],
  skills: [
    'Java',
    'Python',
    'JavaScript',
    'SQL',
    'C',
    'Scala',
    'R',
    'React',
    'Javalin',
    'Flask',
    'Spark',
    'MySQL',
    'MongoDB',
    'JUnit',
    'Git',
    'Linux / Bash',
  ],
  projects: [
    {
      title: 'Course Planning Web Application',
      period: 'Spring 2026',
      tech: ['React', 'Java', 'Javalin', 'Tailwind CSS'],
      summary:
        'Scrum Master for a four-person Agile team. Led the React frontend for course search, filtering, and schedule planning, integrated with Java/Javalin REST APIs.',
    },
    {
      title: 'Formula 1 Prediction Model',
      period: 'Fall 2025',
      tech: ['Python', 'Pandas', 'scikit-learn', 'Jupyter'],
      summary:
        'Cleaned and merged 20+ seasons of F1 data, engineered features such as track history and driver momentum, and built a Random Forest model with an 18% improvement over baseline.',
    },
    {
      title: 'Convex Hull Algorithms',
      period: 'Fall 2025',
      tech: ['Algorithms', 'Benchmarking'],
      summary:
        'Implemented Andrew’s Monotone Chain (O(n log n)) and brute-force (O(n³)) convex hull algorithms and benchmarked them on datasets up to 1 million points.',
    },
    {
      title: 'Grove City College Helpers',
      period: 'Fall 2024',
      tech: ['Java', 'SQL'],
      summary:
        'Designed a relational schema and SQL queries to match student volunteers with organizations, with a Java application that automates project assignment.',
    },
  ],
  experience: [
    {
      role: 'Intern',
      organization: 'Copywide Solutions',
      period: 'Summer 2026',
      summary:
        'Troubleshot network hardware and software issues for business clients and deployed wired and wireless network infrastructure.',
    },
    {
      role: 'Teaching Assistant, Java 2',
      organization: 'Grove City College',
      period: 'August 2024 – Present',
      summary:
        'Mentor 30+ students in object-oriented Java, grade projects with detailed feedback, and assist with classroom instruction.',
    },
    {
      role: 'Head Coach',
      organization: 'Forest Hills Swim Team',
      period: 'May 2023 – Present',
      summary:
        'Lead a team of 100+ athletes ages 5–18, manage all team logistics, and develop assistant coaches.',
    },
  ],
  links: [
    { label: 'GitHub', url: 'https://github.com/HancockOR' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/orhancock' },
  ],
}
