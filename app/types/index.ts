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
    date: String
    title: String
    header: String
    content1: String
    content2: String
    content3: String
    content4?: String[]
}

export type PriorityType = {
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