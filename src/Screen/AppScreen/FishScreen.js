import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../Service/Auth";
import { collection, getDocs } from "firebase/firestore";
import {
  Box,
  Center,
  FlatList,
  Flex,
  HStack,
  NativeBaseProvider,
  Image,
  Spinner,
} from "native-base";

const FishScreen = ({ navigation }) => {
  const [dataikan, setDataIkan] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    getDataFish();
  }, []);

  getDataFish = async () => {
    try {
      const hasil = await getDocs(collection(db, "DataFish"));
      console.log(hasil.docs.map((doc) => doc.data()));
      setDataIkan(hasil.docs.map((doc) => doc.data()));
    } catch (err) {
      Alert.alert(err);
    } finally {
      setIsLoading(false);
      setIsRefresh(false);
    }
  };

  handleRefresh = () => {
    setIsLoading(true);
    setIsRefresh(true);
    getDataFish();
  };

  const renderFish = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("FishDetail", { data: item })}
      >
        <Box
          width={170}
          height={120}
          mt={5}
          m={2}
          backgroundColor="#2D3192"
          borderRadius={15}
        >
          <Flex flex={1} alignItems="center" justifyContent={"center"}>
            <Image source={{ uri: item.link }} alt="image" size="sm" w="100%" />
            <Text style={{ color: "#FFFFFF" }}>{item.nama}</Text>
          </Flex>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    // <NativeBaseProvider>
    <>
      {isLoading ? (
        <Center flex={1}>
          <Spinner size={"lg"} colorScheme={"primary"} />
        </Center>
      ) : (
        <Center>
          <FlatList
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
            onRefresh={handleRefresh}
            refreshing={isRefresh}
            data={dataikan}
            renderItem={renderFish}
            width={400}
          />
        </Center>
      )}
    </>
    // </NativeBaseProvider>
  );
};

export default FishScreen;

const styles = StyleSheet.create({});
