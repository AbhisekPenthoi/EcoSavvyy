import React from "react";
import { Box, Text } from "@chakra-ui/react";

const AverageCalculator = ({ percent, isPositive }) => {
  // Define the message and color based on isPositive
  const message = isPositive ? "Better than average" : "Worse than average";
  const textColor = isPositive ? "green" : "red";

  return (
    <Box>
      <Text style={{ color: textColor }} fontSize="8xl" fontWeight="bold">
        {percent} %
      </Text>
      <Text style={{ color: textColor }} fontSize="medium">{message}</Text>
    </Box>
  );
};

export default AverageCalculator;
