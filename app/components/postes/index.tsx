import {PosteType} from "~/types";
import {cleanText} from "~/utils/helpers";
import React from "react";

export default function Post({slug, date, context, open, role, name, title, description}: PosteType) {
    return (
        <div
            className={`my-1 lg:my-4 hover:border hover:shadow-lg`}>
            <article className="rounded-lg mb-4 md:mb-0">
                <div className="border p-4">
                    <a href={`postes/${slug}`}
                       className="text-primary py-3 text-[1rem] leading-[155%] font-semibold cursor-pointer hover:underline hover:underline-offset-4">
                        {cleanText(name, 60)}
                    </a>
                    <div
                        className={`rounded-full text-xs text-white px-4 py-2 ${open === true ? 'bg-green-500' : 'bg-red-500'} mt-4 w-12 h-6 flex justify-center items-center`}>
                        {open === true ? 'actu' : 'ferme'}
                    </div>
                </div>
                <div className={"p-2"}>
                    <div className="flex items-center my-auto mt-2">
                        <p className="text-[.8rem] leading-[170%] underline outline-offset-4">
                            Date de clôture:
                        </p>
                        <p className="pl-2 text-[.8rem] leading-[170%]">
                            {date}
                        </p>
                    </div>
                    <p className="mt-4 text-[.8rem] leading-[170%]">
                        {cleanText(
                            "The Innovative Hub for Research in Africa is an independent laboratory that conducts surveys, studies, research, and training across the African continent. Our multidisciplinary team of seasoned African experts, with extensive country experience and top-notch skills, is committed to producing quality data based on international standards for evidence-based policies and operational solutions. We provide insights on a myriad of sectors while taking into account cultural and geostrategic contexts as well as local markets’ maturity.",
                            200
                        )}
                    </p>
                </div>
            </article>
        </div>
    )
}
//