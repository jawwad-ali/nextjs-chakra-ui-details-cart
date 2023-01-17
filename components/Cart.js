import React from "react";
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
  Divider,
  Checkbox,
} from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import UserImg from "../images/cart_img.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
// mt="110px" ml="62px" pr="10px"
const cart = () => {
  return (
    <Box
      className={inter.className}
      bg="#F7FAFC"
      mt={{ base: "5", xl: "65px" }}
    >
      <Box mb="5px" pt="45px" px={{ base: "18px", xl: "45px" }}>
        <Heading fontSize="48px" color="#1A202C" fontWeight="700">
          Your cart
        </Heading>
        <Text fontSize="16px" color="#1A202C" pl="5px" pt="12px">
          If price is too hard on your eyes,
          <strong>try changing the theme.</strong>
        </Text>

        <Box mt="6">
          <Flex>
            <Image src={UserImg} />
            <Flex
              w="full"
              justifyContent="space-between"
              px={{ base: "5", xl: "10" }}
              alignItems="center"
            >
              <Box>
                <Heading as="h5" fontSize="20px" fontWeight="700">
                  Penny board
                </Heading>
                <Text color="#4A5568" fontSize="18px">
                  PNYCOMP27541
                </Text>
              </Box>
              <Text mr="-5">$119</Text>
            </Flex>
          </Flex>
        </Box>

        <Box mt="6">
          <Flex>
            <Flex w="full" justifyContent="space-between" alignItems="center">
              <Box>
                <Text fontSize="16px">Subtotal</Text>
              </Box>
              <Text color="#1A202C" fontWeight="700" fontSize="16px">
                $119.00
              </Text>
            </Flex>
          </Flex>
        </Box>

        <Box mt="6">
          <Flex>
            <Flex w="full" justifyContent="space-between" alignItems="center">
              <Box>
                <Text fontSize="16px">Shipping</Text>
              </Box>
              <Text color="#1A202C" fontWeight="700" fontSize="16px">
                $19.99
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box mt="6">
          <Flex>
            <Flex w="full" justifyContent="space-between" alignItems="center">
              <Box>
                <Text fontSize="16px">Taxes (estimated)</Text>
              </Box>
              <Text color="#1A202C" fontWeight="700" fontSize="16px">
                $23.80
              </Text>
            </Flex>
          </Flex>
        </Box>

        {/*Divider  */}
        <Divider mt="8" />

        {/* Total */}
        <Box mt="6">
          <Flex>
            <Flex w="full" justifyContent="space-between" alignItems="center">
              <Box>
                <Text fontSize="16px">Total</Text>
              </Box>
              <Text color="#1A202C" fontWeight="900" fontSize="30px">
                $162.79
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default cart;
