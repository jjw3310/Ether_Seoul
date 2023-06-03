import { setGlobalState, useGlobalState } from '../store'

const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <div className="text-center bg-F0F1F2 text-gray-800 py-24 px-6">
      <h1
        className="text-5xl md:text-6xl xl:text-7xl font-bold
        tracking-tight mb-12"
      >
        <span className="capitalize text-green-600" >Campaign</span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-3 bg-green-600
          text-white font-medium text-base leading-tight uppercase
          rounded-lg shadow-md hover:bg-orange-300"
          style={{ backgroundColor: "#FFC772" }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#34D399"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#FFC772"}
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Create Campaign
        </button>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search Projects"
            className="inline-block px-4 py-2.5 border border-green-600
            font-medium text-xs leading-tight text-green-600
            rounded-full shadow-md bg-transparent focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>




      <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span>Projects</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Backings</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
