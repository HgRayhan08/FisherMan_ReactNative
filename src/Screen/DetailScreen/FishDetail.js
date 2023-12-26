import { Alert, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Input,
  Heading,
  Button,
  Flex,
  Center,
  Image,
  HStack,
  ScrollView,
} from "native-base";

const FishDetail = (data) => {
  const { route } = data;
  const doc = route.params.data;

  const [berat, setBerat] = useState("");
  const [hargaIkan, setHargaIkan] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    setHargaIkan(doc.harga);
  }, []);

  HandlePrice = () => {
    if (berat === "") {
      Alert.alert("mohon isi data");
    } else {
      const TotalHarga = hargaIkan * berat;
      setTotal(TotalHarga);
    }
  };

  HandleClear = () => {
    setBerat(0);
    setTotal(0);
  };

  return (
    <ScrollView>
      <NativeBaseProvider>
        <Box>
          <Flex alignItems={"center"}>
            <Box>
              <Center
                alignItems={"center"}
                bgColor={"#2D3192"}
                width={250}
                height={150}
                mt={5}
                borderRadius={20}
              >
                <Image
                  source={{ uri: doc.link }}
                  alt="image"
                  size="sm"
                  w={200}
                  height={100}
                />
                <Heading color={"#FFFFFF"} size="md">
                  {doc.nama}
                </Heading>
              </Center>
            </Box>
            <Box mt={12}>
              <Heading mb={3}>Masukan Berat Ikan</Heading>
              <Input
                variant="underlined"
                placeholder="Berat Ikan"
                w={250}
                fontSize={18}
                size={30}
                value={berat}
                onChangeText={(e) => setBerat(e)}
              />
            </Box>
            <Box>
              <Heading textAlign={"center"} pb={3} pt={3}>
                Rincian
              </Heading>
              <Box>
                {/* nampilkan data berat */}
                <HStack
                  space={3}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  m={2}
                >
                  <Text w={70}>Berat</Text>
                  <Text>:</Text>
                  <Center
                    w={200}
                    borderColor={"black"}
                    borderWidth={2}
                    flexDirection={"row"}
                    borderRadius={10}
                  >
                    <Text
                      borderRightWidth={2}
                      textAlign={"center"}
                      pt={1}
                      pb={1}
                      pl={1}
                      pr={2}
                    >
                      Kg
                    </Text>
                    <Text w={150} pl={2}>
                      {berat}
                    </Text>
                  </Center>
                </HStack>
                {/* nampilkan data harga */}
                <HStack
                  space={3}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  m={2}
                >
                  <Text w={70}>Harga/Kg</Text>
                  <Text>:</Text>
                  <Center
                    w={200}
                    borderColor={"black"}
                    borderWidth={2}
                    flexDirection={"row"}
                    borderRadius={10}
                  >
                    <Text
                      borderRightWidth={2}
                      textAlign={"center"}
                      pt={1}
                      pb={1}
                      pl={1}
                      pr={2}
                    >
                      Rp
                    </Text>
                    <Text w={150} pl={2}>
                      {doc.harga
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      {""}
                    </Text>
                  </Center>
                </HStack>
                {/* nampilkan total harga */}
                <HStack
                  space={3}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  m={2}
                >
                  <Text w={70}>Total</Text>
                  <Text>:</Text>
                  <Center
                    w={200}
                    borderColor={"black"}
                    borderWidth={2}
                    flexDirection={"row"}
                    borderRadius={10}
                  >
                    <Text
                      borderRightWidth={2}
                      textAlign={"center"}
                      pt={1}
                      pb={1}
                      pl={1}
                      pr={2}
                    >
                      Rp
                    </Text>
                    <Text w={150} pl={2}>
                      {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      {""}
                    </Text>
                  </Center>
                </HStack>
                <Button
                  size="sm"
                  variant="solid"
                  borderRadius={15}
                  borderColor={"#2D3192"}
                  mt={10}
                  onPress={HandlePrice}
                >
                  <Text fontSize={"lg"} color={"#FFFFFF"} fontWeight={"bold"}>
                    Submit
                  </Text>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  borderRadius={15}
                  borderColor={"#2D3192"}
                  mt={3}
                  onPress={HandleClear}
                >
                  <Text color={"#2D3192"} fontWeight={"bold"}>
                    Clear
                  </Text>
                </Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      </NativeBaseProvider>
    </ScrollView>
  );
};

export default FishDetail;
