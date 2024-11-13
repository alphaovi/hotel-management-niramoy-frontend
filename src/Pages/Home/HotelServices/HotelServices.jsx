import { FaBuilding } from "react-icons/fa";
import ReactPlayer from 'react-player'


const HotelServices = () => {
  

  return (
    <section>
      <div className="flex flex-cols-2 gap-4">
        <div className="bg-red-500  w-2/4">
        <ReactPlayer url='https://www.youtube.com/embed/m5W00R7OvbA' />
        </div>
        <div className="bg-black text-white p-20">
          <h1>Our Hotel Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            eligendi voluptatem delectus fugit! Ipsam, adipisci.
          </p>
          <div className="grid grid-cols-2 gap-4 p-20">
            <div className="grid items-center justify-center mx-auto  hover:bg-[#AB8A23]  h-[220px] w-full bg-[#313131]">
              <p className=" ">
                <FaBuilding className="bg-yellow-700 w-20 h-20 rounded-full" />
              </p>
              <p className="font-bold text-2xl">BBQ Resturant</p>
            </div>
            <div className="grid items-center justify-center mx-auto hover:bg-[#AB8A23]  h-[220px] w-full bg-[#313131]">
              <p className=" ">
                <FaBuilding className="bg-yellow-700 w-20 h-20 rounded-full" />
              </p>
              <p className="font-bold text-2xl">BBQ Resturant</p>
            </div>
            <div className="grid items-center justify-center mx-auto hover:bg-[#AB8A23]  h-[220px] w-full bg-[#313131]">
              <p className=" ">
                <FaBuilding className="bg-yellow-700 w-20 h-20 rounded-full" />
              </p>
              <p className="font-bold text-2xl">BBQ Resturant</p>
            </div>
            <div className="grid items-center justify-center mx-auto hover:bg-[#AB8A23]  h-[220px] w-full bg-[#313131]">
              <p className=" ">
                <FaBuilding className="bg-yellow-700 w-20 h-20 rounded-full" />
              </p>
              <p className="font-bold text-2xl">BBQ Resturant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelServices;
