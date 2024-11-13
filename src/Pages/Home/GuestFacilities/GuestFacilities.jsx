import image1 from "../../../assets/images/hotel-home/hotel-facilities/image1.jfif";;
import image2 from "../../../assets/images/hotel-home/hotel-facilities/image2.jfif";;
import image3 from "../../../assets/images/hotel-home/hotel-facilities/image3.jfif";;
import image4 from "../../../assets/images/hotel-home/hotel-facilities/image4.jfif";;

const GuestFacilities = () => {
    return (
        <div className="flex gap-20 mt-40">
            <div className="grid grid-cols-2 gap-2 grid-row-2 ml-40">
                <img className="mt-10" src={image1} alt="" />
                <img src={image2} alt="" />
                <img className="mt-5" src={image3} alt="" />
                <img className="-mt-5" src={image4} alt="" />
            </div>
            <div className="">
                <h1 className="text-5xl font-bold">Welcome and Relax at Our Hotel</h1>
                <p className="mt-5  text-2xl">Hotel Niramoy</p>
                <p className="mt-10 text-xl">Hotel Niramoy with its 3 star guest facilities is the best business and leisure hotel in Faritpur.</p>
            </div>
        </div>
    );
};

export default GuestFacilities;