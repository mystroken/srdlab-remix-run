import type { PriorityType } from "~/types";
import {CONTROL, RESPECT, SATISFACTION} from "~/data/images";

export const priorities: PriorityType[] = [
    {
        image: SATISFACTION,
        title: "La satisfaction de nos clients est notre plus grande ambition",
        description: "Notre équipe d'experts est dynamique et motivé. Nous restons proche de nos clients pour l'informer, le renseigner, le rassurer à chaque étape de notre relation, l'écouter et répondre à chacune de ses questions : notre client est le cœur de nos préoccupations. Nous pensons qu’un client satisfait est un client avec lequel nous allons construire une relation durable, dépassant les contingences d’une mission isolée. Nous nous approprions vos objectifs."
    },
    {
        image: RESPECT,
        title: "Le respect scrupuleux des délais et de tous nos engagements contractuel",
        description: "Le temps compte pour nos clients, nous en avons pleine conscience et nous attelons à produire les livrables dans les délais contractuels pour la plus grande satisfaction de nos clients. L’argent compte également pour nos clients, et nous le savons. Nous réalisons le travail avec un budget réel et transparent. Nous apportons une attention particulière à tenir les engagements que nous prenons et que nous faisons prendre à nos clients. Notre stratégie est basée sur le respect de nos engagements."
    },
    {
        image: CONTROL,
        title: "La maîtrise du travail, la production de livrables de grande qualité, la quête permanente de l’excellence",
        description: "Nous nous engageons à réaliser un travail parce que nous le maitrisons. Nous utilisons les méthodes innovantes et à la pointe de la technologie. Notre culture est axée sur le résultat ce qui nous permet de produire des livrables de très bonne qualité tout en étant à la quête permanente de l’excellence."
    }
]