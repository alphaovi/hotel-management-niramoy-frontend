import { FaBuilding, FaSwimmingPool, FaAmbulance  } from "react-icons/fa";
import ReactPlayer from "react-player";
import { LuPlaneTakeoff } from "react-icons/lu";

const HotelServices = () => {
  return (
    <section>
      <div className="flex flex-cols-2">
        <div className=" w-2/4">
          <ReactPlayer url="https://www.youtube.com/embed/m5W00R7OvbA" />
        </div>
        <div className="bg-black text-white p-20">
          <h1 className="text-6xl font-bold">Our Hotel Services</h1>
          <p className="text-2xl mt-5 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            eligendi voluptatem delectus fugit! Ipsam, adipisci.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-20">
            <div className="grid items-center justify-center mx-auto  hover:bg-[#AB8A23]  h-[220px] w-full bg-[#313131] rounded">
              <p className="flex justify-center ">
                <FaBuilding
                  className={`bg-[#8d6f1c] w-12 h-12 rounded-full p-2`}
                />
              </p>
              <p className="font-bold text-2xl -mt-20">BBQ Resturant</p>
            </div>
            <div className="grid items-center justify-center mx-auto hover:bg-[#AB8A23]  h-[220px] w-full bg-[#313131] rounded">
              <p className="flex justify-center ">
                <LuPlaneTakeoff className="bg-[#8d6f1c] w-12 h-12 rounded-full p-2" />
              </p>
              <p className="font-bold text-2xl -mt-20">Travelling</p>
            </div>
            <div className="grid items-center justify-center mx-auto hover:bg-[#AB8A23]  h-[220px] w-full bg-[#313131] rounded">
              <p className="flex justify-center ">
                <FaSwimmingPool  className="bg-[#8d6f1c] w-12 h-12 rounded-full p-2" />
              </p>
              <p className="font-bold text-2xl -mt-20">Swimming Pool</p>
            </div>
            <div className="grid items-center justify-center mx-auto hover:bg-[#AB8A23]  h-[220px] w-full bg-[#313131] rounded">
              <p className="flex justify-center ">
                <FaAmbulance className="bg-[#8d6f1c] w-12 h-12 rounded-full p-2" />
              </p>
              <p className="font-bold text-2xl -mt-20">Health Care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelServices;
