import BannerComponent from "~/components/banner";
import { DefaultLayout } from "~/layouts/default";
import Rejoindre from "~/components/rejoindre";


export default function TravaillerAvecNousRoute() {
    return (
        <>
            <DefaultLayout>
                <BannerComponent title="Travailler avec nous" content="SRDLab à la pointe des nouvelles technologiques. Pour l’exécution de vos travaux, nous utilisons les outils les plus récents et les méthodes innovantes." />
                <Rejoindre />
            </DefaultLayout>
        </>
    )
}