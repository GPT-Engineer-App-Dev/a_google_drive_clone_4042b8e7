import { Box, Button, Flex, Input, Text, VStack, Image, useToast } from "@chakra-ui/react";
import { FaFileUpload, FaFolderPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleUpload = () => {
    toast({
      title: "File uploaded.",
      description: "Your file has been uploaded successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleCreateFolder = () => {
    toast({
      title: "Folder created.",
      description: "Your new folder has been created successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDelete = () => {
    toast({
      title: "Deleted.",
      description: "The item has been deleted successfully.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl" fontWeight="bold">
        My Drive
      </Text>
      <Image src="https://images.unsplash.com/photo-1488229297570-58520851e868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHN0b3JhZ2V8ZW58MHx8fHwxNzEzMjY2OTQxfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" />
      <Flex gap="2">
        <Button leftIcon={<FaFileUpload />} colorScheme="blue" onClick={handleUpload}>
          Upload File
        </Button>
        <Button leftIcon={<FaFolderPlus />} colorScheme="green" onClick={handleCreateFolder}>
          Create Folder
        </Button>
        <Button leftIcon={<FaTrash />} colorScheme="red" onClick={handleDelete}>
          Delete Item
        </Button>
      </Flex>
      <Box w="full">
        <Input placeholder="Search files and folders" />
      </Box>
    </VStack>
  );
};

export default Index;
