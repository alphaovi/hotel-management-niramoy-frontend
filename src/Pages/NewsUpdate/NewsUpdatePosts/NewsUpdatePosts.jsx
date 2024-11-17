import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import consumerPhoto from "../../../assets/images/hotel-home/thumb_624c0a7923c511649150585.png";
import standredPhoto from "../../../assets/images/hotel-home/download (9).jfif";
import meetingPhoto from "../../../assets/images/hotel-home/thumb_624c09f9527101649150457.jpg";

const NewsUpdatePosts = () => {
  const today = `${new Date().getDate()} ${new Intl.DateTimeFormat("en", {
    month: "long",
  }).format(new Date())} ${new Date().getFullYear()}`;

  return (
    <section className="my-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-10">Latest Blog Post</h1>
        <p className="mb-10">
          Maecenas nec odio et ante tincidunt tempus. Donec vitae apitlibero
          venenatis faucibus. Nullam quis ante. Etiam sit amet orci
        </p>
      </div>
      <div className="flex flex-cols gap-4 px-24">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={consumerPhoto} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>{today}</p>
            <Link to="" className="card-title hover:text-yellow-700">
              The consumers who did not...
            </Link>
            <p className="my-5">
              Curabitur a felis in nunc fringilla tristique abot
              escrow.Pellentesque habitant morbi
            </p>
            <div className="card-actions">
              <button className="text-yellow-600 flex items-center gap-2 ">
                Read More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={standredPhoto} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>{today}</p>
            <Link to="" className="card-title hover:text-yellow-700">
              The standard Lorem Ipsum...
            </Link>
            <p className="my-5">
              Curabitur a felis in nunc fringilla tristique abot
              escrow.Pellentesque habitant morbi
            </p>
            <div className="card-actions">
              <button className="text-yellow-600 flex items-center gap-2 ">
                Read More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={meetingPhoto} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>{today}</p>
            <Link to="" className="card-title hover:text-yellow-700">
              È universalmente riconosciuto...
            </Link>
            <p className="my-5">
              Curabitur a felis in nunc fringilla tristique abot
              escrow.Pellentesque habitant morbi
            </p>
            <div className="card-actions">
              <button className="text-yellow-600 flex items-center gap-2 ">
                Read More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-cols gap-4 px-24 mt-10">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={consumerPhoto} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>{today}</p>
            <Link to="" className="card-title hover:text-yellow-700">
              The consumers who did not...
            </Link>
            <p className="my-5">
              Curabitur a felis in nunc fringilla tristique abot
              escrow.Pellentesque habitant morbi
            </p>
            <div className="card-actions">
              <button className="text-yellow-600 flex items-center gap-2 ">
                Read More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={standredPhoto} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>{today}</p>
            <Link to="" className="card-title hover:text-yellow-700">
              The standard Lorem Ipsum...
            </Link>
            <p className="my-5">
              Curabitur a felis in nunc fringilla tristique abot
              escrow.Pellentesque habitant morbi
            </p>
            <div className="card-actions">
              <button className="text-yellow-600 flex items-center gap-2 ">
                Read More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={meetingPhoto} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>{today}</p>
            <Link to="" className="card-title hover:text-yellow-700">
              È universalmente riconosciuto...
            </Link>
            <p className="my-5">
              Curabitur a felis in nunc fringilla tristique abot
              escrow.Pellentesque habitant morbi
            </p>
            <div className="card-actions">
              <button className="text-yellow-600 flex items-center gap-2 ">
                Read More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-cols gap-4 px-24 mt-10">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={consumerPhoto} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>{today}</p>
            <Link to="" className="card-title hover:text-yellow-700">
              The consumers who did not...
            </Link>
            <p className="my-5">
              Curabitur a felis in nunc fringilla tristique abot
              escrow.Pellentesque habitant morbi
            </p>
            <div className="card-actions">
              <button className="text-yellow-600 flex items-center gap-2 ">
                Read More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={standredPhoto} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>{today}</p>
            <Link to="" className="card-title hover:text-yellow-700">
              The standard Lorem Ipsum...
            </Link>
            <p className="my-5">
              Curabitur a felis in nunc fringilla tristique abot
              escrow.Pellentesque habitant morbi
            </p>
            <div className="card-actions">
              <button className="text-yellow-600 flex items-center gap-2 ">
                Read More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={meetingPhoto} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>{today}</p>
            <Link to="" className="card-title hover:text-yellow-700">
              È universalmente riconosciuto...
            </Link>
            <p className="my-5">
              Curabitur a felis in nunc fringilla tristique abot
              escrow.Pellentesque habitant morbi
            </p>
            <div className="card-actions">
              <button className="text-yellow-600 flex items-center gap-2 ">
                Read More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdatePosts;
