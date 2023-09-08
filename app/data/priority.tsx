import type { PriorityType } from "~/types";
import { COLLABORATION, CONTROL, RESPECT, SATISFACTION } from "~/data/images";

export const priorities: PriorityType[] = [
  {
    image: SATISFACTION,
    title: "La satisfaction de nos clients",
    description:
      "Notre équipe d'experts est dynamique et motivé. Nous restons proche de nos clients pour l'informer, le renseigner, le rassurer à chaque étape de notre relation, l'écouter et répondre à chacune de ses questions : notre client est le cœur de nos préoccupations. Nous pensons qu’un client satisfait est un client avec lequel nous allons construire une relation durable, dépassant les contingences d’une mission isolée. Nous nous approprions vos objectifs.",
  },
  {
    image: RESPECT,
    title:
      "Le respect des délais et engagements contractuel",
    description:
      "Le temps compte pour nos clients, nous en avons pleine conscience et nous attelons à produire les livrables dans les délais contractuels pour la plus grande satisfaction de nos clients. L’argent compte également pour nos clients, et nous le savons. Nous réalisons le travail avec un budget réel et transparent. Nous apportons une attention particulière à tenir les engagements que nous prenons et que nous faisons prendre à nos clients. Notre stratégie est basée sur le respect de nos engagements.",
  },
  {
    image: CONTROL,
    title: "La qualité du service et quête de l'excellence",
    description:
      "Nous nous engageons à entreprendre un travail parce ce  que nous le maîtrisons car une de nos priorités absolues est de fournir à nos clients des solutions de premier plan. De plus, nous sommes dévoués à maintenir sans relâche la qualité de notre service et à poursuivre notre quête inlassable de l'excellence. Nous sommes fiers non seulement de répondre aux attentes de nos clients, mais aussi de dépasser ces attentes, car nous croyons fermement que l'excellence est la clé de notre succès et de celui de nos clients.",
  },
  {
    image: COLLABORATION,
    title: "La collaboration et l'innovation",
    description:
      "Nous nous engageons à entreprendre un travail parce ce  que nous le maîtrisons car une de nos priorités absolues est de fournir à nos clients des solutions de premier plan. De plus, nous sommes dévoués à maintenir sans relâche la qualité de notre service et à poursuivre notre quête inlassable de l'excellence. Nous sommes fiers non seulement de répondre aux attentes de nos clients, mais aussi de dépasser ces attentes, car nous croyons fermement que l'excellence est la clé de notre succès et de celui de nos clients.",
  },
];

