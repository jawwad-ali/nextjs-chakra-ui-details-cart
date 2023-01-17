import React from "react";
import { Inter } from "@next/font/google";
import {
  Box,
  Button,
  SimpleGrid,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  Input,
  Flex,
  Checkbox,
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

const Details = () => {
  return (
    <Box className={inter.className}>
      <Box
        mb="5px"
        mt={{ base: "70px", xl: "110px" }}
        ml={{ base: "20px", xl: "117px" }} 
        pr="10px"
      >
        <Heading fontSize="48px" color="#1A202C" fontWeight="700">
          Your details
        </Heading>
        <Text fontSize="16px" color="#1A202C" pl="5px" pt="12px">
          If you already have an account, click here to log in
        </Text>

        {/* Form */}
        <Box mt="45px">
          <FormControl>
            <Flex
              flexDirection={{ base: "column", xl: "row" }}
              justifyContent="space-between"
            >
              {/* Enter name */}
              <Box>
                <FormLabel fontSize="16px" color="#2D3748" fontWeight="bold">
                  First Name
                </FormLabel>
                <Input
                  type="text"
                  w="100%"
                  bg="#EDF2F7"
                  borderRadius="0"
                  placeholder="John"
                />
              </Box>
              <Box mt={{ base: "15px", xl: 0 }}>
                <FormLabel fontSize="16px" color="#2D3748" fontWeight="bold">
                  Last Name
                </FormLabel>
                <Input
                  type="text"
                  bg="#EDF2F7"
                  w="100%"
                  borderRadius="0"
                  placeholder="Doe"
                />
              </Box>
            </Flex>

            {/* Enter address */}
            <Box mt="25px">
              <FormLabel fontSize="16px" color="#2D3748" fontWeight="bold">
                Address
              </FormLabel>
              <Input
                w="100%"
                type="text"
                bg="#EDF2F7"
                borderRadius="0"
                placeholder="Blvd. Broken Dreams 21"
              />
            </Box>

            {/* Enter city */}
            <Box mt="35px">
              <Flex
                flexDirection={{ base: "column", xl: "row" }}
                justifyContent="space-between"
              >
                <Box>
                  <FormLabel fontSize="16px" color="#2D3748" fontWeight="bold">
                    City
                  </FormLabel>
                  <Input
                    type="text"
                    w="100%"
                    bg="#EDF2F7"
                    borderRadius="0"
                    placeholder="San Francisco"
                  />
                </Box>

                {/* Select country */}
                <Box mt={{ base: "15px", xl: 0 }}>
                  <FormLabel fontSize="16px" color="#2D3748" fontWeight="bold">
                    Country
                  </FormLabel>
                  <Select
                    w="100%"
                    borderRadius="0"
                    placeholder="United State of America"
                    bg="#EDF2F7"
                  >
                    <option>United Arab Emirates</option>
                    <option>United State of America</option>
                    <option>Nigeria</option>
                  </Select>
                </Box>
              </Flex>

              {/* Check button */}
              <Checkbox colorScheme="green" defaultChecked mt="24px">
                <Text fontWeight="500" color="black" fontSize="16px">
                  Ship to the billing address
                </Text>
              </Checkbox>
              <Button
                mt="10px"
                w="100%"
                colorScheme="green"
                size="lg"
                borderRadius="0"
              >
                Place Order
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;