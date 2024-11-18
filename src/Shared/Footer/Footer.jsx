import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/hotel-footer/footer-background.jfif";
import hotelIcon from "../../assets/images/hotel-footer/logo_dark.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <div
          className="hero lg:min-h-[400px] min-h-[550px]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="grid grid-cols-4 gap-6 text-white p-20">
            <div>
              <Link to={"/"}>
                <img className="h-20 w-20" src={hotelIcon} alt="" />
              </Link>
              <p className="text-white">
                Maecenas nec odio et ante tincid empus. Donec vitae sapien ut
                libero venaucibus. Nullam quis ante. Etiam sit amet.
              </p>
              <div className="flex gap-2 mt-2">
                <FaFacebook className="w-10 h-10 bg-gray-800  text-white rounded-full p-2" />
                <FaTwitter className="w-10 h-10 bg-gray-800 text-white rounded-full p-2" />
                <FaInstagram className="w-10 h-10 bg-gray-800 text-white rounded-full p-2" />
                <FaLinkedin className="w-10 h-10 bg-gray-800  text-white rounded-full p-2" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Company</h3>
              <div className="mt-5">
                <li>FAQs</li>
                <li>Contact</li>
                <li>Blog</li>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Useful Link</h3>
              <div className="mt-5">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Refund and Cancellation Policy</li>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Contact Us</h3>
              <div className="flex gap-4 mt-5">
                <p className="bg-yellow-700 flex justify-center p-1 items-center rounded-full">
                  <FaLocationDot />
                </p>
                <p>Dhaka Barisal Main Road, Faritpur</p>
              </div>
              <div className="flex gap-4 mt-5">
                <p className="bg-yellow-700 flex justify-center p-2 items-center rounded-full">
                  <IoIosMail />
                </p>
                <p>Info@hotelniramoy.com</p>
              </div>
              <div className="flex gap-4 mt-5">
                <p className="bg-yellow-700 flex justify-center p-2 items-center rounded-full">
                  <FaPhoneAlt />
                </p>
                <p>+880160212225</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-white bg-black p-5">
          <p className="mt-5">© 2024 Innovative IT Solutions Limited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
