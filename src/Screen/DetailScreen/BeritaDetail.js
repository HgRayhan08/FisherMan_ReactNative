import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Image,
  NativeBaseProvider,
  ScrollView,
  VStack,
  Text,
} from "native-base";
import { Linking, Share } from "react-native";

const BeritaDetail = (data) => {
  const { route } = data;
  const doc = route.params.data;

  const handleOpenLink = (link) => {
    Linking.openURL(link);
  };

  return (
    <NativeBaseProvider>
      <Box>
        <VStack>
          <Center>
            <Image
              source={doc.image}
              alt={doc.judul}
              height="40%"
              width={"90%"}
            />
            <Divider my={3} bg={"black"} />

            <Box>
              <Heading>{doc.judul}</Heading>
              <Text px={3} textAlign={"justify"}>
                {doc.resume}
              </Text>
            </Box>
          </Center>
        </VStack>
        <Box mx={10}>
          <Button onPress={() => handleOpenLink(doc.link)}>
            open in Browser
          </Button>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default BeritaDetail;

const styles = StyleSheet.create({});
