import { Button } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
    children?: React.ReactNode;
    onClick?: () => void;
}

export const SecondaryButton: FC<Props> = (props) => {
  const { children, onClick } = props;
  return           <Button
  variant="ghost"
  colorScheme="gray"
  mr={3}
  onClick={onClick}
>
  {children}
</Button>;
};


