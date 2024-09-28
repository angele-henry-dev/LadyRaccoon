export interface Skills {
  type: string
  skills: Skill[]
}

interface Skill {
  title: string
  levelAcquired: number
  levelTotal: number
  children: Skill[]
}
