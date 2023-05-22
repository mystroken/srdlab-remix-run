import BannerComponent from "~/components/banner";
import NosApproche from "~/components/nosapproche";
import { PrestationComponent } from "~/components/prestations";
import { accordions } from "~/data/accordions";
import { DefaultLayout } from "~/layouts/default";
import type { AccordionType } from "~/types";


export default function ExpertisesRoute() {
    return (
        <>
            <DefaultLayout>
                <BannerComponent title="Notre expertise" content="SRDLab à la pointe des nouvelles technologiques. Pour l’exécution de vos travaux, nous utilisons les outils les plus récents et les méthodes innovantes." />
                <NosApproche />
                <div className="mb-[10rem]">
                    {
                        accordions.map((item: AccordionType, index) => {
                            return (
                                <div key={index}>
                                    <div className="container mx-auto">
                                        <PrestationComponent title={item.title} content={item.content} lists={item.lists} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </DefaultLayout>
        </>
    )
}