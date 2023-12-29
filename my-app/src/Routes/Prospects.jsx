import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";

export const Prospects = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://misty-sunglasses-clam.cyclic.app/Prospects"
        );
        const data = await response.json();
        setApplicants(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Flex justifyContent="center" alignItems="center" pt={8}>
      <Wrap spacing={6} justify="center" w="100%">
        {applicants.map((applicant) => (
          <WrapItem key={applicant.id}>
            <Box
              maxW={{ base: "250px", sm: "300px", md: "350px" }}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
            >
              <Image
                src={applicant.img}
                alt={applicant.name}
                w="100%"
                h="200px"
                objectFit="cover"
              />
              <Box p="4">
                <Text fontWeight="semibold" fontSize="lg" mb="2">
                  {applicant.name}
                </Text>
                <Text fontSize="sm" mb="2">
                  Phone: {applicant.phone}
                </Text>
                <Text fontSize="sm" mb="2">
                  Role: {applicant.role}
                </Text>
                {/* Skills */}
                <Text fontSize="sm" mb="2">
                  Skills: {applicant.skills.join(", ")}
                </Text>
                {/* Years of Experience */}
                <Text fontSize="sm" mb="2">
                  Experience: {applicant.yearsOfExperience} years
                </Text>
                <Link to={`/Applicants/${applicant.id}`}>View Details</Link>
              </Box>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};
