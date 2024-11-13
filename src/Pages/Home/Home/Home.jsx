import Banner from "../Banner/Banner";
import FeatureRooms from "../FeatureRooms/FeatureRooms";
import GuestFacilities from "../GuestFacilities/GuestFacilities";
import HotelServices from "../HotelServices/HotelServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <GuestFacilities></GuestFacilities>
      <FeatureRooms></FeatureRooms>
      <HotelServices></HotelServices>
    </div>
  );
};

export default Home;
