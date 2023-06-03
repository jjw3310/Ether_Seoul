import { Box, Button, Flex } from "@chakra-ui/react";
import { mainGreenColor, sub3GreenColor } from "@components/atoms/Colors";
import InputFullsize from "@components/atoms/Inputs";
import { useWeb3 } from "@hooks/useWallet";
import React, { useEffect, useState } from "react";

const SignupForm = ({ account, setUserNickname }) => {
  const [nickname, setNickname] = useState("");
  const [profileImgUrl, setProfileImgUrl] = useState("");
  const { userContract, getContracts } = useWeb3();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isloading) return;
    getContracts();
    if (userContract) {
      setIsLoading(false);
    }
  }, [getContracts]);

  // useEffect(() => {
  //   if (isloading) return;

  // }, [isloading]);

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
    console.log(nickname);
  };

  const handleProfileImgUrlChange = (event) => {
    setProfileImgUrl(event.target.value);
    console.log(profileImgUrl);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const callSetUser = async () => {
      const setResult = await userContract.methods
        .setUser(profileImgUrl, nickname)
        .send({ from: account });
      if (setResult) window.location.href = "/";
    };
    callSetUser();
  };

  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100vw"}
    >
      <Box>
        <form onSubmit={handleSubmit}>
          <div>
            <InputFullsize
              label={"Nickname"}
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </div>
          <div>
            <InputFullsize
              label={"Profile Image URL"}
              type="text"
              value={profileImgUrl}
              onChange={handleProfileImgUrlChange}
            />
          </div>
          <Flex
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"15px"}
            mx={"30px"}
          >
            <Button px={"30px"} type="submit" bgColor={mainGreenColor}>
              Customizing
            </Button>
            <Button px={"30px"} typeof="" bgColor={sub3GreenColor}>
              Skip
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default SignupForm;
