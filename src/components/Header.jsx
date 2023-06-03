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
          <Link to="/" className="flex items-center space-x-1">
          <img
  src={BackPageLeft}
  alt="Back Page Left"
  className="w-6 h-6 transition-transform duration-300 transform hover:scale-90"
/>            <h1 className="text-4xl font-semibold font-arial-rounded-mt-bold font-normal text-white leading-6" style={{ marginLeft: '820px' }}>Campaign</h1>
          </Link>
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