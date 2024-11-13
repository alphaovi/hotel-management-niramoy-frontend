import featureRoom from "../../../assets/images/hotel-home/FeatureRooms/featureRoom.jpeg";
import { RiContactsBook2Fill } from "react-icons/ri";

const FeatureRooms = () => {
  return (
    <div className="p-40 relative">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Feature Rooms</h1>
        <p className="text-xl mt-5 mb-10">
          Every room type has many rooms. Anyone can send booking requrest from
          this site.
        </p>
      </div>
      <div className="">
        <div className="mx-auto w-96">
          <img className="h-full w-[700px]" src={featureRoom} alt="" />
          <button className="-mt-20 p-2  bg-[#BDA456] text-white shadow-2xl rounded-none">
            <RiContactsBook2Fill size={24} />
          </button>
        </div>

        <div className="absolute border bg-[#F4F2F0] w-72  p-2 mx-auto -mt-20 ml-96">
          <h1 className="text-2xl font-bold">Master</h1>
          <p className="text-xl text-yellow-600">2000.00 BDT / Night</p>
          <div className="flex gap-6 p-5">
            <button className="btn rounded-none bg-[#E5E5E5]">Adult 2</button>
            <button className="btn rounded-none bg-[#E5E5E5]">Child 0</button>
          </div>
          <button className="btn bg-yellow-800 hover:bg-yellow-600 text-white rounded-none flex items-center justify-center mx-auto">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureRooms;
