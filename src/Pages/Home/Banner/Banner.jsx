import bannerPhoto from "../../../assets/images/hotel-home/bannerImage.png";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";


const Banner = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);

  // toggle date picker visibility
  const handleShowDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  // close the date picker after selection
  const handleDateSelection = (item) => {
    setState([item.selection]);
    setShowDatePicker(false);
  };

  // format date range for display
  const formattedDateRange = `${state[0].startDate.toLocaleDateString()}- ${state[0].endDate.toLocaleDateString()}`;

  return (
    <div className="">
      <div className="">
        <img className="-mt-20" src={bannerPhoto} alt="" />
      </div>
      <div className="">
        <h1 className="text-4xl font-bold -mt-96 text-white uppercase text-center">
          sepnd your beautiful <br /> moment
        </h1>
      </div>
      <div className="border border-red-900 flex justify-center">
        <div className=" p-20 shadow-2xl ">
          <form action="">
            <input
              type="text"
              placeholder="Select date range"
              className="input input-bordered max-w-xs mr-5 border"
              onClick={handleShowDatePicker}
              value={formattedDateRange}
              readOnly
            />
            {showDatePicker && (
              <OutsideClickHandler
                onOutsideClick={() => setShowDatePicker(false)}
              >
                <DateRange
                  onClick={handleDateSelection}
                  editableDateInputs={true}
                  onChange={(item) => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                  value={formattedDateRange}
                />
              </OutsideClickHandler>
            )}
            <input
              type="number"
              placeholder="Total Adult"
              className="input input-bordered  max-w-xs mr-5 text-center"
            />

            <input
              type="number"
              placeholder="Total Child"
              className="input input-bordered  max-w-xs mr-5 text-center"
            />
            <button
              type="submit"
              value="check availability"
              className="input input-bordered  max-w-xs mr-5 bg-[#AB8A23] text-white uppercase rounded-none"
            >
              check availability
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
