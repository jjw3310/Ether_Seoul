import React from "react";
import { useState } from "react";
import {
  Flex,
  Input,
  InputGroup,
  Button,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
  Radio,
  RadioGroup,
  Stack,
  Image,
} from "@chakra-ui/react";
import { create } from "ipfs-http-client";
// const Client = require("ipfs-http-client");
// const ipfs = Client.create({
//   host: "localhost",
//   port: "5001",
//   protocol: "http",
// });
const ipfs = create({
  host: "localhost",
  port: "5002",
  protocol: "http",
});

//const url = "https://ipfs.io/ipfs/";

export default function CreatePostModal({ isOpen, onClose }) {
  const [value, setValue] = useState("1");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  async function uploadIpfs() {
    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const fileAdded = await ipfs.add(file);
        const ipfsPath = fileAdded.path;
        // setIpfsHash(ipfsPath);
        console.log("IPFS path:", ipfsPath);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  function outputcon() {
    console.log(selectedFiles);
    console.log(previewImages);
  }

  function testClose() {
    setSelectedFiles([]);
    setPreviewImages([]);
    onClose();
  }

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const allowedExtensions = ["png", "jpg", "jpeg"];
    const selectedNowFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const extension = file.name.split(".").pop();
      console.log(extension);
      if (allowedExtensions.includes(extension.toLowerCase())) {
        console.log("this is image!");
        selectedNowFiles.push(file);
      }
    }

    setSelectedFiles(selectedNowFiles);

    const previews = selectedNowFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);

    console.log(selectedFiles);
    console.log(previewImages);
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size={"xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {/* <Lorem count={2} /> */}
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row" justify={"center"} marginBottom={"3%"}>
              <Radio value="1">My tree NFT</Radio>
              <Radio value="2">Eco-info</Radio>
              <Radio value="3">Eco-lifestyle</Radio>
            </Stack>
          </RadioGroup>
          <Textarea
            placeholder="Create and publish a post 
          #TMI #NFT"
          />
          {/* nft 고르는 폼 || 이미지 여러개 업로드 */}
          <Input
            type="file"
            multiple
            onChange={handleFileChange}
            marginY={"5%"}
            paddingTop={"1.5%"}
          />

          <Flex overflowX={"auto"}>
            {previewImages.map((preview, index) => (
              <Image
                key={index}
                src={preview}
                alt={`Preview ${index}`}
                style={{ width: "100px", height: "auto" }}
              />
            ))}
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button onClick={uploadIpfs} colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={testClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
