import LogoColor from "../../../assets/imgs/logo.png";
import Image from "remix-image";

const Spinner = () => (
  <div className="flex justify-center items-center h-screen">
    <Image
      className={`logopng w-[13rem] h-[4.4rem] logocolor`}
      src={LogoColor}
      alt=""
    />
  </div>
);

export default Spinner;
