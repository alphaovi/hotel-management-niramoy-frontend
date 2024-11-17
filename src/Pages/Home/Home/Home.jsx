import Banner from "../Banner/Banner";
import BlogPost from "../BlogPost/BlogPost";
import ClientsReviews from "../ClientsReviews/ClientsReviews/ClientsReviews";
import FeatureRooms from "../FeatureRooms/FeatureRooms";
import GuestFacilities from "../GuestFacilities/GuestFacilities";
import HotelServices from "../HotelServices/HotelServices";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <GuestFacilities></GuestFacilities>
      <FeatureRooms></FeatureRooms>
      <HotelServices></HotelServices>
      <ClientsReviews></ClientsReviews>
      <BlogPost></BlogPost>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
