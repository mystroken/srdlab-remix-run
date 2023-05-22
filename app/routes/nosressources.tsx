import BannerComponent from "~/components/banner";
import { DefaultLayout } from "~/layouts/default";


export default function NosRessourcesRoute() {
    return (
        <>
            <DefaultLayout>
                <BannerComponent title="Nos ressources" content="SRDLab à la pointe des nouvelles technologiques. Pour l’exécution de vos travaux, nous utilisons les outils les plus récents et les méthodes innovantes." />
                <p>Ressource</p>
            </DefaultLayout>
        </>
    )
}