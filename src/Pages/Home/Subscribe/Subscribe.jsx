import { IoIosSend } from "react-icons/io";
// import subscribeBackgroundImage from "../../../assets/images/hotel-home/624c17a47e1771649153956.jpg";

const Subscribe = () => {
  return (
    <section
    //   style={{
    //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${subscribeBackgroundImage})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    >
      <div className="bg-[#A98725] w-full h-80 p-20">
        <div >
          <h1 className="text-8xl text-white font-bold text-center">
            Subscribe Newsletter
          </h1>
        </div>
        <div className="flex items-center justify-center my-10 ">
          <input
            type="text"
            placeholder="Enter email address"
            className="input rounded-none w-full max-w-md border-none "
          />
          <button className="btn btn-wide bg-gray-700 hover:bg-black border-none text-white text-2xl rounded-none">
            <IoIosSend />
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
