import EducationImg from "../../assets/imgs/educ-pic.png";
import SanteImg from "../../assets/imgs/sante-pic.jpg";
import DevCapImg from "../../assets/imgs/dev-cap.png";
import {AGR2, DIGIT, ENG1, GV3, SOCIAL, TSP1} from "~/data/images";

export const domaines = [
    {
        slug: 1,
        title: "Développement du capital humain et Démographie",
        subtitle: "Education , Santé, Genre, Migration et Transfert des Migrants",
        picture: DIGIT,
        childs: [
            {
                slug: 1,
                title: "Education",
                content: "SRDLab est profondément engagés dans le secteur de l'éducation, conscient de son rôle crucial dans la formation des individus et le développement des sociétés. Notre expertise en éducation se manifeste à travers une variété de services visant à promouvoir l'accès à une éducation de qualité, l'innovation pédagogique et l'amélioration des résultats scolaires.",
                content2: "Notre engagement envers l'éducation se traduit par des partenariats fructueux avec des institutions, des organisations gouvernementales et des ONG, visant à promouvoir l'apprentissage de qualité pour tous. Nous sommes fiers de jouer un rôle positif dans le domaine de l'éducation qu’il s’agisse de drésser la situation de référence ou de conduire une analyse d’impact de projet ou plus globalement de faire l’évaluation de programme d’éducation.",
                img: EducationImg,
            },
            {
                slug: 2,
                title: "Santé",
                content: "Chez SRDLab, notre engagement envers le domaine de la santé est profondément enraciné dans notre mission de contribuer au bien-être des individus et des communautés. Nous contribuons à la promotion de l'accès à des soins de santé de qualité, à la recherche médicale innovante et à l'amélioration des systèmes de santé.",
                content2: "Notre équipe multidisciplinaire travaille en étroite collaboration avec des professionnels de la santé, des organisations gouvernementales, des ONG et des institutions de recherche pour relever les défis les plus pressants du secteur de la santé. Nous contribuons à l'amélioration de la santé et du bien-être des populations à travers l’analyse de la situation de référence, l’évaluation d’impact de projets de santé et l’évaluation des politiques de santé publiqque.",
                img: SanteImg,
            },
        ],
        content: ""
    },
    {
        slug: 2,
        title: "Développement du capital social",
        picture: SOCIAL,
        subtitle: "Autonomisation des femmes et des jeunes, Travail des enfants, Fragilité, conflits, cohesion sociale",
        childs: [
            {
                slug: 1,
                title: "Autonomisation des femmes et des jeunes",
                content: "À SRDLab, notre engagement comprend également l'autonomisation des femmes et des jeunes. Selon la demande, nous contribuons sur des programmes conçus pour renforcer leur rôle dans la société et favoriser leur influence positive sur l'avenir.",
                content2: "Nous sommes impliqués dans la recherche et les études orientés vers l'autonomie économique, l'entrepreneuriat féminin et juvénile ainsi que pour leurs accès à l'éducation et à la formation. Nous intervenons également sur des projets visant à éliminer les barrières à l'égalité des sexes.",
                content3: "En partenariat avec divers acteurs, publics, privés, les institutions et les chercheurs, nous œuvrons à créer un environnement propice à l'autonomisation des femmes et des jeunes, contribuant ainsi à un avenir plus inclusif et prometteur pour les sociétés.",
                img: DevCapImg,
            },
            {
                slug: 2,
                title: "Travail des enfants",
                content: ""
            },
            {
                slug: 3,
                title: "Fragilité",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur culpa cum dicta dolores eum expedita itaque iure labore laboriosam, maxime nihil odio possimus quaerat, rem similique veniam vero, voluptatum?"
            },
            {
                slug: 4,
                title: "conflits",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur culpa cum dicta dolores eum expedita itaque iure labore laboriosam, maxime nihil odio possimus quaerat, rem similique veniam vero, voluptatum?"
            },
            {
                slug: 5,
                title: "cohesion sociale",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur culpa cum dicta dolores eum expedita itaque iure labore laboriosam, maxime nihil odio possimus quaerat, rem similique veniam vero, voluptatum?"
            },
        ],
        content: ""
    },
    {
        slug: 3,
        picture: GV3,
        title: "Gouvernance, Administration Publique et politique Macroéconomique",
        subtitle: "Gouvernance économique et politique Macroéconomique, Développement régional, Développement local, réforme de l’administration publique",
        childs: [
            {
                slug: 1,
                title: "Gouvernance économique et politique Macroéconomique",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur culpa cum dicta dolores eum expedita itaque iure labore laboriosam, maxime nihil odio possimus quaerat, rem similique veniam vero, voluptatum?"
            },
            {
                slug: 2,
                title: "Développement régional",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur culpa cum dicta dolores eum expedita itaque iure labore laboriosam, maxime nihil odio possimus quaerat, rem similique veniam vero, voluptatum?"
            },
            {
                slug: 3,
                title: "Développement local",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur culpa cum dicta dolores eum expedita itaque iure labore laboriosam, maxime nihil odio possimus quaerat, rem similique veniam vero, voluptatum?"
            },
            {
                slug: 4,
                title: "Réforme de l’administration publique",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur culpa cum dicta dolores eum expedita itaque iure labore laboriosam, maxime nihil odio possimus quaerat, rem similique veniam vero, voluptatum?"
            },
        ],
        content: ""
    },
    {
        slug: 4,
        title: "Agriculture, sécurité alimentaire et changement climatique",
        picture: AGR2,
        subtitle: "Agriculture, sécurité alimentaire, changement climatique",
        childs: [
            {
                slug: 1,
                title: "Agriculture",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur culpa cum dicta dolores eum expedita itaque iure labore laboriosam, maxime nihil odio possimus quaerat, rem similique veniam vero, voluptatum?"
            },
            {
                slug: 2,
                title: "Sécurité alimentaire",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur culpa cum dicta dolores eum expedita itaque iure labore laboriosam, maxime nihil odio possimus quaerat, rem similique veniam vero, voluptatum?"
            },
            {
                slug: 3,
                title: "Nutrition Energie",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur culpa cum dicta dolores eum expedita itaque iure labore laboriosam, maxime nihil odio possimus quaerat, rem similique veniam vero, voluptatum?"
            },
            {
                slug: 4,
                title: "Environnement",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur culpa cum dicta dolores eum expedita itaque iure labore laboriosam, maxime nihil odio possimus quaerat, rem similique veniam vero, voluptatum?"
            },
        ],
        content: ""
    },
    {
        slug: 5,
        title: "Energie, Eau, Environnement, Developement durable",
        picture: ENG1,
        subtitle: "Energie, Eau, Environnement, Developement durable",
        childs: [
            {
                slug: 1,
                title: "Energie"
            },
            {
                slug: 2,
                title: "Environnement"
            },
        ],
        content: ""
    },
    {
        slug: 6,
        picture: TSP1,
        title: "Transport et infrastructure, NTIC et Digitalisation",
        subtitle: "Transport et infrastructure",
        childs: [
            {
                slug: 1,
                title: "Transport"
            },
            {
                slug: 2,
                title: "Infrastructure"
            },
        ],
        content: ""
    },
]
