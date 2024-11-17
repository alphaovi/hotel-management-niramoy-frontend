import ClientReview from "../ClientReview/ClientReview";
import reviewBackgroundImage from "../../../../assets/images/customer-review/customer-reviews.png";

const ClientsReviews = () => {
  return (
    <section
      className="h-screen mt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${reviewBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" px-80 py-10">
        <h1 className="flex items-center justify-center font-bold text-5xl text-white">
          Happy Client's Review
        </h1>
        <p className="flex items-center justify-center text-xl mt-5 text-white">
          Maecenas nec odio et ante tincidunt tempus. Donec vitae apitlibero
          venenatis faucibus. Nullam quis ante. Etiam sit amet orci
        </p>
      </div>
      <div>
        <ClientReview></ClientReview>
      </div>
    </section>
  );
};

export default ClientsReviews;
