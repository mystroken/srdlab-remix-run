export type HeaderType = {
    link: String
    name: String
}

export type SolutionsType = {
    title: String
    content: String
}

export type AccordionType = {
    title: String
    content: String
    lists?: String[]
}

export type PublicationType = {
    slug: String
    image: any
    date: String
    title: String
    header: String
    content1: String
    content2: String
    content3: String
    delay?: String
    content4?: String[]
}

export type PriorityType = {
    image: any
    title: String
    description: String
}
export type Socials = {
    picture: any
    path: string
}

export type EquipeType = {
    picture: any
    name: string
    mail: string
    title: string
    description: string
}

export type PosteType = {
    slug: number
    open?: boolean
    name: string
    title: string
    date: string
    role: string[]
    responsabilite?: string[]
    qualifications?: string[]
    recrutement?: any
    context: string
    description: string
    quisommesnous?: string
}
