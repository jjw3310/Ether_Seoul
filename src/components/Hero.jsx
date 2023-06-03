import { setGlobalState, useGlobalState } from "../store";
import { FaSearch } from "react-icons/fa";
import DiscountCoupon from "../assets/images/DiscountCoupon.png";

const Hero = () => {
  const [stats] = useGlobalState("stats");

  return (
    <>
      <div style={{ backgroundColor: "#F0F1F2" }}>
        <div
          className="text-center text-gray-800 py-10 px-10"
          style={{ backgroundColor: "#F0F1F2" }}
        >
          <div className="flex justify-center items-center space-x-6">
            <button
              type="button"
              className="inline-block px-6 py-3 bg-green-600
      text-white font-medium text-base leading-tight uppercase
      rounded-lg shadow-md hover:bg-orange-300"
              style={{ backgroundColor: "#FFC772" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#FFB262";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#FFC772";
              }}
              onClick={() => setGlobalState("createModal", "scale-100")}
            >
              Create Campaign
            </button>



            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search Projects"
                className="inline-block px-6 py-3 border border-yellow-600
                font-medium text-xs leading-tight text-yellow-600
                rounded-lg shadow-md bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              />
              <div className="relative">
                <FaSearch
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-600 cursor-pointer hover:text-yellow-300"
                  size={20}
                />
              </div>
            </div>
          </div>

          <img
            src={DiscountCoupon}
            alt="DiscountCoupon"
            className="mx-auto mt-8 w-120vw h-100vw"
          />
        </div>

        <div className="flex justify-center items-center space-x-6 mt-10 mb-50" style={{ height: "10" }}>

          <button className="px-4 py-2 bg-[#556857] rounded-lg text-white font-medium hover:bg-[#31673D]">
            All
          </button>
          <button className="px-4 py-2 bg-[#31673D] rounded-lg text-white font-medium hover:bg-[#678362]">
            Fundings
          </button>
          <button className="px-4 py-2 bg-[#678362] rounded-lg text-white font-medium hover:bg-[#84A27E]">
            Challenges
          </button>
          <button className="px-4 py-2 bg-[#84A27E] rounded-lg text-white font-medium hover:bg-[#556857]">
            Donate
          </button>
        </div>




        <div className="flex justify-center items-center mt-10" style={{ backgroundColor: "#F0F1F2" }}>
  <div className="flex justify-center items-center mt-10 space-x-10">
    <div className="flex flex-col justify-center items-center h-60 w-40 border shadow-md hover:shadow-lg transition duration-300" style={{ backgroundColor: "white" }}>
      <span className="text-lg font-bold text-green-900 leading-5">
        {stats?.totalProjects || 0}
      </span>
      <span className="mt-2">Projects</span>
    </div>
    <div className="flex flex-col justify-center items-center h-60 w-40 border shadow-md hover:shadow-lg transition duration-300" style={{ backgroundColor: "white" }}>
      <span className="text-lg font-bold text-green-900 leading-5">
        {stats?.totalBacking || 0}
      </span>
      <span className="mt-2">Backings</span>
    </div>
    <div className="flex flex-col justify-center items-center h-60 w-40 border shadow-md hover:shadow-lg transition duration-300" style={{ backgroundColor: "white" }}>
      <span className="text-lg font-bold text-green-900 leading-5">
        {stats?.totalDonations || 0} ETH
      </span>
      <span className="mt-2">Donated</span>
    </div>
  </div>



        </div>
      </div>
    </>
  );
};

export default Hero;
