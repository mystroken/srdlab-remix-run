import React from "react";
import {cleanText} from "~/utils/helpers";

export default function Realisations({
                                         slug,
                                         date,
                                         context,
                                         open,
                                         name,
                                         title,
                                         picture
                                     }: any) {
    return (
        <div
            className={`my-1 lg:my-4`}>
            <article className="rounded-lg mb-4 md:mb-0">
                <a href={`/realisations/${slug}`} className="relative block w-full bg-gray-900 group">
                    <img
                        className="absolute inset-0 object-cover border-gray-500 w-full h-full group-hover:opacity-20 border"
                        src={picture}/>
                    <div className="relative p-5">
                        <div className="mt-40">
                            <div
                                className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="p-2">
                                    <p className="text-gray-200 text-lg leading-[155%] font-semibold">
                                        {cleanText(name, 40)}
                                    </p>
                                    <div
                                        className={`bg-orange text-white rounded-full text-xs px-4 py-2 text-center cursor-pointer mt-4`}>
                                        Visiter
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </article>
        </div>
    );
}

