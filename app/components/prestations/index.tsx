import {useState} from "react"
import ArrowDown from "../../../assets/Images/arrowdown.png"
import ArrowUp from "../../../assets/Images/arrowup.png"
import LikeImg from "../../../assets/Images/like.png"
import {Image} from "remix-image";

interface PrestationComponentProps {
    title: String
    content: String
    lists?: String[]
}

export function PrestationComponent({title, content, lists}: PrestationComponentProps) {
    const [isActive, setIsActive] = useState(false)
    return (
        <div>
            <div>
                <div className="flex flex-col">
                    <hr className="h-[2px] bg-secondary"/>
                    <div className="flex flex-row items-center justify-between">
                        <h1 className="text-primary py-8 text-[1rem] md:text-[1.6rem] leading-[120%] cursor-pointer"
                            onClick={() => setIsActive(!isActive)}
                        >
                            {title}
                        </h1>
                        <div>{isActive ?
                            <Image src={ArrowDown} alt=""/>
                            :
                            <Image src={ArrowUp} alt=""/>
                        }</div>
                    </div>
                </div>
                {isActive && <div>
                    <div className="py-[3rem]">
                        <p className="text-[#333333] text-[0.6rem] md:text-[1rem] leading-[175%]">
                            {content}
                        </p>
                        <div>
                            <ul className="pt-[1.3rem]">
                                {lists?.map((item, index) => {
                                    return (
                                        <li key={index} className="flex items-center pb-[.67rem]">
                                            <Image className="w-auto h-[10px]" src={LikeImg} alt=""/>
                                            <p className="pl-[0.6rem] text-[#333333] text-[1rem]">
                                                {item}
                                            </p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )

}