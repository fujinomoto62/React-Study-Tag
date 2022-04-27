import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { SCard } from "../../../styled/styled";

export const Card: FC = (props) => {
  const { children } = props;
  return (
    <Box w="225px" h="300" bg="white" borderRadius={"10px"} shadow="md" p={4}>
      {children}
    </Box>
  );
};
