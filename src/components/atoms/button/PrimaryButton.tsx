import { Button } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
    children?: React.ReactNode;
    onClick?: () => void;
}

export const PrimaryButton: FC<Props> = (props) => {
  const { children, onClick } = props;
  return (
    <Button variant="ghost" colorScheme="teal" onClick={onClick}>
      {children}
    </Button>
  );
};
