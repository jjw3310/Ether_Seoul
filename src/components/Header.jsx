import { TbBusinessplan } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'
import BackPageLeft from '../assets/images/BackPageLeft.png';

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <>
<header className="flex justify-between items-center p-10" style={{ backgroundColor: "#84A27E" }}>
  <div className="flex items-center">
    <Link to="/" className="flex items-center">
      <div className="flex items-center justify-start">
        <img src={BackPageLeft} alt="Back Page Left" className="w-6 h-6" />            
      </div>
    </Link>
    <div className="flex items-center justify-center flex-1">
      <h1 className="text-4xl font-semibold font-arial-rounded-mt-bold font-normal text-white leading-6 mx-auto" style={{ marginLeft: "800px" }}>Campaign</h1>
    </div>
  </div>
</header>




    </>
  )
}

export default Header


{/* Connection Wallet
      <div className="flex space-x-2 justify-center">
        {connectedAccount ? (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-green-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-green-700"
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-green-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-green-700"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div> */}