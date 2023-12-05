import { cleanText } from "~/utils/helpers";
import { Link } from "@remix-run/react";

interface ExpertiseProps {
  slug: string;
  name: string;
  domaine: boolean;
  picture: string;
}

const Expertises = ({ slug, name, domaine, picture }: ExpertiseProps) => {
  const truncatedName = cleanText(name, domaine ? 45 : 20);
  const expertisePath = domaine ? `/expertises/${slug}` : `/expertise-services/${slug}`;

  return (
    <div className="my-1 lg:my-4">
      <article className="rounded-lg mb-4 md:mb-0">
        <div className="relative block w-full bg-gray-900 group">
          <img
            className="absolute inset-0 object-cover border-gray-500 w-full h-full opacity-50 border"
            src={picture}
            alt={name}
          />
          <div className="relative p-5">
            <div className="mt-40">
              <div className="transition-all transform opacity-100 translate-y-0">
                <div className="p-2">
                  <p className="text-gray-200 text-lg leading-[155%] font-semibold">
                    {truncatedName}
                  </p>
                  <Link to={expertisePath}>
                    <div className="bg-orange text-white rounded-full text-xs px-4 py-2 text-center w-full mt-4">
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
};

export default Expertises;
