/* eslint-disable react/prop-types */
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientReviewCarousel = ({ clientsReviews }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {clientsReviews.map(({ _id, name, profession, photo, review }) => (
        <div
          key={_id}
          className="p-5 flex flex-col items-center bg-white shadow-md rounded-lg mx-3"
        >
          <img
            src={photo}
            alt={name}
            className="w-10 h-10 mx-auto rounded-full mb-4 object-cover"
          />
          <p className="font-bold text-lg flex justify-center">{name}</p>
          <p className="text-sm text-gray-500 flex justify-center">
            {profession}
          </p>
          <p className="flex justify-center">
            <FaQuoteLeft className="inline mr-2 text-yellow-600" />
          </p>
          <p className="text-gray-700 mt-2 text-center italic">{review}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ClientReviewCarousel;
