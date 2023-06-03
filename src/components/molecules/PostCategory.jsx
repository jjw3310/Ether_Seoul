import React from "react";
import { Box, useRadio, useRadioGroup, HStack } from "@chakra-ui/react";

export default function PostCategory({ cate, setCate }) {
  const options = ["My tree NFT", "Eco-info", "Eco-lifestyle", "All"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: (value) => setCate(options.indexOf(value)),
  });

  const group = getRootProps();
  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="xl"
        boxShadow="md"
        _checked={{
          bg: "green.200",
          color: "white",
          borderColor: "green.300",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={2}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
}
