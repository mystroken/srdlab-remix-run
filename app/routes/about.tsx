import BannerComponent from "~/components/banner";
import NosValeursComponent from "~/components/nosvaleurs";
import NosVisionsCompoment from "~/components/nosvisions";
import NousSommesComponent from "~/components/noussommes";
import PrioritesComponent from "~/components/priorites";
import { DefaultLayout } from "~/layouts/default";

export default function AboutRoute() {
    return (
        <>
            <DefaultLayout>
                <BannerComponent title="A propos" content="En savoir plus sur qui nous sommes, nos priorités, nos valeurs et notre vision."
                />
                <NousSommesComponent />
                <PrioritesComponent />
                <NosValeursComponent />
                <NosVisionsCompoment />
            </DefaultLayout>
        </>
    )
}