import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import contactBackgroundPhoto from "../../../assets/images/hotel-contact/62887f5e94d901653112670.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
// import contactBackgroundPhoto from "../../../assets/images/hotel-contact/62887f5e94d901653112670.jpg";

const ContactForm = () => {
  return (
    <div className="">
      <div className="hero-content flex-col lg:flex-row-reverse p-20">
        <div className="card bg-[#EEF5FA] w-1/2 shrink-0 shadow-2xl">
          <div className="text-left p-5 mx-20">
            <h2 className="text-4xl font-bold">Get In Touch With Us</h2>
            <p className="mt-5 text-xl">
              Hotel Noramoy with its 3star guest facilities is the best business
              and leisure hotel in Faritpur.
            </p>
          </div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Enter Subject"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                type="text"
                placeholder="write Message"
                className="input input-bordered h-32"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn hover:bg-[#BCA457] bg-[#AB8A23] text-white uppercase font-bold w-2/6">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div
          className="text-center lg:text-left w-1/2 h-screen relative p-5"
          style={{
            backgroundImage: `url(${contactBackgroundPhoto})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-4/6 bg-white w-5/6 border-2 border-orange-700 ">
            <div className="flex gap-6 p-10">
              <div>
                <p className="bg-[#AB8A23] rounded-full w-16 h-16 flex justify-center items-center">
                  <FaLocationDot className="w-8 h-8 text-white" />
                </p>
              </div>
              <div>
                <p className="font-bold">Office Address</p>
                <p className="text-sm">Dhaka Barisal Main Road</p>
                <p className="text-sm">Faritpur</p>
              </div>
            </div>
            <div className="flex gap-6 p-10">
              <div>
                <p className="bg-[#AB8A23] rounded-full w-16 h-16 flex justify-center items-center">
                  <MdEmail className="w-8 h-8 text-white" />
                </p>
              </div>
              <div>
                <p className="font-bold">Email Address</p>
                <p className="text-sm">info@hotelniramoy.com</p>
              </div>
            </div>
            <div className="flex gap-6 p-10">
              <div>
                <p className="bg-[#AB8A23] rounded-full w-16 h-16 flex justify-center items-center">
                  <FaLocationDot className="w-8 h-8 text-white" />
                </p>
              </div>
              <div>
                <p className="font-bold">Office Address</p>
                <p className="text-sm">Dhaka Barisal Main Road</p>
                <p>Faritpur</p>
              </div>
            </div>
            <div className="text-center mt-5">
              <h4 className="mb-5 text-2xl font-bold">Follow Us</h4>
              <div className="flex gap-8 justify-center items-center mb-10">
                <FaFacebook className="w-10 h-10 bg-[#AB8A23] text-white rounded-full p-2" />
                <FaTwitter className="w-10 h-10 bg-[#AB8A23] text-white rounded-full p-2" />
                <FaInstagram className="w-10 h-10 bg-[#AB8A23] text-white rounded-full p-2" />
                <FaLinkedin className="w-10 h-10 bg-[#AB8A23] text-white rounded-full p-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
