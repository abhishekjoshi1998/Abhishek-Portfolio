import { Box, Button, Flex, Image, Text, Link } from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

function Profile() {
  //resume
  const handleDownload = async () => {
  try {
    const resumeUrl =
      "https://drive.google.com/file/d/17BFd-VGe3yIWYRD0_YFKoEyCfGvOqmjN/view?usp=sharing";

    const response = await fetch(resumeUrl);
    const blob = await response.blob();

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "abhishekjoshi.pdf"; // 

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error("Error downloading the resume:", error);
  }
};


  // Framer Motion Variants
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Box height={{ base: "50px", md: "80px" }}></Box>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Flex
          w={{ base: "100%", md: "80%" }}
          m="auto"
          alignItems="center"
          justifyContent={{ base: "center", md: "space-around" }}
          flexDirection={{ base: "column-reverse", lg: "row" }}
          rowGap={{ base: "10px", md: "10px" }}
          mt={{ base: "20px", md: "10px", lg: "40px" }}
        >
          <Box
            fontSize={{ base: "18px", md: "35px", lg: "55px" }}
            width={{ base: "90%", md: "100%", lg: "65%" }}
            m={{ base: "auto", lg: "0" }}
            fontWeight="600"
            textAlign={{ base: "center", lg: "left" }}
            lineHeight={{ base: "28px", md: "50px", lg: "80px" }}
          >
            <Flex
              justifyContent="center"
              gap="5px"
              direction={{ base: "row", lg: "column" }}
            >
              <Flex>
                <Text color="#RGBA(0, 0, 0, 0.64)">
                  <b>Hello👋, I Am</b>
                </Text>
              </Flex>

              <Text color="#RGBA(0, 0, 0, 0.64)">
                {" "}
                <b></b> <b style={{ color: "#805AD5" }}>Abhishek Joshi</b>
              </Text>
            </Flex>
            <Text color="#RGBA(0, 0, 0, 0.64)   ">
              <b>Full Stack Web Developer</b>
            </Text>
            <Text
              as={Link}
              _hover={{ textDecoration: "none" }}
              download={true}
              href={
                "https://drive.google.com/file/d/17BFd-VGe3yIWYRD0_YFKoEyCfGvOqmjN/view?usp=sharing"
              }
              onClick={handleDownload}
              target="_blank"
            >
              <Button
                size={{ base: "sm", md: "md", lg: "lg" }}
                mt={{ base: "10px", md: "0" }}
                colorScheme="purple"
                style={{ color: "white", background: "#805AD5" }}
              >
                Resume{" "}
                <b style={{ marginLeft: "5px" }}>
                  <HiDownload />
                </b>{" "}
              </Button>{" "}
            </Text>
          </Box>
          {/* profile */}
          <Box>
            <Image
              src="https://i.ibb.co/JpXD6Yq/IMG-20250124-230430-1.jpg"
              shadow="lg"
              mt={{ base: "10px", md: "0px" }}
              w={{ base: "150px", md: "200px", lg: "350px" }}
              borderRadius="50%"
              alt="Abhishek"
            />
          </Box>
        </Flex>
      </motion.div>
    </>
  );
}

export default Profile;
