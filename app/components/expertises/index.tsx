import React from "react";
import {cleanText} from "~/utils/helpers";
import {Link} from "@remix-run/react";

export default function Expertises({
                                       slug,
                                       name,
                                       domaine,
                                       picture
                                   }: any) {
    return (
        <div
            className={`my-1 lg:my-4`}>
            <article className="rounded-lg mb-4 md:mb-0">
                <div className="relative block w-full bg-gray-900 group">
                    <img
                        className="absolute inset-0 object-cover border-gray-500 w-full h-full opacity-50 border"
                        src={picture}/>
                    <div className="relative p-5">
                        <div className="mt-40">
                            <div
                                className="transition-all transform opacity-100 translate-y-0">
                                <div className="p-2">
                                    <p className="text-gray-200 text-lg leading-[155%] font-semibold">
                                        {cleanText(name, domaine == true ? 45 : 20)}
                                    </p>
                                    <Link
                                        to={domaine === true ? `/expertises/${slug}` : `/expertise-services/${slug}`}>
                                        <div
                                            className={`bg-orange text-white rounded-full text-xs px-4 py-2 text-center w-full mt-4`}>
                                            Visiter
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

