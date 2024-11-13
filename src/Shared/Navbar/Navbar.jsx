import companyLogo from "../../assets/images/hotel-home/logo_dark.png";
import { MdPerson3 } from "react-icons/md";



const Navbar = () => {
  return (
    <nav className="navbar border border-white w-3/4 mx-auto relative bg-white ">
      <div  className="flex items-center">
        <div className="">
          <img className="w-24 h-14" src={companyLogo} alt="company logo" />
        </div>
        <div className="text-black uppercase flex gap-6 cursor-pointer items-center ml-96">
          <p className="hover:text-[#AB8A23]">HOME</p>
          <p className="hover:text-[#AB8A23]">FAQS</p>
          <p className="hover:text-[#AB8A23]">Updates</p>
          <p className="hover:text-[#AB8A23]">contact</p>
          <button className="btn text-white bg-[#AB8A23]  rounded w-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#AB8A23] duration-300"><MdPerson3 /> Book Online</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
