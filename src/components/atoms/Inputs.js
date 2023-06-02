import { Box, Button, FormLabel, Input } from "@chakra-ui/react";
import { whiteColor } from "./Colors";
import styled from "styled-components";

export default function InputFullsize(props) {
  const InputStyle = styled.input`
    position: absolute;
    width: 300px;
    left: calc(50% - 300px / 2 - 15.5px);
    top: 19.95%;
    bottom: 74.77%;

    background: #ffffff;
    border-radius: 10px;
    /* filter: drop-shadow(0px 3px 10px #4444dd); */
    box-shadow: inset 0px 3px 10px rgba(0, 0, 0, 0.4);
  `;

  return (
    <Box m={"30px"}>
      <FormLabel
        height={"23px"}
        fontFamily={"Arial Rounded MT Bold"}
        fontWeight={"400"}
        fontSize={"20px"}
        lineHeight={"23px"}
      >
        {props.label}
      </FormLabel>
      <Input
        mt={"10px"}
        width={"300px"}
        height={"45px"}
        borderRadius={"10px"}
        boxShadow={"inset 0px 3px 10px rgba(0, 0, 0, 0.4)"}
        bgColor={whiteColor}
        color={"#000000"}
      />
    </Box>
  );
}

export function InputPassword() {
  return (
    <>
      {" "}
      <FormLabel
        height={"23px"}
        fontFamily={"Arial Rounded MT Bold"}
        fontWeight={"400"}
        fontSize={"20px"}
        lineHeight={"23px"}
      >
        Password
      </FormLabel>
      <Input
        mt={"10px"}
        width={"300px"}
        height={"45px"}
        borderRadius={"10px"}
        boxShadow={"inset 0px 3px 10px rgba(0, 0, 0, 0.4)"}
        bgColor={whiteColor}
        color={"#000000"}
        type="password"
      />
    </>
  );
}
