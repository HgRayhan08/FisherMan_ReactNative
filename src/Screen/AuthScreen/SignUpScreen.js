import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Image,
  NativeBaseProvider,
  Center,
  Heading,
  Text,
  Input,
  FormControl,
  VStack,
  HStack,
  Button,
  Flex,
  Divider,
} from "native-base";
import Firebase from "../../Service/Firebase";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <NativeBaseProvider>
      <Box>
        <Center mt={20}>
          <Image
            source={require("../../../assets/LogoApp.png")}
            alt={"LogoApp"}
            size="lg"
            width={300}
            height={150}
            mt={30}
          />
          <Heading mt={2} size="xl" color="#2D3192">
            Wellcome
          </Heading>
          <Text mt={1} fontSize="lg">
            Create your account
          </Text>
          <VStack space={3} width={350} mt={10}>
            <Input
              size="xl"
              variant="underlined"
              placeholder="Email"
              borderBottomWidth={2}
              borderBottomColor="#01AEF0"
              value={email}
              onChangeText={(e) => setEmail(e)}
            />
            <Input
              size="xl"
              borderBottomWidth={2}
              borderBottomColor="#01AEF0"
              variant="underlined"
              placeholder="Password"
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
          </VStack>
          <Button
            mt={10}
            width={350}
            borderRadius={20}
            backgroundColor="#2D3192"
            onPress={() => Firebase.Signup(email, password)}
          >
            <Text fontSize={20} color="#FFFFFF">
              SIGN UP
            </Text>
          </Button>
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate("SignInScreen")}
          >
            <Text textAlign="center">I have account?</Text>
          </TouchableOpacity>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            mt={5}
          >
            <Divider width={130} height={1} />
            <Text mr={2} ml={2} fontSize="md">
              Login width
            </Text>
            <Divider width={130} height={1} />
          </Flex>
          <HStack space={3} mt={5}>
            <Image
              source={require("../../../assets/Google.png")}
              alt={"google"}
            />
            <Image
              source={require("../../../assets/facebook.png")}
              alt={"facebook"}
            />
            <Image source={require("../../../assets/ios.png")} alt={"ios"} />
          </HStack>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
