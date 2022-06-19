import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, Search2Icon } from "@chakra-ui/icons";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useRef, useState } from "react";
import { useDrinks } from "../../providers/DrinksProvider";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { getByName } = useDrinks();

  const [isFocused, setIsFocused] = useState<Boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocused = () => {
    setIsFocused(true);
    inputRef.current?.focus();
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
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
            <Heading>Drink</Heading>
            <Text color="pink.500">It</Text>
          </Flex>
        </Flex>
        <InputGroup
          size="md"
          maxW="15rem"
          flex={{ base: isFocused ? 1 : 0 }}
          onFocusCapture={handleFocused}
          onBlur={() => setIsFocused(false)}
          onMouseOver={handleFocused}
        >
          <Input
            pr="2rem"
            type="text"
            placeholder="Pesquise por um drink"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              aria-label="Search"
              h="1.75rem"
              size="sm"
              mr={-5}
              onClick={() => getByName(inputValue)}
            >
              <Search2Icon />
            </Button>
          </InputRightElement>
        </InputGroup>
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
