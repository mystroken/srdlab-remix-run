import { useState } from "react";
import { equipes } from "~/data/equipes";
import BtnNext from "../../../assets/imgs/next1.png"
import BtnPrevious from "../../../assets/imgs/previous1.png"
import type { EquipeType } from "~/types";

export default function EquipesComponent() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const next = () => {
        setCurrentIndex((currentIndex + 1) % equipes.length);
    };
    const prev = () => {
        setCurrentIndex((currentIndex - 1 + equipes.length) % equipes.length);
    };
    return (
        <div className="bg-[#f6fafe]">
            <div className="py-16 md:py-44">
                <div className="container mx-auto">
                    <div className="flex">
                        <div className="w-full">
                            <p className="text-secondary mt-2 text-lg md:text-xl">Notre équipe </p>
                            <h1
                                className="text-primary mt-1 text-xl  md:leading-[120%] md:text-[2rem]  md:mr-8  md:w-[40rem] text-start">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h1>
                            <div className="pt-[3rem]">
                                <div className="flex flex-row justify-center items-center">
                                    <button onClick={prev} className="w-8 h-8 hidden md:flex">
                                        <img src={BtnPrevious} alt="" />
                                    </button>
                                    <div className="md:w-11/12 flex items-center justify-center">
                                        {equipes.map((item: EquipeType, index) => (
                                            <div
                                                key={index}
                                                className={
                                                    equipes[currentIndex].name === item.name ? 'fade' : 'slide fade'
                                                }
                                            >
                                                <div className="flex mx-2 md:mx-8 flex-col md:flex-row">
                                                    <div className="w-36 md:w-52 bg-blue-400 rounded-full h-36 md:h-52 md:mx-4"></div>
                                                    <div className="md:ml-4 md:w-9/12 flex flex-col md:justify-start">
                                                        <h1
                                                            className="text-2xl md:text-3xl text-start mt-4 md:mt-0">
                                                            {item.name}
                                                        </h1>
                                                        <h4
                                                            className="text-base text-start font-medium">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-xs mt-4 text-start leading-5">
                                                            {item.description}
                                                        </p>
                                                        <hr className="text-gray-400 my-2" />
                                                        <p className="text-xs mt-2 md:mt-0 text-start">
                                                            {item.mail}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={next} className="w-8 h-8 hidden md:flex">
                                        <img src={BtnNext} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-start items-center mt-2 md:hidden">
                                <button onClick={prev} className="w-6 h-6 m-1">
                                    <img src={BtnPrevious} alt="" />
                                </button>
                                <button onClick={next} className="w-6 h-6 ml-1">
                                    <img src={BtnNext} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}