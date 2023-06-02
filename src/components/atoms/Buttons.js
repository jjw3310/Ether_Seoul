import { Button, Img, Text } from "@chakra-ui/react";
import React from "react";
import { apricotColor, mainGreenColor, sub3GreenColor } from "./Colors";
import metamaskIcon from "@assets/images/metamaskIcon.svg";

export default function ButtonMainGreen() {
  return <Button bgColor={mainGreenColor} />;
}

export function BtnMetamask(props) {
  return (
    <div>
      <Button
        bgColor={apricotColor}
        width={"300px"}
        height={"60px"}
        justifyContent={"flex-start"}
        fontSize={"14px"}
        fontFamily={"Arial Rounded MT Bold"}
        fontWeight={"400"}
        onClick={props.onClick}
      >
        <Img
          src={metamaskIcon}
          width={"30px"}
          height={"30px"}
          ml={"11px"}
          mr={"30px"}
        />
        {props.text}
      </Button>
    </div>
  );
}

export function BtnText(props) {
  return (
    <div>
      <Text
        cursor={"pointer"}
        textDecorationLine={"underline"}
        _hover={"pointer"}
        fontSize={"14px"}
        fontFamily={"Arial Rounded MT Bold"}
        fontWeight={"400"}
      >
        {props.text}
      </Text>
    </div>
  );
}

export function BtnSub3Green(props) {
  return <Button bgColor={sub3GreenColor}>{props.text}</Button>;
}
