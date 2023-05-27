import { DefaultLayout } from "~/layouts/default";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react"
import { publications } from "~/data/publications";

export const loader = async ({ params }: LoaderArgs) => {
    return json({ slug: params.slug });
};


export default function PublicationSlug() {
    const { slug }: any = useLoaderData<typeof loader>();
    const mypublication = publications[slug - 1]
    return (
        <>
            <DefaultLayout>
                <div className="m-10">
                    <h1 className="my-6 border-b-2 text-center text-3xl">
                        {mypublication.title}
                    </h1>
                    <p>{mypublication.content}</p>
                    <div>

                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}