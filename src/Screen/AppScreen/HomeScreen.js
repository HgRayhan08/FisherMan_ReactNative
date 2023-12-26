import {
  StyleSheet,
  View,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import {
  Box,
  Divider,
  FlatList,
  Heading,
  HStack,
  Image,
  NativeBaseProvider,
  Drawer,
  ScrollView,
  Text,
} from "native-base";
import Firebase from "../../Service/Auth";
import Weather from "../WeatherScreen/Weather";
import {
  ImageHeaderScrollView,
  TriggeringView,
} from "react-native-image-header-scroll-view";
import { dataBerita } from "../../Data/data";

const HomeScreen = ({ navigation }) => {
  const renderBerita = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("BeritaDetail", { data: item })}
      >
        <Box mt={5} pl={2} pr={2} alignItems={"center"}>
          <HStack>
            <Box w={220} alignItems={"stretch"}>
              <Heading size={"sm"}>{item.judul}</Heading>
              <Text>{item.deskripsi}</Text>
            </Box>
            <Image
              w={"150px"}
              h={"120px"}
              source={item.image}
              alt={item.judul}
              borderRadius={5}
            />
          </HStack>
          <Divider mt={2} />
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <ImageHeaderScrollView
      maxHeight={450}
      minHeight={0}
      backgroundColor="#2D3192"
      renderForeground={() => (
        <NativeBaseProvider style={styles.weather}>
          <Weather />
        </NativeBaseProvider>
      )}
    >
      <NativeBaseProvider>
        <View style={{ height: 1000 }}>
          <ScrollView horizontal={true} style={{ width: "100%" }}>
            <FlatList
              data={dataBerita}
              renderItem={renderBerita}
              width="100%"
            />
          </ScrollView>
        </View>
      </NativeBaseProvider>
    </ImageHeaderScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
