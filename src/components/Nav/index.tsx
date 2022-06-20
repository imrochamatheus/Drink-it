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
import { FC } from "react";

const Nav: FC<{}> = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        color={useColorModeValue("brown", "white")}
        minH={"60px"}
        py={{ base: 1 }}
        px={{ base: 4 }}
        borderBottom={1}
        align={"center"}
        justify="space-between"
        maxW={{ base: "100%", md: "1200px" }}
        mx="auto"
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
            <Heading fontWeight={300}>Drink</Heading>
            <Text color="#679117">It</Text>
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
};

export default Nav;
