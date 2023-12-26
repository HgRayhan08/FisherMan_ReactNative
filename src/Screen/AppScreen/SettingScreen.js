import { StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import { Box, Button } from "native-base";
import Firebase from "../../Service/Firebase";
import ButtonN from "../../Components/MyButton";
import MyButton from "../../Components/MyButton";

const SettingScreen = ({ navigation }) => {
  const createThreeButtonAlert = () =>
    Alert.alert("Konfirmasi", "Anda Yakin akan Keluar", [
      {
        text: "Tidak",
        style: "cancel",
      },
      { text: "ya", onPress: () => Firebase.Signout() },
    ]);

  return (
    <Box>
      <MyButton
        text="Pengaturan Akun"
        onPress={() => navigation.navigate("AkunScreen")}
      />
      <MyButton
        text="Kebijakan Privasi"
        onPress={() => navigation.navigate("KebijakanPrivase")}
      />
      <MyButton
        text="Tentang Aplikasi"
        onPress={() => navigation.navigate("TentangAplikasi")}
      />
      <MyButton
        text="Pelabuhan Jawa Timur"
        onPress={() => navigation.navigate("PelabuhanScreen")}
      />
      <MyButton text="Keluar" onPress={createThreeButtonAlert} />
    </Box>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
