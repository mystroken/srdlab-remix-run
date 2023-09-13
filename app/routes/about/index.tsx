import BannerComponent from "~/components/banner";
import EquipesComponent from "~/components/equipes";
import NosValeursComponent from "~/components/nosvaleurs";
import NosVisionsCompoment from "~/components/nosvisions";
import NousSommesComponent from "~/components/noussommes";
import PrioritesComponent from "~/components/priorites";
import {DefaultLayout} from "~/layouts/default";
import {useTranslation} from "react-i18next";

export default function AboutRoute() {
    let {t} = useTranslation();
    return (
        <>
            <DefaultLayout>
                <BannerComponent title={t("banner-about-title")}
                                 content={t("banner-about-content")}
                />
                <NousSommesComponent/>
                <PrioritesComponent/>
                <NosValeursComponent/>
                <EquipesComponent/>
                <NosVisionsCompoment/>
            </DefaultLayout>
        </>
    )
}