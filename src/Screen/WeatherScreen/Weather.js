import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Alert,
  ScrollView,
  RefreshControl,
} from "react-native";
import {
  Heading,
  HStack,
  Box,
  Divider,
  Text,
  Input,
  Center,
} from "native-base";

import * as Location from "expo-location";
import { keyWeather } from "../../Service/Firebase";

const Weather = () => {
  // const [location, setLocation] = useState(null);

  const [refresh, setRefresh] = useState(false);
  const [lon, setLon] = useState();
  const [lat, setLat] = useState();
  const [weatherData, setWetherData] = useState({
    coord: {
      lon: "",
      lat: "",
    },
    weather: [
      {
        id: "",
        main: "",
        description: "",
        icon: "",
      },
    ],
    base: "",
    main: {
      temp: "",
      feels_like: "",
      temp_min: "",
      temp_max: "",
      pressure: "",
      humidity: "",
      sea_level: "",
      grnd_level: "",
    },
    visibility: "",
    wind: {
      speed: "",
      deg: "",
      gust: "",
    },
    rain: {
      "1h": "",
    },
    clouds: {
      all: "",
    },
    dt: "",
    sys: {
      type: "",
      id: "",
      country: "",
      sunrise: "",
      sunset: "",
    },
    timezone: "",
    id: "",
    name: "",
    cod: "",
  });

  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      position();
      setRefresh(false);
    }, 2000);
  };

  useEffect(() => {
    position();
  }, []);

  const position = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync();
    // setLocation(location);
    console.log(location);
    setLat(location.coords.latitude);
    setLon(location.coords.longitude);
    getWeather();
  };

  getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyWeather.apikey}`
    );
    const data = await response.json();
    console.log(data);
    setWetherData(data);
  };

  let coba = () => {
    return Alert.alert("Sedang Dalam Pengembangan");
  };

  return (
    <View style={styles.cover}>
      <Input
        variant="rounded"
        placeholder="Search"
        width={300}
        backgroundColor="#FFFFFF"
        m={3}
        onPressIn={coba}
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
      >
        <Center>
          <Heading color="#FFFFFF">{weatherData.name}</Heading>
          <Image
            style={styles.image}
            source={{
              uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`,
            }}
          />
          <Text fontSize="lg" color="#FFFFFF">
            {weatherData.weather[0].main}
          </Text>
          <Heading color="#FFFFFF" size="xl">
            {Math.round((weatherData.main.temp / 100) * 10)}°C
          </Heading>
        </Center>
        <Divider w={400} />
        <HStack space={20} alignItems="center" justifyContent="center" mt={3}>
          <Box
            backgroundColor="#FFFFFF"
            width={85}
            height={100}
            alignItems="center"
            justifyContent="center"
            borderRadius={20}
          >
            <Image
              source={require("../../../assets/feels_like.png")}
              style={{ width: 30, height: 30 }}
            />
            <Heading size="sm">
              {Math.round((weatherData.main.feels_like / 100) * 10)}°C
            </Heading>
            <Text>feels like</Text>
          </Box>
          <Box
            backgroundColor="#FFFFFF"
            width={85}
            height={100}
            alignItems="center"
            justifyContent="center"
            borderRadius={20}
          >
            <Image
              source={require("../../../assets/humidity.png")}
              style={{ width: 25, height: 30 }}
            />
            <Heading size="sm">{weatherData.main.humidity}%</Heading>
            <Text>humidity</Text>
          </Box>
        </HStack>
      </ScrollView>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  cover: {
    flex: 1,
    alignItems: "center",
    marginTop: 35,
  },
  image: {
    width: 200,
    height: 100,
  },
});
