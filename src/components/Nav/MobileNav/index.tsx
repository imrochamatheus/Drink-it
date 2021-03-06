import { Stack, useColorModeValue } from "@chakra-ui/react";

import MobileNavItem from "../MobileNavItem";
import { useDrinks } from "../../../providers/DrinksProvider";
import { FC } from "react";

const MobileNav: FC<{}> = () => {
  const { categories } = useDrinks();

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {categories && (
        <MobileNavItem {...{ label: "Categorias", children: categories }} />
      )}
    </Stack>
  );
};

export default MobileNav;
