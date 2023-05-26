import { solutions } from "~/data/solutions"
import type { SolutionsType } from "~/types"
import Aperture from "../../../assets/imgs/aperture.png"

export default function SolutionsComponent() {
    return (
        <div className="bg-[#F6FAFE]">
            <div className="pt-[7rem]">
                <div className="container mx-auto">
                    <div className="flex flex-row">
                        <div className="w-full md:w-3/4">
                            <p className="text-secondary mt-2 text-lg md:text-xl">Toutes nos</p>
                            <h1 className="text-primary mt-1 text-2xl md:text-5xl">Solutions</h1>
                            <p className="mt-2 text-sm md:mt-5 md:text-[1rem] leading-[1.7rem] md:w-[30rem]">
                                Ultrices vitae integer et neque, est egestas. Diam non donec mi purus at quis et. Faucibus tincidunt consequat blandit sed metus in. Lectus venenatis eget senectus ornare.
                            </p>
                        </div>
                        <div className="xl:flex  hidden  w-1/4">
                            <div className="absolute left-[81.88%] right-[4.62%] w-[194px] h-[200px]">
                                {/* <img src="~/assets/imgs/vect-second.png" alt="" /> */}
                            </div>
                            <div className="absolute left-[83.56%] right-[3.1%] w-[190px] h-[110px] mt-[4%]">
                                {/* <img src="~/assets/imgs/vect-prim.png" alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-other mx-auto pt-[2.6rem] pb-[7rem]">
                <div className="grid sm:grid-cols-2 md:grid-cols-4 -mx-1 lg:-mx-4 bg-[#e1e1e1] py-10">
                    {
                        solutions.map((item: SolutionsType, index) => {
                            return (
                                <div className="my-[2.2rem] px-1 lg:my-4 lg:px-4" key={index}>
                                    <article className="mb-4 md:mb-0">
                                        <div className="flex justify-center items-center">
                                            <img src={Aperture} alt="" />
                                        </div>
                                        <div className="mt-[.8rem]">
                                            <h1 className="text-primary py-3 text-[1.2rem] leading-[155%] font-semibold text-center">
                                                {item.title}
                                            </h1>
                                            <p className="pt-[.8rem] text-[.8rem] leading-[170%] text-[#505A62] text-center">
                                                {item.content}
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}