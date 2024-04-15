// IconSelect.js

import React from "react";
import { Box, Text, Menu, MenuButton, MenuList, MenuItem, SimpleGrid } from "@chakra-ui/react";

const IconSelect = ({ value, onChange, options }) => (
  <Box display="flex" alignItems="center">
    <Text fontSize="lg" mb="2" marginRight="2">
      Select Icon:
    </Text>
    <Menu>
      <MenuButton as="button">
        {value && (
          <Box display="flex" alignItems="center">
            <img
              src={`/assets/img/icons/${value.path}`}
              alt={value.name}
              width="40px"
              height="40px"
              style={{ marginRight: "8px" }}
            />
            <Text>{value.name}</Text>
          </Box>
        )}
      </MenuButton>
      <MenuList>
        <SimpleGrid columns={5} spacing={2}>
          {options.map((icon) => (
            <MenuItem
              key={icon.id}
              onClick={() => onChange(icon)}
              opacity={value?.id === icon.id ? 1 : 0.7}
            >
              <Box display="flex" alignItems="center">
                <img
                  src={`/assets/img/icons/${icon.path}`}
                  alt={icon.name}
                  width="40px"
                  height="40px"
                  style={{ marginRight: "8px" }}
                />
                <Text>{icon.name}</Text>
              </Box>
            </MenuItem>
          ))}
        </SimpleGrid>
      </MenuList>
    </Menu>
  </Box>
);

export default IconSelect;
