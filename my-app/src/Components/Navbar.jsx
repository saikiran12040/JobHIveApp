import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";

export const Navbar = () => {
  const displayNavLinks = useBreakpointValue({ base: "none", md: "flex" });

  return (
    <Box bg="navy" color="white" p={4}>
      <Flex alignItems="center">
        <Heading as="h1" size="lg">
          Job Seeker App
        </Heading>
        <Spacer />
        <Box display={displayNavLinks}>
          <Flex
            align="center"
            justify="space-around"
            flexWrap="wrap"
            width="300px" 
          >
            <Link to="/Applicants" color="white" p={2}>
              Applicants
            </Link>
            <Link to="/Prospects" color="white" p={2}>
              Prospects
            </Link>
            <Link to="/login" color="white" p={2}>
              Login
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
