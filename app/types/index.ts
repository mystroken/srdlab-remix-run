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
    content: String
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