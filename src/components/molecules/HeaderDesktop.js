import { BiWallet } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import WaterdropTree from "@assets/images/waterDropTree.svg";
import { Box, Img, Text } from "@chakra-ui/react";
import { sub3GreenColor, whiteColor } from "@components/atoms/Colors";

export default function HeaderDesktop({ account, nickName, onClickAccount }) {
  return (
    <Box w={"100vw"} bgColor={whiteColor}>
      <header className="max-w-screen-xl mx-auto p-4 flex justify-between items-center font-bold">
        <Link to="/">
          <Box>
            <div className="flex items-center text-main">
              <Img src={WaterdropTree} height={"28px"} mr={"20px"} />
              <Text color={"#575757"}>T.M.I</Text>
            </div>
          </Box>
        </Link>
        <div className="flex items-center">
          {account ? (
            <div className="flex items-center p-2 bg-gray-800 rounded-full ml-4">
              <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
                <AiFillHeart />
              </div>
              <div className="ml-1">
                {!nickName
                  ? account.substring(0, 4) +
                    "..." +
                    account.substring(account.length - 4)
                  : nickName}
              </div>
            </div>
          ) : (
            <button
              className="flex items-center p-2 bg-gray-800 rounded-full ml-4"
              onClick={onClickAccount}
            >
              <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
                <BiWallet />
              </div>
              <div className="ml-1">E-COnnect</div>
            </button>
          )}
        </div>
      </header>
    </Box>
  );
}
