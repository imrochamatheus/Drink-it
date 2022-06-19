import {
  Box,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";

import { useDrinks } from "../../../providers/DrinksProvider";
import DesktopSubNav from "../DesktopSubnav";

const DesktopNav: FC<{}> = () => {
  const linkColor = useColorModeValue("yelllow.500", "gray.200");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const { categories } = useDrinks();

  return (
    <Stack direction={"row"} spacing={4}>
      <Box>
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger>
            <Link
              p={2}
              fontSize={"lg"}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
              }}
            >
              Categorias
            </Link>
          </PopoverTrigger>

          {categories && (
            <PopoverContent
              border={0}
              boxShadow={"xl"}
              bg={popoverContentBgColor}
              p={4}
              rounded={"xl"}
              minW={"sm"}
            >
              <Stack>
                {categories.map(({ strCategory }: { strCategory: string }) => (
                  <DesktopSubNav key={strCategory} label={strCategory} />
                ))}
              </Stack>
            </PopoverContent>
          )}
        </Popover>
      </Box>
    </Stack>
  );
};

export default DesktopNav;
