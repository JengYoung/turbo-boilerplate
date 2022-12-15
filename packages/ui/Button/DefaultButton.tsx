import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonPropsInterface {
  size: "xs" | "sm" | "md" | "lg";
  isLoading: boolean;
  children: React.ReactNode;
}

export const DefaultButton = ({
  isLoading = false,
  children,
}: ButtonPropsInterface) => {
  return <Button isLoading={isLoading}>{children}</Button>;
};
