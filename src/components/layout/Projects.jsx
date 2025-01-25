import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProjectsCard from "./ProjectsCard";
import projectData from "../../data/projectData.json";

const MotionDiv = motion.div;

function Projects() {
  const [LiveChat, MailTest, Campaign, NDTV, Finder] = projectData;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Text
          textAlign="center"
          color="#805AD5"
          fontSize={{ base: "20px", md: "22px", lg: "40px" }}
          fontWeight={{ base: "600", md: "700" }}
        >
          Projects
        </Text>
      </motion.div>


      <MotionDiv
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <ProjectsCard
          key={MailTest.id}
          name={MailTest.name}
          image1={MailTest.src1}
          image2={MailTest.src2}
          info={MailTest.info}
          info2={MailTest.info2}
          tstack={MailTest.tstack}
          details={MailTest.team}
          github={MailTest.repo}
          deployed={MailTest.link}
          direction={MailTest.direction}
        />
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <ProjectsCard
          key={Campaign.id}
          name={Campaign.name}
          image1={Campaign.src1}
          image2={Campaign.src2}
          info={Campaign.info}
          info2={Campaign.info2}
          tstack={Campaign.tstack}
          details={Campaign.team}
          github={Campaign.repo}
          deployed={Campaign.link}
          direction={Campaign.direction}
        />
      </MotionDiv>


    </>
  );
}

export default Projects;