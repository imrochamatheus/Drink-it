import { FC, MouseEvent } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from "@chakra-ui/react";

import { alphabet } from "../../assets/ts";
import { useDrinks } from "../../providers/DrinksProvider";

const LettersFilter: FC<{}> = () => {
  const { getByFirstLetter } = useDrinks();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;

    getByFirstLetter(target.text);
  };

  return (
    <Box
      color={"brown"}
      minH={"60px"}
      pt={6}
      px={6}
      textAlign="center"
      maxW={{ base: "100%", md: "1200px" }}
      mx="auto"
    >
      <Breadcrumb spacing={1.5}>
        {alphabet.map((letter) => (
          <BreadcrumbItem key={letter}>
            <BreadcrumbLink onClick={handleClick}>{letter}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  );
};

export default LettersFilter;
