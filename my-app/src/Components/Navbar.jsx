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
    <Box bg="yellow.500" color="white" p={4}>
      <Flex alignItems="center" flexWrap="wrap">
        <Heading as="h1" size="lg">
          Job Seeker App
        </Heading>
        <Spacer />
        <Box display={displayNavLinks}>
          <Link to="/dashboard" color="white" mr={4}>
            Applicants
          </Link>
          <Link to="/prospects" color="white" mr={4}>
            Prospects
          </Link>
          <Link to="/login" color="white">
            Login
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
