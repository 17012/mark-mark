import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";

const Card = (props) => {
  const property = props.property;

  return (
    <Box
      className="hoverBox"
      onMouseOver={() => props.setHover(property.formattedPrice)}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      style={{ zIndex: `${props.isHover ? "4" : "1"}` }}
    >``
      <Box className="">
        <Image src={property.imageUrl} alt={property.imageAlt} />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>

          <Box>
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>

          <Box d="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => "x")}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
