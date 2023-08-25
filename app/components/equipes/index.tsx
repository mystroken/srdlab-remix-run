import {useState} from "react"
import {equipes} from "~/data/equipes"
import nameImg from "../../../assets/imgs/name.png"
import jobImg from "../../../assets/imgs/job.png"
import mailImg from "../../../assets/imgs/mail.png"
import type {EquipeType} from "~/types"
import {Modal} from "../commons/modal"

export default function EquipesComponent() {
    const [detail, setDetail] = useState(false)
    const [myIndex, setMyIndex] = useState(0)
    return (
        <div className="bg-[#f6fafe]">
            <div className="py-16 md:py-44">
                <div className="container mx-auto">
                    <div className="flex flex-row">
                        <div className="w-full">
                            <p className="md:text-justify text-secondary mt-2 text-lg md:text-xl">Notre équipe</p>
                            <h1
                                className="md:text-justify text-primary mt-1 text-xl  md:leading-[120%] md:text-[2rem]  md:mr-8  md:w-[40rem] text-start">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h1>
                            <div className="pt-[3rem]">
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-y-4">
                                    {
                                        equipes.map((item: EquipeType, index) => {
                                            return (
                                                <div onClick={() => {
                                                    setMyIndex(index)
                                                    setDetail(true)
                                                }} key={index} className="h-32 md:mb-6 md:w-11/12 ">
                                                    <div
                                                        className="p-4 border border-gray-400 hover:border-2 cursor-pointer flex items-start flex-col justify-center rounded-md h-full">
                                                        <h2
                                                            className="md:w-[14rem] xl:w-[18rem] text-[1.2rem] text-primary">{item.name}</h2>
                                                        <h2
                                                            className="text-sm mt-2 font-normal leading-[130%] text-primary">{item.title}</h2>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                detail && (
                    <Modal
                        onClose={() => setDetail(false)}
                        title=""
                    >
                        <div className="px-4">
                            <div className="flex flex-row items-center">
                                <img src={nameImg} className="w-8 h-8" alt=""/>
                                <div>
                                    <h1 className='text-2xl py-1 font-semibold ml-4'>{equipes[myIndex].name}</h1>
                                    <p className='text-xs font-normal ml-4'>{equipes[myIndex].title}</p>
                                </div>
                            </div>
                            <hr className="my-2"/>
                            <p className='text-xs leading-6 py-1 overflow-y-scroll md:overflow-hidden h-[280px] md:h-64'>{equipes[myIndex].description}</p>
                            <hr className="my-2"/>
                            <a href={`mailto:${equipes[myIndex].mail}`}
                               className="text-xs font-normal cursor-pointer pt-4 hover:underline hover:underline-offset-4">{equipes[myIndex].mail}</a>
                        </div>
                    </Modal>
                )

            }
        </div>

    )
}