import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Text, Button, Image } from "@chakra-ui/react";

export const ApplicantCard = () => {
  const [applicantDetails, setApplicantDetails] = useState(null);
  const [isProspect, setIsProspect] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://misty-sunglasses-clam.cyclic.app/Applicants/${id}`
        );
        const data = await response.json();
        setApplicantDetails(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const checkProspect = async () => {
      try {
        const response = await fetch(
          `https://misty-sunglasses-clam.cyclic.app/Prospects`
        );
        const data = await response.json();
        const isApplicantProspect = data.some(
          (applicant) => applicant.id === Number(id)
        );
        setIsProspect(isApplicantProspect);
      } catch (error) {
        console.error("Error checking prospects:", error);
        // Handle error
      }
    };

    checkProspect();
  }, [id]);

  const handleProspectToggle = async () => {
    try {
      if (isProspect) {
        await fetch(
          `https://misty-sunglasses-clam.cyclic.app/Prospects/${id}`,
          {
            method: "DELETE",
          }
        );
      } else {
        await fetch(`https://misty-sunglasses-clam.cyclic.app/Prospects`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: Number(id) }),
        });
      }
      setIsProspect(!isProspect);
    } catch (error) {
      console.error("Error toggling prospect:", error);
      // Handle error
    }
  };

  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p="4"
    >
      {applicantDetails ? (
        <>
          <Image
            src={applicantDetails.img}
            alt={applicantDetails.name}
            mb="4"
          />
          <Text fontWeight="semibold" fontSize="lg" mb="2">
            {applicantDetails.name}
          </Text>
          <Text fontSize="sm" mb="2">
            Phone: {applicantDetails.phone}
          </Text>
          <Text fontSize="sm" mb="2">
            Role: {applicantDetails.role}
          </Text>
          <Text fontSize="sm" mb="2">
            Skills: {applicantDetails.skills.join(", ")}
          </Text>
          <Text fontSize="sm" mb="2">
            Years of Experience: {applicantDetails.yearsOfExperience}
          </Text>
          {/* Display other applicant details */}
          <Button onClick={handleProspectToggle}>
            {isProspect ? "Remove" : "Prospect"}
          </Button>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </Box>
  );
};
