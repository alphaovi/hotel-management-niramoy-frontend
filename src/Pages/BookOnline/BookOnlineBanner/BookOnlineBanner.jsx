
import hotelContactImage from "../../../assets/images/hotel-contact/hotelContact.jfif"
const BookOnlineBanner = () => {
    return (
        <div className="">
            <img className="filter brightness-75" src={hotelContactImage} alt="Contact Background Image" />
            <h1 className="absolute top-56 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white " >Book Online</h1>
        </div>
    );
};

export default BookOnlineBanner;