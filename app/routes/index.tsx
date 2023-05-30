import BannerComponent from "~/components/banner";
import ConfianceComponent from "~/components/confiance";
import NewLetterComponent from "~/components/newletter";
import PublicationComponent from "~/components/publications";
import SolutionsComponent from "~/components/solutions";
import { DefaultLayout } from "~/layouts/default";


export default function Index() {
  return (
    <>
      <DefaultLayout>
        <BannerComponent list={true} title="Aide aux décisions économiques et socio-démographiques"
          content="SRD Lab est un cabinet d'étude producteur de données et de formations pour l'aide aux décisions économiques et socio-démographiques."
          arrow={true}
        />
        <ConfianceComponent />
        <SolutionsComponent />
        <PublicationComponent />
        <NewLetterComponent />
      </DefaultLayout>
    </>
  );
}
