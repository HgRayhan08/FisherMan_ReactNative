import { Alert, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Input,
  NativeBaseProvider,
  VStack,
  Text,
  Button,
} from "native-base";

const BBMScreen = () => {
  const [litter, setLitter] = useState();
  const [jarak, setJarak] = useState();

  cobaPertama = () => {
    console.log(jarak);
    if (jarak == undefined || jarak == 0) {
      return Alert.alert("Mohon Masukan Data");
    } else {
      const total = jarak / 5;
      setLitter(total);
    }
  };

  const handleClean = () => {
    setJarak(0);
    setLitter(0);
  };

  return (
    <NativeBaseProvider>
      <Box>
        <VStack>
          <Center>
            <Image
              source={require("../../../assets/LogoApp.png")}
              alt={"Logo App"}
              size="lg"
              w={"300px"}
              h={"150px"}
            />
            <Heading>Masukan Jarak Tempuh</Heading>
            <Input
              variant="underlined"
              placeholder="Masukan Jarak"
              mt={18}
              w={300}
              fontSize={20}
              value={jarak}
              onChangeText={(e) => setJarak(e)}
            />
            <Box my={25}>
              <Heading textAlign={"center"}>Rincian</Heading>
              <HStack space={10}>
                <Text fontSize="xl">Jarak</Text>
                <Text fontSize="xl">:</Text>
                <HStack space={3}>
                  <Text fontSize="xl">{jarak}</Text>
                  <Text fontSize="xl">Mil</Text>
                </HStack>
              </HStack>
              <HStack space={10}>
                <Text fontSize="xl">BBM</Text>
                <Text fontSize="xl">:</Text>
                <HStack space={3}>
                  <Text fontSize="xl">{litter}</Text>
                  <Text fontSize="xl">litter</Text>
                </HStack>
              </HStack>
            </Box>
            <VStack space={2} w={300} mt={"35%"}>
              <Button
                onPress={cobaPertama}
                borderRadius={20}
                backgroundColor={"#2D3192"}
                h={50}
              >
                <Text color={"white"}>Submit</Text>
              </Button>
              <Button
                variant="outline"
                borderColor={"#2D3192"}
                borderRadius={20}
                onPress={handleClean}
              >
                <Text>Clear</Text>
              </Button>
            </VStack>
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default BBMScreen;

const styles = StyleSheet.create({});
