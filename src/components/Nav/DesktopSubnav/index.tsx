import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { useDrinks } from "../../../providers/DrinksProvider";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const { getByCategory } = useDrinks();

  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      color="black.500"
      _hover={{ bg: useColorModeValue("black.500", "gray.900") }}
      onClick={() => getByCategory(label)}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "white.500" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"yellow.500"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

export default DesktopSubNav;
