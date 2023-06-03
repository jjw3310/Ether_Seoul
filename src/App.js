import { ChakraProvider, Flex } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Customizing from "./pages/customizing";
import Header from "./components/Header";
import Community from "./pages/community";
import { useEffect, useState } from "react";
import LoginForm from "@components/molecules/LoginForm";
// import Market from "./pages/market";
import SignupForm from "@components/molecules/SignUpForm";
import { useWeb3 } from "@hooks/useWallet";
import Market from "./pages/market";
import MarketItemset from "./pages/marketItemset";
import Home from './views/Home'
import Project from './views/Project'
import { isWallectConnected } from './services/blockchain'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'

function App() {
  const [account, setAccount] = useState();
  const [userNickName, setUserNickname] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState();
  const { userContract, marketContract, getContracts } = useWeb3();
  // const { marketContract, getContracts } = useWeb3();
  useEffect(() => {
    const handleNickname = async () => {
      const userResult = userContract.methods.getUser(account).call();
      console.log("userResult : ", userResult);
      if (userResult.addr === "0x0000000000000000000000000000000000000000") {
        // Do Nothing
      } else {
        setUserNickname(userResult);
      }
    };

    if (userContract && account) {
      handleNickname();
    }
    if (userContract) return;
    getContracts();
  }, [userContract]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentPage(window.location.href);
      console.log("href = ", window.location.href);
    };
    window.addEventListener("popstate", handleUrlChange);
    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <ChakraProvider>
        <Flex justifyContent={"center"} height={"100%"} width={"100vw"}>
          <div className="min-h-screen bg-gray-800 text-white">
            {!account ? (
              <LoginForm
                account={account}
                setAccount={setAccount}
                setNickname={setUserNickname}
                userContract={userContract}
              />
            ) : userNickName ? (
              <>
                <Header
                  pageName={currentPage}
                  account={account}
                  setAccount={setAccount}
                  nickName={userNickName}
                  windowWidth={windowWidth > 768 ? "Desktop" : "Mobile"}
                />
                <Routes>
                  <Route
                    path="/"
                    element={<Main account={account} setAccount={setAccount} />}
                  />
                  <Route path="/:tokenId" element={<Customizing />} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/community" element={<Community />} />
                  <Route
                    path="/market"
                    element={<Market marketContract={marketContract} />}
                  />
                  <Route path="/marketItemset" element={<MarketItemset />} />
                  <Route path="/projects" element={<Home />} />
                   <Route path="/projects/:id" element={<Project />} />
                </Routes>
                <br />
                <br />
              </>
            ) : (
              <Flex direction={"column"}>
                <Header account={account} setAccount={setAccount} />
                <SignupForm account={account} setAccount={setAccount} />
              </Flex>
            )}
          </div>
        </Flex>
         <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
