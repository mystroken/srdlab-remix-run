import BannerComponent from "~/components/banner";
import ConfianceComponent from "~/components/confiance";
import NewLetterComponent from "~/components/newletter";
import PublicationComponent from "~/components/publications";
import SolutionsComponent from "~/components/solutions";
import { DefaultLayout } from "~/layouts/default";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Spinner from "~/components/spinner";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  let { t } = useTranslation();
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <DefaultLayout>
          <BannerComponent
            list={true}
            title={t("indexBanner")}
            content="SRD Lab est un cabinet d'étude producteur de données et de formations pour l'aide aux décisions économiques et socio-démographiques."
            arrow={true}
          />
          <ConfianceComponent />
          <SolutionsComponent />
          <PublicationComponent />
          <NewLetterComponent />
        </DefaultLayout>
      )}
    </>
  );
}
