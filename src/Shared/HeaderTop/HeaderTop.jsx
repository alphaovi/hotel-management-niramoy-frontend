import { TfiEmail } from "react-icons/tfi";
import { TbPhone } from "react-icons/tb";
import { GrLanguage } from "react-icons/gr";
import { FaCircleArrowRight } from "react-icons/fa6";
import { MdPerson3 } from "react-icons/md";

const HeaderTop = () => {
  return (
    <section className="bg-[#AB8A23] flex gap-20 items-center px-36 py-5 text-white">
      <div className="text-white flex gap-4 items-center font-bold">
        <p className="flex items-center">
          {" "}
          <TfiEmail className="mr-2" />
          info@hotelniramoy.com
        </p>
        <p className="flex items-center">
          {" "}
          <TbPhone className="mr-2" />
          +8801715168457
        </p>
      </div>
      <div className="flex lg:gap-6 gap-2 lg:ml-72">
        <label className="bg-transparent flex items-center" htmlFor="language"><GrLanguage /></label>
        <select
          className="bg-transparent text-white bg-[#AB8A23]"
          name="language"
          id="language"
        >
          <option value="English">English</option>
          <option value="Bangla">Bangla</option>
        </select>
        <p className="flex gap-2 items-center"><FaCircleArrowRight /> Sign in</p>
        <p className="flex gap-2 items-center"> <MdPerson3 /> Register</p>
      </div>
    </section>
  );
};

export default HeaderTop;
