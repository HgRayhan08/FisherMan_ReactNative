import { StyleSheet } from "react-native";
import React from "react";
import { Box, FlatList, NativeBaseProvider, Text } from "native-base";
import { pelabuhan } from "../../Data/data";

const PelabuhanScreen = () => {
  const listItem = ({ item }) => {
    return (
      <Box ml={10} mt={2}>
        <Text>
          {item.id}.{item.name}
        </Text>
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <FlatList data={pelabuhan} renderItem={listItem} mt={10} />
    </NativeBaseProvider>
  );
};

export default PelabuhanScreen;

const styles = StyleSheet.create({});
