import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("black.500", "gray.800")}
        color={useColorModeValue("yellow.500", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justify="space-between"
      >
        <Flex
          flex={{ base: 0, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex justify={{ base: "center", md: "space-between" }}>
          <Flex
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
          >
            <Heading color="white.500">Drink</Heading>
            <Text color="pink.500">It</Text>
          </Flex>
        </Flex>

        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
